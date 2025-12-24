import React, { useState } from 'react';
import {
    EllipsisVerticalIcon,
    ExclamationTriangleIcon,
    CheckCircleIcon,
    ChevronDownIcon
} from '@heroicons/react/24/outline';
import PayrollTableFooter from './PayrollTableFooter';

const PayrollTable = ({ employees, onRunPayroll }) => {
    const [selectedEmployees, setSelectedEmployees] = useState(new Set());
    const [filterState, setFilterState] = useState('All');

    const toggleSelectAll = () => {
        if (selectedEmployees.size === employees.length) {
            setSelectedEmployees(new Set());
        } else {
            setSelectedEmployees(new Set(employees.map(e => e.id)));
        }
    };

    const toggleSelect = (id) => {
        const newSet = new Set(selectedEmployees);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        setSelectedEmployees(newSet);
    };

    const states = ['All', ...new Set(employees.map(e => e.state))];
    const filtered = employees.filter(e => filterState === 'All' || e.state === filterState);

    const validatedCount = employees.filter(e => e.validationStatus === 'valid').length;

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden font-sans">
            {/* Table Header Controls */}
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
                        Employee Payroll Data
                    </h2>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <select
                                value={filterState}
                                onChange={(e) => setFilterState(e.target.value)}
                                className="appearance-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-4 pr-10 py-2 text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all cursor-pointer"
                            >
                                {states.map(s => <option key={s} value={s}>State: {s}</option>)}
                            </select>
                            <ChevronDownIcon className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                            <th className="p-4 w-12 text-center">
                                <input
                                    type="checkbox"
                                    checked={selectedEmployees.size === employees.length && employees.length > 0}
                                    onChange={toggleSelectAll}
                                    className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                                />
                            </th>
                            <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Name</th>
                            <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">State</th>
                            <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Gross</th>
                            <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">PAYE</th>
                            <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Pension</th>
                            <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Net Pay</th>
                            <th className="p-4 w-12"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                        {filtered.map(emp => (
                            <tr key={emp.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                                <td className="p-4 text-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedEmployees.has(emp.id)}
                                        onChange={() => toggleSelect(emp.id)}
                                        className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                                    />
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center text-[10px] font-black text-teal-600">
                                            {emp.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-slate-900 dark:text-white">{emp.name}</p>
                                            <p className="text-[10px] font-bold text-slate-500">{emp.employeeId}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className="px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[10px] font-black uppercase tracking-widest">
                                        {emp.state}
                                    </span>
                                </td>
                                <td className="p-4 font-mono text-sm font-bold text-slate-700 dark:text-slate-300">
                                    ₦{emp.grossSalary.toLocaleString()}
                                </td>
                                <td className="p-4 font-mono text-sm font-bold text-rose-500">
                                    ₦{emp.paye.toLocaleString()}
                                </td>
                                <td className="p-4 font-mono text-sm font-bold text-slate-600 dark:text-slate-400">
                                    ₦{emp.pension.toLocaleString()}
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono text-sm font-black text-teal-600">
                                            ₦{emp.netPay.toLocaleString()}
                                        </span>
                                        {emp.validationStatus === 'valid' ? (
                                            <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                                        ) : (
                                            <ExclamationTriangleIcon className="w-4 h-4 text-amber-500" />
                                        )}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <button className="p-2 text-slate-400 hover:text-teal-600 transition-colors">
                                        <EllipsisVerticalIcon className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile/Tablet Card View */}
            <div className="lg:hidden p-4 space-y-4">
                {filtered.map(emp => (
                    <div key={emp.id} className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm relative overflow-hidden">
                        {emp.validationStatus !== 'valid' && (
                            <div className="absolute top-0 right-0 p-1 bg-amber-500 text-white rounded-bl-lg">
                                <ExclamationTriangleIcon className="w-3 h-3" />
                            </div>
                        )}
                        <div className="flex items-center gap-3 mb-4">
                            <input
                                type="checkbox"
                                checked={selectedEmployees.has(emp.id)}
                                onChange={() => toggleSelect(emp.id)}
                                className="w-4 h-4 rounded border-slate-300 text-teal-600"
                            />
                            <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center text-xs font-black text-teal-600">
                                {emp.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <p className="text-sm font-black text-slate-900 dark:text-white">{emp.name}</p>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{emp.state} • {emp.employeeId}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                            <div>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Gross</p>
                                <p className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">₦{emp.grossSalary.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">PAYE</p>
                                <p className="font-mono text-xs font-bold text-rose-500">₦{emp.paye.toLocaleString()}</p>
                            </div>
                            <div className="col-span-2 pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-end">
                                <div>
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Net Pay</p>
                                    <p className="font-mono text-sm font-black text-teal-600">₦{emp.netPay.toLocaleString()}</p>
                                </div>
                                <button className="p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400">
                                    <EllipsisVerticalIcon className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <PayrollTableFooter
                count={employees.length}
                validated={validatedCount}
                onClear={() => setSelectedEmployees(new Set())}
                onValidate={() => alert('Starting validation...')}
                onRun={onRunPayroll}
                onPayslips={() => alert('Generating payslips...')}
                onExport={() => alert('Exporting data...')}
                onPrint={() => window.print()}
            />
        </div>
    );
};

export default PayrollTable;
