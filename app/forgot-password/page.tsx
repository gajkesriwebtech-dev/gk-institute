'use client';

import { useState } from 'react';
import { PublicLayout } from '@/components/Layouts';
import { Card, Button, Icons } from '@/components/ui';
import { apiFetch } from '@/lib/api-client';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setMessage('');

        try {
            const res = await apiFetch('/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage(data.message);
            } else {
                setError(data.error || 'Something went wrong');
            }
        } catch (err) {
            setError('Failed to send reset link');
        } finally {
            setLoading(false);
        }
    };

    return (
        <PublicLayout>
            <div className="min-h-[70vh] flex items-center justify-center p-4">
                <Card className="max-w-md w-full p-8">
                    <h1 className="text-2xl font-bold mb-2">Forgot Password?</h1>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                        Enter your email address and we'll send you a link to reset your password.
                    </p>

                    {message ? (
                        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm mb-6 flex items-start gap-3">
                            <Icons.Check className="w-5 h-5 shrink-0" />
                            <p>{message}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-brand-500 transition-all font-medium"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {error && (
                                <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm">
                                    {error}
                                </div>
                            )}

                            <Button type="submit" className="w-full py-4 font-bold" disabled={loading}>
                                {loading ? <Icons.Loader className="animate-spin w-5 h-5" /> : 'Send Reset Link'}
                            </Button>
                        </form>
                    )}

                    <div className="mt-8 text-center">
                        <a href="/login" className="text-sm font-bold text-brand-600 hover:text-brand-700 flex items-center justify-center gap-2">
                            <Icons.ArrowLeft className="w-4 h-4" />
                            Back to Login
                        </a>
                    </div>
                </Card>
            </div>
        </PublicLayout>
    );
}
