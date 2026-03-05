"use client";

import React from 'react';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading, SectionSubheading } from '../../components/ui';

const PrivacyPage = () => {
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
                    <SectionHeading align="center">Privacy Policy</SectionHeading>
                    <SectionSubheading align="center">Last updated: January 2024</SectionSubheading>
                </div>
            </section>
            <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300 relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 dark:text-slate-400 leading-relaxed space-y-6 relative z-30">
                    <p>At GK Institute, we value your privacy. This policy outlines how we collect, use, and protect your personal information.</p>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">1. Information We Collect</h3>
                    <p>We collect information you provide directly to us, such as when you create an account, enroll in a course, or contact support.</p>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">2. How We Use Information</h3>
                    <p>We use your information to provide, maintain, and improve our services, including processing transactions and sending you related information.</p>
                </div>
            </section>
        </PublicLayout>
    );
};

export default PrivacyPage;
