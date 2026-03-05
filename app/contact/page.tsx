"use client";

import React, { useState } from 'react';
import { PublicLayout } from '../../components/Layouts';
import { SectionHeading, SectionSubheading, Card, Button, Icons } from '../../components/ui';
import { COURSES } from '../../data/courses';
import { SITE_CONFIG } from '../../data/site';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        courseSlug: '',
        message: '',
        sendBrochure: false
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleOpenChat = () => {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('open-bot-chat'));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    sourcePage: 'Contact Page'
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', courseSlug: '', message: '', sendBrochure: false });
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <PublicLayout>
            <section className="bg-slate-50 dark:bg-slate-900 py-16 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
                    <SectionHeading align="center">Contact Us</SectionHeading>
                    <SectionSubheading align="center">
                        Have questions about our programs? Want to partner with us? We'd love to hear from you.
                    </SectionSubheading>
                </div>
            </section>

            <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Contact Form */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a message</h3>

                            {status === 'success' ? (
                                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 p-8 rounded-2xl text-center">
                                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto mb-4 text-2xl font-black">
                                        <Icons.Check />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h4>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                                        Thank you. Our team will contact you shortly.
                                    </p>
                                    <Button onClick={() => setStatus('idle')}>Send Another Message</Button>
                                </div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                                                placeholder="jane@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Mobile Number</label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                                                placeholder="+91 9876543210"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Interested Course</label>
                                        <select
                                            value={formData.courseSlug}
                                            onChange={e => setFormData({ ...formData, courseSlug: e.target.value })}
                                            className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white cursor-pointer"
                                        >
                                            <option value="">Select a program...</option>
                                            <option value="general">General Inquiry</option>
                                            {COURSES.map(course => (
                                                <option key={course.id} value={course.slug}>{course.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message (Optional)</label>
                                        <textarea
                                            rows={4}
                                            value={formData.message}
                                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>

                                    <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                                        <input
                                            type="checkbox"
                                            id="sendBrochure"
                                            checked={formData.sendBrochure}
                                            onChange={e => setFormData({ ...formData, sendBrochure: e.target.checked })}
                                            className="w-5 h-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                                        />
                                        <label htmlFor="sendBrochure" className="text-sm font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                                            Send institute brochure to my email
                                        </label>
                                    </div>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full py-4 text-base font-black uppercase tracking-widest shadow-premium"
                                    >
                                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                    </Button>

                                    {status === 'error' && (
                                        <p className="text-sm text-red-500 font-bold text-center mt-2">
                                            Something went wrong. Please try again or contact us directly.
                                        </p>
                                    )}
                                </form>
                            )}
                        </div>

                        {/* Info Cards */}
                        <div className="space-y-8">

                            {/* New AI Chat Option */}
                            <Card className="p-8 border-l-4 border-l-purple-500 dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-lg shadow-purple-500/10">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Instant Answers?</h4>
                                        <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm">Talk to our AI Assistant 24/7 for course details and FAQs.</p>
                                        <button onClick={handleOpenChat} className="text-purple-600 dark:text-purple-400 font-bold hover:underline flex items-center gap-2">
                                            <span>Start Chatting</span>
                                            <span className="text-xl">💬</span>
                                        </button>
                                    </div>
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-2xl">🤖</div>
                                </div>
                            </Card>
                            <div className="bg-slate-50 text-2xl dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-4">Office Location</h4>
                                <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400">
                                    <p><strong>Rajasthan HQ:</strong><br />{SITE_CONFIG.contact.address}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default ContactPage;
