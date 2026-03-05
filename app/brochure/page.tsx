"use client";

import React from 'react';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading, Button, Icons } from '../../components/ui';

const BrochurePage = () => {
    const brochureUrl = "/GK COURSE CATALOUGE n 3 to 6 months courses.pdf"; // Assuming it's in public folder

    return (
        <PublicLayout>
            <section className="py-20 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
                        <div>
                            <SectionHeading>Institute Brochure</SectionHeading>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">Explore our comprehensive course catalog and institutional roadmap.</p>
                        </div>
                        <Button
                            variant="marigold"
                            className="font-black px-8"
                            onClick={() => window.open(brochureUrl, '_blank')}
                        >
                            <Icons.Download className="mr-2 w-5 h-5" /> Download PDF
                        </Button>
                    </div>

                    <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl shadow-premium border border-slate-200 dark:border-slate-700 overflow-hidden min-h-[70vh]">
                        <iframe
                            src={`${brochureUrl}#toolbar=0`}
                            className="w-full h-full border-none"
                            title="GK Institute Brochure"
                        />
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default BrochurePage;
