import React from 'react';
import type { Metadata } from 'next';
import PoliciesClient from './PoliciesClient';
import { SITE_NAME, SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
    title: "Institute Policies | Admissions & Conduct",
    description: "Review the official policies of GK Institute regarding admissions, academic conduct, attendance, and placement assistance.",
    keywords: ["institute policies", "academic regulations", "placement policy", "admission guidelines", "GK Institute rules"],
    alternates: {
        canonical: `${SITE_URL}/policies`,
    },
    openGraph: {
        title: `GK Institute Official Policies | ${SITE_NAME}`,
        description: "Official policies governing admissions, academic conduct, and institutional guidelines.",
        url: `${SITE_URL}/policies`,
        images: [{ url: '/og-image.jpg' }],
    }
};

const page = () => {
    return <PoliciesClient />;
};

export default page;
