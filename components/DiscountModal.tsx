"use client";

import React, { useState } from 'react';
import { Button, Icons, Badge } from './ui';
import { getBasePrice } from '@/lib/coursePricing';

interface DiscountModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseId: string;
    courseTitle: string;
}

export const DiscountModal: React.FC<DiscountModalProps> = ({ isOpen, onClose, courseId, courseTitle }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [revealedPrice, setRevealedPrice] = useState<number | null>(null);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('/api/lead-discount', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    courseId,
                    courseTitle
                })
            });

            if (response.ok) {
                setStatus('success');
                setRevealedPrice(getBasePrice(courseId));
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>

            <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                {/* Header */}
                <div className="bg-[#1F4037] p-8 text-white relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors"
                    >
                        <Icons.X className="w-6 h-6" />
                    </button>

                    <Badge variant="marigold" className="mb-4">Limited Time Offer</Badge>
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight">
                        Unlock Exclusive <br />
                        <span className="text-[#FDB827]">Course Discount</span>
                    </h2>
                    <p className="mt-2 text-slate-300 text-sm font-medium">
                        Get the {courseTitle} at zero processing fee + career roadmap.
                    </p>
                </div>

                {/* Content */}
                <div className="p-8">
                    {status === 'success' ? (
                        <div className="text-center py-6 animate-in fade-in slide-in-from-bottom-4">
                            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Icons.Check className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">Success!</h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium leading-relaxed">
                                We've sent the detailed catalog and discount voucher to <strong>{formData.email}</strong>.
                            </p>

                            {revealedPrice && (
                                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border-2 border-dashed border-slate-200 dark:border-slate-700 mb-8">
                                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Your Special Price</p>
                                    <div className="text-4xl font-black text-[#1F4037] dark:text-emerald-500">
                                        ₹{revealedPrice.toLocaleString('en-IN')}
                                    </div>
                                </div>
                            )}

                            <Button variant="marigold" className="w-full py-6 text-lg" onClick={onClose}>
                                Close & Check Email
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:border-[#1F4037] dark:focus:border-emerald-500 outline-none transition-all font-bold text-slate-900 dark:text-white"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Work Email</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:border-[#1F4037] dark:focus:border-emerald-500 outline-none transition-all font-bold text-slate-900 dark:text-white"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Mobile Number</label>
                                <div className="flex gap-2">
                                    <div className="w-20 px-3 py-3 bg-slate-100 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl font-bold text-slate-500 text-center flex items-center justify-center">
                                        +91
                                    </div>
                                    <input
                                        required
                                        type="tel"
                                        pattern="[0-9]{10}"
                                        placeholder="99XXXXXXXX"
                                        className="flex-1 px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:border-[#1F4037] dark:focus:border-emerald-500 outline-none transition-all font-bold text-slate-900 dark:text-white"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    variant="marigold"
                                    className="w-full py-6 text-lg shadow-xl"
                                    disabled={status === 'submitting'}
                                >
                                    {status === 'submitting' ? (
                                        <span className="flex items-center gap-2">
                                            <Icons.Loader className="animate-spin w-5 h-5" /> Processing...
                                        </span>
                                    ) : (
                                        "Get Your Discount →"
                                    )}
                                </Button>
                                <p className="mt-4 text-[10px] text-slate-400 text-center font-bold uppercase tracking-widest leading-relaxed">
                                    By clicking you agree to our privacy policy. <br />
                                    No credit card required.
                                </p>
                            </div>

                            {status === 'error' && (
                                <p className="text-red-500 text-xs text-center font-bold mt-2">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
