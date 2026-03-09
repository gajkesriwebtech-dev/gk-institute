"use client";

import { useState, useEffect, useCallback } from 'react';

export interface CookieConsent {
    essential: true;
    analytics: boolean;
    marketing: boolean;
    preferences: boolean;
    acceptedAt: number;
}

const STORAGE_KEY = 'gki_cookie_consent';

const DEFAULT_CONSENT: CookieConsent = {
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false,
    acceptedAt: 0,
};

export function useCookieConsent() {
    const [consent, setConsent] = useState<CookieConsent | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored) as CookieConsent;
                setConsent(parsed);
            }
        } catch {
            // If storage is inaccessible, treat as no consent
        }
        setIsLoaded(true);
    }, []);

    const saveConsent = useCallback((prefs: Omit<CookieConsent, 'essential' | 'acceptedAt'>) => {
        const newConsent: CookieConsent = {
            essential: true,
            analytics: prefs.analytics,
            marketing: prefs.marketing,
            preferences: prefs.preferences,
            acceptedAt: Date.now(),
        };
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newConsent));
        } catch {
            // Storage quota exceeded or unavailable
        }
        setConsent(newConsent);
    }, []);

    const acceptAll = useCallback(() => {
        saveConsent({ analytics: true, marketing: true, preferences: true });
    }, [saveConsent]);

    const rejectAll = useCallback(() => {
        saveConsent({ analytics: false, marketing: false, preferences: false });
    }, [saveConsent]);

    const customize = useCallback((prefs: { analytics: boolean; marketing: boolean; preferences: boolean }) => {
        saveConsent(prefs);
    }, [saveConsent]);

    const resetConsent = useCallback(() => {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch {
            // ignore
        }
        setConsent(null);
    }, []);

    const hasConsented = isLoaded && consent !== null && consent.acceptedAt > 0;
    const showBanner = isLoaded && !hasConsented;

    return {
        consent,
        isLoaded,
        hasConsented,
        showBanner,
        acceptAll,
        rejectAll,
        customize,
        resetConsent,
    };
}
