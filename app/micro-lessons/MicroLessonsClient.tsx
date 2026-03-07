"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '../../components/Layouts';
import { Badge, Icons } from '../../components/ui';
import { cld } from '../../lib/cloudinary';
import CourseImage from '@/components/ui/CourseImage';
import { MOCK_LESSONS } from '../../constants';

const MicroLessonsClient = () => {
    const router = useRouter();
    return (
        <PublicLayout>
            <section className="bg-slate-900 dark:bg-black text-white py-20 relative overflow-hidden transition-colors duration-300 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
                    <Badge color="blue" className="mb-4">Micro-Lessons</Badge>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Learn in 10 Minutes or Less</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Bite-sized video tutorials to help you solve specific problems quickly.</p>
                </div>
            </section>

            <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {MOCK_LESSONS.map(lesson => (
                            <div
                                key={lesson.id}
                                className="group cursor-pointer"
                                onClick={() => router.push(`/resources/micro-lessons/${lesson.slug}`)}
                            >
                                <div className="relative rounded-xl overflow-hidden mb-4 shadow-lg">
                                    <CourseImage
                                        src={cld(lesson.thumbnail, 900)}
                                        alt={lesson.title}
                                        className="w-full aspect-video object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 group-hover:scale-110 transition-transform">
                                            <Icons.Play />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
                                        {lesson.duration}
                                    </div>
                                </div>
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1 group-hover:text-brand-600 transition-colors">{lesson.title}</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">{lesson.category}</p>
                                    </div>
                                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                        <Icons.Plus className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default MicroLessonsClient;
