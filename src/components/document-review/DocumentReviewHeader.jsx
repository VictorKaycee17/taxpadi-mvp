import React from 'react';
import {
    ChevronRightIcon,
    DocumentCheckIcon,
    BookmarkIcon,
    ClockIcon
} from '@heroicons/react/24/outline';

const DocumentReviewHeader = ({ documentTitle, annotationsCount, readingTime }) => {
    return (
        <div className="mb-8 font-sans">
            <nav className="flex mb-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span className="hover:text-teal-600 cursor-pointer transition-colors">Home</span>
                <ChevronRightIcon className="w-3 h-3 mx-2 self-center" />
                <span className="hover:text-teal-600 cursor-pointer transition-colors">Compliance</span>
                <ChevronRightIcon className="w-3 h-3 mx-2 self-center" />
                <span className="text-slate-900 dark:text-white">Document Review</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">
                        Document Review
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm tracking-wide">
                        Study tax regulations and laws with AI-powered guidance
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-xl">
                        <DocumentCheckIcon className="w-4 h-4 text-emerald-600" />
                        <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">
                            {documentTitle || 'No Document'} Loaded
                        </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-sky-50 dark:bg-sky-500/10 border border-sky-100 dark:border-sky-500/20 rounded-xl">
                        <BookmarkIcon className="w-4 h-4 text-sky-600" />
                        <span className="text-[10px] font-black text-sky-700 uppercase tracking-widest">
                            {annotationsCount} Annotations
                        </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20 rounded-xl">
                        <ClockIcon className="w-4 h-4 text-amber-600" />
                        <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest">
                            ~{readingTime} Reading
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentReviewHeader;
