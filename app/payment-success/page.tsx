
"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { PublicLayout } from '@/components/Layouts';
import { Button, Icons, Card } from '@/components/ui';

function PaymentSuccessContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const courseId = searchParams.get('courseId');
    const { addEnrollment } = useAuth();
    const [isVerifying, setIsVerifying] = useState(true);

    useEffect(() => {
        if (sessionId && courseId) {
            // Simulate API call to GET /api/verify-payment?session_id=...
            const timer = setTimeout(() => {
                addEnrollment(courseId);
                setIsVerifying(false);
            }, 1500);
            return () => clearTimeout(timer);
        } else {
            setIsVerifying(false);
        }
    }, [sessionId, courseId, addEnrollment]);

    if (isVerifying) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950">
                <Icons.Loader className="w-12 h-12 animate-spin text-brand-600 mb-4" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Verifying Enrollment...</h2>
            </div>
        );
    }

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-md w-full text-center">
                <div className="mb-8 relative inline-block">
                    <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mx-auto animate-bounce">
                        <Icons.Check className="w-12 h-12" />
                    </div>
                    <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-20 -z-10 animate-pulse"></div>
                </div>

                <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Payment Successful!</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    Congratulations! Your enrollment has been confirmed. We've sent you an activation email.
                </p>

                <Card className="p-6 mb-10 border-brand-100 dark:border-brand-900/30 bg-white dark:bg-slate-900 shadow-xl">
                    <div className="text-left space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-500 font-medium lowercase tracking-widest">Enrollment Status</span>
                            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-400 text-xs font-bold rounded-full">ACTION REQUIRED</span>
                        </div>
                        <div className="h-px bg-slate-100 dark:bg-slate-800 w-full"></div>
                        <p className="text-slate-900 dark:text-white font-bold">Please check your email to set your password and activate your account.</p>
                    </div>
                </Card>

                <div className="flex flex-col gap-4">
                    <Button
                        variant="primary"
                        size="lg"
                        className="w-full py-4 text-lg font-bold shadow-lg shadow-brand-500/20"
                        onClick={() => router.push('/login')}
                    >
                        Return to Login
                        <Icons.ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="w-full"
                        onClick={() => router.push('/courses')}
                    >
                        Browse More Courses
                    </Button>
                </div>

                <p className="mt-8 text-xs text-slate-400">
                    The activation link has been sent to your primary email address and will expire in 24 hours.
                </p>
            </div>
        </div>
    );
}

export default function PaymentSuccessPage() {
    return (
        <PublicLayout>
            <Suspense fallback={
                <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950">
                    <Icons.Loader className="w-12 h-12 animate-spin text-brand-600 mb-4" />
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Loading...</h2>
                </div>
            }>
                <PaymentSuccessContent />
            </Suspense>
        </PublicLayout>
    );
}
