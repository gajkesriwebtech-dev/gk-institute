"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Icons } from './ui';

const AnnouncementBar = () => {
    const router = useRouter();

    return (
        <div className="w-full bg-[#FDB827] text-[#1F4037] h-[50px] flex items-center justify-center px-4 overflow-hidden relative z-[60]">
            <div className="max-w-7xl w-full flex items-center justify-center text-xs sm:text-sm font-bold tracking-tight">
                <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
                    <span className="hidden sm:inline">⭧</span>
                    <span className="truncate">
                        Limited Seats | AI-Powered Courses | Hybrid Online + Offline Learning
                    </span>
                </div>

                <button
                    onClick={() => router.push('/courses')}
                    className="bg-[#1F4037] text-white px-3 py-1 rounded text-[10px] sm:text-xs hover:bg-[#1a362e] transition-colors flex-shrink-0 ml-4 shadow-sm"
                >
                    View Courses
                </button>
            </div>
        </div>
    );
};

export default AnnouncementBar;
