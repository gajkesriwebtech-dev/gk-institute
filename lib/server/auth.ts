import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export type AuthTokenPayload = {
  sub: string;
  email: string;
  role: "student" | "admin";
};

function getJwtKey(): Uint8Array | null {
  const secret = process.env.JWT_SECRET;
  if (!secret) return null;
  return new TextEncoder().encode(secret);
}

export function isAuthConfigured(): boolean {
  return Boolean(process.env.JWT_SECRET);
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function signAuthToken(
  payload: AuthTokenPayload
): Promise<string> {
  const jwtKey = getJwtKey();
  if (!jwtKey) {
    throw new Error("Auth is not configured");
  }

  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(jwtKey);
}

export async function verifyAuthToken(
  token: string
): Promise<AuthTokenPayload | null> {
  const jwtKey = getJwtKey();
  if (!jwtKey) return null;

  try {
    const { payload } = await jwtVerify(token, jwtKey);
    return payload as unknown as AuthTokenPayload;
  } catch {
    return null;
  }
}

export async function getSessionUser(): Promise<AuthTokenPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  if (!token) return null;
  return verifyAuthToken(token);
}

export async function requireApiAuth(): Promise<
  { user: AuthTokenPayload; error: null } | { user: null; error: NextResponse }
> {
  if (!isAuthConfigured()) {
    return {
      user: null,
      error: NextResponse.json(
        { error: "Auth is not configured" },
        { status: 503 }
      )
    };
  }

  const user = await getSessionUser();
  if (!user) {
    return {
      user: null,
      error: NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    };
  }

  return { user, error: null };
}
