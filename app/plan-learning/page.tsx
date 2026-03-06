"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PublicLayout } from "@/components/Layouts";
import { Button, Card } from "@/components/ui";
import { FULL_PROGRAM_CATALOG } from "@/data/courses";
import { getBasePrice } from "@/lib/coursePricing";

type PaymentMethod = "stripe" | "offline";

const PROMO_CODES: Record<string, number> = {
  SAVE10: 10,
  GK20: 20
};

// Inner component that uses useSearchParams â€” must be wrapped in Suspense
function PlanLearningContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCourse = searchParams.get("course");

  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; percent: number } | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("offline");
  const [primaryCourse, setPrimaryCourse] = useState("");
  const [promoMessage, setPromoMessage] = useState("");

  useEffect(() => {
    if (!initialCourse) return;
    const exists = FULL_PROGRAM_CATALOG.some((course) => course.id === initialCourse);
    if (!exists) return;
    setSelectedCourses((prev) => (prev.includes(initialCourse) ? prev : [initialCourse, ...prev]));
    setPrimaryCourse(initialCourse);
  }, [initialCourse]);

  const selectedPrograms = useMemo(
    () => FULL_PROGRAM_CATALOG.filter((course) => selectedCourses.includes(course.id)),
    [selectedCourses]
  );

  const subtotal = useMemo(
    () => selectedPrograms.reduce((sum, course) => sum + getBasePrice(course.id), 0),
    [selectedPrograms]
  );

  const discountAmount = useMemo(() => {
    if (!appliedPromo) return 0;
    return Math.round((subtotal * appliedPromo.percent) / 100);
  }, [appliedPromo, subtotal]);

  const total = Math.max(0, subtotal - discountAmount);

  const toggleCourse = (courseId: string) => {
    setSelectedCourses((prev) => {
      if (prev.includes(courseId)) {
        const next = prev.filter((id) => id !== courseId);
        if (primaryCourse === courseId) {
          setPrimaryCourse(next[0] || "");
        }
        return next;
      }
      const next = [...prev, courseId];
      if (!primaryCourse) {
        setPrimaryCourse(courseId);
      }
      return next;
    });
  };

  const applyPromo = () => {
    const normalized = promoInput.trim().toUpperCase();
    if (!normalized) {
      setPromoMessage("Enter a promo code.");
      return;
    }

    const percent = PROMO_CODES[normalized];
    if (!percent) {
      setAppliedPromo(null);
      setPromoMessage("Invalid promo code.");
      return;
    }

    setAppliedPromo({ code: normalized, percent });
    setPromoMessage(`Promo ${normalized} applied (${percent}% off estimate).`);
  };

  const proceed = () => {
    if (!primaryCourse) return;
    router.push(`/checkout?course=${primaryCourse}&paymentMethod=${paymentMethod}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Plan Learning</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Select one or more courses. Checkout processes one course at a time.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {FULL_PROGRAM_CATALOG.map((course) => {
              const isSelected = selectedCourses.includes(course.id);
              return (
                <button
                  key={course.id}
                  onClick={() => toggleCourse(course.id)}
                  className={`text-left rounded-xl border p-4 transition ${isSelected
                    ? "border-brand-500 bg-brand-50 dark:bg-brand-900/20"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
                    }`}
                >
                  <p className="font-semibold text-slate-900 dark:text-white">{course.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{course.category}</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-2">
                    INR {getBasePrice(course.id).toLocaleString("en-IN")}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <Card className="p-5 h-fit">
          <h2 className="font-bold text-slate-900 dark:text-white mb-4">Summary</h2>

          <div className="space-y-2 mb-4">
            {selectedPrograms.length === 0 ? (
              <p className="text-sm text-slate-500 dark:text-slate-400">No course selected yet.</p>
            ) : (
              selectedPrograms.map((course) => (
                <div key={course.id} className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-300">{course.title}</span>
                  <span className="font-medium text-slate-900 dark:text-white">
                    INR {getBasePrice(course.id).toLocaleString("en-IN")}
                  </span>
                </div>
              ))
            )}
          </div>

          <div className="space-y-2 border-t border-slate-200 dark:border-slate-700 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Subtotal</span>
              <span className="text-slate-900 dark:text-white">INR {subtotal.toLocaleString("en-IN")}</span>
            </div>
            {appliedPromo && (
              <div className="flex justify-between text-sm text-green-600">
                <span>Promo ({appliedPromo.code})</span>
                <span>- INR {discountAmount.toLocaleString("en-IN")}</span>
              </div>
            )}
            <div className="flex justify-between font-bold">
              <span className="text-slate-900 dark:text-white">Estimated Total</span>
              <span className="text-slate-900 dark:text-white">INR {total.toLocaleString("en-IN")}</span>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Promo code</label>
            <div className="flex gap-2">
              <input
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                placeholder="SAVE10"
                className="flex-1 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
              />
              <Button variant="secondary" onClick={applyPromo}>Apply</Button>
            </div>
            {promoMessage && <p className="text-xs text-slate-500 dark:text-slate-400">{promoMessage}</p>}
          </div>

          <div className="mt-5 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Checkout course</label>
            <select
              value={primaryCourse}
              onChange={(e) => setPrimaryCourse(e.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
            >
              <option value="">Select course</option>
              {selectedPrograms.map((course) => (
                <option key={course.id} value={course.id}>{course.title}</option>
              ))}
            </select>
          </div>

          <div className="mt-5 space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Payment method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
            >
              <option value="offline">Offline</option>
            </select>
          </div>

          <Button
            variant="primary"
            className="w-full mt-6"
            disabled={!primaryCourse}
            onClick={proceed}
          >
            Proceed to Checkout
          </Button>
        </Card>
      </div>
    </div>
  );
}

// Page component wraps the content in Suspense as required by Next.js App Router
export default function PlanLearningPage() {
  return (
    <PublicLayout>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
          <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <PlanLearningContent />
      </Suspense>
    </PublicLayout>
  );
}
