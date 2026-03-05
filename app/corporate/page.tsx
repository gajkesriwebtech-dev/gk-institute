"use client";

import React from 'react';
import { PublicLayout } from '../../components/Layouts';
import { Badge, Button } from '../../components/ui';

const CorporatePage: React.FC = () => {
    return (
        <PublicLayout>
            <div className="robot-anchor absolute top-0 left-0 w-full h-full pointer-events-none"
                data-section="hero" data-top="20%" data-right="5%" data-scale="0.9" />
            <section className="bg-white dark:bg-slate-950 py-20 transition-colors duration-300 z-10 relative">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-30">
                    <div>
                        <Badge color="blue">For Business</Badge>
                        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mt-4 mb-6">Upskill Your Workforce</h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">Customized training programs in React, Node.js, Data Science, and Digital Marketing tailored to your company's stack.</p>
                        {/* Wires to Contact Page */}
                        <Button variant="primary" onClick={() => window.location.href = '/contact?type=corporate'}>Request Proposal</Button>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800 h-80 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white">
                        <span className="text-6xl">🏢</span>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default CorporatePage;
