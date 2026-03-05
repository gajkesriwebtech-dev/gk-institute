import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/server/db";
import { isAuthConfigured, requireApiAuth } from "@/lib/server/auth";
import UserModel from "@/models/User";

export async function GET(): Promise<NextResponse> {
  if (!isAuthConfigured()) {
    return NextResponse.json(
      { error: "Auth is not configured" },
      { status: 503 }
    );
  }

  const { user: session, error } = await requireApiAuth();
  if (error) return error;

  await connectToDatabase();
  const user = await UserModel.findById(session.sub).lean();
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(
    {
      data: {
        id: String(user._id),
        name: user.name,
        email: user.email,
        role: user.role,
        enrolledCourseIds: user.enrolledCourseIds || []
      }
    },
    { status: 200 }
  );
}
