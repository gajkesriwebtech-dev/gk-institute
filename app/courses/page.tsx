import React from 'react';
import type { Metadata } from 'next';
import CoursesPageClient from './CoursesPageClient';
import { SITE_NAME, SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
    title: "All Certification Programs | GK Institute",
    description: "Browse our complete catalog of industry-focused certification courses. From Full Stack Development and AI to Digital Marketing and Data Science.",
    keywords: ["courses Jaipur", "IT certifications", "skill development Jaipur", "professional training", "online courses Jaipur"],
    alternates: {
        canonical: `${SITE_URL}/courses`,
    },
    openGraph: {
        title: `Professional Program Catalog | ${SITE_NAME}`,
        description: "Explore our industry-aligned curricula designed by veterans to make you job-ready.",
        url: `${SITE_URL}/courses`,
        images: [{ url: '/og-image.jpg' }],
    }
};

const page = () => {
    return <CoursesPageClient />;
};

export default page;
