
"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PublicLayout } from '@/components/Layouts';
import { Button, Icons, Card, Badge } from '@/components/ui';
import { FULL_PROGRAM_CATALOG } from '@/data/courses.data';
import { useAuth } from '@/context/AuthContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function CoursePlayerPage() {
    const params = useParams();
    const router = useRouter();
    const courseId = params.courseId as string;
    const { isEnrolled, isLoading } = useAuth();
    const [activeLesson, setActiveLesson] = useState(0);

    const course = FULL_PROGRAM_CATALOG.find(c => c.id === courseId);

    if (isLoading) return null;

    if (!course || !isEnrolled(courseId)) {
        return (
            <ProtectedRoute>
                <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
                    <Icons.Lock className="w-16 h-16 text-slate-300 mb-6" />
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Access Denied</h1>
                    <p className="text-slate-500 mb-8">You are not enrolled in this course.</p>
                    <Button variant="primary" onClick={() => router.push(`/courses/${courseId}`)}>View Enrollment Options</Button>
                </div>
            </ProtectedRoute>
        );
    }

    // Mock lessons for the player
    const mockLessons = [
        { title: 'Introduction to the Course', duration: '12:45', status: 'completed' },
        { title: 'Foundations & Core Concepts', duration: '45:20', status: 'active' },
        { title: 'Setting Up Your Environment', duration: '18:10', status: 'locked' },
        { title: 'Basic Principles of Design', duration: '32:15', status: 'locked' },
        { title: 'Advanced Workflow Strategies', duration: '55:00', status: 'locked' },
        { title: 'Project Implementation Phase 1', duration: '28:40', status: 'locked' },
        { title: 'Final Review & Assessment', duration: '15:30', status: 'locked' },
    ];

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-[#0F172A] text-white flex flex-col">
                {/* Minimal Header for Player */}
                <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
                    <div className="flex items-center gap-4">
                        <button onClick={() => router.push('/dashboard')} className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white">
                            <Icons.ArrowLeft className="w-5 h-5" />
                        </button>
                        <h1 className="font-bold text-sm md:text-base border-l border-slate-700 pl-4">{course.title}</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex flex-col items-end gap-1">
                            <p className="text-[10px] font-bold text-brand-500 uppercase tracking-widest">Progress</p>
                            <div className="w-32 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-brand-500 h-full w-[15%]"></div>
                            </div>
                        </div>
                        <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800">
                            <Icons.Settings className="w-4 h-4" />
                        </Button>
                    </div>
                </header>

                <main className="flex-1 flex flex-col lg:flex-row h-[calc(100vh-64px)] overflow-hidden">
                    {/* Video / Content Area */}
                    <div className="flex-1 overflow-y-auto bg-black flex flex-col">
                        <div className="aspect-video w-full relative group bg-slate-900">
                            {/* In a real app, this would be a VideoPlayer component */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <Icons.PlayCircle className="w-24 h-24 text-white/20" />
                                <p className="text-slate-500 font-medium mt-4">Video Player Placeholder for {mockLessons[activeLesson].title}</p>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-800">
                                <div className="h-full bg-brand-500 w-[45%]"></div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 max-w-4xl mx-auto w-full text-left">
                            <div className="flex items-center gap-4 mb-6">
                                <Badge color="green">Module 01</Badge>
                                <span className="text-slate-400 text-sm">•</span>
                                <span className="text-slate-400 text-sm">Session 02</span>
                            </div>
                            <h2 className="text-3xl font-black mb-6 tracking-tight">{mockLessons[activeLesson].title}</h2>
                            <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed space-y-4 font-medium">
                                <p>In this lesson, we will dive deep into the core concepts and foundations required to master this course. We'll explore the architectural patterns and the underlying logic that drives modern implementations.</p>
                                <p>Key objectives for this session include:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Understanding the primary technical stack architecture</li>
                                    <li>Identifying common pitfalls and optimization strategies</li>
                                    <li>Setting up a foundation for scalable growth</li>
                                </ul>
                            </div>

                            <div className="mt-12 pt-12 border-t border-slate-800 flex flex-wrap gap-4">
                                <Button className="bg-slate-800 hover:bg-slate-700 border-0">
                                    <Icons.Download className="w-4 h-4 mr-2" />
                                    Lesson Resources (PDF)
                                </Button>
                                <Button className="bg-slate-800 hover:bg-slate-700 border-0">
                                    <Icons.MessageSquare className="w-4 h-4 mr-2" />
                                    Community Discussion
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Lesson List */}
                    <aside className="w-full lg:w-96 border-l border-slate-800 bg-[#0F172A] overflow-y-auto">
                        <div className="p-6 border-b border-slate-800 bg-slate-900/40">
                            <h3 className="font-black text-lg tracking-tight">Course Content</h3>
                            <p className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-widest">12 Lessons • 8 Hours Total</p>
                        </div>
                        <div className="divide-y divide-slate-800/50">
                            {mockLessons.map((lesson, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveLesson(idx)}
                                    className={`w-full p-5 flex items-start gap-4 hover:bg-slate-800/40 transition-colors text-left group ${idx === activeLesson ? 'bg-slate-800/50 border-l-4 border-l-brand-500' : ''}`}
                                >
                                    <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${lesson.status === 'completed' ? 'bg-green-500/10 text-green-500' :
                                            idx === activeLesson ? 'bg-brand-500 text-white' : 'bg-slate-800 text-slate-500'
                                        }`}>
                                        {lesson.status === 'completed' ? <Icons.Check className="w-4 h-4" /> : <span className="text-xs font-bold">{idx + 1}</span>}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className={`text-sm font-bold mb-1 transition-colors ${idx === activeLesson ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                                            {lesson.title}
                                        </h4>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] text-slate-500 flex items-center gap-1">
                                                <Icons.PlayCircle className="w-3 h-3" />
                                                {lesson.duration}
                                            </span>
                                            {lesson.status === 'locked' && (
                                                <Icons.Lock className="w-3 h-3 text-slate-600" />
                                            )}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="p-8 text-center bg-slate-900/40 mt-auto border-t border-slate-800">
                            <Button variant="primary" className="w-full font-bold shadow-lg shadow-brand-500/20">
                                Mark as Completed
                            </Button>
                        </div>
                    </aside>
                </main>
            </div>
        </ProtectedRoute>
    );
}
