import React, { useState } from 'react';
import { MagnifyingGlassIcon, BoltIcon, ShieldCheckIcon, DocumentArrowDownIcon, ShareIcon, BookmarkIcon } from '@heroicons/react/24/outline';

const ExemptionCheckerMode = ({ result, onSearch, onSelectRelated, onClose }) => {
    const [query, setQuery] = useState('');
    const popularItems = ['Rice', 'Books', 'Medicines', 'Education', 'Healthcare', 'Agriculture', 'Financial Services'];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) onSearch(query);
    };

    return (
        <div className="bg-[#F8FAFC] dark:bg-slate-950 min-h-screen font-sans animate-in slide-in-from-right duration-500">
            <div className="max-w-4xl mx-auto p-4 sm:p-8">
                {/* Header */}
                <div className="mb-12">
                    <button onClick={onClose} className="text-xs font-black text-teal-600 hover:text-teal-700 uppercase tracking-widest mb-6 flex items-center gap-2 group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Engine
                    </button>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white flex items-center gap-3 mb-2">
                        <BoltIcon className="w-8 h-8 text-emerald-500" />
                        Exemption Checker
                    </h2>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Real-time VAT status lookup for Nigerian commerce</p>
                </div>

                {/* Hero Search */}
                <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl mb-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />

                    <form onSubmit={handleSubmit} className="relative z-10 mb-8">
                        <div className="relative group">
                            <MagnifyingGlassIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder='Search item (e.g., "White Rice", "School Fees")...'
                                className="w-full h-20 pl-16 pr-44 bg-slate-50 dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 rounded-[1.5rem] text-lg font-bold focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-slate-900 dark:text-white"
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-3 bottom-3 px-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95"
                            >
                                Check Status
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-2">Popular:</span>
                        {popularItems.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setQuery(item);
                                    onSearch(item);
                                }}
                                className="px-4 py-2 bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 border border-slate-100 dark:border-slate-700 rounded-xl text-[10px] font-black text-slate-500 dark:text-slate-400 hover:text-emerald-600 transition-all uppercase tracking-tight"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Result */}
                {result && (
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className={`p-8 sm:p-12 rounded-[2.5rem] border-l-[12px] shadow-2xl bg-white dark:bg-slate-900 ${result.status === 'exempt' ? 'border-emerald-500 ring-4 ring-emerald-500/5' : 'border-rose-500 ring-4 ring-rose-500/5'}`}>
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-12">
                                <div>
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight uppercase">{result.item}</h3>
                                    <div className="flex items-center gap-2">
                                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${result.status === 'exempt' ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400' : 'bg-rose-50 dark:bg-rose-500/10 border-rose-100 dark:border-rose-500/30 text-rose-700 dark:text-rose-400'}`}>
                                            <ShieldCheckIcon className="w-4 h-4" />
                                            <span className="text-xs font-black uppercase tracking-widest">{result.status} FROM VAT</span>
                                        </div>
                                        <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Rate: {result.vatRate}%</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-600 transition-all border border-slate-100 dark:border-slate-800"><BookmarkIcon className="w-5 h-5" /></button>
                                    <button className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-600 transition-all border border-slate-100 dark:border-slate-800"><ShareIcon className="w-5 h-5" /></button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                                <section>
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Description & Scope</h4>
                                    <p className="text-sm font-bold text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                                        {result.description}
                                    </p>

                                    <h4 className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-4">Legal Reference</h4>
                                    <div className="bg-emerald-50/50 dark:bg-emerald-500/5 p-4 rounded-xl border border-emerald-100 dark:border-emerald-500/20">
                                        <p className="text-xs font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-tight">{result.legalReference}</p>
                                        <button className="text-[10px] font-black text-emerald-600 underline mt-2 block uppercase tracking-widest">View Full Schedule →</button>
                                    </div>
                                </section>

                                <section>
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Conditions & Notes</h4>
                                    <div className="space-y-3">
                                        {result.conditions.map((cond, idx) => (
                                            <div key={idx} className="flex gap-3">
                                                <span className="font-black text-emerald-500 shrink-0">✓</span>
                                                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{cond}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            <div className="pt-12 border-t border-slate-50 dark:border-slate-800">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 text-center">Related Items Status</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {result.relatedItems.map((item, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => onSelectRelated(item.name)}
                                            className="flex justify-between items-center p-4 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl hover:border-emerald-200 transition-all group"
                                        >
                                            <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight">{item.name}</span>
                                            <span className={`text-[9px] font-black uppercase tracking-widest ${item.status === 'exempt' ? 'text-emerald-600' : 'text-rose-500'}`}>{item.status}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 flex justify-center">
                                <button className="flex items-center gap-3 px-10 py-5 bg-slate-900 dark:bg-slate-700 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-slate-800 transition-all active:scale-95">
                                    <DocumentArrowDownIcon className="w-5 h-5" />
                                    Export Analysis as PDF
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExemptionCheckerMode;
