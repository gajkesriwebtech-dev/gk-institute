'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, Button, Icons } from '@/components/ui';
import { apiFetch } from '@/lib/api-client';

const SetPasswordContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (!token) {
            setError('Invalid or missing activation token.');
        }
    }, [token]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters');
            return;
        }

        setLoading(true);
        try {
            const res = await apiFetch('/api/auth/activate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, password }),
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess(true);
                setTimeout(() => {
                    router.push('/dashboard');
                }, 2000);
            } else {
                setError(data.error || 'Failed to activate account');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-900">
                <Card className="max-w-md w-full p-8 text-center">
                    <div className="mb-4 flex justify-center">
                        <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                            <Icons.Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold mb-2">Account Activated!</h1>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Your password has been set successfully. You are being redirected to the login page...
                    </p>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-900">
            <Card className="max-w-md w-full p-8">
                <h1 className="text-2xl font-bold mb-2">Set Your Password</h1>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Almost there! Please choose a secure password to activate your learning dashboard.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">New Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-2 rounded-lg border dark:bg-slate-800 dark:border-slate-700 focus:ring-2 focus:ring-brand-500 outline-none"
                            placeholder="Min 8 characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Confirm Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-2 rounded-lg border dark:bg-slate-800 dark:border-slate-700 focus:ring-2 focus:ring-brand-500 outline-none"
                            placeholder="Repeat password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    {error && (
                        <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={loading || !!error && !token}
                    >
                        {loading ? 'Activating...' : 'Activate Account'}
                    </Button>
                </form>
            </Card>
        </div>
    );
};

const SetPasswordPage = () => {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <SetPasswordContent />
        </Suspense>
    );
};

export default SetPasswordPage;
