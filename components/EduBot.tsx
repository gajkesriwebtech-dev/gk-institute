
import React, { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { Icons, Button } from './ui';
import { apiFetch } from '@/lib/api-client';

type BotMode = 'hero' | 'roaming' | 'docked';
type BotView = 'menu' | 'chat';

interface RobotPosition {
  top: string;
  right: string;
  left?: string;
  scale: number;
  rotate: number;
}

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export const EduBot: React.FC = () => {
  const router = useRouter();
  const chatEndRef = useRef<HTMLDivElement>(null);

  // State
  const [showModal, setShowModal] = useState(false);
  const [view, setView] = useState<BotView>('menu');

  // Chat State
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hi! I\'m the GK Assistant. Ask me anything about our courses, mentorship, or admissions.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // 0. EVENT LISTENER FOR EXTERNAL TRIGGERS
  useEffect(() => {
    const handleOpenChat = () => {
      setShowModal(true);
      setView('chat');
    };
    window.addEventListener('open-bot-chat', handleOpenChat);
    return () => window.removeEventListener('open-bot-chat', handleOpenChat);
  }, []);

  // 1. SCROLL TO BOTTOM
  useEffect(() => {
    if (view === 'chat' && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, view]);

  // Handlers
  const handleStartChat = () => {
    setView('chat');
    setShowModal(true);
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
    if (!showModal && view === 'chat') {
      // keep view as chat if we are already chatting
    } else if (!showModal) {
      setView('menu');
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const res = await apiFetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg.text,
          history: messages
        })
      });
      const data = await res.json();

      if (data.reply) {
        setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'bot', text: "I'm having trouble connecting right now. Please try again later." }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Sorry, something went wrong. Please try contacting support directly." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* CHAT WINDOW */}
      {showModal && createPortal(
        <div
          className="fixed z-[100] w-[360px] md:w-[400px] bottom-[100px] right-6 animate-in slide-in-from-bottom-5 fade-in duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700 relative overflow-hidden flex flex-col max-h-[600px] min-h-[300px]">

            {/* Header */}
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-white/50 dark:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center text-lg shadow-inner">🤖</div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">GK Assistant</h3>
                  <span className="text-[10px] text-green-600 dark:text-green-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Online
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {view === 'chat' && (
                  <button onClick={() => setView('menu')} className="p-1.5 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Icons.ArrowLeft className="w-4 h-4" />
                  </button>
                )}
                <button onClick={() => setShowModal(false)} className="p-1.5 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <Icons.X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content: Menu */}
            {view === 'menu' && (
              <div className="p-6 flex flex-col h-full animate-fade-in">
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Hi there! I'm your AI guide. I can help you find courses, check eligibility, or connect you with our team.
                </p>
                <div className="space-y-3 mt-auto">
                  {/*<Button size="sm" variant="primary" onClick={handleStartChat} className="w-full justify-center shadow-lg shadow-brand-500/20 py-3 rounded-xl text-sm">
                    <span className="mr-2">💬</span> Start Chat
                  </Button>*/}
                  <Button size="sm" variant="outline" onClick={() => { setShowModal(false); router.push('/contact'); }} className="w-full justify-center py-3 rounded-xl text-sm">
                    <span className="mr-2">📞</span> Contact Us
                  </Button>
                </div>
              </div>
            )}

            {/* Content: Chat */}
            {view === 'chat' && (
              <div className="flex flex-col h-[400px] animate-fade-in">
                <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-50 dark:bg-slate-950/30">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${msg.role === 'user'
                        ? 'bg-brand-600 text-white rounded-br-none'
                        : 'bg-white dark:bg-slate-800 border dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-bl-none'
                        }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-slate-100 dark:bg-slate-800 border-0 rounded-xl px-4 text-sm focus:ring-2 focus:ring-brand-500 outline-none text-slate-900 dark:text-white"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    className="p-2.5 bg-brand-600 text-white rounded-xl hover:bg-brand-700 disabled:opacity-50 transition-colors"
                  >
                    <Icons.ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}

      {/* FLOAT BUTTON */}
      <div
        onClick={handleToggleModal}
        className="fixed bottom-6 right-6 z-[60] cursor-pointer group animate-bounce-in"
      >
        <div className="w-16 h-16 bg-slate-900 rounded-full border-4 border-white dark:border-slate-700 shadow-2xl flex items-center justify-center relative overflow-hidden active:scale-95 transition-transform">
          <div className="absolute inset-0 bg-brand-500/20 group-hover:bg-brand-500/40 transition-colors"></div>
          <div className="text-2xl transition-transform group-hover:scale-110">{showModal ? '❌' : '🤖'}</div>
          {!showModal && <div className="absolute top-1 right-1 w-4 h-4 rounded-full border-2 border-white bg-green-500"></div>}
        </div>
      </div>
    </>
  );
};
