"use client";

import React from 'react';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading, SectionSubheading, Card, Button } from '../../components/ui';

const CareersPage = () => {
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
                    <SectionHeading align="center">Join Our Team</SectionHeading>
                    <SectionSubheading align="center">Help us shape the future of tech education.</SectionSubheading>
                </div>
            </section>
            <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300 relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 dark:text-slate-400 leading-relaxed space-y-6 relative z-30">
                    <p className="text-center mb-8">We are always looking for passionate mentors, curriculum designers, and operational staff.</p>
                    <div className="grid gap-6">
                        {['Senior React Mentor', 'Growth Marketing Manager', 'Student Success Lead'].map((job, i) => (
                            <Card key={i} className="p-6 flex justify-between items-center hover:border-brand-300 dark:hover:border-brand-700">
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">{job}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Remote • Full Time</p>
                                </div>
                                <Button variant="outline" size="sm">View Role</Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default CareersPage;
