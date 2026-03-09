import React from 'react';
import type { Metadata } from 'next';
import LandingPageClient from './LandingPageClient';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/constants/site';
import Schema from '@/components/Schema';

export const metadata: Metadata = {
    title: "Professional Web Development & AI Training in Alwar | GK Institute",
    description: "Master Web Development, AI, Digital Marketing & more at GK Institute Alwar, Rajasthan. Industry-focused training with real projects and job placement support. Alwar me best computer course ke liye GK Institute join karein.",
    keywords: [
        // English local keywords
        "web development course Alwar",
        "digital marketing course Alwar",
        "computer course Alwar",
        "best institute in Alwar for web development",
        "MERN stack course Alwar",
        "SEO course Alwar",
        "IT training institute Alwar",
        "coding classes Alwar",
        "software training Alwar Rajasthan",
        // Hinglish keywords (exact how students type)
        "Alwar me web development course",
        "Alwar me digital marketing course",
        "Alwar me computer course",
        "Alwar me MERN stack sikhe",
        "Alwar me coding course",
        "Alwar me SEO course Hindi me",
        "Alwar ka sabse accha computer institute",
        // Generic useful keywords
        "AI courses India",
        "mern stack course",
        "data science institute",
        "industry projects training",
        "job ready skills"
    ],
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
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "name": SITE_NAME,
        "url": SITE_URL,
        "logo": `${SITE_URL}/logo.png`,
        "image": `${SITE_URL}/og-image.jpg`,
        "description": "GK Institute is a professional skills training institute in Alwar, Rajasthan offering courses in Web Development, Digital Marketing, AI, and more.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "2nd Floor, Tiwari Clinic Building, Jyoti Rao Fule Circle",
            "addressLocality": "Alwar",
            "postalCode": "301001",
            "addressRegion": "Rajasthan",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 27.5679,
            "longitude": 76.6001
        },
        "areaServed": [
            { "@type": "City", "name": "Alwar" },
            { "@type": "State", "name": "Rajasthan" },
            { "@type": "Country", "name": "India" }
        ],
        "knowsAbout": [
            "Web Development",
            "MERN Stack Development",
            "Digital Marketing",
            "Search Engine Optimization",
            "AI and Automation",
            "Graphic Design",
            "Data Science",
            "Computer Courses"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Professional Skill Programs",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "MERN Stack Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Digital Marketing Mastery" } },
                { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "AI & Automation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Graphic Design" } }
            ]
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
