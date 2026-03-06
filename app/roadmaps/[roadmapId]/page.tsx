"use client";

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PublicLayout } from '../../../components/Layouts';
import { Button, Card, Badge, Icons } from '../../../components/ui';
import { RoadmapCanvas } from '../../../components/RoadmapCanvas';
import { MOCK_ROADMAPS } from '../../../constants';
import { FULL_PROGRAM_CATALOG } from '../../../data/courses';
import { cld, FALLBACK_COURSE_IMAGE } from '../../../lib/cloudinary';
import CourseImage from '@/components/ui/CourseImage';

const RoadmapDetailPage = () => {
    const params = useParams();
    const roadmapId = params?.roadmapId as string;
    const router = useRouter();

    // Find roadmap by ID or Slug (to handle potential URL changes in future)
    const roadmap = MOCK_ROADMAPS.find(r => r.id === roadmapId || r.slug === roadmapId);

    // Scroll to top on load
    useEffect(() => {
        // window.scrollTo(0, 0); // Next.js handles scroll
    }, [roadmapId]);

    if (!roadmap) {
        return (
            <PublicLayout>
                <div className="min-h-[60vh] flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Roadmap Not Found</h2>
                    <Button onClick={() => router.push('/roadmaps')}>Back to Roadmaps</Button>
                </div>
            </PublicLayout>
        );
    }

    const relatedCourses = FULL_PROGRAM_CATALOG.filter(c => roadmap.relatedCourseIds.includes(c.id));

    return (
        <PublicLayout>
            {/* Roadmap Header */}
            <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full blur-[100px] opacity-10 -mr-20 -mt-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div onClick={() => router.push('/roadmaps')} className="inline-flex items-center gap-2 text-slate-400 text-sm hover:text-white mb-8 cursor-pointer transition-colors group">
                        <span className="group-hover:-translate-x-1 transition-transform"><Icons.ArrowLeft /></span> Back to All Roadmaps
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <Badge color="green">{roadmap.category}</Badge>
                        <span className="text-xs text-slate-400 font-medium">Last updated: {roadmap.lastUpdated}</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{roadmap.title}</h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">{roadmap.description}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="grid lg:grid-cols-3 gap-16">

                    {/* Left Column: The Roadmap Timeline (Visual Canvas) */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Learning Path</h2>
                            <div className="flex gap-2 text-xs font-medium ml-auto">
                                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-500"></span> Core</span>
                                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Milestone</span>
                            </div>
                        </div>

                        {/* The Render Engine */}
                        <RoadmapCanvas roadmap={roadmap} />
                    </div>

                    {/* Right Column: GK Course Integration (Action) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">

                            {/* Promo Card */}
                            <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm">
                                <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center text-2xl shadow-sm mb-6 border border-slate-100 dark:border-slate-600">🚀</div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Practice with Mentors</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                    Theory is good. Building real software is better. Join the workspace to apply this roadmap on live client projects.
                                </p>

                                {relatedCourses.length > 0 ? (
                                    <div className="space-y-4">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recommended Track</div>
                                        {relatedCourses.map(course => (
                                            <Card
                                                key={course.id}
                                                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-md group hover:border-brand-300 dark:hover:border-brand-700 transition-colors cursor-pointer"
                                                onClick={() => router.push(`/courses/${course.id}`)}
                                            >
                                                <div className="h-32 overflow-hidden rounded-t-xl relative">
                                                    <CourseImage
                                                        src={cld(course.thumbnail, 700)}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                        alt={course.title}
                                                    />
                                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                                </div>
                                                <div className="p-4">
                                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{course.title}</h4>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Project Based</p>
                                                    <Button
                                                        variant="primary"
                                                        size="sm"
                                                        className="w-full"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            router.push(`/courses/${course.id}`);
                                                        }}
                                                    >
                                                        View Syllabus
                                                    </Button>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center shadow-sm">
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Join our general mentorship program to master these skills.</p>
                                        <Button variant="primary" className="w-full" onClick={() => router.push('/mentorship')}>Apply for Mentorship</Button>
                                    </div>
                                )}
                            </div>

                            {/* Legend / Info */}
                            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5 border border-slate-100 dark:border-slate-800">
                                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-3">Roadmap Legend</h4>
                                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-brand-500 border border-brand-600"></span> <strong>Core:</strong> Essential knowledge required for the role.</li>
                                    <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-purple-500 border border-purple-600"></span> <strong>Advanced:</strong> Master these to stand out.</li>
                                    <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-slate-300 border border-slate-400"></span> <strong>Optional:</strong> Good to know, but not blocking.</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </PublicLayout>
    );
};

export default RoadmapDetailPage;
