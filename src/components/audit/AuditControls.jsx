import React from 'react';
import {
    ChevronDownIcon,
    CalendarIcon,
    QuestionMarkCircleIcon,
    DocumentDuplicateIcon,
    PaperAirplaneIcon
} from '@heroicons/react/24/outline';

const AuditControls = ({ selectedType, onTypeChange, onSubmit }) => {
    const auditTypes = ['VAT Audit', 'CIT Audit', 'PAYE Audit', 'WHT Audit', 'Combined Audit'];

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 mb-6 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4 font-sans">
            <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                    <select
                        value={selectedType}
                        onChange={(e) => onTypeChange(e.target.value)}
                        className="appearance-none bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-10 py-2.5 text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all cursor-pointer min-w-[180px]"
                    >
                        {auditTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        📋
                    </div>
                    <ChevronDownIcon className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>

                <div className="flex items-center gap-2">
                    <button className="p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 transition-colors group">
                        <CalendarIcon className="w-4 h-4 group-hover:text-teal-600" />
                    </button>
                    <button className="p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 transition-colors group">
                        <ClockIcon className="w-4 h-4 group-hover:text-teal-600" />
                    </button>
                    <button className="p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 transition-colors group">
                        <QuestionMarkCircleIcon className="w-4 h-4 group-hover:text-teal-600" />
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white hover:bg-slate-100 transition-colors">
                    <DocumentDuplicateIcon className="w-4 h-4 text-teal-600" />
                    Templates
                </button>
                <button
                    onClick={onSubmit}
                    className="flex items-center gap-2 px-6 py-2.5 bg-teal-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-teal-700 transition-all shadow-lg shadow-teal-500/20"
                >
                    <PaperAirplaneIcon className="w-4 h-4 -rotate-45" />
                    Submit to FIRS
                </button>
            </div>
        </div>
    );
};

// Re-using ClockIcon if needed
const ClockIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export default AuditControls;
