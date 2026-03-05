import { NextResponse } from "next/server";
import { z } from "zod";
import { connectToDatabase } from "@/lib/server/db";
import EnrollmentModel from "@/models/Enrollment";

const verifySchema = z.object({
  verificationCode: z.string().min(5)
});

export async function POST(request: Request): Promise<NextResponse> {
  const adminSecret = process.env.INTERNAL_ADMIN_SECRET;
  const providedSecret = request.headers.get("x-internal-admin-secret");

  if (!adminSecret || providedSecret !== adminSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const input = verifySchema.parse(body);

    await connectToDatabase();

    const enrollment = await EnrollmentModel.findOne({
      verificationCode: input.verificationCode.trim().toUpperCase()
    });

    if (!enrollment) {
      return NextResponse.json(
        { error: "Enrollment not found" },
        { status: 404 }
      );
    }

    enrollment.paymentStatus = "completed";
    enrollment.verifiedAt = new Date();
    await enrollment.save();

    return NextResponse.json(
      {
        data: {
          success: true,
          enrollmentId: String(enrollment._id),
          courseId: enrollment.courseId,
          paymentStatus: enrollment.paymentStatus
        }
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request payload", details: error.flatten() },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Verification failed" },
      { status: 500 }
    );
  }
}
