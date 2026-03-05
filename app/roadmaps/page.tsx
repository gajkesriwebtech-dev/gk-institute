"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading, SectionSubheading, Card, Button, Badge, GridPattern } from '../../components/ui';
import { MOCK_ROADMAPS } from '../../constants';

const RoadmapsPage = () => {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const categories = ['All', ...Array.from(new Set(MOCK_ROADMAPS.map(r => r.category)))];

    const filteredRoadmaps = selectedCategory === 'All'
        ? MOCK_ROADMAPS
        : MOCK_ROADMAPS.filter(r => r.category === selectedCategory);

    return (
        <PublicLayout>
            {/* Robot Anchor: Hero */}
            <div className="robot-anchor absolute top-0 left-0 w-full h-full pointer-events-none"
                data-section="hero"
                data-top="15%"
                data-right="-20px"
                data-scale="0.8"
            />

            {/* Header Section */}
            <section className="bg-slate-50 dark:bg-slate-900 py-20 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 relative overflow-hidden z-10">
                <GridPattern className="opacity-30" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
                    <Badge color="green">Career Paths</Badge>
                    <div className="mt-6 mb-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Learning Roadmaps</h1>
                    </div>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Step-by-step guides for modern tech roles. Discover exactly what you need to learn,
                        in what order, to go from beginner to industry-ready professional.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white dark:bg-slate-950 min-h-[60vh] transition-colors duration-300 relative z-10">
                {/* Robot Anchor: List View (Peeking from bottom right margin) */}
                <div className="robot-anchor absolute top-20 left-0 w-full h-full pointer-events-none"
                    data-section="list"
                    data-top="60%"
                    data-right="-30px"
                    data-scale="0.6"
                    data-rotate="-5"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16 relative z-30">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${selectedCategory === cat
                                        ? 'bg-slate-900 text-white shadow-lg transform scale-105 dark:bg-white dark:text-slate-900'
                                        : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-400 hover:text-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-700 dark:hover:border-slate-500'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Roadmaps Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-30">
                        {filteredRoadmaps.map((roadmap, idx) => (
                            <Card
                                key={roadmap.id}
                                variant="poster"
                                index={idx}
                                className="flex flex-col h-full cursor-pointer relative overflow-hidden group border-slate-200 dark:border-slate-800 z-30"
                            >
                                <div
                                    className="absolute top-0 left-0 w-1.5 h-full bg-slate-200 dark:bg-slate-800 group-hover:bg-brand-500 transition-colors duration-300"
                                />
                                <div className="p-8 pl-10 flex flex-col h-full">
                                    <div className="mb-4">
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{roadmap.category}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                                        {roadmap.title}
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 flex-1 leading-relaxed">
                                        {roadmap.description}
                                    </p>

                                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">{roadmap.stages.length} Levels</span>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-brand-600 dark:text-brand-400 font-bold hover:bg-brand-50 dark:hover:bg-brand-900/20 pl-4 pr-2"
                                            onClick={() => router.push(`/roadmaps/${roadmap.id}`)}
                                        >
                                            View Roadmap →
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {filteredRoadmaps.length === 0 && (
                        <div className="text-center py-20 relative z-30">
                            <div className="inline-block p-4 rounded-full bg-slate-100 dark:bg-slate-900 mb-4">
                                <span className="text-4xl">🔍</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No roadmaps found</h3>
                            <p className="text-slate-500">Try selecting a different category.</p>
                        </div>
                    )}

                </div>
            </section>
        </PublicLayout>
    );
};

export default RoadmapsPage;
