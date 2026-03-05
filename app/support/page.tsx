"use client";

import React from 'react';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading, SectionSubheading, Card, Button } from '../../components/ui';

const SupportPage = () => {
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
                    <SectionHeading align="center">Help Center</SectionHeading>
                    <SectionSubheading align="center">We're here to help you succeed.</SectionSubheading>
                </div>
            </section>
            <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300 relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 dark:text-slate-400 leading-relaxed space-y-6 relative z-30">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-8 text-center">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Student Support</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Issues with the LMS, assignments, or billing.</p>
                            <Button variant="primary">Submit Ticket</Button>
                        </Card>
                        <Card className="p-8 text-center">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Admissions</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Questions about programs, dates, and tuition.</p>
                            <Button variant="outline">Contact Admissions</Button>
                        </Card>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default SupportPage;
