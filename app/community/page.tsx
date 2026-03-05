"use client";

import React from 'react';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading, SectionSubheading, Button } from '../../components/ui';

const CommunityPage = () => {
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
                    <SectionHeading align="center">Community</SectionHeading>
                    <SectionSubheading align="center">Connect with peers and alumni.</SectionSubheading>
                </div>
            </section>
            <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300 relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 dark:text-slate-400 leading-relaxed space-y-6 relative z-30">
                    <p className="text-center">Our community is the heart of GK Institute. Join our Discord server to chat with mentors, find coding buddies, and share your wins.</p>
                    <div className="flex justify-center mt-8">
                        <Button variant="primary" className="bg-[#5865F2] hover:bg-[#4752C4] text-white border-none">Join Discord Server</Button>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default CommunityPage;
