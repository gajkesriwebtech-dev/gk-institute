"use client";

import React from 'react';
import { PublicLayout } from '../../components/Layouts';
import { Card, Button, Badge, Icons } from '../../components/ui';
import { MOCK_WEBINARS } from '../../constants';

const WebinarsPage: React.FC = () => {
    return (
        <PublicLayout>
            <section className="bg-slate-50 dark:bg-slate-900 py-16 md:py-24 transition-colors duration-300 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                        <div>
                            <Badge color="red" className="mb-4">Live Events</Badge>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Webinars & Workshops</h1>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 max-w-md text-sm md:text-right">
                            Join interactive sessions with industry leaders. Ask questions, network, and learn.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {MOCK_WEBINARS.map(webinar => (
                            <Card key={webinar.id} className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 transition-all">
                                <div className="flex-shrink-0 w-full md:w-24 bg-slate-100 dark:bg-slate-800 rounded-xl p-4 text-center">
                                    <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase">{webinar.status}</div>
                                    {webinar.status === 'Upcoming' ? (
                                        <div className="text-brand-600 dark:text-brand-400 text-2xl font-bold mt-1">RSVP</div>
                                    ) : (
                                        <div className="text-slate-400 text-2xl font-bold mt-1">PLAY</div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{webinar.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                                        <span className="flex items-center gap-2"><Icons.User className="w-4 h-4" /> {webinar.speaker}</span>
                                        <span className="flex items-center gap-2"><Icons.Calendar className="w-4 h-4" /> {webinar.date}</span>
                                        {webinar.time !== 'Recorded' && <span className="flex items-center gap-2"><Icons.Clock className="w-4 h-4" /> {webinar.time}</span>}
                                    </div>
                                </div>
                                <Button variant={webinar.status === 'Upcoming' ? 'primary' : 'outline'}>
                                    {webinar.status === 'Upcoming' ? 'Register Now' : 'Watch Recording'}
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default WebinarsPage;
