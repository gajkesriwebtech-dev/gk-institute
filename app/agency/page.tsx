"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '../../components/Layouts';
import { Card } from '../../components/ui';

const AgencyPage: React.FC = () => {
    const router = useRouter();
    return (
        <PublicLayout>
            <div className="robot-anchor absolute top-0 left-0 w-full h-full pointer-events-none"
                data-section="hero" data-top="25%" data-right="10%" data-scale="0.8" />
            <section className="bg-white dark:bg-slate-950 py-20 transition-colors duration-300 z-10 relative">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-30">
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">GK Digital Agency</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12">We build digital products for startups and enterprises, powered by our elite fellows and senior architects.</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-8 hover:border-brand-500 cursor-pointer" onClick={() => router.push('/contact?service=web')}>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Web Development</h3>
                            <p className="text-sm text-slate-500">React, Next.js, Node.js</p>
                            <span className="text-brand-600 text-xs font-bold mt-4 block">Get Quote →</span>
                        </Card>
                        <Card className="p-8 hover:border-brand-500 cursor-pointer" onClick={() => router.push('/contact?service=mobile')}>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Mobile Apps</h3>
                            <p className="text-sm text-slate-500">React Native, iOS, Android</p>
                            <span className="text-brand-600 text-xs font-bold mt-4 block">Get Quote →</span>
                        </Card>
                        <Card className="p-8 hover:border-brand-500 cursor-pointer" onClick={() => router.push('/contact?service=marketing')}>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Growth Marketing</h3>
                            <p className="text-sm text-slate-500">SEO, PPC, Social Media</p>
                            <span className="text-brand-600 text-xs font-bold mt-4 block">Get Quote →</span>
                        </Card>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default AgencyPage;
