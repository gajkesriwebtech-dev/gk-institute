"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PublicLayout } from '../../../components/Layouts';
import { Button, Icons, GridPattern, SectionHeading, Badge, Card } from '../../../components/ui';
import { SuccessPathway } from '../../../components/Infographics';
import { InteractiveInfographic } from '../../../components/InteractiveInfographic';
import { BrochureModal } from '../../../components/BrochureModal';
import { Logo } from '@/components/ui/Logo';
import { partnerLogos } from '@/data/logos';
import { COURSES } from '../../../data/courses';
import { BrandIcon } from '../../../components/BrandIcons';
import CourseImage from '@/components/ui/CourseImage';
import type { CourseModule } from '@/types';

const ProgramDetailPage = () => {
    const params = useParams();
    const courseId = params?.courseId as string;
    const router = useRouter();
    const [activeModule, setActiveModule] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

    const course = COURSES.find(c => c.slug === courseId);

    useEffect(() => {
        // window.scrollTo(0, 0); // Next.js handles scroll restoration
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [courseId]);

    // --- Loading Skeleton ---
    if (isLoading) {
        return (
            <PublicLayout>
                <div className="w-full min-h-screen bg-white dark:bg-slate-950 animate-pulse">
                    <section className="bg-slate-50 dark:bg-slate-900 pt-16 pb-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="h-12 w-3/4 bg-slate-200 dark:bg-slate-800 rounded mb-8"></div>
                            <div className="h-64 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                        </div>
                    </section>
                </div>
            </PublicLayout>
        );
    }

    if (!course) {
        return (
            <PublicLayout>
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Course Not Found</h2>
                    <Button onClick={() => router.push('/courses')}>Back to Catalog</Button>
                </div>
            </PublicLayout>
        );
    }

    const modules = course.modules || [];

    const illustrationForCourse = () => {
        const cat = (course.category || '').toLowerCase();
        const slug = (course.slug || '').toLowerCase();
        if (slug.includes('ui') || slug.includes('ux')) return '/illustrations/ui-ux.svg';
        if (slug.includes('cyber')) return '/illustrations/cyber-security.svg';
        if (slug.includes('photography')) return '/illustrations/photography.svg';
        if (slug.includes('video-editing') || slug.includes('youtube-video-creation')) return '/illustrations/video-editing.svg';
        if (cat.includes('technology')) return '/illustrations/web-development.svg';
        if (cat.includes('data')) return '/illustrations/data-science.svg';
        if (cat.includes('digital marketing')) return '/illustrations/digital-marketing.svg';
        return '/illustrations/web-development.svg';
    };

    const getModuleDescription = (title: string) => {
        return `Build comprehensive knowledge in ${title}. This module covers essential concepts, practical techniques, and industry-standard tools.`;
    };

    const faqs = [
        { q: "Do I need prior experience?", a: "This program is designed to take you from fundamentals to advanced concepts." },
        { q: "Is the certificate recognized?", a: "Yes, our certification is industry-recognized and backed by our hiring partners." },
        { q: "Can I access content later?", a: "Yes, you get lifetime access to the course content including updates." }
    ];

    const handleEnroll = () => {
        router.push(`/plan-learning?course=${course.slug}`);
    };

    return (
        <PublicLayout>
            <BrochureModal
                isOpen={isBrochureModalOpen}
                onClose={() => setIsBrochureModalOpen(false)}
                courseTitle={course.title}
                brochureUrl={course.syllabusPdf || '#'}
            />

            <div className="robot-anchor absolute top-0 left-0 w-full h-full pointer-events-none"
                data-section="hero" data-top="15%" data-right="-40px" data-scale="0.8" />

            {/* 1. HERO SECTION */}
            <section className="bg-slate-50 dark:bg-slate-900 pt-20 pb-24 relative overflow-hidden transition-colors duration-300 z-10">
                <GridPattern className="opacity-60" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                        Courses <Icons.ChevronRight className="w-3 h-3" /> {course.category} <Icons.ChevronRight className="w-3 h-3" /> <span className="text-brand-600 dark:text-brand-400">{course.title}</span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 relative z-30">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                                {course.title}
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl">
                                Stay relevant and advance your career with the <strong>GK Institute Professional Certification</strong>.
                                {course.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button
                                    variant="marigold"
                                    size="lg"
                                    className="px-12 py-4 font-black shadow-2xl"
                                    onClick={() => router.push('/contact')}
                                >
                                    Contact for Pricing
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="px-10 py-4 font-black border-slate-200 dark:border-slate-800"
                                    onClick={() => setIsBrochureModalOpen(true)}
                                >
                                    Download Brochure
                                </Button>
                            </div>
                        </div>

                        <div className="relative w-full max-w-md aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group z-30 bg-white">
                            <img
                                src={illustrationForCourse()}
                                alt={`${course.title} Illustration`}
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SKILLS & OUTCOMES (INTERACTIVE INFOGRAPHIC) */}
            {course.outcomes && course.outcomes.length > 0 && (
                <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300 z-10 relative border-t border-slate-100 dark:border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionHeading align="center">Skills & Outcomes You Will Gain</SectionHeading>
                        <p className="text-center text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-16 font-medium">
                            Explore the key skills and competencies you will acquire throughout this comprehensive program.
                        </p>

                        <InteractiveInfographic items={course.outcomes} />
                    </div>
                </section>
            )}

            {/* 4. INTERACTIVE CURRICULUM SECTION */}
            {modules.length > 0 && (
                <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 z-10 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionHeading align="center">Detailed Curriculum</SectionHeading>
                        <p className="text-center text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-16 font-medium">
                            Step-by-step learning modules designed for mastery.
                        </p>

                        <div className="grid lg:grid-cols-12 gap-12">
                            {/* Left Side: Module List (Vertical on Desktop, Horizontal Scroll on Mobile) */}
                            <div className="lg:col-span-4 overflow-x-auto lg:overflow-x-visible">
                                <div className="flex lg:flex-col gap-2 min-w-max lg:min-w-0 pb-4 lg:pb-0 scrollbar-hide">
                                    {modules.map((mod: CourseModule, idx: number) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveModule(idx)}
                                            className={`
                                                flex items-center gap-4 px-6 py-4 rounded-xl text-left transition-all duration-300
                                                ${activeModule === idx
                                                    ? 'bg-[#1F4037]/5 dark:bg-emerald-500/10 text-[#1F4037] dark:text-emerald-500 border-l-4 border-[#1F4037] dark:border-emerald-500'
                                                    : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900 border-l-4 border-transparent'
                                                }
                                            `}
                                        >
                                            <span className={`text-[10px] font-black uppercase tracking-widest ${activeModule === idx ? 'opacity-100' : 'opacity-40'}`}>
                                                Module {idx + 1}
                                            </span>
                                            <span className="font-bold text-sm truncate max-w-[200px] lg:max-w-none">
                                                {mod.title.split(':')[1]?.trim() || mod.title}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Module Details Area */}
                            <div className="lg:col-span-8 bg-slate-50/50 dark:bg-slate-900/30 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800 transition-all duration-500">
                                <div className="animate-fade-in" key={activeModule}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <Badge variant="default" className="bg-[#1F4037] text-white border-none px-4 py-1 uppercase text-[10px] tracking-widest font-black">Active Module</Badge>
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Est. Duration: 2-3 Weeks</span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">
                                        {modules[activeModule].title}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
                                        {getModuleDescription(modules[activeModule].title)}
                                    </p>

                                    <div className="space-y-4">
                                        <h4 className="text-[10px] font-black text-[#1F4037] dark:text-emerald-500 uppercase tracking-[0.2em] mb-4 underline underline-offset-4">Core Topics & Skills</h4>
                                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                                            {modules[activeModule].topics.slice(0, 4).map((topic: string, i: number) => (
                                                <div key={i} className="flex items-start gap-3 group">
                                                    <div className="w-5 h-5 rounded-full bg-white dark:bg-slate-800 text-[#1F4037] dark:text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                                                        <Icons.Check className="w-3 h-3" />
                                                    </div>
                                                    <span className="text-slate-700 dark:text-slate-300 font-bold text-sm leading-snug">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 5. DOWNLOAD FULL SYLLABUS SECTION */}
            <section className="py-16 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300 z-10 relative">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 shadow-sm mb-8">
                        <span className="text-xl">📄</span>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Curriculum Details</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">
                        WANT THE FULL <span className="text-[#1F4037] dark:text-emerald-500 underline underline-offset-8">SYLLABUS?</span>
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 font-medium">
                        Get the detailed lesson-by-lesson breakdown, tools included, and project list for this certification track.
                    </p>
                    <Button
                        variant="marigold"
                        size="lg"
                        className="px-12 py-4 shadow-xl"
                        onClick={() => setIsBrochureModalOpen(true)}
                    >
                        Download Detailed Syllabus PDF <Icons.Download className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </section>

            {/* 6. WHY GKWEBTECH TO BUILD YOUR CAREER */}
            <section className="bg-white dark:bg-slate-950 py-24 transition-colors duration-300 z-10 relative border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                    <Badge variant="default" className="mb-4">GK Advantage</Badge>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Why Choose Us to <br />Build Your Career?</h2>
                </div>
                <SuccessPathway />
            </section>


            {/* 8. PROGRAM INTELLIGENCE SECTION (MOVE TO END) */}
            <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 z-10 relative border-t border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {course.keyFeatures && course.keyFeatures.length > 0 && (
                        <div className="mt-10">
                            <h3 className="text-3xl md:text-5xl font-black text-center text-slate-900 dark:text-white mb-16 uppercase tracking-tight">Program Intelligence <br />& Features</h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {course.keyFeatures.map((feature, i) => (
                                    <Card key={i} className="p-8 border-slate-200 dark:border-slate-800 flex items-start gap-4 group hover:border-[#1F4037] transition-all bg-slate-50 dark:bg-slate-900/50">
                                        <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 text-[#1F4037] dark:text-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-premium">
                                            <Icons.CheckCircle className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900 dark:text-white mb-2 text-base uppercase tracking-widest">{feature}</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Industry-aligned core competency included in this certification track.</p>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-24 text-center">
                        <div className="inline-flex flex-wrap items-center justify-center gap-8 p-6 rounded-3xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                            <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-[10px] w-full mb-4 lg:w-auto lg:mb-0 lg:mr-4">Our Graduates Work At</h4>
                            <div className="flex flex-wrap justify-center gap-8">
                                {partnerLogos.slice(0, 6).map(partner => (
                                    <Logo key={partner.id} src={partner.image} name={partner.name} width={100} height={32} className="h-6 transition-all duration-300 transform hover:scale-110" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Removing original redundant sections */}
            {/* ... */}

        </PublicLayout>
    );
};

export default ProgramDetailPage;
