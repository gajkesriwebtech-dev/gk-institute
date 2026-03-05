"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading, Card, Button, Badge, Icons, GridPattern } from '../../components/ui';
import { MOCK_BLOGS } from '../../constants';
import { cld, FALLBACK_COURSE_IMAGE } from '../../lib/cloudinary';
import MediaImage from '@/components/ui/MediaImage';

const BlogPage = () => {
    const router = useRouter();
    return (
        <PublicLayout>
            <div className="robot-anchor absolute top-0 left-0 w-full h-full pointer-events-none"
                data-section="hero" data-top="15%" data-right="5%" data-scale="0.8" />

            <section className="bg-slate-50 dark:bg-slate-900 py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 relative z-10">
                <GridPattern className="opacity-30" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
                    <Badge color="purple" className="mb-4">GK Blog</Badge>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Insights for the Modern Professional</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Deep dives into software engineering, design systems, and career growth.</p>
                </div>
            </section>

            <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Follow Socials Bar */}
                    <div className="mb-16 p-8 bg-[#1F4037] rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mt-32 transform group-hover:scale-110 transition-transform duration-1000"></div>
                        <div className="relative z-10 text-center md:text-left">
                            <h3 className="text-2xl font-black mb-2 uppercase tracking-widest">Never Miss an Update</h3>
                            <p className="text-slate-300 font-medium">Follow our journey and get daily insights on your favorite platforms.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 relative z-10">
                            {[
                                { icon: Icons.LinkedIn, label: 'LinkedIn', color: 'hover:bg-[#0077B5]' },
                                { icon: Icons.Instagram, label: 'Instagram', color: 'hover:bg-[#E4405F]' },
                                { icon: Icons.Twitter, label: 'Twitter', color: 'hover:bg-[#1DA1F2]' },
                                { icon: Icons.Facebook, label: 'Facebook', color: 'hover:bg-[#1877F2]' },
                                { icon: Icons.YouTube, label: 'YouTube', color: 'hover:bg-[#FF0000]' }
                            ].map((social, i) => (
                                <button
                                    key={i}
                                    className={`flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 border border-white/20 transition-all duration-300 ${social.color} hover:scale-105 hover:border-transparent font-bold`}
                                >
                                    <social.icon className="w-5 h-5" />
                                    <span className="text-sm">{social.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {MOCK_BLOGS.map(blog => (
                            <Card
                                key={blog.id}
                                className="group cursor-pointer overflow-hidden border-slate-200 dark:border-slate-800"
                                onClick={() => router.push(`/resources/blog/${blog.slug}`)}
                            >
                                <div className="h-48 overflow-hidden">
                                    <MediaImage
                                        src={cld(blog.image, 900)}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">
                                        <span className="text-brand-600 dark:text-brand-400">{blog.category}</span>
                                        <span>•</span>
                                        <span>{blog.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{blog.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">{blog.excerpt}</p>
                                    <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Read Article <Icons.ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default BlogPage;
