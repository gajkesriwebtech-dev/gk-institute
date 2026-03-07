import React from 'react';
import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';
import { SITE_NAME, SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
    title: "Get in Touch | Admissions & Support",
    description: "Have questions about our certification programs? Want to partner with us? Contact the GK Institute team for expert career guidance and admissions support.",
    keywords: ["contact GK Institute", "admissions Jaipur", "career counseling IT", "GK Institute Alwar", "GK Institute support"],
    alternates: {
        canonical: `${SITE_URL}/contact`,
    },
    openGraph: {
        title: `Contact ${SITE_NAME} | Admissions & Support`,
        description: "Have questions about our programs? Want to partner with us? We'd love to hear from you.",
        url: `${SITE_URL}/contact`,
        images: [{ url: '/og-image.jpg' }],
    }
};

const page = () => {
    return <ContactPageClient />;
};

export default page;
