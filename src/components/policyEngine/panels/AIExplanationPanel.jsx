import React from 'react';
import { SparklesIcon, BookmarkIcon, ShareIcon, ArrowDownTrayIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const AIExplanationPanel = ({ result, onSave, onShare, onExport }) => {
    if (!result) return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm h-[600px] flex flex-col items-center justify-center text-center p-12 font-sans opacity-40">
            <SparklesIcon className="w-16 h-16 text-teal-500 mb-4 animate-pulse" />
            <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest mb-2">AI Interpretation</h4>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-tight max-w-[200px]">Select a policy or upload a document to generate analysis</p>
        </div>
    );

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm h-[600px] flex flex-col overflow-hidden font-sans animate-in fade-in duration-500">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-teal-50/30 dark:bg-teal-500/5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <SparklesIcon className="w-5 h-5 text-teal-600" />
                    <h4 className="text-[10px] font-black text-teal-700 dark:text-teal-400 uppercase tracking-widest">AI Interpretation</h4>
                </div>
                <div className="flex gap-2">
                    <button onClick={onSave} className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-all text-slate-400 hover:text-teal-600 border border-transparent hover:border-slate-100"><BookmarkIcon className="w-4 h-4" /></button>
                    <button onClick={onShare} className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-all text-slate-400 hover:text-teal-600 border border-transparent hover:border-slate-100"><ShareIcon className="w-4 h-4" /></button>
                    <button onClick={onExport} className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-all text-slate-400 hover:text-teal-600 border border-transparent hover:border-slate-100"><ArrowDownTrayIcon className="w-4 h-4" /></button>
                </div>
            </div>

            <div className="flex-grow overflow-y-auto p-8 space-y-10 custom-scrollbar">
                <section>
                    <h5 className="text-[10px] font-black text-teal-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                        <span className="w-4 h-0.5 bg-teal-600 rounded-full" /> Plain English Summary
                    </h5>
                    <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                        {result.plainEnglish}
                    </p>
                </section>

                <section>
                    <h5 className="text-[10px] font-black text-teal-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                        <span className="w-4 h-0.5 bg-teal-600 rounded-full" /> Key Points
                    </h5>
                    <div className="space-y-3">
                        {result.keyPoints.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-dashed border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all">
                                <CheckCircleIcon className="w-4 h-4 text-emerald-500 mt-0.5" />
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{point}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h5 className="text-[10px] font-black text-teal-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                        <span className="w-4 h-0.5 bg-teal-600 rounded-full" /> What this means for you
                    </h5>
                    <ul className="grid grid-cols-1 gap-4">
                        {result.implications.map((imp, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-teal-100 dark:bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-black text-teal-700 dark:text-teal-400">
                                    {idx + 1}
                                </div>
                                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 leading-relaxed pt-0.5">{imp}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h5 className="text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                        <span className="w-4 h-0.5 bg-rose-600 dark:bg-rose-400 rounded-full" /> Tax Implications
                    </h5>
                    <div className="space-y-3">
                        {result.taxImplications.map((tax, idx) => (
                            <div key={idx} className="p-4 bg-rose-50/50 dark:bg-rose-500/5 border border-rose-100 dark:border-rose-500/20 rounded-xl">
                                <p className="text-xs font-bold text-rose-900 dark:text-rose-300">{tax}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-center">
                <button className="text-[10px] font-black text-teal-600 hover:text-teal-700 uppercase tracking-widest flex items-center gap-2 transition-all active:scale-95 group">
                    View Practical Examples
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>
        </div>
    );
};

export default AIExplanationPanel;
