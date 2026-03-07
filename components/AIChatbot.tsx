"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button, Icons, Card } from './ui';

interface Message {
    role: 'user' | 'bot';
    text: string;
    timestamp: Date;
}

const WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "https://n8n.gkwebtech.cloud/webhook/601b5c65-01c2-4a43-ab4a-7434030e6e0d/chat";

export const AIChatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState<string | null>(null);
    const chatEndRef = useRef<HTMLDivElement>(null);

    // Initialize session and history
    useEffect(() => {
        let savedSessionId = localStorage.getItem('gk_chatbot_session_id');
        if (!savedSessionId) {
            savedSessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            localStorage.setItem('gk_chatbot_session_id', savedSessionId);
        }
        setSessionId(savedSessionId);

        const savedHistory = localStorage.getItem('gk_chatbot_history');
        if (savedHistory) {
            try {
                const parsed = JSON.parse(savedHistory);
                setMessages(parsed.map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) })));
            } catch (e) {
                console.error("Failed to parse chat history", e);
            }
        } else {
            // Initial greeting
            setMessages([{
                role: 'bot',
                text: "Hi! I'm your GK Institute AI Assistant. How can I help you today?",
                timestamp: new Date()
            }]);
        }
    }, []);

    // Save history
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem('gk_chatbot_history', JSON.stringify(messages));
        }
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMessage: Message = {
            role: 'user',
            text: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chatInput: userMessage.text, // Standard n8n AI Agent input key
                    message: userMessage.text,   // Backup key
                    sessionId: sessionId,
                    action: "sendMessage"        // Optional: Some n8n workflows use this for routing
                })
            });

            if (!response.ok) {
                const errorData = await response.text();
                console.error("Webhook Error Response:", errorData);
                throw new Error(`Chatbot error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            // Extract reply from common n8n AI Agent response patterns
            const botReply = data.output || data.reply || data.text || (Array.isArray(data) ? data[0]?.output : null);

            const botMessage: Message = {
                role: 'bot',
                text: botReply || "I'm sorry, I couldn't process that. Please try again or contact us directly.",
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error("Chatbot communication error:", error);
            setMessages(prev => [...prev, {
                role: 'bot',
                text: "Error: Could not connect to the AI assistant. Please check your internet connection or try again later.",
                timestamp: new Date()
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) {
        return (
            <div className="fixed bottom-6 right-6 z-[1001]">
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 bg-[#1F4037] text-[#FDB827] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group ring-4 ring-white/50 dark:ring-slate-800/50"
                >
                    <Icons.MessageCircle className="w-7 h-7" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
                    <div className="absolute right-full mr-4 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 shadow-xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap border dark:border-slate-800">
                        Ask GK AI Assistant
                    </div>
                </button>
            </div>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 z-[1001] w-[380px] sm:w-[400px] max-h-[600px] flex flex-col shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
            <Card className="flex-1 overflow-hidden flex flex-col bg-white dark:bg-slate-900 border-none rounded-3xl">
                {/* Header */}
                <div className="bg-[#1F4037] p-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xl">🤖</div>
                        <div>
                            <h3 className="font-bold text-white text-sm">GK AI Assistant</h3>
                            <div className="flex items-center gap-1.5 pt-0.5">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                                <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest">Active Now</span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-xl transition-all"
                    >
                        <Icons.X className="w-5 h-5" />
                    </button>
                </div>

                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950/50 min-h-[350px]">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                            <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                ? 'bg-[#1F4037] text-white rounded-br-none'
                                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-sm border dark:border-slate-700 rounded-bl-none'
                                }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border dark:border-slate-700">
                                <div className="flex gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>

                {/* Input Area */}
                <form
                    onSubmit={handleSendMessage}
                    className="p-4 bg-white dark:bg-slate-900 border-t dark:border-slate-800 flex gap-2 items-center"
                >
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your question..."
                        className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#FDB827] outline-none text-slate-900 dark:text-white"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={!inputValue.trim() || isLoading}
                        className="w-10 h-10 bg-[#FDB827] text-[#1F4037] rounded-xl flex items-center justify-center hover:bg-[#E2A422] disabled:opacity-50 disabled:grayscale transition-all shadow-lg active:scale-95"
                    >
                        <Icons.ArrowRight className="w-5 h-5 flex-shrink-0" />
                    </button>
                </form>
            </Card>
        </div>
    );
};
