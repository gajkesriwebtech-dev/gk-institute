import EnrollmentModel from "@/models/Enrollment";

export async function createEnrollmentRecord(params: {
  userId?: string | null;
  userEmail: string;
  courseId: string;
  amountPaid: number;
  currency: string;
  stripeSessionId?: string | null;
  paymentMethod: "stripe" | "offline";
  paymentStatus: "pending" | "completed" | "failed";
  verificationCode?: string | null;
}): Promise<void> {
  await EnrollmentModel.create({
    userId: params.userId || null,
    userEmail: params.userEmail,
    courseId: params.courseId,
    amountPaid: params.amountPaid,
    currency: params.currency,
    stripeSessionId: params.stripeSessionId || null,
    paymentMethod: params.paymentMethod,
    paymentStatus: params.paymentStatus,
    verificationCode: params.verificationCode || null,
    isClaimed: false
  });
}
