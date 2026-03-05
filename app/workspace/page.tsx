"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '../../components/Layouts';
import { Button } from '../../components/ui';

const WorkspacePage: React.FC = () => {
    const router = useRouter();
    return (
        <PublicLayout>
            <section className="bg-slate-900 dark:bg-black text-white py-20 text-center transition-colors duration-300 z-10 relative">
                <div className="max-w-4xl mx-auto px-4 relative z-30">
                    <h1 className="text-4xl font-bold mb-6">The GK Workspace</h1>
                    <p className="text-xl text-slate-300">Our proprietary platform that simulates a real-world engineering environment.</p>
                </div>
            </section>
            <section className="py-20 bg-white dark:bg-slate-950 text-center transition-colors duration-300 z-10 relative">
                <p className="text-slate-500 dark:text-slate-400 mb-6">Interactive demo is currently accessible for enrolled students only.</p>
                <Button variant="primary" onClick={() => router.push('/login')}>Student Login</Button>
            </section>
        </PublicLayout>
    );
};

export default WorkspacePage;
