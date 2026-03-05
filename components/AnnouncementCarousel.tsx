"use client";

import React, { useState, useEffect } from 'react';
import { Icons, Badge } from './ui';
import { cld } from '@/lib/cloudinary';

const ANNOUNCEMENTS = [
    {
        id: 1,
        title: "New Campus Opening",
        subtitle: "Visit our new state-of-the-art facility in New Delhi.",
        image: cld("promotions/gkwebtech-hero", 1200),
        badge: "Announcement",
        color: "bg-blue-600"
    },
    {
        id: 2,
        title: "20% Inaugural Discount",
        subtitle: "Enroll in any Pro course this month and save big.",
        image: cld("resources/library/media-017", 1200),
        badge: "Limited Offer",
        color: "bg-[#FDB827]"
    },
    {
        id: 3,
        title: "Guaranteed Internships",
        subtitle: "Join our Agency Workspace and work on real client projects.",
        image: cld("resources/library/media-018", 1200),
        badge: "Placement",
        color: "bg-emerald-600"
    }
];

const AnnouncementCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            {ANNOUNCEMENTS.map((item, index) => (
                <div
                    key={item.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === activeIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'
                        }`}
                >
                    <img
                        src={item.image.startsWith('http') || item.image.startsWith('/') ? item.image : cld(item.image, 1200)}
                        alt={item.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F4037]/90 via-[#1F4037]/20 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                        <Badge variant="limited" className={`${item.color} text-white border-none mb-4 shadow-lg`}>
                            {item.badge}
                        </Badge>
                        <h3 className="text-2xl md:text-4xl font-black mb-2 leading-tight">
                            {item.title}
                        </h3>
                        <p className="text-slate-200 text-sm md:text-lg font-medium max-w-md">
                            {item.subtitle}
                        </p>
                    </div>
                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-6 right-8 z-20 flex gap-2">
                {ANNOUNCEMENTS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-[#FDB827]' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>

            {/* Side Controls */}
            <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <Icons.ArrowLeft className="w-5 h-5" />
            </button>
            <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <Icons.ArrowRight className="w-5 h-5" />
            </button>
        </div>
    );
};

export default AnnouncementCarousel;
