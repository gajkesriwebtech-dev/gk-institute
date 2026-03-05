"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '../../components/Layouts';
import { Button } from '../../components/ui';

const HirePage: React.FC = () => {
    const router = useRouter();
    return (
        <PublicLayout>
            <div className="robot-anchor absolute top-0 left-0 w-full h-full pointer-events-none"
                data-section="hero" data-top="20%" data-right="5%" data-scale="0.8" />
            <section className="bg-white dark:bg-slate-950 py-20 text-center transition-colors duration-300 z-10 relative">
                <div className="max-w-4xl mx-auto px-4 relative z-30">
                    <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Hire Deployment-Ready Talent</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">Access our pipeline of pre-vetted Full Stack Developers and Product Designers.</p>
                    {/* Wires to Contact Page */}
                    <Button variant="primary" onClick={() => router.push('/contact?type=hire')}>View Candidate Profiles</Button>
                </div>
            </section>
        </PublicLayout>
    );
};

export default HirePage;
