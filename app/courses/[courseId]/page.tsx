import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import CourseDetailsClient from './CourseDetailsClient';
import { COURSES } from '@/data/courses';
import { SITE_NAME, SITE_URL } from '@/constants/site';
import Schema from '@/components/Schema';

interface Props {
    params: Promise<{ courseId: string }>;
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { courseId } = await params;
    const course = COURSES.find(c => c.slug === courseId);

    if (!course) {
        return {
            title: 'Course Not Found',
        };
    }

    const previousImages = (await parent).openGraph?.images || [];

    // Build Hinglish suffix based on category
    const cat = (course.category || '').toLowerCase();
    let hinglishSnippet = `Alwar me ${course.title} course ke liye GK Institute join karein aur real projects par kaam karein.`;
    if (cat.includes('marketing')) hinglishSnippet = `Alwar me Digital Marketing seekhne ke liye GK Institute best option hai. Practical training aur real campaigns ke saath career shuru karein.`;
    if (cat.includes('design')) hinglishSnippet = `Alwar me Graphic Design course dhundh rahe hain? GK Institute me Figma, Photoshop aur branding seekhiye.`;
    if (cat.includes('ai') || cat.includes('automation')) hinglishSnippet = `Alwar me AI aur Automation course ke liye GK Institute — n8n, Python aur GenAI ke saath future ready baniye.`;

    return {
        title: `${course.title} in Alwar | GK Institute`,
        description: `${course.description} ${hinglishSnippet}`,
        keywords: [
            `${course.title} course Alwar`,
            `${course.title} training Alwar`,
            `Alwar me ${course.title} course`,
            `best ${course.title} institute Alwar`,
            "IT training Alwar Rajasthan",
            "computer course Alwar",
            "GK Institute Alwar",
        ],
        alternates: {
            canonical: `${SITE_URL}/courses/${courseId}`,
        },
        openGraph: {
            title: `${course.title} in Alwar | ${SITE_NAME}`,
            description: course.description,
            url: `${SITE_URL}/courses/${courseId}`,
            images: [course.image || '/og-image.jpg', ...previousImages],
        },
    };
}


const Page = async ({ params }: Props) => {
    const { courseId } = await params;
    const course = COURSES.find(c => c.slug === courseId);

    if (!course) {
        notFound();
    }

    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": course.title,
        "description": course.description,
        "provider": {
            "@type": ["EducationalOrganization", "LocalBusiness"],
            "name": SITE_NAME,
            "sameAs": SITE_URL,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Alwar",
                "addressRegion": "Rajasthan",
                "addressCountry": "IN"
            }
        },
        "image": course.image || `${SITE_URL}/og-image.jpg`,
        "url": `${SITE_URL}/courses/${courseId}`,
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": ["Onsite", "Online"],
            "location": {
                "@type": "Place",
                "name": "GK Institute, Alwar",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Alwar",
                    "addressRegion": "Rajasthan",
                    "addressCountry": "IN"
                }
            },
            "instructor": {
                "@type": "Person",
                "name": "Expert Mentors"
            }
        }
    };


    return (
        <>
            <Schema data={courseSchema} />
            <CourseDetailsClient course={course} />
        </>
    );
};

export default Page;
