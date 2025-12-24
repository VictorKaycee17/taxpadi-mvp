import React from 'react';
import { SparklesIcon, DocumentArrowUpIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

const SimplifierCard = ({ onUpload, onPaste }) => {
    return (
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full font-sans">
            <div className="w-14 h-14 bg-teal-50 dark:bg-teal-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <SparklesIcon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>

            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">AI Simplifier</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed flex-grow">
                Transform dense tax law jargon into plain English explanations with real-world implications.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                    onClick={onUpload}
                    className="flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-teal-50 dark:hover:bg-teal-500/10 border border-slate-100 dark:border-slate-800 rounded-2xl transition-all group/btn"
                >
                    <DocumentArrowUpIcon className="w-6 h-6 text-slate-400 group-hover/btn:text-teal-600 transition-colors mb-2" />
                    <span className="text-[10px] font-black uppercase text-slate-600 dark:text-slate-300 tracking-widest">Upload File</span>
                </button>
                <button
                    onClick={onPaste}
                    className="flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-teal-50 dark:hover:bg-teal-500/10 border border-slate-100 dark:border-slate-800 rounded-2xl transition-all group/btn"
                >
                    <PencilSquareIcon className="w-6 h-6 text-slate-400 group-hover/btn:text-teal-600 transition-colors mb-2" />
                    <span className="text-[10px] font-black uppercase text-slate-600 dark:text-slate-300 tracking-widest">Paste Text</span>
                </button>
            </div>

            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest text-center">
                Supported: PDF, DOC, TXT (Max 50MB)
            </p>
        </div>
    );
};

export default SimplifierCard;
