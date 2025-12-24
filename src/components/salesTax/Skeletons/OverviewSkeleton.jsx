import React from 'react';

const OverviewSkeleton = () => {
    return (
        <div className="space-y-8 animate-pulse">
            {/* KPI Cards Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-48 bg-slate-100 dark:bg-slate-800 rounded-2xl" />
                ))}
            </div>

            {/* Chart Skeleton */}
            <div className="h-[500px] bg-slate-100 dark:bg-slate-800 rounded-2xl" />

            {/* Bottom Grid Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="h-96 bg-slate-100 dark:bg-slate-800 rounded-2xl" />
                <div className="h-96 bg-slate-100 dark:bg-slate-800 rounded-2xl" />
            </div>
        </div>
    );
};

export default OverviewSkeleton;
