import React, { useState } from 'react';
import { MagnifyingGlassIcon, SparklesIcon } from '@heroicons/react/24/outline';

const PolicyHeroSearch = ({ onSearch, onAdvancedSearch }) => {
    const [query, setQuery] = useState('');
    const recentSearches = [
        'VAT Act 2025 Section 146',
        'Income Tax - Deductions',
        'Exemptions for Healthcare',
        'WHT Rules for SMEs'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) onSearch(query);
    };

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-teal-900 dark:from-slate-950 dark:to-teal-950 rounded-3xl p-8 sm:p-16 mb-12 shadow-2xl font-sans">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight">
                    Policy Intelligence Engine
                </h2>
                <p className="text-slate-300 text-base sm:text-lg mb-10 font-medium">
                    Search, simplify, and understand tax laws using AI-powered interpretation.
                </p>

                <form onSubmit={handleSubmit} className="mb-8">
                    <div className="relative group max-w-2xl mx-auto shadow-2xl">
                        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon className="w-6 h-6 text-teal-400 group-focus-within:text-teal-300 transition-colors" />
                        </div>
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search tax policies, acts, and regulations..."
                            className="w-full h-16 pl-16 pr-40 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-teal-500/30 focus:border-teal-400 transition-all font-bold"
                        />
                        <div className="absolute inset-y-2 right-2 flex items-center gap-2">
                            <button
                                type="submit"
                                className="h-full px-6 bg-teal-500 hover:bg-teal-400 text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>

                <div className="flex flex-wrap items-center justify-center gap-3">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-2">Recent Searches:</span>
                    {recentSearches.map((tag, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setQuery(tag);
                                onSearch(tag);
                            }}
                            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-slate-300 transition-all active:scale-95"
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="mt-8 flex justify-center">
                    <button
                        onClick={onAdvancedSearch}
                        className="flex items-center gap-2 text-[10px] font-black text-teal-400 hover:text-teal-300 uppercase tracking-widest transition-colors group"
                    >
                        <SparklesIcon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        Advanced AI Search Options
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PolicyHeroSearch;
