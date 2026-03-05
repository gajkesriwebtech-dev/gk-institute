
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '../../components/Layouts';
import { Button, Icons } from '../../components/ui';
import { SITE_CONFIG } from '../../data/site';

export default function PaymentCancelledPage() {
    const router = useRouter();

    return (
        <PublicLayout>
            <div className="min-h-[80vh] flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
                <div className="max-w-md w-full text-center">
                    <div className="mb-8 relative inline-block">
                        <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 mx-auto">
                            <Icons.X className="w-12 h-12" />
                        </div>
                        <div className="absolute inset-0 bg-red-400 rounded-full blur-2xl opacity-10 -z-10"></div>
                    </div>

                    <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Payment Cancelled</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                        The payment process was cancelled. No charges were made to your account. You can retry enrollment at any time.
                    </p>

                    <div className="flex flex-col gap-4">
                        <Button
                            variant="primary"
                            size="lg"
                            className="w-full py-4 text-lg font-bold"
                            onClick={() => router.push('/courses')}
                        >
                            Back to Courses
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="w-full"
                            onClick={() => window.history.back()}
                        >
                            Try Again
                        </Button>
                    </div>

                    <div className="mt-12 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 text-left">
                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                            <Icons.HelpCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Need Help?</h4>
                            <p className="text-xs text-slate-500">Contact contact@gkwebtech.cloud for assistance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
