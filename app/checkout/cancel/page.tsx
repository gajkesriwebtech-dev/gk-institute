"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '../../../components/Layouts';
import { Button, Card, Icons } from '../../../components/ui';

const CheckoutCancelPage = () => {
    const router = useRouter();

    return (
        <PublicLayout>
            <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 py-12 px-4 transition-colors">
                <Card className="max-w-md w-full p-8 md:p-12 text-center border-t-4 border-t-red-500 shadow-xl">
                    <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <Icons.X className="w-10 h-10" />
                    </div>

                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Payment Cancelled</h1>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                        You have not been charged. The checkout process was cancelled or interrupted.
                    </p>

                    <div className="space-y-3">
                        <Button variant="primary" className="w-full" onClick={() => router.push('/courses')}>
                            Browse Other Courses
                        </Button>
                        <Button variant="ghost" className="w-full" onClick={() => router.back()}>
                            Try Again
                        </Button>
                    </div>
                </Card>
            </div>
        </PublicLayout>
    );
};

export default CheckoutCancelPage;
