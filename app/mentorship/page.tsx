"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading, SectionSubheading, Card, Button, Badge, Icons, GridPattern, Blob } from '../../components/ui';
import { partnerLogos } from '../../data/logos';
import { cld, FALLBACK_COURSE_IMAGE } from '@/lib/cloudinary';
import { TEAM_MEMBERS } from '../../data/team';

const MentorshipPage = () => {
    const router = useRouter();
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const features = [
        { title: "Production Grade Code Reviews", desc: "Stop merging bad code. Your mentor reviews every pull request you make, catching security flaws, performance issues, and bad patterns before they become habits.", icon: <Icons.Code /> },
        { title: "Mock Technical Interviews", desc: "Practice Data Structures & Algorithms and System Design in a high-pressure environment. Get detailed feedback on your communication and problem-solving skills.", icon: <Icons.User /> },
        { title: "Career & Salary Strategy", desc: "Don't leave money on the table. We help you negotiate your offer, optimize your LinkedIn profile, and navigate office politics.", icon: <Icons.Star /> },
        { title: "1:1 Architecture Planning", desc: "Before you write a single line of code for your capstone, plan the database schema and API structure with a Senior Architect.", icon: <Icons.Server /> }
    ];

    const faqs = [
        { q: "How often do I meet my mentor?", a: "You have a guaranteed 1:1 video session every week (45 mins). Additionally, you get async code reviews on GitHub within 24 hours." },
        { q: "Can I choose my mentor?", a: "We match you based on your career goals and tech stack. If the chemistry isn't right, you can request a switch within the first 2 weeks." },
        { q: "Is this suitable for absolute beginners?", a: "Our mentorship program is best suited for those who have basic coding knowledge and are ready to build professional projects. If you are brand new, we recommend starting with our self-paced courses first." },
        { q: "Do mentors help with job referrals?", a: "Yes! If you consistently perform well, mentors often refer students to their own companies or network. However, a referral is earned, not bought." }
    ];

    return (
        <PublicLayout>

            {/* 1. HERO SECTION */}
            <section className="relative bg-slate-900 dark:bg-black text-white py-24 overflow-hidden transition-colors duration-300 z-10">
                <GridPattern className="opacity-20 text-brand-500" />
                <Blob color="bg-purple-600" className="top-0 right-0 opacity-20 w-[600px] h-[600px]" />
                <Blob color="bg-brand-600" className="bottom-0 left-0 opacity-20 w-[600px] h-[600px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 text-center">
                    <Badge color="green" className="mb-6">Elite Fellowship Program</Badge>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                        Don't Walk the Path Alone. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-secondary-400">Walk with a Senior.</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        The fastest way to Senior Engineer isn't another Udemy course. It's having a veteran engineer review your code, architect your DB, and guide your career.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="success" size="lg" className="px-8 shadow-lg shadow-brand-500/20" onClick={() => router.push('/student-access')}>Apply for Mentorship</Button>
                        <Button variant="outline" size="lg" className="border-slate-600 text-slate-200 hover:bg-slate-800" onClick={() => document.getElementById('mentors')?.scrollIntoView({ behavior: 'smooth' })}>View Mentor Profiles</Button>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-4 text-sm text-slate-400">
                        <div className="flex -space-x-3">
                            {TEAM_MEMBERS.map((m, i) => (
                                <img
                                    key={i}
                                    src={m.avatarUrl}
                                    alt={m.fullName}
                                    className="w-10 h-10 rounded-full border-2 border-slate-900"
                                    loading="lazy"
                                    decoding="async"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = FALLBACK_COURSE_IMAGE;
                                    }}
                                />
                            ))}
                        </div>
                        <p>Trusted by engineers from Netflix, Google, & Spotify</p>
                    </div>
                </div>
            </section>

            {/* 2. ABOUT THE FELLOWSHIP (New) */}
            <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 z-10 relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
                    <SectionHeading align="center">The Apprenticeship Model</SectionHeading>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        For centuries, the only way to master a craft was to work alongside a master.
                        Coding is no different. Our mentorship program revives this tradition.
                        You aren't just a student here; you are an <strong className="text-brand-600 dark:text-brand-400">apprentice engineer</strong> working on production-grade software under the watchful eye of a Senior Developer.
                    </p>
                </div>
            </section>

            {/* 3. THE PROBLEM vs SOLUTION */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 z-10 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-500">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="text-3xl">🐢</span> The Self-Taught Route
                            </h3>
                            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                                <li className="flex gap-3"><Icons.X /><span className="line-through decoration-red-500">Getting stuck on bugs for days.</span></li>
                                <li className="flex gap-3"><Icons.X /><span className="line-through decoration-red-500">Building projects no one uses.</span></li>
                                <li className="flex gap-3"><Icons.X /><span className="line-through decoration-red-500">Spaghetti code that breaks.</span></li>
                                <li className="flex gap-3"><Icons.X /><span className="line-through decoration-red-500">Guessing what employers want.</span></li>
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border-2 border-brand-500 shadow-xl scale-105 transform relative z-10">
                            <div className="absolute -top-4 -right-4 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Recommended</div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="text-3xl">🚀</span> The Mentorship Route
                            </h3>
                            <ul className="space-y-4 text-slate-700 dark:text-slate-200 font-medium">
                                <li className="flex gap-3 text-brand-600 dark:text-brand-400"><Icons.Check /> <span>Unblocked in minutes, not days.</span></li>
                                <li className="flex gap-3 text-brand-600 dark:text-brand-400"><Icons.Check /> <span>Production-grade architecture.</span></li>
                                <li className="flex gap-3 text-brand-600 dark:text-brand-400"><Icons.Check /> <span>Code reviews that teach you patterns.</span></li>
                                <li className="flex gap-3 text-brand-600 dark:text-brand-400"><Icons.Check /> <span>Insider referrals to top companies.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. MENTOR SHOWCASE */}
            <section id="mentors" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 z-10 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <SectionHeading align="center">Learn from the Best</SectionHeading>
                    <SectionSubheading align="center">Our mentors don't just teach; they are active leaders in the industry.</SectionSubheading>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {TEAM_MEMBERS.map((m, i) => (
                            <Card key={m.id} variant="poster" className="text-center p-6 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white dark:bg-slate-900">
                                <div className="relative w-24 h-24 mx-auto mb-6">
                                    <div className="absolute inset-0 bg-brand-500/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                                    <img
                                        src={m.avatarUrl}
                                        alt={m.fullName}
                                        className="w-full h-full object-cover rounded-full border-2 border-white dark:border-slate-800 shadow-md relative z-10"
                                        loading="lazy"
                                        decoding="async"
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = FALLBACK_COURSE_IMAGE;
                                        }}
                                    />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{m.fullName}</h4>
                                <p className="text-brand-600 dark:text-brand-400 text-xs font-bold mb-1">{m.role}</p>
                                <p className="text-slate-400 dark:text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-4">{m.country}</p>

                                {/* Social Links */}
                                <div className="flex items-center justify-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 mt-auto">
                                    {m.socialLinks.linkedin && (
                                        <a
                                            href={m.socialLinks.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-[#0077B5] hover:bg-[#0077B5]/10 transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-700 group/social"
                                            aria-label="LinkedIn"
                                        >
                                            <Icons.LinkedIn className="w-4 h-4" />
                                        </a>
                                    )}
                                    {m.socialLinks.github && (
                                        <a
                                            href={m.socialLinks.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/10 dark:hover:bg-white/10 transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-700 group/social"
                                            aria-label="GitHub"
                                        >
                                            <Icons.Github className="w-4 h-4" />
                                        </a>
                                    )}
                                    {m.socialLinks.instagram && (
                                        <a
                                            href={m.socialLinks.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-[#E4405F] hover:bg-[#E4405F]/10 transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-700 group/social"
                                            aria-label="Instagram"
                                        >
                                            <Icons.Instagram className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. FEATURES GRID */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 z-10 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <div className="grid md:grid-cols-2 gap-12">
                        {features.map((feat, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm flex-shrink-0">
                                    {feat.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feat.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQ SECTION */}
            <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 z-10 relative">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <SectionHeading align="center">Common Questions</SectionHeading>
                    <div className="mt-12 space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-900 text-left focus:outline-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                >
                                    <span className="font-bold text-slate-900 dark:text-white text-lg">{faq.q}</span>
                                    <span className={`transform transition-transform duration-200 ${activeFaq === i ? 'rotate-180' : ''}`}><Icons.ChevronDown /></span>
                                </button>
                                {activeFaq === i && (
                                    <div className="p-6 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FINAL CTA */}
            <section className="py-24 bg-brand-900 dark:bg-black text-white text-center transition-colors duration-300 relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-30">
                    <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Career?</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Mentorship spots are limited to ensure quality. Applications are reviewed on a rolling basis.</p>
                    <Button variant="success" size="lg" className="px-12 py-4 text-lg shadow-2xl hover:scale-105 transition-transform" onClick={() => router.push('/contact')}>Apply for Mentorship</Button>
                    <p className="mt-6 text-sm text-slate-400">No credit card required for application.</p>
                </div>
            </section>
        </PublicLayout>
    );
};

export default MentorshipPage;
