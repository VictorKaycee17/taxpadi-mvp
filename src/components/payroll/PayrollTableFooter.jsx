import React from 'react';
import {
    PlayIcon,
    CheckBadgeIcon,
    PrinterIcon,
    ArrowUpTrayIcon,
    DocumentTextIcon
} from '@heroicons/react/24/outline';

const PayrollTableFooter = ({
    count,
    validated,
    onClear,
    onValidate,
    onRun,
    onPayslips,
    onExport,
    onPrint
}) => {
    return (
        <div className="bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 font-sans">
            <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                <span className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                    {count} Employees
                </span>
                <div className="w-1 h-1 bg-slate-300 rounded-full" />
                <span className="text-teal-600 flex items-center gap-2">
                    <CheckBadgeIcon className="w-4 h-4" />
                    {validated} Validated
                </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
                <button
                    onClick={onClear}
                    className="px-4 py-2 text-[10px] font-black text-slate-500 hover:text-slate-700 uppercase tracking-widest transition-colors"
                >
                    Clear Selection
                </button>

                <button
                    onClick={onValidate}
                    className="px-5 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
                >
                    Validate Data
                </button>

                <button
                    onClick={onRun}
                    className="px-6 h-10 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center gap-2"
                >
                    <PlayIcon className="w-3.5 h-3.5 fill-current" />
                    Run Payroll
                </button>

                <div className="flex items-center gap-1.5 ml-2">
                    <button onClick={onPayslips} className="p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-400 hover:text-teal-600 shadow-sm transition-all" title="Generate Payslips">
                        <DocumentTextIcon className="w-5 h-5" />
                    </button>
                    <button onClick={onExport} className="p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-400 hover:text-teal-600 shadow-sm transition-all" title="Export Table">
                        <ArrowUpTrayIcon className="w-5 h-5" />
                    </button>
                    <button onClick={onPrint} className="p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-400 hover:text-teal-600 shadow-sm transition-all" title="Print Data">
                        <PrinterIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PayrollTableFooter;
