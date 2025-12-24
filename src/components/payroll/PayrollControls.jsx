import React from 'react';
import {
    ArrowPathIcon,
    PlusIcon,
    ChartBarIcon,
    DocumentArrowDownIcon,
    ArrowUpTrayIcon
} from '@heroicons/react/24/outline';

const PayrollControls = ({
    month,
    year,
    onMonthChange,
    onYearChange,
    onReload,
    onNewRun
}) => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const years = [2024, 2025, 2026];

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 mb-6 shadow-sm font-sans flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Left: Selectors */}
            <div className="flex flex-wrap items-center gap-3">
                <select
                    value={month}
                    onChange={(e) => onMonthChange(parseInt(e.target.value))}
                    className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all cursor-pointer"
                >
                    {months.map((m, i) => (
                        <option key={m} value={i + 1}>{m}</option>
                    ))}
                </select>

                <select
                    value={year}
                    onChange={(e) => onYearChange(parseInt(e.target.value))}
                    className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all cursor-pointer"
                >
                    {years.map(y => (
                        <option key={y} value={y}>{y}</option>
                    ))}
                </select>

                <button
                    onClick={onReload}
                    className="p-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-500 hover:text-teal-600 hover:bg-white dark:hover:bg-slate-700 shadow-sm transition-all active:scale-90"
                    title="Reload Data"
                >
                    <ArrowPathIcon className="w-5 h-5" />
                </button>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-wrap items-center gap-3">
                <button
                    onClick={onNewRun}
                    className="flex items-center gap-2 px-6 h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95"
                >
                    <PlusIcon className="w-4 h-4" />
                    New Payroll Run
                </button>

                <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block mx-1" />

                <div className="flex items-center gap-2">
                    <button className="p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl text-slate-400 hover:text-teal-600 transition-all" title="View History">
                        <ArrowUpTrayIcon className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl text-slate-400 hover:text-teal-600 transition-all" title="Payroll Reports">
                        <ChartBarIcon className="w-5 h-5" />
                    </button>
                    <button className="flex items-center gap-2 px-5 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
                        <DocumentArrowDownIcon className="w-4 h-4" />
                        Export
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PayrollControls;
