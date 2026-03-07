import React from 'react';
import type { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';
import { SITE_NAME, SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
    title: "Knowledge Hub | Professional Insights & Tutorials",
    description: "Stay updated with the latest trends in tech, AI, design, and digital marketing. Deep dives and tutorials from the experts at GK Institute.",
    keywords: ["tech blog", "web development tutorials", "AI insights", "digital marketing tips", "GK Institute blog"],
    alternates: {
        canonical: `${SITE_URL}/blog`,
    },
    openGraph: {
        title: `GK Institute Knowledge Hub | ${SITE_NAME}`,
        description: "Insights for the modern professional. Deep dives into software engineering, design systems, and career growth.",
        url: `${SITE_URL}/blog`,
        images: [{ url: '/og-image.jpg' }],
    }
};

const page = () => {
    return <BlogPageClient />;
};

export default page;
