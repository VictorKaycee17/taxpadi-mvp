import React from 'react';
import { BookOpenIcon } from '@heroicons/react/24/outline';

const ExemptionQuickLinks = ({ exemptions }) => {
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm h-full font-sans">
            <div className="flex items-center gap-3 mb-2">
                <BookOpenIcon className="w-5 h-5 text-teal-600" />
                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">VAT Exemptions</h3>
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-6">Quick reference for common exempt goods & services</p>

            <div className="divide-y divide-slate-50 dark:divide-slate-800">
                {exemptions.map((item) => (
                    <div key={item.id} className="py-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 rounded-xl px-2 transition-all cursor-pointer group">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl pt-0.5 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                            <div className="flex-1">
                                <h4 className="text-sm font-black text-slate-900 dark:text-white mb-0.5">{item.category}</h4>
                                <p className="text-xs text-slate-500 font-medium mb-2">{item.description}</p>
                                <button className="text-[10px] font-black text-teal-600 hover:text-teal-700 uppercase tracking-widest flex items-center gap-1">
                                    Learn More <span className="transition-transform group-hover:translate-x-1">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-50 dark:border-slate-800">
                <button className="w-full py-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                    Browse All Exemptions →
                </button>
            </div>
        </div>
    );
};

export default ExemptionQuickLinks;
