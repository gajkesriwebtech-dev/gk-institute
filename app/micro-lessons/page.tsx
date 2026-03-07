import React from 'react';
import type { Metadata } from 'next';
import MicroLessonsClient from './MicroLessonsClient';
import { SITE_NAME, SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
    title: "Micro-Lessons | Bite-Sized Learning",
    description: "Learn essential tech skills in 10 minutes or less with our bite-sized video tutorials. Perfect for busy professionals and students.",
    keywords: ["micro-lessons", "short coding tutorials", "quick tech tips", "free video lessons", "GK Institute resources"],
    alternates: {
        canonical: `${SITE_URL}/micro-lessons`,
    },
    openGraph: {
        title: `Micro-Lessons | ${SITE_NAME}`,
        description: "Bite-sized video tutorials to help you solve specific problems quickly.",
        url: `${SITE_URL}/micro-lessons`,
        images: [{ url: '/og-image.jpg' }],
    }
};

const page = () => {
    return <MicroLessonsClient />;
};

export default page;
