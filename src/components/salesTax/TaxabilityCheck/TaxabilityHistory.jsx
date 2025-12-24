import React from 'react';
import { ClockIcon, TrashIcon } from '@heroicons/react/24/outline';

const TaxabilityHistory = ({ history }) => {
    const getVerdictBadge = (verdict) => {
        const lower = verdict.toLowerCase();
        if (lower === 'taxable') return 'text-emerald-600 bg-emerald-50 border-emerald-100';
        if (lower === 'exempt') return 'text-rose-600 bg-rose-50 border-rose-100';
        if (lower === 'conditional') return 'text-amber-600 bg-amber-50 border-amber-100';
        return 'text-slate-500 bg-slate-50 border-slate-100';
    };

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm font-sans mt-12 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <ClockIcon className="w-5 h-5 text-slate-400" />
                    <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">Recent Checks</h3>
                </div>
                <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-rose-500 transition-colors flex items-center gap-1.5">
                    <TrashIcon className="w-3 h-3" /> Clear History
                </button>
            </div>

            <div className="divide-y divide-slate-50 dark:divide-slate-800">
                {history.length > 0 ? (
                    history.map((item) => (
                        <div key={item.id} className="p-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all cursor-pointer group">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.4)]" />
                                    <div>
                                        <p className="text-sm font-black text-slate-900 dark:text-white mb-0.5 group-hover:text-teal-600 transition-colors uppercase tracking-tight">{item.description}</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase">{item.date}</p>
                                    </div>
                                </div>
                                <span className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest border ${getVerdictBadge(item.verdict)}`}>
                                    {item.verdict}
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="p-12 text-center">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">No history found</p>
                    </div>
                )}
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/20 text-center">
                <button className="text-[10px] font-black text-teal-600 uppercase tracking-[0.2em] hover:text-teal-700 transition-colors">
                    View All History →
                </button>
            </div>
        </div>
    );
};

export default TaxabilityHistory;
