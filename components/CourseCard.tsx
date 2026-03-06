"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, Button, Badge, Icons } from '@/components/ui';
import type { Course } from '@/data/courses';

interface CourseCardProps {
    course: Course;
    index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
    const router = useRouter();

    const displayHighlights = course.highlights ? course.highlights.slice(0, 6) : [];

    const iconForCourse = () => {
        const cat = (course.category || '').toLowerCase();
        const slug = (course.slug || '').toLowerCase();
        if (cat.includes('technology')) return <Icons.Code className="w-7 h-7" />;
        if (cat.includes('ai') || slug.includes('ai')) return <Icons.Settings className="w-7 h-7" />;
        if (cat.includes('data')) return <Icons.Database className="w-7 h-7" />;
        if (cat.includes('digital marketing')) return <Icons.Globe className="w-7 h-7" />;
        if (cat.includes('finance')) return <Icons.Award className="w-7 h-7" />;
        if (cat.includes('media')) return <Icons.PlayCircle className="w-7 h-7" />;
        if (cat.includes('creative')) return <Icons.BookOpen className="w-7 h-7" />;
        if (cat.includes('foundational')) return <Icons.Calendar className="w-7 h-7" />;
        return <Icons.Code className="w-7 h-7" />;
    };

    const gradientForCourse = () => {
        const cat = (course.category || '').toLowerCase();
        if (cat.includes('technology')) return 'from-indigo-500 to-purple-600';
        if (cat.includes('ai')) return 'from-blue-500 to-cyan-500';
        if (cat.includes('data')) return 'from-emerald-500 to-teal-500';
        if (cat.includes('digital marketing')) return 'from-orange-500 to-red-500';
        if (cat.includes('finance')) return 'from-amber-500 to-yellow-600';
        if (cat.includes('media')) return 'from-pink-500 to-fuchsia-600';
        if (cat.includes('creative')) return 'from-violet-500 to-indigo-600';
        return 'from-slate-500 to-slate-700';
    };

    return (
        <Card
            variant="poster"
            index={index}
            className="flex flex-col h-full group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl z-30 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-premium hover:border-brand-600"
            onClick={() => router.push(`/courses/${course.slug}`)}
        >
            <div className="p-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradientForCourse()} flex items-center justify-center text-white mb-4 group-hover:scale-105 transition`}>
                    {iconForCourse()}
                </div>
                <Badge variant="default" className="bg-slate-800/10 text-slate-600 dark:text-slate-300 border-none backdrop-blur-md mb-3">
                    {course.category}
                </Badge>
            </div>

            <div className="px-6 pb-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {course.title}
                </h3>

                <div className="flex items-center gap-2 text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.15em] mb-4">
                    <Icons.Clock className="w-3.5 h-3.5" />
                    <span>{course.duration}</span>
                    <span className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                    <span>Project Based</span>
                </div>

                {course.description && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                        {course.description}
                    </p>
                )}

                {/* Highlights List */}
                <ul className="space-y-2 mb-6 flex-1">
                    {displayHighlights.map((highlight: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <Icons.Check className="w-4 h-4 text-[#1F4037] dark:text-emerald-500 mt-0.5 shrink-0" />
                            <span className="line-clamp-1">{highlight}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto">
                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-3">
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-xs font-bold"
                            onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/courses/${course.slug}`);
                            }}
                        >
                            View Details
                        </Button>
                        <Button
                            variant="primary"
                            size="sm"
                            className="w-full text-xs font-bold bg-[#1F4037] hover:bg-[#163029] text-white border-none shadow-premium transition-all hover:scale-[1.02]"
                            onClick={(e) => {
                                e.stopPropagation();
                                router.push('/contact');
                            }}
                        >
                            Contact for Pricing
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default CourseCard;
