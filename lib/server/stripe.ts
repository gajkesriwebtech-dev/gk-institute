import Stripe from "stripe";

export function isStripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

export function getStripeClient(): Stripe | null {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) return null;
  return new Stripe(stripeSecretKey);
}

export async function createCheckoutSession(params: {
  courseId: string;
  courseTitle: string;
  amountInr: number;
  customerEmail: string;
  successUrl: string;
  cancelUrl: string;
  metadata?: Record<string, string>;
}): Promise<Stripe.Checkout.Session> {
  const stripe = getStripeClient();
  if (!stripe) {
    throw new Error("Stripe is not configured");
  }

  return stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    customer_email: params.customerEmail,
    line_items: [
      {
        price_data: {
          currency: "inr",
          unit_amount: Math.round(params.amountInr * 100),
          product_data: {
            name: params.courseTitle
          }
        },
        quantity: 1
      }
    ],
    metadata: params.metadata || { courseId: params.courseId },
    success_url: params.successUrl,
    cancel_url: params.cancelUrl
  });
}
