"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '../../components/Layouts';
import { Button, Badge } from '../../components/ui';
import { MOCK_EBOOKS } from '../../constants';
import { cld } from '@/lib/cloudinary';
import CourseImage from '@/components/ui/CourseImage';

const EbooksClient: React.FC = () => {
    const router = useRouter();
    return (
        <PublicLayout>
            <section className="bg-white dark:bg-slate-950 py-20 transition-colors duration-300 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge color="green" className="mb-4">Resources</Badge>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Ebooks & Career Guides</h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Comprehensive guides to help you navigate your career, salary negotiations, and technical interviews.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {MOCK_EBOOKS.map(book => (
                            <div
                                key={book.id}
                                className="flex flex-col md:flex-row gap-6 items-start group cursor-pointer"
                                onClick={() => router.push(`/resources/ebooks/${book.slug}`)}
                            >
                                <div className="w-full md:w-48 aspect-[3/4] rounded-lg overflow-hidden shadow-xl flex-shrink-0 relative">
                                    <CourseImage
                                        src={cld(book.cover, 700)}
                                        alt={book.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                                </div>
                                <div className="flex-1 py-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 transition-colors">{book.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{book.description}</p>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">{book.pages} Pages • PDF</span>
                                        <Button variant="outline" size="sm">Download Free</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default EbooksClient;
