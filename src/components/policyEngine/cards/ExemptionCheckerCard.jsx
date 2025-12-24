import React from 'react';
import { ShieldCheckIcon, BoltIcon } from '@heroicons/react/24/outline';

const ExemptionCheckerCard = ({ onQuickLookup }) => {
    const popularItems = [
        'Rice', 'Books', 'Medicines', 'Education'
    ];

    return (
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full font-sans">
            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <ShieldCheckIcon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>

            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Exemption Checker</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed flex-grow">
                Quick lookup for specific goods and services to check their VAT exemption status.
            </p>

            <button
                onClick={onQuickLookup}
                className="w-full h-14 flex items-center justify-center gap-3 bg-emerald-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all mb-8 shadow-lg active:scale-95"
            >
                <BoltIcon className="w-4 h-4" />
                Quick Lookup
            </button>

            <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Popular Lookups:</span>
                <div className="flex flex-wrap gap-2">
                    {popularItems.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={onQuickLookup}
                            className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-tight hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:text-emerald-600 transition-all"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExemptionCheckerCard;
