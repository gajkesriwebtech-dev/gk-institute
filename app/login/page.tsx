
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { PublicLayout } from '@/components/Layouts';
import { Button, Icons, Card } from '@/components/ui';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            await login(email, password);
            router.push('/dashboard');
        } catch (err) {
            setError('Invalid email or password. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <PublicLayout>
            <div className="min-h-[80vh] flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
                <div className="max-w-md w-full">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Welcome Back</h1>
                        <p className="text-slate-500 dark:text-slate-400 font-medium lowercase tracking-widest text-xs">Login to your LMS account</p>
                    </div>

                    <Card className="p-8 shadow-2xl bg-white dark:bg-slate-900 border-brand-100 dark:border-brand-900/30">
                        <form onSubmit={handleSubmit} className="space-y-6 text-left">
                            {error && (
                                <div className={`p-3 border text-sm rounded-lg flex items-center gap-2 ${error.includes('activate')
                                    ? 'bg-yellow-50 border-yellow-200 text-yellow-700'
                                    : 'bg-red-50 border-red-200 text-red-700'
                                    }`}>
                                    {error.includes('activate') ? <Icons.AlertCircle className="w-4 h-4" /> : <Icons.X className="w-4 h-4" />}
                                    {error}
                                </div>
                            )}

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Password</label>
                                <input
                                    type="password"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="text-right">
                                <a href="/forgot-password" title="Reset your password" className="text-xs font-bold text-brand-600 hover:text-brand-700">Forgot Password?</a>
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="w-full py-4 text-lg font-bold shadow-lg shadow-brand-500/20"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <Icons.Loader className="w-6 h-6 animate-spin" />
                                ) : (
                                    <>
                                        Login to LMS
                                        <Icons.ArrowRight className="ml-2 w-5 h-5" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </Card>

                    <p className="mt-8 text-center text-sm text-slate-500">
                        Don't have an account? <a href="/signup" className="text-brand-600 font-bold hover:underline">Sign up now</a>
                    </p>
                </div>
            </div>
        </PublicLayout>
    );
}
