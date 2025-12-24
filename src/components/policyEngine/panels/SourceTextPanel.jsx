import React from 'react';
import { DocumentTextIcon, ShareIcon, RectangleStackIcon } from '@heroicons/react/24/outline';

const SourceTextPanel = ({ title, subtitle, content, 相关Sections, onHighlight, onCopy }) => {
    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm h-[600px] flex flex-col overflow-hidden font-sans">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <DocumentTextIcon className="w-5 h-5 text-slate-400" />
                        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Source Document</h4>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={onCopy} className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-all text-slate-400 hover:text-teal-600 border border-transparent hover:border-slate-100">
                            <RectangleStackIcon className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{title}</h3>
                <p className="text-[10px] text-teal-600 font-bold uppercase">{subtitle}</p>
            </div>

            <div className="flex-grow overflow-y-auto p-8 font-serif text-slate-800 dark:text-slate-200 leading-[1.8] text-[15px] selection:bg-teal-100 dark:selection:bg-teal-900/40">
                {content ? (
                    <div className="space-y-6">
                        {content.split('\n').map((para, i) => (
                            <p key={i} className="first-letter:text-2xl first-letter:font-black first-letter:text-teal-600 first-letter:mr-1">
                                {para}
                            </p>
                        ))}
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center opacity-40 grayscale">
                        <DocumentTextIcon className="w-16 h-16 mb-4" />
                        <p className="text-xs font-black uppercase tracking-widest">No document loaded</p>
                    </div>
                )}
            </div>

            <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/10">
                <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Related Sections:</h5>
                <div className="flex flex-wrap gap-2">
                    {相关Sections?.map((section, idx) => (
                        <button key={idx} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg text-[10px] font-bold text-slate-600 dark:text-slate-400 hover:text-teal-600 hover:border-teal-200 transition-all uppercase tracking-tight">
                            {section}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SourceTextPanel;
