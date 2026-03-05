import { NextResponse } from "next/server";
import { z } from "zod";
import { connectToDatabase } from "@/lib/server/db";
import UserModel from "@/models/User";
import {
  isAuthConfigured,
  signAuthToken,
  verifyPassword
} from "@/lib/server/auth";
import { getAuthCookieOptions } from "@/lib/server/cookies";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
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
    const input = loginSchema.parse(body);

    await connectToDatabase();

    const user = await UserModel.findOne({ email: input.email });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isValidPassword = await verifyPassword(input.password, user.passwordHash);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

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
          enrolledCourseIds: user.enrolledCourseIds || []
        }
      },
      { status: 200 }
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
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
