"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading, Card, Button } from '../../components/ui';

const CaseStudiesPage: React.FC = () => {
    const router = useRouter();
    return (
        <PublicLayout>
            <div className="robot-anchor absolute top-0 left-0 w-full h-full pointer-events-none"
                data-section="hero" data-top="15%" data-right="5%" data-scale="0.8" />
            <section className="bg-slate-50 dark:bg-slate-900 py-16 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 z-10 relative">
                <SectionHeading align="center">Student Success Stories</SectionHeading>
            </section>
            <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300 z-10 relative">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 relative z-30">
                    <Card className="p-8">
                        <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">How Sarah switched from Sales to UI Design</h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-4">Placed at Spotify</p>
                        {/* Wires to Blog for now as placeholder for case study detail */}
                        <Button variant="outline" size="sm" onClick={() => router.push('/blog')}>Read Story</Button>
                    </Card>
                    <Card className="p-8">
                        <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">Building a SaaS MVP in 8 weeks</h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-4">Project Spotlight</p>
                        {/* Wires to Contact for demo */}
                        <Button variant="outline" size="sm" onClick={() => router.push('/contact')}>Request Demo</Button>
                    </Card>
                </div>
            </section>
        </PublicLayout>
    );
};

export default CaseStudiesPage;
