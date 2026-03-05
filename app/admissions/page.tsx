"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '../../components/Layouts';
import { Button } from '../../components/ui';

const AdmissionsPage: React.FC = () => {
    const router = useRouter();
    return (
        <PublicLayout>
            <div className="robot-anchor absolute top-0 left-0 w-full h-full pointer-events-none"
                data-section="hero" data-top="25%" data-right="10%" data-scale="0.9" />
            <section className="bg-white dark:bg-slate-950 py-20 text-center transition-colors duration-300 z-10 relative">
                <div className="relative z-30">
                    <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Apply to GK Institute</h1>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">Our admissions process is selective. We look for passion, grit, and a willingness to learn by doing.</p>
                    <Button variant="success" size="lg" onClick={() => router.push('/login')}>Start Application</Button>
                </div>
            </section>
        </PublicLayout>
    );
};

export default AdmissionsPage;
