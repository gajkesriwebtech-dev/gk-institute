"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '../../components/Layouts';
import { Button, Card, BrandLogo, Icons } from '../../components/ui';

const StudentAccessPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleMagicLink = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API delay
        setTimeout(() => {
            setStatus('sent');
        }, 1500);
    };

    return (
        <PublicLayout>
            <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 py-12 px-4 transition-colors">
                <div className="w-full max-w-md">

                    <div className="text-center mb-8">
                        <BrandLogo className="justify-center mb-6 scale-125" />
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Student Dashboard Access</h1>
                        <p className="text-slate-500 dark:text-slate-400">Enter your email to receive a secure login link.</p>
                    </div>

                    <Card className="p-8 shadow-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                        {status === 'sent' ? (
                            <div className="text-center animate-fade-in">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icons.Check className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Check your email</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                                    We've sent a temporary login link to <strong>{email}</strong>. It will expire in 15 minutes.
                                </p>
                                <Button variant="ghost" size="sm" onClick={() => setStatus('idle')}>Try different email</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleMagicLink} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="student@example.com"
                                        className="w-full border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-500 outline-none transition-shadow"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-full py-3"
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? 'Sending Link...' : 'Send Magic Link'}
                                </Button>
                            </form>
                        )}
                    </Card>

                    <p className="text-center text-xs text-slate-400 mt-8">
                        Only for enrolled students. If you haven't purchased a course yet, <span className="text-brand-600 dark:text-brand-400 font-bold cursor-pointer hover:underline" onClick={() => router.push('/courses')}>browse our catalog</span>.
                    </p>
                </div>
            </div>
        </PublicLayout>
    );
};

export default StudentAccessPage;
