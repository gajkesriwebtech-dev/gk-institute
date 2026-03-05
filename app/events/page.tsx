"use client";

import React from 'react';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading, SectionSubheading, Card, Button, Badge } from '../../components/ui';

const EventsPage = () => {
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
                    <SectionHeading align="center">Events & Webinars</SectionHeading>
                    <SectionSubheading align="center">Upcoming workshops and masterclasses.</SectionSubheading>
                </div>
            </section>
            <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300 relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 dark:text-slate-400 leading-relaxed space-y-6 relative z-30">
                    <div className="space-y-4">
                        <Card className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
                            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 text-center min-w-[80px]">
                                <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase">Oct</div>
                                <div className="text-2xl font-bold text-slate-900 dark:text-white">24</div>
                            </div>
                            <div className="flex-1">
                                <Badge color="blue">Webinar</Badge>
                                <h3 className="font-bold text-slate-900 dark:text-white text-lg mt-1">Breaking into Tech in 2024</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Panel discussion with Senior Engineers from Google & Spotify.</p>
                            </div>
                            <Button variant="outline">Register</Button>
                        </Card>
                        <Card className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
                            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 text-center min-w-[80px]">
                                <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase">Nov</div>
                                <div className="text-2xl font-bold text-slate-900 dark:text-white">02</div>
                            </div>
                            <div className="flex-1">
                                <Badge color="green">Workshop</Badge>
                                <h3 className="font-bold text-slate-900 dark:text-white text-lg mt-1">Figma Auto-Layout Masterclass</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Live design session with our Lead Product Designer.</p>
                            </div>
                            <Button variant="outline">Register</Button>
                        </Card>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default EventsPage;
