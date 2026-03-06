"use client";

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PublicLayout } from '../../../../components/Layouts';
import { Button, Badge, Icons } from '../../../../components/ui';
import { MOCK_BLOGS } from '../../../../constants';
import { cld, FALLBACK_COURSE_IMAGE } from '@/lib/cloudinary';
import MediaImage from '@/components/ui/MediaImage';

const BlogPost: React.FC = () => {
    const params = useParams();
    const slug = params?.slug as string;
    const router = useRouter();

    // Find blog by Slug
    const blog = MOCK_BLOGS.find(b => b.slug === slug);

    useEffect(() => {
        // window.scrollTo(0, 0); 
    }, [slug]);

    if (!blog) return <div className="p-20 text-center dark:text-white">Blog not found</div>;

    return (
        <PublicLayout>
            <div className="max-w-3xl mx-auto px-4 py-16">
                <div onClick={() => router.push('/blog')} className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 cursor-pointer mb-8 transition-colors">
                    <Icons.ArrowLeft className="w-4 h-4" /> Back to Blog
                </div>

                <Badge color="purple" className="mb-4">{blog.category}</Badge>
                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                    {blog.title}
                </h1>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
                    {blog.authorImage && (
                        <img
                            src={cld(blog.authorImage, 120)}
                            className="w-8 h-8 rounded-full"
                            alt={blog.author}
                            loading="lazy"
                            decoding="async"
                        />
                    )}
                    <div>
                        <span className="text-slate-900 dark:text-white font-bold">{blog.author}</span>
                        <span className="mx-2">•</span>
                        <span>{blog.date}</span>
                        <span className="mx-2">•</span>
                        <span>{blog.readTime}</span>
                    </div>
                </div>

                <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-lg bg-white">
                    <img
                        src="/illustrations/blog.svg"
                        alt={blog.title}
                        className="w-full h-full object-contain"
                    />
                </div>

                <article className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                    {blog.content}
                </article>
            </div>
        </PublicLayout>
    );
};

export default BlogPost;
