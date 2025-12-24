import React from 'react';

const SearchResultsSkeleton = () => {
    return (
        <div className="animate-pulse space-y-8 font-sans">
            <div className="h-6 w-48 bg-slate-200 dark:bg-slate-800 rounded-full mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl h-[600px] p-8 space-y-6">
                    <div className="h-4 w-3/4 bg-slate-100 dark:bg-slate-800 rounded-lg" />
                    <div className="h-4 w-1/2 bg-slate-100 dark:bg-slate-800 rounded-lg" />
                    <div className="space-y-3 pt-8">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="h-3 w-full bg-slate-50 dark:bg-slate-800/50 rounded-lg" />
                        ))}
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl h-[600px] p-8 space-y-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-50 dark:bg-teal-500/10 rounded-xl" />
                        <div className="h-4 w-32 bg-teal-100 dark:bg-teal-500/20 rounded-lg" />
                    </div>
                    {[1, 2, 3].map(i => (
                        <div key={i} className="space-y-3">
                            <div className="h-3 w-24 bg-slate-100 dark:bg-slate-800 rounded-lg" />
                            <div className="h-10 w-full bg-slate-50 dark:bg-slate-800 rounded-xl" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchResultsSkeleton;
