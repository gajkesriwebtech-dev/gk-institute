"use client";

import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '@/components/Layouts';
import { Button, Icons, Card } from '@/components/ui';

function PaymentSuccessContent() {
    const router = useRouter();

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
                    Congratulations! Your enrollment request has been received. Our team will verify the payment and contact you shortly with activation details.
                </p>

                <Card className="p-6 mb-10 border-brand-100 dark:border-brand-900/30 bg-white dark:bg-slate-900 shadow-xl">
                    <div className="text-left space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-500 font-medium lowercase tracking-widest">Enrollment Status</span>
                            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-400 text-xs font-bold rounded-full">PENDING VERIFICATION</span>
                        </div>
                        <div className="h-px bg-slate-100 dark:bg-slate-800 w-full"></div>
                        <p className="text-slate-900 dark:text-white font-bold">Please check your email for the payment receipt and next steps.</p>
                    </div>
                </Card>

                <div className="flex flex-col gap-4">
                    <Button
                        variant="marigold"
                        size="lg"
                        className="w-full py-4 text-lg font-bold shadow-lg shadow-[#FDB827]/20"
                        onClick={() => router.push('/')}
                    >
                        Return Home
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
