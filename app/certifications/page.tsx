import React from 'react';
import type { Metadata } from 'next';
import CertificationsClient from './CertificationsClient';
import { SITE_NAME, SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
    title: "Triple Certification Standards | Global Recognition",
    description: "Earn industry-recognized professional certificates from GK Institute, plus platform credentials from Udemy/Coursera and global endorsements from Google & Meta.",
    keywords: ["IT certifications Jaipur", "professional certificates", "Google certification prep", "Meta certification", "GK Institute standards"],
    alternates: {
        canonical: `${SITE_URL}/certifications`,
    },
    openGraph: {
        title: `GK Institute Certification Standards | ${SITE_NAME}`,
        description: "Our triple-certification model ensures your skills are recognized globally by top employers.",
        url: `${SITE_URL}/certifications`,
        images: [{ url: '/og-image.jpg' }],
    }
};

const page = () => {
    return <CertificationsClient />;
};

export default page;
