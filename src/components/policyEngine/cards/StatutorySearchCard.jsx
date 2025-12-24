import React from 'react';
import { BookOpenIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const StatutorySearchCard = ({ onSearchStatutes }) => {
    const popularActs = [
        'VAT Act 2025',
        'Income Tax Act 2011',
        'Tax Admin Act 2021'
    ];

    return (
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full font-sans">
            <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                <BookOpenIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>

            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Statutory Search</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed flex-grow">
                Browse our comprehensive database of tax acts, gazettes, and FIRS circulars.
            </p>

            <button
                onClick={onSearchStatutes}
                className="w-full h-14 flex items-center justify-center gap-3 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-700 transition-all mb-8 shadow-lg active:scale-95"
            >
                <MagnifyingGlassIcon className="w-4 h-4" />
                Search Statutes
            </button>

            <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Trending Acts:</span>
                <div className="space-y-3">
                    {popularActs.map((act, idx) => (
                        <div key={idx} className="flex items-center gap-2 group/act cursor-pointer">
                            <div className="w-1 h-1 rounded-full bg-indigo-500 group-hover/act:scale-150 transition-transform" />
                            <span className="text-xs font-bold text-slate-600 dark:text-slate-300 group-hover/act:text-indigo-600 dark:group-hover/act:text-indigo-400 transition-colors uppercase tracking-tight">{act}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatutorySearchCard;
