"use client";

import React, { useState } from 'react';
import { Button, GridPattern, Icons } from './ui';
import { X, BookOpen, Download } from 'lucide-react';

interface BrochureModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseTitle: string;
    brochureUrl: string;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, courseTitle, brochureUrl }) => {
    const [step, setStep] = useState<'form' | 'otp'>('form');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [otp, setOtp] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            if (step === 'form') {
                // Stage 1: Send OTP
                const response = await fetch('/api/brochure/send-otp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        course: courseTitle
                    }),
                });

                const data = await response.json();
                if (response.ok) {
                    setStep('otp');
                } else {
                    setError(data.error || "Failed to send verification code.");
                }
            } else {
                // Stage 2: Verify OTP
                const response = await fetch('/api/brochure/verify-otp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        course: courseTitle,
                        otp
                    }),
                });

                const data = await response.json();
                if (response.ok) {
                    // Success: Open brochure and reset
                    window.open("/brochures/gk-institute-brochure.pdf", "_blank");
                    onClose();
                    setStep('form');
                    setOtp('');
                    setFormData({ name: "", email: "", phone: "" });
                } else {
                    setError(data.error || "Incorrect verification code.");
                }
            }
        } catch (error) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
            <div className="relative w-full max-w-md p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl scale-in group overflow-hidden">
                <GridPattern className="opacity-30 group-hover:opacity-40 transition-opacity duration-700" />

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors z-50 bg-slate-100 dark:bg-slate-800 rounded-full"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-[#FDB827]/10 p-3 rounded-xl">
                            <BookOpen className="w-6 h-6 text-[#FDB827]" />
                        </div>
                        <div>
                            <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                                {step === 'form' ? 'Get Syllabus' : 'Verify Email'}
                            </h2>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-0.5">
                                {courseTitle}
                            </p>
                        </div>
                    </div>

                    {error && (
                        <div className="mb-6 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-xs font-bold text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {step === 'form' ? (
                            <>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    Please provide your contact details to receive the professional curriculum via email.
                                </p>
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:border-[#FDB827] focus:outline-none transition-all font-bold text-sm"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:border-[#FDB827] focus:outline-none transition-all font-bold text-sm"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="WhatsApp Number"
                                        required
                                        minLength={10}
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:border-[#FDB827] focus:outline-none transition-all font-bold text-sm"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    variant="marigold"
                                    className="w-full py-4 uppercase tracking-[0.2em] font-black text-xs mt-2"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending Request...' : 'Send Verification Code'}
                                </Button>
                            </>
                        ) : (
                            <>
                                <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-800 mb-6">
                                    <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest mb-2">Code Sent to</p>
                                    <p className="text-sm font-black text-slate-900 dark:text-white">{formData.email}</p>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest text-center">Enter 6-Digit Code</p>
                                    <input
                                        type="text"
                                        maxLength={6}
                                        placeholder="000 000"
                                        required
                                        className="w-full px-4 py-5 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:border-[#FDB827] focus:outline-none transition-all font-black text-3xl text-center tracking-[0.5em]"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                        autoFocus
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    variant="marigold"
                                    className="w-full py-4 uppercase tracking-[0.2em] font-black text-xs mt-4"
                                    disabled={isSubmitting || otp.length !== 6}
                                >
                                    {isSubmitting ? 'Verifying...' : 'Verify & Download PDF'} <Download className="ml-2 w-4 h-4" />
                                </Button>
                                <button
                                    type="button"
                                    className="w-full text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-[#FDB827] transition-colors mt-4"
                                    onClick={() => {
                                        setStep('form');
                                        setError(null);
                                    }}
                                >
                                    Change Email or Resend
                                </button>
                            </>
                        )}
                    </form>

                    <p className="mt-8 text-[10px] text-slate-400 text-center font-bold uppercase tracking-widest border-t border-slate-100 dark:border-slate-800 pt-6">
                        Secure Enrollment Portal
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BrochureModal;
