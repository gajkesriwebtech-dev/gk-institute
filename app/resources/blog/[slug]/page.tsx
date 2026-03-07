import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';
import { MOCK_BLOGS } from '@/constants';
import { SITE_NAME, SITE_URL } from '@/constants/site';
import Schema from '@/components/Schema';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params;
    const blog = MOCK_BLOGS.find(b => b.slug === slug);

    if (!blog) {
        return {
            title: 'Post Not Found',
        };
    }

    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: `${blog.title} | ${SITE_NAME}`,
        description: blog.excerpt,
        alternates: {
            canonical: `${SITE_URL}/resources/blog/${slug}`,
        },
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            url: `${SITE_URL}/resources/blog/${slug}`,
            images: [blog.image || '/og-image.jpg', ...previousImages],
            type: 'article',
        },
    };
}

const Page = async ({ params }: Props) => {
    const { slug } = await params;
    const blog = MOCK_BLOGS.find(b => b.slug === slug);

    if (!blog) {
        notFound();
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.excerpt,
        "author": {
            "@type": "Person",
            "name": blog.author
        },
        "datePublished": blog.date,
        "image": blog.image || `${SITE_URL}/og-image.jpg`,
        "url": `${SITE_URL}/resources/blog/${slug}`,
        "publisher": {
            "@type": "Organization",
            "name": SITE_NAME,
            "logo": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/logo.png`
            }
        }
    };

    return (
        <>
            <Schema data={articleSchema} />
            <BlogPostClient blog={blog} />
        </>
    );
};

export default Page;
