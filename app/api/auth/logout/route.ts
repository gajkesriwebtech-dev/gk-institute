import { NextResponse } from "next/server";
import { getAuthCookieOptions } from "@/lib/server/cookies";

export async function POST(): Promise<NextResponse> {
  const response = NextResponse.json(
    { data: { message: "Logged out" } },
    { status: 200 }
  );

  response.cookies.set("auth_token", "", getAuthCookieOptions(0));

  return response;
}
