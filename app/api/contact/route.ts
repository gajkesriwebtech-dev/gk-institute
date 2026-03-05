import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/server/db";
import ContactSubmissionModel from "@/models/ContactSubmission";
import { sendContactInternalMail, sendContactConfirmationMail } from "@/lib/server/institute-email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, courseSlug, sourcePage } = body;

    // 1. Validation
    if (!name || name.trim() === "") {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    if (phone && (phone.length < 10 || phone.length > 15)) {
      return NextResponse.json({ error: "Please enter a valid mobile number" }, { status: 400 });
    }

    // 2. Database Storage
    await connectToDatabase();

    const submission = await ContactSubmissionModel.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim(),
      message: message?.trim() || "No message provided",
      courseSlug: courseSlug || "general",
      sourcePage: sourcePage || "Direct"
    });

    // 3. Send Emails
    const emailPayload = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim(),
      message: message?.trim() || "No message provided",
      courseSlug: courseSlug,
      sourcePage: sourcePage
    };

    // We don't want to block the response on email sending, but for reliability in this simple setup we can await them
    // or use Promise.allSettled to ensure we try both
    await Promise.allSettled([
      sendContactInternalMail(emailPayload),
      sendContactConfirmationMail(emailPayload)
    ]);

    return NextResponse.json({
      success: true,
      message: "Thank you. Our team will contact you shortly.",
      submissionId: submission._id
    });

  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
