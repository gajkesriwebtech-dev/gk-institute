"use client";

import React from 'react';
import { Card, Badge } from '../../../components/ui';

const ProfilePage = () => {
    return (
        <div className="max-w-3xl space-y-8 animate-fade-in">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Student Profile</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage your personal information.</p>
            </div>

            <Card className="p-8 border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center text-brand-700 dark:text-brand-300 text-2xl font-bold">
                        ST
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Student Name</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">student@example.com</p>
                        <Badge color="blue" className="mt-2">Standard Tier</Badge>
                    </div>
                </div>

                <div className="grid gap-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                        <input type="text" value="student@example.com" disabled className="w-full border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-500 rounded-lg px-4 py-2.5 text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                        <input type="text" value="+1 (555) 000-0000" disabled className="w-full border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-500 rounded-lg px-4 py-2.5 text-sm" />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ProfilePage;
