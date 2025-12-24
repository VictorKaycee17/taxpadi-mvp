import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const ComplianceCalendarHeader = ({ complianceScore }) => {
    return (
        <div className="mb-8 font-sans">
            <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                    <nav className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
                        <span className="uppercase tracking-widest">Home</span>
                        <ChevronRightIcon className="w-3 h-3" />
                        <span className="uppercase tracking-widest">Compliance</span>
                        <ChevronRightIcon className="w-3 h-3" />
                        <span className="text-teal-600 uppercase tracking-widest">Calendar</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-1">Compliance Calendar</h1>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest leading-relaxed">Track and manage all tax compliance obligations</p>
                </div>

                <div className="bg-white dark:bg-slate-900 px-6 py-3 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Compliance Score</p>
                        <div className="flex items-center gap-3">
                            <span className={`text-2xl font-black ${complianceScore >= 80 ? 'text-emerald-500' : 'text-amber-500'}`}>{complianceScore}%</span>
                            <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full transition-all duration-1000 ${complianceScore >= 80 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                                    style={{ width: `${complianceScore}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-px bg-slate-200 dark:bg-slate-800 w-full" />
        </div>
    );
};

export default ComplianceCalendarHeader;
