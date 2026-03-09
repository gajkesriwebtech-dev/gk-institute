"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { CookieSettingsModal } from './CookieSettingsModal';
import Link from 'next/link';

export const CookieConsentModal: React.FC = () => {
    const { consent, showBanner, acceptAll, rejectAll, customize, resetConsent } = useCookieConsent();
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const bannerRef = useRef<HTMLDivElement>(null);

    // Delay banner appearance slightly for better UX
    useEffect(() => {
        if (showBanner) {
            const t = setTimeout(() => setVisible(true), 800);
            return () => clearTimeout(t);
        } else {
            setVisible(false);
        }
    }, [showBanner]);

    const currentPrefs = {
        analytics: consent?.analytics ?? false,
        marketing: consent?.marketing ?? false,
        preferences: consent?.preferences ?? false,
    };

    if (!visible && !settingsOpen) return null;

    return (
        <>
            {/* Cookie Banner */}
            {visible && (
                <div
                    ref={bannerRef}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Cookie consent"
                    className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[100] animate-cookie-slide-up"
                >
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                        {/* Accent bar */}
                        <div className="h-1 w-full bg-gradient-to-r from-[#1F4037] via-[#FDB827] to-[#1F4037]" />

                        <div className="p-5 sm:p-6">
                            {/* Header */}
                            <div className="flex items-start gap-3 mb-3">
                                <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-[#1F4037]/10 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                                    <svg className="w-5 h-5 text-[#1F4037] dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-base font-black text-slate-900 dark:text-white leading-tight">
                                        We Value Your Privacy
                                    </h2>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                        We use cookies to improve your experience, analyze site traffic, and provide better services. You can choose which cookies you allow.{' '}
                                        <Link
                                            href="/privacy-policy"
                                            className="text-[#1F4037] dark:text-emerald-400 font-bold hover:underline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Cookie Policy
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col gap-2 mt-4">
                                <button
                                    onClick={acceptAll}
                                    className="w-full py-2.5 px-4 rounded-xl bg-[#1F4037] hover:bg-[#163029] text-white text-sm font-black transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
                                >
                                    Accept All Cookies
                                </button>
                                <div className="flex gap-2">
                                    <button
                                        onClick={rejectAll}
                                        className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                                    >
                                        Reject Non-Essential
                                    </button>
                                    <button
                                        onClick={() => setSettingsOpen(true)}
                                        className="flex-1 py-2.5 px-3 rounded-xl text-[#1F4037] dark:text-emerald-400 text-sm font-bold hover:bg-[#1F4037]/5 dark:hover:bg-emerald-900/20 transition-all"
                                    >
                                        Customize ⚙
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Settings Modal */}
            <CookieSettingsModal
                isOpen={settingsOpen}
                onClose={() => setSettingsOpen(false)}
                onSave={(prefs) => {
                    customize(prefs);
                    setSettingsOpen(false);
                }}
                initialPrefs={currentPrefs}
            />
        </>
    );
};

/**
 * Floating button for users to reopen cookie settings after consent is given.
 * Renders only when they have already consented (banner is hidden).
 */
export const CookieSettingsButton: React.FC = () => {
    const { hasConsented, consent, customize, resetConsent } = useCookieConsent();
    const [settingsOpen, setSettingsOpen] = useState(false);

    if (!hasConsented) return null;

    const currentPrefs = {
        analytics: consent?.analytics ?? false,
        marketing: consent?.marketing ?? false,
        preferences: consent?.preferences ?? false,
    };

    return (
        <>
            <button
                onClick={() => setSettingsOpen(true)}
                className="fixed bottom-6 left-4 z-[90] flex items-center gap-1.5 px-3 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-[#1F4037] dark:hover:text-emerald-400 hover:border-[#1F4037] dark:hover:border-emerald-500 transition-all"
                aria-label="Open cookie settings"
                title="Cookie Preferences"
            >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Cookies
            </button>

            <CookieSettingsModal
                isOpen={settingsOpen}
                onClose={() => setSettingsOpen(false)}
                onSave={(prefs) => {
                    customize(prefs);
                    setSettingsOpen(false);
                }}
                initialPrefs={currentPrefs}
            />
        </>
    );
};
