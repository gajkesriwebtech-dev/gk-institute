"use client";

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PublicLayout } from '../../../../components/Layouts';
import { Button, Icons, GridPattern } from '../../../../components/ui';
import { MOCK_EBOOKS } from '../../../../constants';
import { cld, FALLBACK_COURSE_IMAGE } from '@/lib/cloudinary';
import CourseImage from '@/components/ui/CourseImage';

const EbookLanding: React.FC = () => {
    const params = useParams();
    const slug = params?.slug as string;
    const router = useRouter();
    const ebook = MOCK_EBOOKS.find(e => e.slug === slug);

    useEffect(() => {
        // window.scrollTo(0, 0); 
    }, [slug]);

    if (!ebook) return <div className="p-20 text-center dark:text-white">Ebook not found</div>;

    return (
        <PublicLayout>
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                        <div className="grid lg:grid-cols-2">

                            {/* Left: Visuals */}
                            <div className="bg-slate-100 dark:bg-slate-800 p-12 flex flex-col items-center justify-center relative overflow-hidden">
                                <GridPattern className="opacity-50" />
                                <div className="relative z-10 w-64 aspect-[3/4] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 mb-8">
                                    <CourseImage
                                        src={cld(ebook.cover, 700)}
                                        alt={ebook.title}
                                        className="w-full h-full object-cover rounded-r-lg border-l-4 border-white/20"
                                    />
                                </div>
                                <div className="relative z-10 w-full max-w-sm">
                                    <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase tracking-wider">What's Inside</h4>
                                    <ul className="space-y-2">
                                        {ebook.toc.map((chapter, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                                <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold">{i + 1}</span>
                                                {chapter}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right: Copy & Form */}
                            <div className="p-10 lg:p-16 flex flex-col">
                                <div onClick={() => router.push('/ebooks')} className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest cursor-pointer mb-6 hover:text-brand-600">
                                    <Icons.ArrowLeft className="w-3 h-3" /> All Resources
                                </div>
                                <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                                    {ebook.title}
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                                    {ebook.description}
                                </p>
                                <p className="text-sm font-bold text-brand-600 dark:text-brand-400 mb-8 uppercase tracking-wide">
                                    Perfect for: {ebook.audience}
                                </p>

                                {/* Sample Chapter Accordion */}
                                <div className="mb-8 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 font-bold text-slate-900 dark:text-white text-sm">
                                        Read a Sample Excerpt
                                    </div>
                                    <div className="p-6 prose prose-sm dark:prose-invert max-w-none max-h-60 overflow-y-auto custom-scrollbar">
                                        {ebook.sampleChapter}
                                    </div>
                                </div>

                                <div className="bg-[#1F4037] p-8 rounded-2xl border border-white/10 mt-auto shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transform group-hover:scale-150 transition-transform duration-700"></div>
                                    <h4 className="text-xl font-black text-white mb-4 uppercase tracking-widest">Ready to dive in?</h4>
                                    <p className="text-slate-300 mb-8 font-medium leading-relaxed">
                                        This ebook is available publicly for free. Click the button below to read the full version.
                                    </p>
                                    <Button
                                        variant="primary"
                                        className="w-full justify-center py-4 bg-[#FDB827] text-[#1F4037] hover:bg-white hover:text-[#1F4037] font-black transition-all"
                                        onClick={() => window.open((ebook as any).link, '_blank')}
                                    >
                                        Read Full Ebook <Icons.ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                    <p className="text-xs text-slate-400 mt-4 text-center">
                                        No registration required. Opens in a new tab.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
};

export default EbookLanding;
