
"use client";

import React from 'react';
import { PublicLayout } from '../../components/Layouts';
import { Button, Icons, Card, Badge } from '../../components/ui';
import { FULL_PROGRAM_CATALOG } from '../../data/courses.data';
import { useAuth } from '@/context/AuthContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useRouter } from 'next/navigation';
import { cld, FALLBACK_COURSE_IMAGE } from '@/lib/cloudinary';
import CourseImage from '@/components/ui/CourseImage';

export default function DashboardPage() {
    const { user, enrollments, logout } = useAuth();
    const router = useRouter();

    // Get actual enrolled courses from catalog
    const purchasedCourses = FULL_PROGRAM_CATALOG.filter(course => enrollments.includes(course.id));

    return (
        <ProtectedRoute>
            <PublicLayout>
                <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-32 transition-colors duration-300">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Header / Welcome Area */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                            <div className="flex items-center gap-6">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-secondary-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                                    <img
                                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name || 'User'}`}
                                        alt={user?.name}
                                        className="relative w-24 h-24 rounded-full border-4 border-white dark:border-slate-800 shadow-xl"
                                        loading="lazy"
                                        decoding="async"
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = FALLBACK_COURSE_IMAGE;
                                        }}
                                    />
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
                                        Welcome, <span className="text-brand-600">{user?.name?.split(' ')[0] || 'Learner'}!</span>
                                    </h1>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium">
                                        {purchasedCourses.length > 0
                                            ? `You have ${purchasedCourses.length} active course${purchasedCourses.length > 1 ? 's' : ''}.`
                                            : "You haven't enrolled in any courses yet."}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button variant="secondary" onClick={logout}>
                                    <Icons.LogOut className="w-5 h-5 mr-2" />
                                    Logout
                                </Button>
                                <Button variant="primary" className="shadow-lg shadow-brand-500/20" onClick={() => router.push('/courses')}>
                                    <Icons.BookOpen className="w-5 h-5 mr-2" />
                                    Explore Courses
                                </Button>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center">
                                        <Icons.BookOpen className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Enrolled Courses</p>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white">{enrollments.length.toString().padStart(2, '0')}</h4>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center">
                                        <Icons.Award className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Certificates Earned</p>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white">00</h4>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center">
                                        <Icons.Clock className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Learning Hours</p>
                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white">0.0</h4>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Courses Grid */}
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">My Courses</h3>
                                    {purchasedCourses.length > 0 && (
                                        <Button variant="ghost" className="text-brand-600 font-bold">View History</Button>
                                    )}
                                </div>

                                {purchasedCourses.length > 0 ? (
                                    <div className="space-y-6">
                                        {purchasedCourses.map((course, idx) => (
                                            <Card key={idx} className="group overflow-hidden bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 p-0 hover:shadow-2xl transition-all duration-500">
                                                <div className="flex flex-col md:flex-row h-full">
                                                    <div className="md:w-64 h-48 md:h-auto overflow-hidden relative border-r border-slate-100 dark:border-slate-800">
                                                        <CourseImage
                                                            src={cld(course.thumbnail, 900)}
                                                            alt={course.title}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                        />
                                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                            <Icons.Play className="w-12 h-12 text-white fill-current" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-between text-left">
                                                        <div>
                                                            <div className="flex items-center gap-3 mb-4">
                                                                <Badge color="blue">{course.category}</Badge>
                                                                <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                                                                    <Icons.Clock className="w-3 h-3" />
                                                                    Accessed recently
                                                                </span>
                                                            </div>
                                                            <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">{course.title}</h4>
                                                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mb-2 overflow-hidden">
                                                                <div className="bg-brand-500 h-full rounded-full w-[5%]"></div>
                                                            </div>
                                                            <p className="text-xs text-slate-500 font-bold">5% Complete • 1/12 Lessons</p>
                                                        </div>
                                                        <div className="pt-6 mt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                                                            <Button variant="primary" className="px-8 font-bold" onClick={() => router.push(`/dashboard/course/${course.id}`)}>
                                                                Resume Learning
                                                            </Button>
                                                            <div className="flex items-center gap-4 text-slate-400">
                                                                <button className="hover:text-brand-500 transition-colors"><Icons.Download className="w-5 h-5" /></button>
                                                                <button className="hover:text-brand-500 transition-colors"><Icons.Share2 className="w-5 h-5" /></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                                        <Icons.Book className="w-16 h-16 text-slate-300 mx-auto mb-6" />
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Ready to start learning?</h4>
                                        <p className="text-slate-500 mb-8 max-w-sm mx-auto">Explore our premium certification tracks and start your journey today.</p>
                                        <Button variant="primary" onClick={() => router.push('/courses')}>Browse Course Catalog</Button>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-8">
                                <Card className="p-8 bg-gradient-to-br from-brand-600 to-secondary-600 text-white border-0 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition duration-1000"></div>
                                    <h3 className="text-2xl font-black mb-4 relative z-10">Expand Your Skills!</h3>
                                    <p className="text-white/80 mb-8 text-sm leading-relaxed relative z-10">Get 20% off on your next course enrollment. Limited time offer for existing members.</p>
                                    <Button className="w-full bg-white text-brand-600 font-black hover:bg-slate-50 border-0 py-6 relative z-10" onClick={() => router.push('/courses')}>
                                        Browse Courses
                                        <Icons.ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Card>

                                <Card className="p-8 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-left">
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Need Assistance?</h4>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-brand-500">
                                                <Icons.MessageSquare className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">Live Chat</p>
                                                <p className="text-xs text-slate-500">Available 9 AM - 6 PM IST</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-brand-500">
                                                <Icons.Mail className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">Email Support</p>
                                                <p className="text-xs text-slate-500">contact@gkwebtech.cloud</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Button variant="outline" className="w-full mt-8">Open Support Ticket</Button>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </PublicLayout>
        </ProtectedRoute>
    );
}
