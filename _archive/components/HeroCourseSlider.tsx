"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { FULL_PROGRAM_CATALOG } from '../data/courses.data';
import { Icons, Badge, Button } from '../../components/ui';
import CourseImage from '../../components/ui/CourseImage';

const HeroCourseSlider = () => {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const touchStartX = useRef<number | null>(null);

    // Select specialized hero featured courses
    const featuredCourses = FULL_PROGRAM_CATALOG.filter(c =>
        ['ui-ux-designing-pro', 'digital-marketing-mastery', 'mern-stack-mastery', 'n8n-smart-automation', 'graphic-design-pro'].includes(c.id)
    ).slice(0, 5);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % featuredCourses.length);
    }, [featuredCourses.length]);

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + featuredCourses.length) % featuredCourses.length);
    }, [featuredCourses.length]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) nextSlide();
            else prevSlide();
        }
        touchStartX.current = null;
    };

    const activeCourse = featuredCourses[activeIndex];

    // Helper to get visual position and dimensions (Stripe Absolute Style)
    const getCardLayout = (index: number) => {
        const total = featuredCourses.length;
        // Calculate relative position based on activeIndex for seamless circular looping
        const relativeIndex = (index - activeIndex + total) % total;

        if (isMobile) {
            return {
                left: relativeIndex === 0 ? '0%' : '100%',
                width: '100%',
                opacity: relativeIndex === 0 ? 1 : 0,
                zIndex: relativeIndex === 0 ? 20 : 10,
            };
        }

        // Desktop Progressive Layout
        // Active card is 65%, then strips get progressively thinner to the right
        const widths = [65, 15, 10, 6, 2]; // Percentages
        const gap = 1.6; // Gap between cards

        let left = 0;
        for (let i = 0; i < relativeIndex; i++) {
            left += widths[i] + gap;
        }

        return {
            left: `${left}%`,
            width: `${widths[relativeIndex] || 0}%`,
            opacity: relativeIndex < 5 ? 1 : 0,
            zIndex: 20 - relativeIndex,
        };
    };

    return (
        <div
            className="w-full pointer-events-auto"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Top Navigation Row */}
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-2xl md:text-3xl font-medium text-slate-900 dark:text-white leading-tight">
                        What&apos;s happening
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400">
                        See the latest from edusaas.
                    </p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 rounded-lg bg-[#F1F4F9] dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:bg-[#E5E9F0] dark:hover:bg-slate-700 transition-colors"
                    >
                        <Icons.ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 rounded-lg bg-[#F1F4F9] dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:bg-[#E5E9F0] dark:hover:bg-slate-700 transition-colors"
                    >
                        <Icons.ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Carousel Container (Absolute Positioning for Smooth Transitions) */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full mb-12 overflow-hidden">
                {featuredCourses.map((course, index) => {
                    const { left, width, opacity, zIndex } = getCardLayout(index);
                    const isActive = index === activeIndex;

                    return (
                        <div
                            key={course.id}
                            onClick={() => setActiveIndex(index)}
                            className={`
                                absolute top-0 h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out
                                ${isActive ? 'shadow-xl' : 'hover:opacity-100'}
                            `}
                            style={{
                                left,
                                width,
                                opacity,
                                zIndex
                            }}
                        >
                            <CourseImage
                                src={course.thumbnail}
                                alt={course.title}
                                width={1200}
                                height={675}
                                sizes="(max-width: 768px) 100vw, 65vw"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
                                style={{ transform: isActive ? 'scale(1)' : 'scale(1.1)' }}
                            />

                            {/* Visual conditioning for non-active peek cards */}
                            {!isActive && (
                                <div className="absolute inset-0 bg-black/5 dark:bg-black/20 hover:bg-transparent transition-colors duration-300" />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Content Display Below (Stripe Style) */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 min-h-[140px]">
                <div className="flex-1 max-w-4xl">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        <span className="text-slate-900 dark:text-white">{activeCourse.title}.</span>{" "}
                        <span className="text-slate-500 dark:text-slate-400 font-medium">
                            {activeCourse.description || activeCourse.highlights[0]}
                        </span>
                    </h3>
                </div>

                <div className="flex flex-col gap-3 w-full md:w-auto pt-1">
                    <Button
                        variant="secondary"
                        size="md"
                        className="w-full md:w-48 bg-transparent border-2 border-[#1F4037] text-[#1F4037] dark:border-[#FDB827] dark:text-[#FDB827] font-bold hover:bg-[#1F4037] hover:text-white dark:hover:bg-[#FDB827] dark:hover:text-[#1F4037] group transition-all"
                        onClick={() => router.push(`/courses/${activeCourse.id}`)}
                    >
                        View Course
                        <Icons.ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                        variant="primary"
                        size="md"
                        className="w-full md:w-48 shadow-lg hover:shadow-xl transition-all"
                        onClick={() => router.push(`/plan-learning?course=${activeCourse.id}`)}
                    >
                        Buy Now
                    </Button>
                </div>
            </div>

            {/* Subtle Progress Bar */}
            <div className="mt-16 h-0.5 w-full bg-[#E5E9F0] dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-brand-500 transition-all duration-700 ease-in-out"
                    style={{ width: `${((activeIndex + 1) / featuredCourses.length) * 100}%` }}
                />
            </div>
        </div>
    );
};

export default HeroCourseSlider;
