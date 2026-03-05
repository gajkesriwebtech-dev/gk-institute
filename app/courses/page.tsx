"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading, SectionSubheading, Card, Button, Badge, Icons, GridPattern } from '../../components/ui';
import { partnerLogos } from '@/data/logos';
import Logo from '@/components/ui/Logo';
import { cld } from '@/lib/cloudinary';
import { COURSES } from '../../data/courses';
import type { Course } from '../../data/courses';
import MentorshipSection from '../../components/MentorshipSection';
import CourseImage from '@/components/ui/CourseImage';

const CourseCard: React.FC<{ course: Course; index: number }> = ({ course, index }) => {
    const router = useRouter();

    // Reverted highlights logic: Use the original course highlights
    const displayHighlights = course.highlights.slice(0, 6);

    return (
        <Card
            variant="poster"
            index={index}
            className="flex flex-col h-full group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl z-30 bg-white dark:bg-slate-900 border-2 border-brand-200 dark:border-brand-900 shadow-premium hover:border-brand-600"
            onClick={() => router.push(`/courses/${course.slug}`)}
        >
            <div className="h-52 relative overflow-hidden rounded-t-2xl">
                <CourseImage
                    src={course.thumbnail}
                    alt={course.title}
                    width={900}
                    height={506}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute top-4 left-4">
                    <Badge variant="default" className="bg-brand-600/90 text-white border-none backdrop-blur-md">
                        {course.category}
                    </Badge>
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {course.title}
                </h3>

                <div className="flex items-center gap-2 text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.15em] mb-4">
                    <Icons.Clock className="w-3.5 h-3.5" />
                    <span>{course.duration}</span>
                    <span className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                    <span>Project Based</span>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2 mb-6 flex-1">
                    {displayHighlights.slice(0, 6).map((highlight: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <Icons.Check className="w-4 h-4 text-secondary-500 mt-0.5 shrink-0" />
                            <span className="line-clamp-1">{highlight}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto">
                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-3">
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-xs font-bold"
                            onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/courses/${course.slug}`);
                            }}
                        >
                            View Details
                        </Button>
                        <Button
                            variant="primary"
                            size="sm"
                            className="w-full text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white border-none shadow-premium transition-all hover:scale-[1.02]"
                            onClick={(e) => {
                                e.stopPropagation();
                                router.push('/contact');
                            }}
                        >
                            Contact for Pricing
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

// BROAD CATEGORY DEFINITIONS
const CATEGORIES = [
    "Technology & Development",
    "AI & Automation",
    "Data & Analytics",
    "Digital Marketing & Online Business",
    "Finance & Banking",
    "Media & Production",
    "Creative & Design",
    "Foundational & Career Skills"
] as const;

type BroadCategory = typeof CATEGORIES[number];

// Broad category grouping logic is now handled dynamically via the standardized category field

const CoursesPage: React.FC = () => {
    const router = useRouter();

    // Group courses by Broad Categories using the standardized category field
    const groupedCourses = COURSES.reduce((acc, course) => {
        const broadCategory = (course.category as BroadCategory) || "Foundational & Career Skills";
        if (!acc[broadCategory]) {
            acc[broadCategory] = [];
        }
        acc[broadCategory].push(course);
        return acc;
    }, {} as Record<BroadCategory, Course[]>);


    // Filter categories that actually have courses
    const activeCategories = CATEGORIES.filter(cat => groupedCourses[cat]?.length > 0);

    return (
        <PublicLayout>
            {/* Robot Anchor: Hero State */}
            <div className="robot-anchor absolute top-0 left-0 w-full h-full pointer-events-none"
                data-section="hero"
                data-top="15%"
                data-right="-30px"
                data-scale="0.8"
            />

            {/* 1. HERO SECTION */}
            <section className="bg-brand-600 dark:bg-slate-950 py-16 md:py-24 border-b border-brand-700 dark:border-slate-800 transition-colors duration-300 relative z-10 overflow-hidden">
                <GridPattern className="opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 relative z-30">
                    <div className="flex-1 text-center md:text-left">
                        <div className="text-secondary-400 font-bold tracking-widest text-xs uppercase mb-4">Master Your Career</div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Industry Grade <br /> <span className="text-secondary-500">Certification Programs</span>
                        </h1>
                        <p className="text-lg text-brand-50 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed opacity-90">
                            Upskill with our comprehensive curricula designed by industry veterans. All courses include real-world projects and certification.
                        </p>
                        <Button variant="primary" size="lg" className="px-8 shadow-xl bg-secondary-500 text-brand-900 hover:bg-secondary-600 border-none font-bold" onClick={() => document.getElementById('catalog-start')?.scrollIntoView({ behavior: 'smooth' })}>
                            Browse Program Catalog
                        </Button>
                    </div>
                    <div className="flex-1 w-full max-w-md hidden md:block relative z-30">
                        <div className="relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-400/20 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
                            <CourseImage
                                src={cld("courses/hero-learning", 900)}
                                alt="Students learning"
                                width={900}
                                height={600}
                                className="rounded-2xl shadow-2xl border-4 border-white/20 dark:border-slate-800 rotate-2 hover:rotate-0 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Logos Ticker */}
            <section className="py-12 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-slate-500 dark:text-slate-400 mb-8 font-medium text-sm tracking-widest uppercase">Trusted by Industry Leaders</p>

                    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_li]:max-w-none animate-infinite-scroll">
                            {partnerLogos.map((logo) => (
                                <li key={logo.id} className="transition-all cursor-default flex flex-col items-center gap-2 group">
                                    <Logo
                                        src={logo.image}
                                        name={logo.name}
                                        width={140}
                                        height={56}
                                        className="h-8 md:h-10 transition-all duration-300"
                                    />
                                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{logo.name}</span>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_li]:max-w-none animate-infinite-scroll" aria-hidden="true">
                            {partnerLogos.map((logo) => (
                                <li key={`${logo.id}-duplicate`} className="transition-all cursor-default flex flex-col items-center gap-2 group">
                                    <Logo
                                        src={logo.image}
                                        name={logo.name}
                                        width={140}
                                        height={56}
                                        className="h-8 md:h-10 transition-all duration-300"
                                    />
                                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{logo.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Anchor for scrolling */}
            <div id="catalog-start" className="relative">
                <div className="robot-anchor absolute top-0 left-0 w-full h-10 pointer-events-none"
                    data-section="catalog"
                    data-top="40%"
                    data-left="-60px"
                    data-right="auto"
                    data-scale="0.5"
                    data-rotate="5"
                />
            </div>

            {/* DYNAMIC CATEGORY SECTIONS */}
            {activeCategories.map((category, index) => {
                const categoryCourses = groupedCourses[category as BroadCategory];

                // Map category names to slug-style IDs for anchor links
                const categoryIdMap: Record<string, string> = {
                    "Technology & Development": "technology-development",
                    "AI & Automation": "ai-automation",
                    "Data & Analytics": "data-analytics",
                    "Digital Marketing & Online Business": "digital-marketing",
                    "Finance & Banking": "finance-banking",
                    "Media & Production": "media-production",
                    "Creative & Design": "creative-design",
                    "Foundational & Career Skills": "foundational-skills"
                };
                const sectionId = categoryIdMap[category] || category.toLowerCase().replace(/\s+/g, '-');

                return (
                    <section
                        key={category}
                        id={sectionId}
                        className={`py-20 transition-colors duration-300 relative z-10 ${index % 2 === 0 ? 'bg-white dark:bg-slate-950' : 'bg-brand-50/30 dark:bg-brand-900/10 border-y border-brand-100 dark:border-brand-900/20'}`}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-1 bg-brand-600 rounded-full"></div>
                                        <span className="text-xs font-black uppercase tracking-widest text-brand-600 dark:text-brand-400">
                                            {category} Tracks
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
                                        Professional Programs in <span className="text-brand-600">{category}</span>
                                    </h2>
                                </div>
                                <div className="text-slate-500 dark:text-slate-400 text-sm max-w-md md:text-right">
                                    Explore our high-impact {category.toLowerCase()} curriculum designed to get you hired or promoted in weeks, not years.
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {categoryCourses?.map((course, idx) => (
                                    <CourseCard key={course.slug} course={course} index={idx} />
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* 5. MENTORSHIP SECTION */}
            <MentorshipSection />

            {/* Plan Your Learning Banner is hidden as per rules */}

            {/* 6. SUPPORTING CONTENT */}
            <section className="py-24 bg-brand-600 dark:bg-black text-white transition-colors duration-300 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
                    <h2 className="text-4xl font-black mb-6">Level Up Your Career Today</h2>
                    <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
                        Join 30,000+ students and professionals who have transformed their lives through GK Institute's industry-aligned learning.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="primary" size="lg" className="px-10 bg-secondary-500 text-brand-900 hover:bg-secondary-600 font-bold" onClick={() => router.push('/contact')}>
                            Talk to Career Advisor
                        </Button>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default CoursesPage;
