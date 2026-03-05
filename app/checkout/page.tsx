"use client";

import React, { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PublicLayout } from "@/components/Layouts";
import { Button, Card } from "@/components/ui";
import { FULL_PROGRAM_CATALOG } from "@/data/courses.data";
import { getBasePrice } from "@/lib/coursePricing";
import { apiFetch } from "@/lib/api-client";

type PaymentMethod = "stripe" | "offline";

// Inner component that uses useSearchParams — must be wrapped in Suspense
function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseSlug = searchParams.get("course") || "";
  const defaultMethod = (searchParams.get("paymentMethod") as PaymentMethod) || "stripe";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    defaultMethod === "offline" ? "offline" : "stripe"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [offlineCode, setOfflineCode] = useState("");

  const course = useMemo(
    () => FULL_PROGRAM_CATALOG.find((item) => item.id === courseSlug),
    [courseSlug]
  );

  const amount = course ? getBasePrice(course.id) : 0;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!course) return;
    setLoading(true);
    setError("");
    setOfflineCode("");

    try {
      const res = await apiFetch("/api/process-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseSlug: course.id,
          email,
          paymentMethod
        })
      });

      const payload = await res.json();
      if (!res.ok) {
        throw new Error(payload?.message || "Checkout failed");
      }

      if (paymentMethod === "offline") {
        setOfflineCode(payload?.verificationCode || "");
        return;
      }

      const url = payload?.url;
      if (!url) {
        throw new Error("Stripe checkout URL missing");
      }
      window.location.href = url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  if (!course) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Card className="p-8 text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-4">Course not found.</p>
          <Button onClick={() => router.push("/courses")}>Back to Courses</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
        <Card className="p-6 h-fit">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Checkout</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Complete enrollment for:</p>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mt-1">{course.title}</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">{course.description}</p>
          <div className="mt-5 pt-5 border-t border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-500">Amount</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              INR {amount.toLocaleString("en-IN")}
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Full name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Payment method
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2"
              >
                <option value="stripe">Stripe</option>
                <option value="offline">Offline</option>
              </select>
            </div>

            {error && (
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            )}

            <Button type="submit" variant="primary" className="w-full" disabled={loading}>
              {loading ? "Processing..." : paymentMethod === "offline" ? "Generate Verification Code" : "Continue to Stripe"}
            </Button>
          </form>

          {offlineCode && (
            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800 p-4">
              <p className="text-xs uppercase tracking-wider text-green-700 dark:text-green-300 font-semibold">
                Offline Verification Code
              </p>
              <p className="text-2xl font-bold text-green-700 dark:text-green-200 mt-1">{offlineCode}</p>
              <p className="text-sm text-green-700/90 dark:text-green-300 mt-2">
                Share this code with support/admin for payment verification.
              </p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

// Page component wraps the content in Suspense as required by Next.js App Router
export default function CheckoutPage() {
  return (
    <PublicLayout>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
          <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <CheckoutContent />
      </Suspense>
    </PublicLayout>
  );
}
