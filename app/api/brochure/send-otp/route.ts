import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import BrochureOTP from "@/models/BrochureOTP";
import { getTransporter, createEmailLayout } from "@/lib/server/institute-email";

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, course } = await req.json();

        // 1. Validation
        if (!name || !email || !phone || !course) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
        }

        if (phone.replace(/\D/g, "").length < 10) {
            return NextResponse.json({ error: "Phone number must be at least 10 digits" }, { status: 400 });
        }

        await dbConnect();

        // 2. Rate Limiting (Max 3 per email per hour)
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
        const recentOTPs = await BrochureOTP.countDocuments({
            email,
            createdAt: { $gt: oneHourAgo }
        });

        if (recentOTPs >= 3) {
            return NextResponse.json({
                error: "Too many requests. Please try again after an hour."
            }, { status: 429 });
        }

        // 3. Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

        // 4. Save OTP (Delete existing for this email first to be clean, though TTL handles it)
        await BrochureOTP.deleteMany({ email });
        await BrochureOTP.create({
            email,
            otp,
            expiresAt
        });

        // 5. Send Email
        const from = process.env.EMAIL_FROM;
        if (!from) {
            throw new Error("Email service is not configured (EMAIL_FROM missing)");
        }

        const emailContent = `
      <p style="margin:0 0 16px;">Hi ${name},</p>
      <p style="margin:0 0 20px;line-height:1.6;">Your verification code for the <strong>${course}</strong> brochure download is:</p>
      <div style="padding:20px;background:#f8fafc;border:2px solid #e2e8f0;border-radius:12px;text-align:center;margin-bottom:20px;">
        <span style="font-size:32px;font-weight:900;letter-spacing:8px;color:#0f172a;">${otp}</span>
      </div>
      <p style="margin:0;font-size:13px;color:#64748b;">This code is valid for <strong>5 minutes</strong>. If you did not request this, please ignore this email.</p>
    `;

        try {
            await getTransporter().sendMail({
                from,
                to: email,
                subject: "GK Institute Verification Code",
                html: createEmailLayout({
                    title: "Verify Your Request",
                    content: emailContent
                })
            });
        } catch (emailError) {
            console.error("Email send error:", emailError);
            return NextResponse.json({ error: "Failed to send verification email" }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: "OTP sent successfully" });

    } catch (error: any) {
        console.error("Send OTP error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
