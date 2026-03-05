"use client";

import React, { useState, useEffect } from 'react';
import { Icons } from './ui';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-28 right-8 z-[99] w-12 h-12 rounded-full bg-brand-600 dark:bg-brand-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
            aria-label="Scroll to top"
        >
            <Icons.ArrowUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
        </button>
    );
};

export default ScrollToTopButton;
