import React from 'react';
import {
    CheckBadgeIcon,
    ShieldCheckIcon,
    InformationCircleIcon
} from '@heroicons/react/24/outline';

const ApprovalStep = ({ month, year, totals, employees, checks, onCheckToggle }) => {
    const monthName = new Date(year, month - 1).toLocaleString('default', { month: 'long' });

    const auditItems = [
        { label: 'Data Validated', status: checks.dataValidated, key: 'dataValidated' },
        { label: 'Taxes Reviewed', status: checks.calculationsReviewed, key: 'calculationsReviewed' },
        { label: 'Compliance Passed', status: checks.compliancePassed, key: 'compliancePassed' }
    ];

    return (
        <div className="space-y-6 font-sans">
            {/* Final Summary Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <CheckBadgeIcon className="w-5 h-5 text-teal-600" />
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
                                Final Payroll Certification
                            </h3>
                        </div>
                        <span className="px-3 py-1 bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 text-[9px] font-black uppercase tracking-widest rounded-lg">
                            {monthName} {year}
                        </span>
                    </div>
                </div>

                <div className="p-8 grid grid-cols-2 gap-8 bg-white dark:bg-slate-900">
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Employees</span>
                            <span className="text-2xl font-black text-slate-900 dark:text-white uppercase">{employees.length} Personnel</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Gross Liability</span>
                            <span className="text-2xl font-black text-slate-900 dark:text-white font-mono">₦{totals.totalGross.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Tax (PAYE)</span>
                            <span className="text-2xl font-black text-rose-600 font-mono">₦{totals.totalPAYE.toLocaleString()}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Net Payable Amount</span>
                            <span className="text-2xl font-black text-teal-600 font-mono">₦{totals.totalNet.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Approval Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50/50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Audit Checklist</h4>
                    <div className="space-y-3">
                        {auditItems.map(item => (
                            <label key={item.key} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl cursor-pointer group hover:border-teal-500/30 transition-all">
                                <input
                                    type="checkbox"
                                    checked={item.status}
                                    onChange={() => onCheckToggle(item.key)}
                                    className="w-5 h-5 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                                />
                                <span className={`text-xs font-black uppercase tracking-widest transition-colors ${item.status ? 'text-teal-600' : 'text-slate-500 group-hover:text-slate-700'}`}>
                                    {item.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="bg-amber-50/50 dark:bg-amber-500/5 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20">
                    <div className="flex items-center gap-2 mb-4">
                        <ShieldCheckIcon className="w-5 h-5 text-amber-600" />
                        <h4 className="text-[10px] font-black text-amber-900 dark:text-amber-500 uppercase tracking-widest">Legal Certification</h4>
                    </div>
                    <p className="text-[11px] font-bold text-amber-800/80 dark:text-amber-400/80 uppercase tracking-widest leading-relaxed mb-6">
                        I certify that the above payroll has been calculated correctly and complies with all applicable Nigerian tax laws and regulations, including the 2025 Finance Act.
                    </p>
                    <label className="flex items-center gap-3 p-3 bg-white/50 dark:bg-slate-900/50 border border-amber-200 dark:border-amber-900/30 rounded-xl cursor-pointer group hover:bg-white dark:hover:bg-slate-900 transition-all">
                        <input
                            type="checkbox"
                            checked={checks.acknowledgeResponsibility}
                            onChange={() => onCheckToggle('acknowledgeResponsibility')}
                            className="w-5 h-5 rounded border-amber-300 text-amber-600 focus:ring-amber-500 cursor-pointer"
                        />
                        <span className="text-[10px] font-black text-amber-900 dark:text-amber-600 uppercase tracking-widest">
                            Authorize & Confirm
                        </span>
                    </label>
                </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-500/10 rounded-xl border border-blue-100 dark:border-blue-900/20">
                <InformationCircleIcon className="w-5 h-5 text-blue-500" />
                <p className="text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest">
                    Submitting this will securely transmit payroll data to FIRS for tax reporting.
                </p>
            </div>
        </div>
    );
};

export default ApprovalStep;
