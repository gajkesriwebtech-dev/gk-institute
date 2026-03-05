import nodemailer, { type Transporter } from "nodemailer";

export interface ContactEmailPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  courseSlug?: string;
  sourcePage?: string;
}

export interface PaymentConfirmationPayload {
  email: string;
  name?: string;
  courses: string[];
  paymentMethod: "offline";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeCourseLabel(courseSlug?: string): string | null {
  if (!courseSlug) return null;
  return courseSlug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getTransporter(): Transporter {
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT || 465);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!host || !user || !pass || Number.isNaN(port)) {
    throw new Error("Email service is not configured");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: true,
    auth: {
      user,
      pass
    },
    tls: {
      minVersion: "TLSv1.2",
      rejectUnauthorized: process.env.NODE_ENV === "production"
    }
  });
}

export function createEmailLayout(params: {
  title: string;
  content: string;
}): string {
  const year = new Date().getFullYear();
  const title = escapeHtml(params.title);

  return `
    <div style="margin:0;padding:24px;background:#f3f6fb;font-family:Arial,sans-serif;color:#0f172a;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="padding:20px 24px;background:#0f172a;color:#ffffff;">
            <div style="font-size:18px;font-weight:700;">GK Institute</div>
            <div style="font-size:12px;opacity:0.85;">institute.gkwebtech.cloud</div>
          </td>
        </tr>
        <tr>
          <td style="padding:24px;">
            <h1 style="margin:0 0 16px;font-size:20px;color:#0f172a;">${title}</h1>
            ${params.content}
          </td>
        </tr>
        <tr>
          <td style="padding:16px 24px;border-top:1px solid #e2e8f0;background:#f8fafc;">
            <p style="margin:0 0 8px;font-size:12px;color:#475569;">Follow us</p>
            <p style="margin:0;font-size:12px;">
              <a href="https://www.linkedin.com" style="color:#0f172a;text-decoration:none;margin-right:10px;">LinkedIn</a>
              <a href="https://www.instagram.com" style="color:#0f172a;text-decoration:none;margin-right:10px;">Instagram</a>
              <a href="https://www.youtube.com" style="color:#0f172a;text-decoration:none;">YouTube</a>
            </p>
            <p style="margin:10px 0 0;font-size:12px;color:#64748b;">© ${year} GK Institute. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </div>
  `;
}

export async function sendContactInternalMail(
  contact: ContactEmailPayload
): Promise<void> {
  try {
    const to = process.env.CONTACT_RECEIVER_EMAIL;
    const from = process.env.EMAIL_FROM;

    if (!to || !from) {
      throw new Error("Email service is not configured");
    }

    const safeName = escapeHtml(contact.name);
    const safeEmail = escapeHtml(contact.email);
    const safePhone = contact.phone ? escapeHtml(contact.phone) : null;
    const safeMessage = escapeHtml(contact.message).replaceAll("\n", "<br />");
    const safeCourse = contact.courseSlug ? escapeHtml(contact.courseSlug) : null;
    const safeSource = contact.sourcePage ? escapeHtml(contact.sourcePage) : "N/A";

    const content = `
      <p style="margin:0 0 10px;"><strong>Name:</strong> ${safeName}</p>
      <p style="margin:0 0 10px;"><strong>Email:</strong> ${safeEmail}</p>
      ${safePhone ? `<p style="margin:0 0 10px;"><strong>Phone:</strong> ${safePhone}</p>` : ""}
      ${safeCourse ? `<p style="margin:0 0 10px;"><strong>Course:</strong> ${safeCourse}</p>` : ""}
      <p style="margin:0 0 10px;"><strong>Source Page:</strong> ${safeSource}</p>
      <p style="margin:14px 0 8px;"><strong>Message</strong></p>
      <div style="padding:12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">${safeMessage}</div>
    `;

    await getTransporter().sendMail({
      from,
      to,
      subject: "New Contact Submission - GK Institute",
      html: createEmailLayout({
        title: "New Contact Submission",
        content
      })
    });
  } catch {
    throw new Error("Failed to send internal contact email");
  }
}

export async function sendContactConfirmationMail(
  contact: ContactEmailPayload
): Promise<void> {
  try {
    const from = process.env.EMAIL_FROM;
    if (!from) {
      throw new Error("Email service is not configured");
    }

    const safeName = escapeHtml(contact.name);
    const courseLabel = normalizeCourseLabel(contact.courseSlug);

    const content = `
      <p style="margin:0 0 10px;">Hi ${safeName},</p>
      <p style="margin:0 0 10px;">Thank you for contacting GK Institute. Our team will respond shortly with the next steps.</p>
      ${courseLabel
        ? `<p style="margin:0 0 10px;">Your submitted course interest: <strong>${escapeHtml(courseLabel)}</strong></p>`
        : ""
      }
      <p style="margin:0;">If you need urgent support, reply to this email.</p>
    `;

    await getTransporter().sendMail({
      from,
      to: contact.email,
      subject: "We received your message - GK Institute",
      html: createEmailLayout({
        title: "Thanks for reaching out",
        content
      })
    });
  } catch {
    throw new Error("Failed to send contact confirmation email");
  }
}

export async function sendPaymentConfirmationMail(
  data: PaymentConfirmationPayload
): Promise<void> {
  try {
    const from = process.env.EMAIL_FROM;
    if (!from) {
      throw new Error("Email service is not configured");
    }

    const safeName = data.name ? escapeHtml(data.name) : "Learner";
    const paymentMethod = "Offline Verification";
    const coursesHtml = data.courses
      .map((course) => `<li style="margin:0 0 6px;">${escapeHtml(course)}</li>`)
      .join("");

    const content = `
      <p style="margin:0 0 10px;">Hi ${safeName},</p>
      <p style="margin:0 0 10px;">Your payment has been successfully confirmed.</p>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;margin:12px 0;">
        <tr>
          <td style="padding:10px 12px;background:#f8fafc;border-bottom:1px solid #e2e8f0;"><strong>Payment Method</strong></td>
          <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;">${paymentMethod}</td>
        </tr>
        <tr>
          <td style="padding:10px 12px;background:#f8fafc;"><strong>Courses</strong></td>
          <td style="padding:10px 12px;"><ul style="margin:0;padding-left:18px;">${coursesHtml}</ul></td>
        </tr>
      </table>
      <p style="margin:0 0 6px;"><strong>Next steps:</strong></p>
      <ol style="margin:0;padding-left:18px;">
        <li>Sign in to your student dashboard.</li>
        <li>Open your enrolled courses.</li>
        <li>Start with the onboarding module.</li>
      </ol>
    `;

    await getTransporter().sendMail({
      from,
      to: data.email,
      subject: "Payment Confirmation - GK Institute",
      html: createEmailLayout({
        title: "Payment Confirmed",
        content
      })
    });
  } catch {
    throw new Error("Failed to send payment confirmation email");
  }
}

