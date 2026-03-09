"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading, SectionSubheading, Card, Button, Badge, Icons, GridPattern } from '../../components/ui';
import { partnerLogos } from '@/data/logos';
import Logo from '@/components/ui/Logo';
import { COURSES } from '../../data/courses';
import type { Course } from '../../data/courses';
import MentorshipSection from '../../components/MentorshipSection';
import CourseCard from '../../components/CourseCard';


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

const CoursesPageClient: React.FC = () => {
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
                            Upskill with industry-aligned curricula designed by veterans. <span className="text-secondary-400 font-black italic">Get 20% Inaugural Discount — valid for the first 5 students only!</span>
                        </p>
                        <Button variant="primary" size="lg" className="px-8 shadow-xl bg-secondary-500 text-brand-900 hover:bg-secondary-600 border-none font-bold" onClick={() => document.getElementById('catalog-start')?.scrollIntoView({ behavior: 'smooth' })}>
                            Browse Program Catalog
                        </Button>
                    </div>
                    <div className="flex-1 w-full max-w-md hidden md:block relative z-30">
                        <div className="relative animate-float">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-400/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
                            <img
                                src="/images/courses-hero.png"
                                alt="Special Offer"
                                className="rounded-3xl shadow-2xl border-4 border-white/20 dark:border-slate-800 transition-all duration-700 hover:scale-105 hover:rotate-0"
                            />
                            {/* Decorative Badge Overlay */}
                            <div className="absolute -top-6 -right-6 bg-[#FDB827] text-white p-4 rounded-2xl shadow-xl rotate-12 animate-bounce flex flex-col items-center min-w-[140px]">
                                <span className="text-[10px] font-black uppercase tracking-widest">Inaugural Offer</span>
                                <span className="text-2xl font-black">20% OFF</span>
                                <span className="text-[10px] font-bold uppercase tracking-tight mt-1 opacity-90 text-slate-900/80">First 5 Students</span>
                            </div>
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

            {/* 6. SUPPORTING CONTENT */}
            <section className="py-24 bg-brand-600 dark:bg-black text-white transition-colors duration-300 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
                    <h2 className="text-4xl font-black mb-6">Level Up Your Career Today</h2>
                    <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
                        Join 30,000+ students and professionals who have transformed their lives through GK Institute's industry-aligned learning.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-10 py-4 bg-secondary-500 text-brand-900 hover:bg-secondary-600 font-bold rounded-xl transition-all shadow-xl" onClick={() => router.push('/contact')}>
                            Talk to Career Advisor
                        </button>
                    </div>
                </div>
            </section>

            {/* Local SEO Block — Courses in Alwar */}
            <section className="py-14 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl font-black text-slate-800 dark:text-white mb-6 text-center">
                        Computer & Professional Courses in Alwar — GK Institute
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        <div className="space-y-3">
                            <p>GK Institute offers the most comprehensive range of <strong className="text-slate-800 dark:text-slate-200">computer courses in Alwar, Rajasthan</strong> — from beginner-level programs to advanced professional certifications. Whether you want to learn <strong className="text-slate-800 dark:text-slate-200">web development</strong>, <strong className="text-slate-800 dark:text-slate-200">digital marketing</strong>, or <strong className="text-slate-800 dark:text-slate-200">AI & automation</strong>, all courses include live projects and mentorship.</p>
                            <p>Students from Alwar, Bhiwadi, Neemrana, Tijara, Rajgarh, and nearby areas regularly join GK Institute for our <strong className="text-slate-800 dark:text-slate-200">job-focused curriculum</strong> and agency workspace model, where you work on real client briefs.</p>
                        </div>
                        <div className="space-y-3">
                            <p>Agar aap <em>Alwar me koi accha computer course dhundh rahe hain</em>, to GK Institute me aapko milega: MERN Stack, Digital Marketing, SEO, AI & Automation, Graphic Design, aur bahut kuch. Yahan sirf theory nahi, real projects par kaam hota hai.</p>
                            <p>Ab GK Institute me <strong className="text-slate-800 dark:text-slate-200">20% inaugural discount</strong> chal raha hai — first 5 students ke liye. <strong className="text-slate-800 dark:text-slate-200">Aaj hi enroll karein</strong> aur apna career shuru karein.</p>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2 justify-center">
                        {["Web Dev Course Alwar", "Digital Marketing Alwar", "MERN Stack Alwar", "SEO Course Alwar", "AI Course Alwar", "Graphic Design Alwar", "Computer Course Alwar", "Coding Classes Alwar"].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold text-slate-500 dark:text-slate-400">{tag}</span>
                        ))}
                    </div>
                </div>
            </section>

        </PublicLayout>
    );
};

export default CoursesPageClient;
