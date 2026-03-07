"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, Button, Badge } from '@/components/ui';
import {
    Code,
    BarChart,
    PenTool,
    Shield,
    Camera,
    Film,
    LineChart,
    Cloud,
    Database,
    Clock,
    ChevronRight
} from 'lucide-react';
import { BrochureModal } from '@/components/BrochureModal';
import type { Course } from '@/data/courses';

interface CourseCardProps {
    course: Course;
    index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
    const router = useRouter();
    const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

    const getIcon = () => {
        const cat = (course.category || '').toLowerCase();
        const iconSize = 14;

        if (cat.includes('technology') || cat.includes('development')) return <Code size={iconSize} />;
        if (cat.includes('digital marketing')) return <BarChart size={iconSize} />;
        if (cat.includes('creative') || cat.includes('design') || cat.includes('graphic')) return <PenTool size={iconSize} />;
        if (cat.includes('cyber security')) return <Shield size={iconSize} />;
        if (cat.includes('photography')) return <Camera size={iconSize} />;
        if (cat.includes('video editing')) return <Film size={iconSize} />;
        if (cat.includes('data') || cat.includes('analytics')) return <LineChart size={iconSize} />;
        if (cat.includes('cloud computing')) return <Cloud size={iconSize} />;
        if (cat.includes('database')) return <Database size={iconSize} />;

        return <Code size={iconSize} />;
    };

    const getLevel = () => {
        switch (course.programType) {
            case 'foundation': return 'Beginner Friendly';
            case 'pro': return 'Intermediate';
            case 'master': return 'Advanced';
            default: return 'All Levels';
        }
    };

    return (
        <>
            <div
                className="bg-gray-100 border border-slate-400 rounded-xl p-5 hover:shadow-md hover:-translate-y-1 transition duration-300 group cursor-pointer h-full flex flex-col"
                onClick={() => router.push(`/courses/${course.slug}`)}
            >
                {/* TOP SECTION: Category Badge */}
                <div className="flex">
                    <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md bg-[#FDB827]/10 text-[#1F4037] border border-[#FDB827]/20">
                        {getIcon()}
                        {course.category}
                    </div>
                </div>

                {/* COURSE TITLE */}
                <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-[#1F4037] transition-colors leading-tight">
                    {course.title}
                </h3>

                {/* COURSE DESCRIPTION */}
                <p className="mt-2 text-sm text-slate-500 line-clamp-2 leading-relaxed">
                    {course.description}
                </p>

                {/* COURSE META INFO */}
                <div className="mt-4 text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                        <Clock size={12} />
                        <span>{course.duration}</span>
                    </div>
                    <span className="opacity-30">•</span>
                    <span>{getLevel()}</span>
                </div>

                {/* ACTION BUTTONS */}
                <div className="mt-auto pt-6 flex items-center justify-between gap-4">
                    <button
                        className="text-xs font-black uppercase tracking-widest text-[#1F4037] hover:text-[#FDB827] flex items-center gap-1 group/btn transition-colors"
                        onClick={(e) => {
                            e.stopPropagation();
                            router.push(`/courses/${course.slug}`);
                        }}
                    >
                        View Details
                        <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <Button
                        variant="marigold"
                        size="sm"
                        className="rounded-lg font-black text-[10px] px-4"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsBrochureModalOpen(true);
                        }}
                    >
                        Brochure
                    </Button>
                </div>
            </div>

            <BrochureModal
                isOpen={isBrochureModalOpen}
                onClose={() => setIsBrochureModalOpen(false)}
                courseTitle={course.title}
                brochureUrl={course.syllabusPdf || '#'}
            />
        </>
    );
};

export default CourseCard;
