import React from 'react';
import type { Metadata } from 'next';
import EbooksClient from './EbooksClient';
import { SITE_NAME, SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
    title: "Free Ebooks & Career Guides | GK Institute",
    description: "Download our comprehensive guides on software engineering careers, technical interview prep, and digital marketing strategies for free.",
    keywords: ["free IT ebooks", "career guides", "interview preparation PDF", "digital marketing ebooks", "GK Institute resources"],
    alternates: {
        canonical: `${SITE_URL}/ebooks`,
    },
    openGraph: {
        title: `Free Ebooks & Career Guides | ${SITE_NAME}`,
        description: "Comprehensive guides to help you navigate your career, salary negotiations, and technical interviews.",
        url: `${SITE_URL}/ebooks`,
        images: [{ url: '/og-image.jpg' }],
    }
};

const page = () => {
    return <EbooksClient />;
};

export default page;
