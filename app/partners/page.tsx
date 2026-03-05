"use client";

import React from 'react';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading, Badge, Button, GridPattern } from '../../components/ui';
import Logo from '@/components/ui/Logo';
import {
    UNIVERSITY_PARTNERS
} from '../../constants';
import { certificationLogos, partnerLogos, toolsLogos } from '@/data/logos';

const PartnersPage: React.FC = () => {
    return (
        <PublicLayout>
            <div className="robot-anchor absolute top-0 left-0 w-full h-full pointer-events-none"
                data-section="hero" data-top="15%" data-right="5%" data-scale="0.8" />

            {/* Hero Section */}
            <section className="bg-slate-50 dark:bg-slate-900 py-24 transition-colors duration-300 z-10 relative overflow-hidden">
                <GridPattern className="opacity-30" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
                    <Badge color="blue" className="mb-4">Global Ecosystem</Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                        Powering Careers with <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-secondary-500">World-Class Partners</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        GK Institute's ecosystem includes Fortune 500 hiring partners, cutting-edge technology providers, and globally recognized certification authorities.
                    </p>
                </div>
            </section>

            {/* A) Hiring Partners */}
            <section className="bg-white dark:bg-slate-950 py-24 transition-colors duration-300 z-10 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <div className="text-center mb-16">
                        <SectionHeading align="center">Hiring Partners</SectionHeading>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mt-4">
                            Our graduates are recruited by industry leaders who value the practical, project-based training provided at GK Institute.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 items-center">
                        {partnerLogos.map((partner) => (
                            <div key={partner.id} className="group">
                                <Logo
                                    src={partner.image}
                                    name={partner.name}
                                    width={200}
                                    height={80}
                                    className="h-12 md:h-16 transition-all duration-300 transform group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* B) Technology Partners */}
            <section className="bg-slate-50 dark:bg-slate-900 py-24 transition-colors duration-300 z-10 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <div className="text-center mb-16">
                        <SectionHeading align="center">Technology Partners</SectionHeading>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mt-4">
                            We integrate the latest industry tools into our curriculum, ensuring our students master the stack used by modern tech teams.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {toolsLogos.map((logo) => (
                            <div key={logo.id} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-2 group">
                                <Logo
                                    src={logo.image}
                                    name={logo.name}
                                    width={160}
                                    height={64}
                                    className="h-10 md:h-12 transition-opacity"
                                />
                                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* C) Learning & Certification Partners */}
            <section className="bg-white dark:bg-slate-950 py-24 transition-colors duration-300 z-10 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <div className="text-center mb-16">
                        <SectionHeading align="center">Learning & Certification Partners</SectionHeading>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mt-4">
                            Earn globally recognized credentials from the world's most prestigious institutions and technology providers.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-10">
                        {certificationLogos.map((logo) => (
                            <div key={logo.id} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center gap-3 transition-colors hover:border-brand-500 group">
                                <Logo
                                    src={logo.image}
                                    name={logo.name}
                                    width={160}
                                    height={64}
                                    className="h-10 md:h-12 transition-all duration-300"
                                />
                                <span className="text-[10px] font-semibold text-slate-500">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* D) Mentors & Experts (Academic Alliances) */}
            <section className="bg-brand-900 dark:bg-black py-24 transition-colors duration-300 z-10 relative text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge color="blue" className="mb-4 bg-white/10 text-white border-white/20">University Alliances</Badge>
                            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Mentors from <br /> Top Institutions</h2>
                            <p className="text-slate-300 mb-10 text-lg leading-relaxed">
                                Our community of mentors includes senior professionals and academic experts from leading universities and organizations worldwide.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {UNIVERSITY_PARTNERS.map((uni, i) => (
                                    <span key={i} className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-sm font-bold tracking-wide">
                                        {uni}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 h-48 flex items-center justify-center">
                                <span className="text-slate-500 text-sm">Academic Expert</span>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 h-48 mt-8 flex items-center justify-center">
                                <span className="text-slate-500 text-sm">Industry Mentor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 z-10 relative text-center">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Become a Partner</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">Collabrate with GK Institute to hire top talent or train your corporate workforce.</p>
                <Button variant="primary" size="lg" className="px-10 text-secondary-600 hover:text-brand-600 bg-brand-600" onClick={() => window.location.href = '/contact?type=partnership'}>Inquire About Partnership</Button>
            </section>
        </PublicLayout>
    );
};

export default PartnersPage;
