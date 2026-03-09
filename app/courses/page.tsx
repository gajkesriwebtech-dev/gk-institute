import React from 'react';
import type { Metadata } from 'next';
import CoursesPageClient from './CoursesPageClient';
import { SITE_NAME, SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
    title: "All Courses in Alwar | Web Development, Digital Marketing & More | GK Institute",
    description: "Browse all professional certification courses at GK Institute Alwar, Rajasthan. Web Development, Digital Marketing, AI, Graphic Design and more. Alwar me best computer training institute — real projects, expert mentors, job placement.",
    keywords: [
        // English
        "courses in Alwar",
        "computer course Alwar",
        "web development course Alwar",
        "digital marketing course Alwar",
        "MERN stack course Alwar",
        "AI course Alwar",
        "graphic design course Alwar",
        "IT training institute Alwar Rajasthan",
        "coding classes Alwar",
        // Hinglish
        "Alwar me courses",
        "Alwar me computer course",
        "Alwar me web development course",
        "Alwar me digital marketing course",
        "Alwar me coding sikhe",
        "Alwar ka best computer institute",
        "Alwar me IT training",
    ],
    alternates: {
        canonical: `${SITE_URL}/courses`,
    },
    openGraph: {
        title: `All Professional Courses in Alwar | ${SITE_NAME}`,
        description: "Explore industry-aligned curricula at GK Institute Alwar. Real projects, expert mentors, and career support.",
        url: `${SITE_URL}/courses`,
        images: [{ url: '/og-image.jpg' }],
    }
};


const page = () => {
    return <CoursesPageClient />;
};

export default page;
