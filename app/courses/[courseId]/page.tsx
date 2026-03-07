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

    return {
        title: `${course.title} Certification | GK Institute`,
        description: course.description,
        alternates: {
            canonical: `${SITE_URL}/courses/${courseId}`,
        },
        openGraph: {
            title: course.title,
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
            "@type": "EducationalOrganization",
            "name": SITE_NAME,
            "sameAs": SITE_URL
        },
        "image": course.image || `${SITE_URL}/og-image.jpg`,
        "url": `${SITE_URL}/courses/${courseId}`,
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
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
