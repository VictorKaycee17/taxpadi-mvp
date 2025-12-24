import React, { useRef, useEffect } from 'react';
import {
    PaperAirplaneIcon,
    MicrophoneIcon,
    PaperClipIcon,
    SparklesIcon,
    ArrowPathIcon
} from '@heroicons/react/24/outline';

const AIAssistantPanel = ({
    messages,
    sendMessage,
    isLoading,
    suggestions
}) => {
    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        const input = e.target.elements.message;
        if (input.value.trim()) {
            sendMessage(input.value);
            input.value = '';
        }
    };

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col h-[800px] shadow-sm font-sans relative overflow-hidden">
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-teal-50/30 dark:bg-teal-500/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-teal-600" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">
                        Gee AI Assistant
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-teal-50 dark:bg-teal-500/10 rounded-md">
                        <div className="w-1 h-1 bg-teal-500 rounded-full animate-pulse" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-teal-600">Online</span>
                    </div>
                </div>
            </div>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                {messages.map((msg, i) => (
                    <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                        <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.sender === 'user'
                                ? 'bg-teal-600 text-white rounded-tr-none'
                                : 'bg-slate-50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-800'
                            }`}>
                            {msg.text}
                            {msg.citations && (
                                <div className="mt-3 pt-3 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center gap-2">
                                    <PaperClipIcon className="w-3 h-3 text-teal-500" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-teal-600">
                                        Ref: Page {msg.citations[0].page}
                                    </span>
                                </div>
                            )}
                        </div>
                        <span className="mt-1.5 text-[9px] font-bold text-slate-400 uppercase tracking-widest px-1">
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex flex-col items-start animate-fade-in">
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-800">
                            <div className="flex gap-1">
                                <div className="w-1.5 h-1.5 bg-teal-500/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-1.5 h-1.5 bg-teal-500/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                <div className="w-1.5 h-1.5 bg-teal-500/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={chatEndRef} />
            </div>

            {/* Suggestions */}
            <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20 overflow-x-auto">
                <div className="flex items-center gap-2">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mr-2 flex-shrink-0">Quick Questions:</span>
                    {suggestions.map((s, i) => (
                        <button
                            key={i}
                            onClick={() => sendMessage(s)}
                            className="flex-shrink-0 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-[10px] font-bold text-slate-600 dark:text-slate-400 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all shadow-sm"
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white dark:bg-slate-900">
                <form onSubmit={handleSend} className="relative group">
                    <input
                        name="message"
                        autoComplete="off"
                        placeholder="Ask about this document..."
                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl pl-6 pr-24 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <button type="button" className="p-2 text-slate-400 hover:text-teal-600 transition-colors">
                            <MicrophoneIcon className="w-5 h-5" />
                        </button>
                        <button type="submit" className="p-2 bg-teal-600 text-white rounded-xl shadow-lg shadow-teal-500/20 hover:bg-teal-700 transition-colors">
                            <PaperAirplaneIcon className="w-5 h-5 -rotate-45" />
                        </button>
                    </div>
                </form>
                <div className="mt-3 flex items-center justify-center gap-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md">Enter</kbd> to Send
                    </span>
                    <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md">⌘ + K</kbd> Quick Prompts
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AIAssistantPanel;
