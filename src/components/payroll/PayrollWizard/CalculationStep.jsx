import React, { useState } from 'react';
import {
    ChevronDownIcon,
    ChevronUpIcon,
    TableCellsIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline';

const ExpandableEmployee = ({ emp }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden mb-3">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-800/30 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
            >
                <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[10px] font-black text-slate-500">
                        {emp.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                        <p className="text-sm font-black text-slate-900 dark:text-white">{emp.name}</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mt-1">
                            Gross: ₦{emp.grossSalary.toLocaleString()} • {emp.state}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Net Payable</p>
                        <p className="text-sm font-black text-teal-600">₦{emp.netPay.toLocaleString()}</p>
                    </div>
                    {isExpanded ? <ChevronUpIcon className="w-4 h-4 text-slate-400" /> : <ChevronDownIcon className="w-4 h-4 text-slate-400" />}
                </div>
            </button>

            {isExpanded && (
                <div className="p-4 bg-white dark:bg-slate-900 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 animate-fade-in">
                    <div className="space-y-2">
                        <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 dark:border-slate-800 pb-1 mb-2">Earnings</h5>
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                            <span className="text-slate-500">Basic Salary</span>
                            <span className="text-slate-900 dark:text-white font-mono">₦{emp.basicSalary.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                            <span className="text-slate-500">Allowances</span>
                            <span className="text-slate-900 dark:text-white font-mono">₦{emp.allowances.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-xs font-black uppercase tracking-widest pt-2 border-t border-slate-50 dark:border-slate-800">
                            <span className="text-slate-900 dark:text-white">Total Gross</span>
                            <span className="text-teal-600 font-mono">₦{emp.grossSalary.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 dark:border-slate-800 pb-1 mb-2">Deductions</h5>
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                            <span className="text-slate-500">PAYE Tax</span>
                            <span className="text-rose-500 font-mono">₦{emp.paye.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                            <span className="text-slate-500">Pension (8%)</span>
                            <span className="text-slate-900 dark:text-white font-mono">₦{emp.pension.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                            <span className="text-slate-500">NHIS (5%)</span>
                            <span className="text-slate-900 dark:text-white font-mono">₦{emp.nhis.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                            <span className="text-slate-500">NHF (2.5%)</span>
                            <span className="text-slate-900 dark:text-white font-mono">₦{emp.nhf.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-xs font-black uppercase tracking-widest pt-2 border-t border-slate-50 dark:border-slate-800">
                            <span className="text-slate-900 dark:text-white font-black">Net Pay</span>
                            <span className="text-teal-600 font-mono">₦{emp.netPay.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const CalculationStep = ({ employees, totals }) => {
    return (
        <div className="space-y-6 font-sans">
            {/* Quick Summary Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-2xl">
                <div className="flex flex-col">
                    <span className="text-[10px] font-black text-emerald-700/60 dark:text-emerald-400/60 uppercase tracking-widest mb-1">Total Gross Payroll</span>
                    <span className="text-xl font-black text-emerald-900 dark:text-emerald-400 font-mono">₦{totals.totalGross.toLocaleString()}</span>
                </div>
                <div className="flex flex-col border-emerald-200/50 dark:border-emerald-800/50 sm:border-l sm:pl-6">
                    <span className="text-[10px] font-black text-emerald-700/60 dark:text-emerald-400/60 uppercase tracking-widest mb-1">Total Deductions</span>
                    <span className="text-xl font-black text-rose-600 font-mono">₦{(totals.totalGross - totals.totalNet).toLocaleString()}</span>
                </div>
                <div className="flex flex-col border-emerald-200/50 dark:border-emerald-800/50 sm:border-l sm:pl-6">
                    <span className="text-[10px] font-black text-emerald-700/60 dark:text-emerald-400/60 uppercase tracking-widest mb-1">Net Payable Amount</span>
                    <span className="text-xl font-black text-teal-600 font-mono">₦{totals.totalNet.toLocaleString()}</span>
                </div>
            </div>

            {/* Tax Type Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
                    <TableCellsIcon className="w-4 h-4 text-slate-400" />
                    <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">Tax & Contribution Breakdown</h4>
                </div>
                <div className="p-4 overflow-x-auto">
                    <table className="w-full text-[10px] font-black uppercase tracking-widest">
                        <thead>
                            <tr className="text-slate-400 text-left border-b border-slate-50 dark:border-slate-800">
                                <th className="pb-3 pr-4">Tax Type</th>
                                <th className="pb-3 px-4">Employee Share</th>
                                <th className="pb-3 px-4">Employer Share</th>
                                <th className="pb-3 pl-4 text-right">Total Liability</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                            <tr>
                                <td className="py-4 font-black text-slate-900 dark:text-white">PAYE Tax</td>
                                <td className="py-4 px-4 text-rose-500 font-mono">₦{totals.totalPAYE.toLocaleString()}</td>
                                <td className="py-4 px-4 text-slate-400 font-mono">₦0</td>
                                <td className="py-4 pl-4 text-right font-black text-slate-900 dark:text-white font-mono">₦{totals.totalPAYE.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td className="py-4 font-black text-slate-900 dark:text-white">Pension (18%)</td>
                                <td className="py-4 px-4 text-slate-600 dark:text-slate-400 font-mono">₦{Math.round(totals.totalGross * 0.08).toLocaleString()}</td>
                                <td className="py-4 px-4 text-slate-600 dark:text-slate-400 font-mono">₦{Math.round(totals.totalGross * 0.10).toLocaleString()}</td>
                                <td className="py-4 pl-4 text-right font-black text-slate-900 dark:text-white font-mono">₦{Math.round(totals.totalGross * 0.18).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td className="py-4 font-black text-slate-900 dark:text-white">NHIS (15%)</td>
                                <td className="py-4 px-4 text-slate-600 dark:text-slate-400 font-mono">₦{Math.round(totals.totalGross * 0.05).toLocaleString()}</td>
                                <td className="py-4 px-4 text-slate-600 dark:text-slate-400 font-mono">₦{Math.round(totals.totalGross * 0.10).toLocaleString()}</td>
                                <td className="py-4 pl-4 text-right font-black text-slate-900 dark:text-white font-mono">₦{Math.round(totals.totalGross * 0.15).toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Individual Employee List */}
            <div>
                <div className="flex items-center gap-3 mb-4 px-2">
                    <UserGroupIcon className="w-5 h-5 text-slate-400" />
                    <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em]">Employee Calculations Review</h4>
                </div>
                <div className="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                    {employees.map(emp => (
                        <ExpandableEmployee key={emp.id} emp={emp} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CalculationStep;
