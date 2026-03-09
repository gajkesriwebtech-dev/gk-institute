"use client";

import React, { useEffect, useRef } from 'react';
import { CookieToggle } from './CookieToggle';

interface CookieSettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (prefs: { analytics: boolean; marketing: boolean; preferences: boolean }) => void;
    initialPrefs: { analytics: boolean; marketing: boolean; preferences: boolean };
}

export const CookieSettingsModal: React.FC<CookieSettingsModalProps> = ({
    isOpen,
    onClose,
    onSave,
    initialPrefs,
}) => {
    const [prefs, setPrefs] = React.useState(initialPrefs);
    const modalRef = useRef<HTMLDivElement>(null);
    const firstFocusRef = useRef<HTMLButtonElement>(null);

    // Sync when modal opens
    React.useEffect(() => {
        if (isOpen) setPrefs(initialPrefs);
    }, [isOpen, initialPrefs.analytics, initialPrefs.marketing, initialPrefs.preferences]);

    // Focus trap
    useEffect(() => {
        if (!isOpen) return;
        firstFocusRef.current?.focus();

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'Tab') {
                const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
                    'button, [href], input, [tabindex]:not([tabindex="-1"])'
                );
                if (!focusable || focusable.length === 0) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Cookie Preferences"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                ref={modalRef}
                className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-[#1F4037]/10 dark:bg-emerald-900/30 flex items-center justify-center">
                            <svg className="w-4 h-4 text-[#1F4037] dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h2 className="text-lg font-black text-slate-900 dark:text-white">Cookie Preferences</h2>
                    </div>
                    <button
                        ref={firstFocusRef}
                        onClick={onClose}
                        className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                        aria-label="Close settings"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Toggles */}
                <div className="px-6 py-2 max-h-[50vh] overflow-y-auto">
                    <CookieToggle
                        id="cookie-essential"
                        label="Essential Cookies"
                        description="Required for the website to function correctly. These cannot be disabled."
                        enabled={true}
                        disabled={true}
                    />
                    <CookieToggle
                        id="cookie-analytics"
                        label="Analytics Cookies"
                        description="Help us understand how visitors interact with our website by collecting anonymized data."
                        enabled={prefs.analytics}
                        onChange={(val) => setPrefs(p => ({ ...p, analytics: val }))}
                    />
                    <CookieToggle
                        id="cookie-marketing"
                        label="Marketing Cookies"
                        description="Used to deliver relevant advertisements and track marketing campaign effectiveness."
                        enabled={prefs.marketing}
                        onChange={(val) => setPrefs(p => ({ ...p, marketing: val }))}
                    />
                    <CookieToggle
                        id="cookie-preferences"
                        label="Preference Cookies"
                        description="Remember your settings and preferences to provide a personalized experience."
                        enabled={prefs.preferences}
                        onChange={(val) => setPrefs(p => ({ ...p, preferences: val }))}
                    />
                </div>

                {/* Footer */}
                <div className="flex gap-3 px-6 py-5 border-t border-slate-100 dark:border-slate-800">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onSave(prefs)}
                        className="flex-1 px-4 py-2.5 rounded-xl bg-[#1F4037] hover:bg-[#163029] text-white text-sm font-black transition-all shadow-lg"
                    >
                        Save Preferences
                    </button>
                </div>
            </div>
        </div>
    );
};
