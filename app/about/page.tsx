"use client";

import React from 'react';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading, SectionSubheading } from '../../components/ui';

const AboutPage = () => {
    return (
        <PublicLayout>
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <img
                    src="/images/about_us_hero.png"
                    alt="GK Institute Office"
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
                />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                        About GK Institute
                    </h1>
                    <p className="text-xl text-slate-200 max-w-2xl mx-auto font-medium">
                        Bridging the gap between education and industry through project-based excellence.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 animate-fade-in-up">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-widest">
                                Our Mission
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
                                Education Should <span className="text-emerald-600 dark:text-emerald-500">Look Like Work</span>
                            </h2>
                            <div className="text-lg text-slate-600 dark:text-slate-400 space-y-6 leading-relaxed font-medium">
                                <p>
                                    GK Institute was founded on a simple premise: traditional academia often fails to prepare students for the fast-paced, collaborative environment of modern tech companies.
                                </p>
                                <p>
                                    We operate as a hybrid <strong className="text-slate-900 dark:text-white">Digital Agency + Training Institute</strong>. Our students don't just watch videos; they join a simulated workspace, work on live client tickets, and ship code to production.
                                </p>
                                <p>
                                    Our mission is to empower the next generation of digital professionals with the practical skills, mentorship, and portfolio they need to secure high-growth careers.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-50 dark:border-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
                                <img
                                    src="/images/practical_learning_mentor.png"
                                    alt="Practical Learning at GK Institute"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default AboutPage;
