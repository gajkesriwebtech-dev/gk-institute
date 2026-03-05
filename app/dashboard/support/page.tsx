"use client";

import React from 'react';
import { Card, Button, Icons } from '../../../components/ui';
import { SITE_CONFIG } from '../../../data/site';

const SupportPage = () => {
    return (
        <div className="max-w-2xl space-y-8 animate-fade-in">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Help & Support</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Need assistance with your course?</p>
            </div>

            <Card className="p-8 border-slate-200 dark:border-slate-800 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 mx-auto">
                    <Icons.HelpCircle />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Contact Course Admin</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                    For billing inquiries, access issues, or refund requests.
                </p>
                <Button variant="primary" className="w-full sm:w-auto" onClick={() => window.location.href = `mailto:${SITE_CONFIG.contact.email}`}>
                    Email Support
                </Button>
            </Card>
        </div>
    );
};

export default SupportPage;
