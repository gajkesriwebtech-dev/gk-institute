"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { SectionHeading, Card, Button, Icons } from './ui';
import { BrandIcon } from './BrandIcons';
import { FALLBACK_COURSE_IMAGE } from '@/lib/cloudinary';
import { TEAM_MEMBERS } from '@/data/team';

const MentorshipSection = () => {
    const router = useRouter();

    return (
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <SectionHeading>Mentorship & Guidance</SectionHeading>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mt-4">
                            Don't just learn from videos. Get direct access to senior engineers and designers from top tech companies who will guide you every step of the way.
                        </p>
                    </div>
                    <Button variant="secondary" onClick={() => router.push('/mentorship')}>
                        Learn More About Mentorship
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM_MEMBERS.map((m, i) => (
                        <Card key={m.id} variant="poster" className="text-center p-6 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white dark:bg-slate-900">
                            <div className="relative w-24 h-24 mx-auto mb-6">
                                <div className="absolute inset-0 bg-brand-500/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                                <img
                                    src={m.avatarUrl}
                                    alt={m.fullName}
                                    className="w-full h-full object-cover rounded-full border-2 border-white dark:border-slate-800 shadow-md relative z-10"
                                    loading="lazy"
                                    decoding="async"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = FALLBACK_COURSE_IMAGE;
                                    }}
                                />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{m.fullName}</h4>
                            <p className="text-brand-600 dark:text-brand-400 text-xs font-bold mb-1">{m.role}</p>
                            <p className="text-slate-400 dark:text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-4">{m.country}</p>

                            {/* Social Links */}
                            <div className="flex items-center justify-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 mt-auto">
                                {m.socialLinks.linkedin && (
                                    <a
                                        href={m.socialLinks.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-[#0077B5] hover:bg-[#0077B5]/10 transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-700 group/social"
                                        aria-label="LinkedIn"
                                    >
                                        <Icons.LinkedIn className="w-4 h-4" />
                                    </a>
                                )}
                                {m.socialLinks.github && (
                                    <a
                                        href={m.socialLinks.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/10 dark:hover:bg-white/10 transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-700 group/social"
                                        aria-label="GitHub"
                                    >
                                        <Icons.Github className="w-4 h-4" />
                                    </a>
                                )}
                                {m.socialLinks.instagram && (
                                    <a
                                        href={m.socialLinks.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-[#E4405F] hover:bg-[#E4405F]/10 transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-700 group/social"
                                        aria-label="Instagram"
                                    >
                                        <Icons.Instagram className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-8 border-t border-slate-100 dark:border-slate-800 pt-12">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0">
                            <Icons.Code className="w-5 h-5" />
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">Pragmatic Code Reviews</h5>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Your mentor reviews every pull request, ensuring production-grade quality.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                            <Icons.User className="w-5 h-5" />
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">Career Roadmap Planning</h5>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Personalized strategy to navigate from junior to senior roles in record time.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0">
                            <Icons.Award className="w-5 h-5" />
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">Agency Apprenticeship</h5>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Work alongside masters on real client briefs in our digital agency workspace.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentorshipSection;
