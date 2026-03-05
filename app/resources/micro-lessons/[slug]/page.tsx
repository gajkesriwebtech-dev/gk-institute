"use client";

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PublicLayout } from '../../../../components/Layouts';
import { Badge, Icons, Card } from '../../../../components/ui';
import { MOCK_LESSONS } from '../../../../constants';

const LessonPlayer: React.FC = () => {
    const params = useParams();
    const slug = params?.slug as string;
    const router = useRouter();
    const lesson = MOCK_LESSONS.find(l => l.slug === slug);

    useEffect(() => {
        // window.scrollTo(0, 0); 
    }, [slug]);

    if (!lesson) return <div className="p-20 text-center dark:text-white">Lesson not found</div>;

    return (
        <PublicLayout>
            <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div onClick={() => router.push('/micro-lessons')} className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 cursor-pointer mb-8 transition-colors font-bold uppercase tracking-wider">
                        <Icons.ArrowLeft className="w-4 h-4" /> Back to Library
                    </div>
                    
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Video Player Area */}
                        <div className="lg:col-span-2">
                            <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800 relative group">
                                <iframe
                                    src={lesson.videoUrl}
                                    className="w-full h-full"
                                    title={lesson.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="mt-10 space-y-6">
                                <div className="flex items-center gap-3">
                                    <Badge color="blue">{lesson.category}</Badge>
                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{lesson.duration} Watch Time</span>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
                                    {lesson.title}
                                </h1>
                                <div className="prose prose-lg max-w-none text-slate-900 dark:text-slate-300 font-medium leading-relaxed">
                                    {lesson.explanation}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            <Card className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
                                <div className="p-8">
                                    <h3 className="font-black mb-6 text-slate-900 dark:text-white uppercase tracking-widest text-sm">Key Takeaways</h3>
                                    <ul className="space-y-4">
                                        {lesson.takeaways.map((point: string, i: number) => (
                                            <li key={i} className="flex gap-4 text-base text-slate-700 dark:text-slate-300 font-bold">
                                                <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                                                    <Icons.Check className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                                                </div>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-8 bg-[#FDB827] border-t border-[#FDB827]/10">
                                    <h4 className="text-xs font-black text-[#1F4037] mb-4 uppercase tracking-[0.2em]">Next Action Step</h4>
                                    <div className="p-5 bg-white/20 backdrop-blur-md rounded-xl border border-white/30">
                                        <p className="text-base text-[#1F4037] font-black">"{lesson.actionStep}"</p>
                                    </div>
                                </div>
                            </Card>

                            {/* Social Call to Action */}
                            <div className="bg-[#1F4037] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transform group-hover:scale-150 transition-transform duration-700"></div>
                                <h4 className="text-lg font-black mb-4 uppercase tracking-widest">Share this lesson</h4>
                                <p className="text-sm text-slate-300 mb-6 font-medium">Enjoyed this micro-lesson? Help others grow by sharing it on your favorite platform.</p>
                                <div className="flex gap-3">
                                    <button className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#FDB827] hover:text-[#1F4037] flex items-center justify-center transition-all duration-300">
                                        <Icons.LinkedIn className="w-5 h-5" />
                                    </button>
                                    <button className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#FDB827] hover:text-[#1F4037] flex items-center justify-center transition-all duration-300">
                                        <Icons.Twitter className="w-5 h-5" />
                                    </button>
                                    <button className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#FDB827] hover:text-[#1F4037] flex items-center justify-center transition-all duration-300">
                                        <Icons.Facebook className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
};

export default LessonPlayer;
