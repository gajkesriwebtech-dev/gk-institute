"use client";

import React from 'react';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading, SectionSubheading } from '../../components/ui';

const AboutPage = () => {
    return (
        <PublicLayout>
            {/* Robot Anchor: Generic Top Position */}
            <div className="robot-anchor absolute top-0 left-0 w-full h-full pointer-events-none"
                data-section="hero"
                data-top="15%"
                data-right="5%"
                data-scale="0.8"
            />
            <section className="bg-slate-50 dark:bg-slate-900 py-16 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
                    <SectionHeading align="center">About GK Institute</SectionHeading>
                    <SectionSubheading align="center">Bridging the gap between education and industry.</SectionSubheading>
                </div>
            </section>
            <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300 relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 dark:text-slate-400 leading-relaxed space-y-6 relative z-30">
                    <p>
                        GK Institute was founded on a simple premise: <strong className="text-slate-900 dark:text-white">Education should look like work.</strong> Traditional academia often fails to prepare students for the fast-paced, collaborative, and tool-driven environment of modern tech companies.
                    </p>
                    <p>
                        We operate as a hybrid <strong className="text-slate-900 dark:text-white">Digital Agency + Training Institute</strong>. Our students don't just watch videos; they join a simulated workspace, work on live client tickets, attend standups, and ship code to production.
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white pt-4">Our Mission</h3>
                    <p>
                        To empower the next generation of digital professionals with the practical skills, mentorship, and portfolio they need to secure high-growth careers.
                    </p>
                </div>
            </section>
        </PublicLayout>
    );
};

export default AboutPage;
