"use client";

import React, { useState } from 'react';
import { Icons, Button } from './ui';

interface BrochureModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseTitle: string;
    brochureUrl: string;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, courseTitle, brochureUrl }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        otp: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);
        } else {
            // Placeholder for backend OTP verification
            onClose();
            window.open(brochureUrl, '_blank');
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose}></div>
            <div className="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
                <div className="bg-[#1F4037] p-8 text-white relative">
                    <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                        <Icons.X className="w-6 h-6" />
                    </button>
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl mb-6">
                        📚
                    </div>
                    <h3 className="text-2xl font-black mb-2 uppercase tracking-widest leading-tight">Download Syllabus</h3>
                    <p className="text-slate-300 text-sm font-medium">{courseTitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {step === 1 ? (
                        <>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:border-[#FDB827] outline-none transition-all font-bold"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="name@example.com"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:border-[#FDB827] outline-none transition-all font-bold"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Phone Number</label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:border-[#FDB827] outline-none transition-all font-bold"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>
                            <Button variant="marigold" className="w-full py-4 text-lg" type="submit">
                                Get OTP & Download
                            </Button>
                        </>
                    ) : (
                        <>
                            <div className="text-center space-y-4">
                                <div className="text-slate-500 text-sm font-medium">
                                    We've sent a 4-digit verification code to <br />
                                    <span className="text-[#1F4037] dark:text-white font-bold">{formData.phone}</span>
                                </div>
                                <input
                                    required
                                    type="text"
                                    maxLength={4}
                                    placeholder="0 0 0 0"
                                    className="w-48 mx-auto text-center text-3xl tracking-[0.5em] font-black px-4 py-4 rounded-xl border-2 border-[#FDB827] bg-slate-50 dark:bg-slate-950 outline-none transition-all"
                                    value={formData.otp}
                                    onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                                />
                                <button type="button" onClick={() => setStep(1)} className="text-xs text-slate-400 hover:text-slate-600 underline font-bold">
                                    Change phone number
                                </button>
                            </div>
                            <Button variant="marigold" className="w-full py-4 text-lg" type="submit">
                                Verify & Download PDF
                            </Button>
                        </>
                    )}
                    <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                        By clicking, you agree to receive curriculum details and updates from GK Institute via Email/WhatsApp.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default BrochureModal;
