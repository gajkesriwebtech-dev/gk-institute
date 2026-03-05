import { headers } from "next/headers";
import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripeClient, isStripeConfigured } from "@/lib/server/stripe";
import { connectToDatabase } from "@/lib/server/db";
import EnrollmentModel from "@/models/Enrollment";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<NextResponse> {
  if (!isStripeConfigured()) {
    return NextResponse.json(
      { error: "Stripe is not configured" },
      { status: 503 }
    );
  }

  const stripe = getStripeClient();
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe is not configured" },
      { status: 503 }
    );
  }

  const signature = (await headers()).get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: "Invalid webhook configuration" },
      { status: 400 }
    );
  }

  const payload = await request.text();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const courseId = session.metadata?.courseId;
    const customerEmail =
      session.metadata?.userEmail ||
      session.customer_details?.email ||
      session.customer_email;

    if (courseId && customerEmail && session.id) {
      await connectToDatabase();
      const normalizedEmail = customerEmail.toLowerCase().trim();
      const amountPaid = (session.amount_total || 0) / 100;
      const currency = (session.currency || "inr").toUpperCase();

      const existingBySession = await EnrollmentModel.findOne({
        stripeSessionId: session.id
      });

      if (existingBySession) {
        if (existingBySession.paymentStatus !== "completed") {
          existingBySession.paymentMethod = "stripe";
          existingBySession.paymentStatus = "completed";
          existingBySession.amountPaid = amountPaid;
          existingBySession.currency = currency;
          await existingBySession.save();
        }
      } else {
        await EnrollmentModel.findOneAndUpdate(
          { userEmail: normalizedEmail, courseId },
          {
            $set: {
              userEmail: normalizedEmail,
              courseId,
              amountPaid,
              currency,
              paymentMethod: "stripe",
              paymentStatus: "completed",
              stripeSessionId: session.id
            },
            $setOnInsert: {
              isClaimed: false
            }
          },
          { upsert: true, new: true }
        );
      }
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
