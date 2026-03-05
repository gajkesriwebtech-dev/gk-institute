import nodemailer from "nodemailer";

type EmailConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
};

function getEmailConfig(): EmailConfig | null {
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT || 465);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const from = process.env.EMAIL_FROM;

  if (!host || !user || !pass || !from || Number.isNaN(port)) {
    return null;
  }

  return { host, port, user, pass, from };
}

export function isEmailConfigured(): boolean {
  return getEmailConfig() !== null;
}

export async function sendEmail(params: {
  to: string;
  subject: string;
  html: string;
}): Promise<void> {
  const config = getEmailConfig();
  if (!config) {
    throw new Error(
      "Email is not configured. Required: EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_FROM"
    );
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: true,
    auth: {
      user: config.user,
      pass: config.pass
    },
    tls: {
      minVersion: "TLSv1.2",
      rejectUnauthorized: process.env.NODE_ENV === "production"
    }
  });

  await transporter.sendMail({
    from: config.from,
    to: params.to,
    subject: params.subject,
    html: params.html
  });
}
