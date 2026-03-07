import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import BrochureOTP from "@/models/BrochureOTP";
import BrochureLead from "@/models/BrochureLead";

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, course, otp } = await req.json();

        // 1. Validation
        if (!email || !otp) {
            return NextResponse.json({ error: "Email and OTP are required" }, { status: 400 });
        }

        await dbConnect();

        // 2. Find latest OTP record for this email
        // Note: TTL index handles expiry at DB level, but we check here too for safety
        const otpRecord = await BrochureOTP.findOne({
            email,
            expiresAt: { $gt: new Date() }
        }).sort({ createdAt: -1 });

        if (!otpRecord) {
            return NextResponse.json({ error: "Invalid or expired verification code" }, { status: 400 });
        }

        // 3. Compare OTP
        if (otpRecord.otp !== otp) {
            return NextResponse.json({ error: "Incorrect verification code" }, { status: 400 });
        }

        // 4. Success: Save Lead in MongoDB
        // We already have name, phone, course from the verification step
        await BrochureLead.create({
            name,
            email,
            phone,
            courseInterest: course,
            source: "brochure_download"
        });

        // 5. Delete OTP record
        await BrochureOTP.deleteOne({ _id: otpRecord._id });

        return NextResponse.json({ success: true, message: "Verification successful" });

    } catch (error: any) {
        console.error("Verify OTP error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
