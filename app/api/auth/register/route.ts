import { NextResponse } from "next/server";
import { z } from "zod";
import { connectToDatabase } from "@/lib/server/db";
import UserModel from "@/models/User";
import EnrollmentModel from "@/models/Enrollment";
import {
  hashPassword,
  isAuthConfigured,
  signAuthToken
} from "@/lib/server/auth";
import { getAuthCookieOptions } from "@/lib/server/cookies";

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8)
});

export async function POST(request: Request): Promise<NextResponse> {
  if (!isAuthConfigured()) {
    return NextResponse.json(
      { error: "Auth is not configured" },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const input = registerSchema.parse(body);

    await connectToDatabase();
    const normalizedEmail = input.email.toLowerCase().trim();

    const existing = await UserModel.findOne({ email: normalizedEmail }).lean();
    if (existing) {
      return NextResponse.json(
        { error: "Email already registered", code: "EMAIL_EXISTS" },
        { status: 409 }
      );
    }

    const completedEnrollments = await EnrollmentModel.find({
      userEmail: normalizedEmail,
      paymentStatus: "completed",
      isClaimed: false
    });

    if (completedEnrollments.length === 0) {
      return NextResponse.json(
        {
          error:
            "No completed enrollment found for this email. Complete payment verification first.",
          code: "ENROLLMENT_NOT_COMPLETED"
        },
        { status: 403 }
      );
    }

    const enrolledCourseIds = Array.from(
      new Set(completedEnrollments.map((enrollment) => enrollment.courseId))
    );

    const passwordHash = await hashPassword(input.password);
    const user = await UserModel.create({
      name: input.name,
      email: normalizedEmail,
      passwordHash,
      role: "student",
      enrolledCourseIds
    });

    await EnrollmentModel.updateMany(
      {
        _id: { $in: completedEnrollments.map((enrollment) => enrollment._id) }
      },
      {
        $set: {
          userId: user._id,
          isClaimed: true
        }
      }
    );

    const token = await signAuthToken({
      sub: String(user._id),
      email: user.email,
      role: user.role
    });

    const response = NextResponse.json(
      {
        data: {
          user: {
            id: String(user._id),
            name: user.name,
            email: user.email,
            role: user.role
          },
          enrolledCourseIds
        }
      },
      { status: 201 }
    );

    response.cookies.set("auth_token", token, getAuthCookieOptions(60 * 60 * 24 * 7));

    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request payload", details: error.flatten() },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Registration failed" },
      { status: 500 }
    );
  }
}
