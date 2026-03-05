import { NextResponse } from "next/server";
import { z } from "zod";
import {
  createCheckoutSession,
  isStripeConfigured
} from "@/lib/server/stripe";
import { connectToDatabase } from "@/lib/server/db";
import CourseModel from "@/models/Course";
import EnrollmentModel from "@/models/Enrollment";
import { generateVerificationCode } from "@/lib/server/verificationCode";

const checkoutSchema = z.object({
  courseSlug: z.string().min(1).optional(),
  // Backward compatibility with old frontend payload.
  courseId: z.string().min(1).optional(),
  email: z.string().email(),
  paymentMethod: z.enum(["stripe", "offline"])
}).refine((value) => Boolean(value.courseSlug || value.courseId), {
  message: "courseSlug is required",
  path: ["courseSlug"]
});

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();
    console.debug("[process-order] incoming", {
      courseSlug: body?.courseSlug ?? body?.courseId,
      paymentMethod: body?.paymentMethod,
      email: body?.email
    });
    const input = checkoutSchema.parse(body);
    const courseSlug = (input.courseSlug ?? input.courseId ?? "").trim();

    try {
      await connectToDatabase();
    } catch (dbError) {
      console.error("[process-order] Database connection error:", dbError);
      return NextResponse.json(
        { success: false, message: "Database connection failed" },
        { status: 500 }
      );
    }
    const course = await CourseModel.findOne({
      slug: courseSlug,
      isPublished: true
    });

    if (!course) {
      return NextResponse.json(
        { success: false, message: "Course not found" },
        { status: 404 }
      );
    }
    console.debug("[process-order] course found", { slug: course.slug });

    const normalizedEmail = input.email.toLowerCase().trim();
    const foundCourseSlug = course.slug;

    const existingEnrollment = await EnrollmentModel.findOne({
      userEmail: normalizedEmail,
      courseId: foundCourseSlug
    }).lean();

    if (existingEnrollment) {
      return NextResponse.json(
        {
          success: false,
          message: "Enrollment already exists for this email and course"
        },
        { status: 409 }
      );
    }

    if (input.paymentMethod === "stripe" && !isStripeConfigured()) {
      return NextResponse.json(
        { success: false, message: "Stripe is currently unavailable" },
        { status: 503 }
      );
    }

    const amount = course.price;

    if (input.paymentMethod === "offline") {
      let verificationCode = "";
      let created = false;
      for (let attempt = 0; attempt < 5; attempt += 1) {
        verificationCode = generateVerificationCode();
        try {
          await EnrollmentModel.create({
            userEmail: normalizedEmail,
            courseId: foundCourseSlug,
            amountPaid: amount,
            currency: "INR",
            paymentMethod: "offline",
            paymentStatus: "pending",
            verificationCode,
            isClaimed: false
          });
          created = true;
          break;
        } catch (error) {
          const isDuplicateKey =
            typeof error === "object" &&
            error !== null &&
            "code" in error &&
            (error as { code?: number }).code === 11000;
          if (!isDuplicateKey) {
            throw error;
          }
        }
      }

      if (!created) {
        return NextResponse.json(
          {
            success: false,
            message: "Unable to generate verification code. Please retry."
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          verificationCode
        },
        { status: 200 }
      );
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const checkoutSession = await createCheckoutSession({
      courseId: foundCourseSlug,
      courseTitle: course.title,
      amountInr: amount,
      customerEmail: normalizedEmail,
      successUrl: `${appUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${appUrl}/checkout/cancel`,
      metadata: {
        courseId: foundCourseSlug,
        userEmail: normalizedEmail
      }
    });

    await EnrollmentModel.create({
      userEmail: normalizedEmail,
      courseId: foundCourseSlug,
      amountPaid: amount,
      currency: "INR",
      stripeSessionId: checkoutSession.id,
      paymentMethod: "stripe",
      paymentStatus: "pending",
      isClaimed: false
    });

    return NextResponse.json(
      {
        success: true,
        sessionId: checkoutSession.id,
        url: checkoutSession.url
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request payload",
          details: error.flatten()
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Checkout session creation failed" },
      { status: 500 }
    );
  }
}
