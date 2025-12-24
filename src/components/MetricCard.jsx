import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

const MetricCard = ({ title, value, status, trend, icon, actionLabel, onAction }) => {
    const statusColors = {
        danger: 'border-rose-500',
        warning: 'border-amber-500',
        success: 'border-emerald-500',
        info: 'border-slate-500',
        teal: 'border-teal-500'
    };

    return (
        <div className={`card bg-white dark:bg-slate-900 border-l-4 ${statusColors[status] || 'border-slate-200'} p-5 flex flex-col h-full hover:shadow-md transition-shadow`}>
            <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{title}</span>
                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    {icon}
                </div>
            </div>

            <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {typeof value === 'number' ? `₦${value.toLocaleString()}` : value}
                </h3>

                {trend && (
                    <div className="flex items-center gap-1">
                        <span className={`flex items-center text-xs font-bold ${trend.direction === 'up' ? 'text-rose-500' : 'text-emerald-500'}`}>
                            {trend.direction === 'up' ? <ArrowUpIcon className="w-3 h-3" /> : <ArrowDownIcon className="w-3 h-3" />}
                            {trend.percentage}%
                        </span>
                        <span className="text-xs text-slate-400">{trend.period || 'vs. last month'}</span>
                    </div>
                )}
            </div>

            {actionLabel && (
                <button
                    onClick={onAction}
                    className="mt-4 text-xs font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400 hover:underline flex items-center justify-center p-2 bg-teal-50 dark:bg-teal-900/20 rounded-lg transition-colors"
                >
                    {actionLabel}
                </button>
            )}
        </div>
    );
};

export default MetricCard;
