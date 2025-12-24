import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const PayrollHeader = () => {
    return (
        <div className="mb-8 font-sans">
            <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                    <nav className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
                        <span className="uppercase tracking-widest cursor-pointer hover:text-teal-600 transition-colors">Home</span>
                        <ChevronRightIcon className="w-3 h-3" />
                        <span className="uppercase tracking-widest cursor-pointer hover:text-teal-600 transition-colors">Finance</span>
                        <ChevronRightIcon className="w-3 h-3" />
                        <span className="text-teal-600 uppercase tracking-widest">Payroll</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-1">Payroll Processing</h1>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest leading-relaxed">Manage employee salaries, taxes, and compliance filings</p>
                </div>
            </div>
            <div className="h-px bg-slate-200 dark:bg-slate-800 w-full" />
        </div>
    );
};

export default PayrollHeader;
