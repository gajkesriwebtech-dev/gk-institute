"use client";

import React from 'react';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading } from '../../components/ui';

const SitemapPage = () => {
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
                    <SectionHeading align="center">Sitemap</SectionHeading>
                </div>
            </section>
            <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300 relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 dark:text-slate-400 leading-relaxed space-y-6 relative z-30">
                    <div className="grid md:grid-cols-3 gap-8 text-sm">
                        <div>
                            <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Main</h4>
                            <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                                <li>Home</li>
                                <li>Roadmaps</li>
                                <li>Courses</li>
                                <li>Mentorship</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Company</h4>
                            <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                                <li>About</li>
                                <li>Careers</li>
                                <li>Partners</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="/privacy-policy" className="text-slate-500 hover:text-[#1F4037] dark:hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="/terms" className="text-slate-500 hover:text-[#1F4037] dark:hover:text-white transition-colors">Terms of Service</a></li>
                                <li><a href="/policies" className="text-slate-500 hover:text-[#1F4037] dark:hover:text-white transition-colors">Institute Policies</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default SitemapPage;
