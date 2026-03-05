"use client";

import React, { useState, useEffect } from 'react';
import { Icons, Button } from './ui';

const ChatAssistantButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        // Show tooltip after 5 seconds of idle
        const timer = setTimeout(() => {
            if (!isOpen) setShowTooltip(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, [isOpen]);

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
            {/* Tooltip Bubble */}
            {!isOpen && showTooltip && (
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-premium border-2 border-brand-200 dark:border-slate-800 max-w-xs animate-fade-in-up relative">
                    <button
                        onClick={() => setShowTooltip(false)}
                        className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                        <Icons.X className="w-3 h-3" />
                    </button>
                    <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">Need help choosing a course?</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Our AI assistant can help you find the perfect track for your career goals.</p>
                </div>
            )}

            {/* Chatbox Panel */}
            {isOpen && (
                <div className="w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-slate-900 rounded-3xl shadow-premium border-2 border-brand-200 dark:border-slate-800 flex flex-col overflow-hidden animate-slide-up-fade relative">
                    {/* Header */}
                    <div className="bg-[#1F4037] p-6 text-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100/10 flex items-center justify-center text-white">
                                <Icons.MessageCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold">GK Assistant</p>
                                <p className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold">Online Now</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">
                            <Icons.X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                            <Icons.MessageCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Hi there! 👋</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            I'm your AI guide. How can I help you today?
                        </p>

                        <div className="w-full space-y-2 pt-4">
                            <Button variant="outline" size="sm" className="w-full text-left justify-start text-xs">I want to learn coding</Button>
                            <Button variant="outline" size="sm" className="w-full text-left justify-start text-xs">Help me with Digital Marketing</Button>
                            <Button variant="outline" size="sm" className="w-full text-left justify-start text-xs">Questions about placement</Button>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="bg-transparent border-none focus:ring-0 text-sm flex-1 text-slate-900 dark:text-white placeholder-slate-400"
                            />
                            <button className="text-brand-600 dark:text-brand-400">
                                <Icons.ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                    setShowTooltip(false);
                }}
                className={`
                    w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95
                    ${isOpen ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 rotate-90' : 'bg-[#1F4037] text-white'}
                `}
            >
                {isOpen ? <Icons.X className="w-8 h-8" /> : <Icons.MessageCircle className="w-8 h-8" />}
            </button>
        </div>
    );
};

export default ChatAssistantButton;
