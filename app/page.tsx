import React from 'react';
import type { Metadata } from 'next';
import LandingPageClient from './LandingPageClient';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/constants/site';
import Schema from '@/components/Schema';

export const metadata: Metadata = {
    title: "Professional Web Development & AI Training | GK Institute",
    description: "Master the latest in Web Development, AI, Data Science, and Digital Marketing. GK Institute provides industry-focused training, real-world projects, and career-accelerating certifications.",
    keywords: ["web development Jaipur", "AI courses", "digital marketing training Jaipur", "mern stack course", "data science institute", "industry projects", "job-ready skills"],
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        title: `Professional Training for Modern Careers | ${SITE_NAME}`,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        images: [{ url: '/og-image.jpg' }],
    }
};

const page = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": SITE_NAME,
        "url": SITE_URL,
        "logo": `${SITE_URL}/logo.png`,
        "description": SITE_DESCRIPTION,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "2nd Floor, Tiwari Clinic Building, Jyoti Rao Fule Circle",
            "addressLocality": "Alwar",
            "postalCode": "301001",
            "addressRegion": "Rajasthan",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9971944676",
            "contactType": "admissions",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
        },
        "sameAs": [
            "https://www.linkedin.com/company/gkwebtech",
            "https://www.instagram.com/gkwebtech",
            "https://twitter.com/gkwebtech"
        ]
    };

    return (
        <>
            <Schema data={organizationSchema} />
            <LandingPageClient />
        </>
    );
};

export default page;
