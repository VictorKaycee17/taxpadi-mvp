import React from 'react';

export const PayrollSummarySkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 min-h-[140px] animate-pulse">
                <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl mb-4" />
                <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded mb-2" />
                <div className="w-32 h-6 bg-slate-100 dark:bg-slate-800 rounded mb-2" />
                <div className="w-20 h-2 bg-slate-100 dark:bg-slate-800 rounded" />
            </div>
        ))}
    </div>
);

export const PayrollTableSkeleton = () => (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden animate-pulse">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800">
            <div className="w-40 h-3 bg-slate-100 dark:bg-slate-800 rounded" />
        </div>
        <div className="p-4 space-y-4">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 py-2">
                    <div className="w-4 h-4 bg-slate-100 dark:bg-slate-800 rounded" />
                    <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full" />
                    <div className="flex-1 space-y-2">
                        <div className="w-1/3 h-3 bg-slate-100 dark:bg-slate-800 rounded" />
                        <div className="w-1/4 h-2 bg-slate-100 dark:bg-slate-800 rounded" />
                    </div>
                    <div className="w-20 h-3 bg-slate-100 dark:bg-slate-800 rounded" />
                    <div className="w-20 h-3 bg-slate-100 dark:bg-slate-800 rounded" />
                </div>
            ))}
        </div>
    </div>
);
