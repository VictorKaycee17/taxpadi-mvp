import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const DocumentViewerPanel = ({
    document,
    currentPage,
    setCurrentPage,
    searchQuery,
    onSearch,
    isLoading
}) => {
    if (isLoading) {
        return (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl h-[800px] flex items-center justify-center animate-pulse">
                <div className="space-y-4 w-full px-12">
                    <div className="h-8 bg-slate-100 dark:bg-slate-800 rounded-lg w-3/4 mx-auto"></div>
                    <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-lg w-full"></div>
                    <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-lg w-full"></div>
                    <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-lg w-5/6"></div>
                    <div className="pt-8 h-64 bg-slate-50 dark:bg-slate-800/50 rounded-2xl"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col h-[800px] shadow-sm font-sans relative overflow-hidden">
            {/* Document Title Bar */}
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">
                        {document?.title}
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                        Page {currentPage} of {document?.totalPages}
                    </span>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-12 custom-scrollbar relative">
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-slate dark:prose-invert prose-sm">
                        <pre className="whitespace-pre-wrap font-sans text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                            {document?.content}
                        </pre>
                    </div>
                </div>
            </div>

            {/* Pagination & Status */}
            <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="p-2 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 disabled:opacity-30 transition-all hover:bg-slate-50 dark:hover:bg-slate-700"
                        >
                            <ChevronLeftIcon className="w-4 h-4" />
                        </button>
                        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-1.5 min-w-[120px] text-center">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">
                                Page {currentPage} / {document?.totalPages}
                            </span>
                        </div>
                        <button
                            onClick={() => setCurrentPage(Math.min(document?.totalPages, currentPage + 1))}
                            disabled={currentPage === document?.totalPages}
                            className="p-2 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 disabled:opacity-30 transition-all hover:bg-slate-50 dark:hover:bg-slate-700"
                        >
                            <ChevronRightIcon className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="flex items-center gap-4 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                        <span>Viewing Page {currentPage}</span>
                        <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                        <span>45% Complete</span>
                        <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                        <span>18 min remaining</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentViewerPanel;
