"use client";

import React, { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PublicLayout } from '../../../components/Layouts';
import { Button, Card, Icons } from '../../../components/ui';

const CheckoutSuccessContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('session_id');

    useEffect(() => {
        if (!sessionId) {
            router.push('/courses');
        }
        // In a real app, you might validate the session_id with the backend here one last time
    }, [sessionId, router]);

    return (
        <PublicLayout>
            <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 py-12 px-4 transition-colors">
                <Card className="max-w-md w-full p-8 md:p-12 text-center border-t-4 border-t-green-500 shadow-2xl">
                    <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <Icons.Check className="w-12 h-12" />
                    </div>

                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Payment Successful!</h1>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                        Thank you for enrolling. Your seat has been confirmed. A receipt has been sent to your email.
                    </p>

                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 mb-8">
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Transaction ID</p>
                        <code className="text-sm font-mono text-slate-700 dark:text-slate-300">{sessionId || 'txn_12345ABC'}</code>
                    </div>

                    <Button variant="primary" size="lg" className="w-full" onClick={() => router.push('/dashboard')}>
                        Go to Dashboard
                    </Button>
                </Card>
                <p className="text-slate-400 text-sm mt-8">
                    Need help? <a href="/contact" className="underline hover:text-white">Contact Support</a>
                </p>
            </div>
        </PublicLayout>
    );
};

const CheckoutSuccessPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CheckoutSuccessContent />
        </Suspense>
    );
};

export default CheckoutSuccessPage;
