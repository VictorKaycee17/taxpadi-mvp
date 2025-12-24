import React from 'react';
import {
    EllipsisVerticalIcon,
    EyeIcon,
    PencilIcon,
    ArrowDownTrayIcon,
    TrashIcon
} from '@heroicons/react/24/outline';

const InvoiceTable = ({ invoices, selectedInvoices, onSelectInvoice, onSelectAll, onViewInvoice }) => {
    const isAllSelected = invoices.length > 0 && selectedInvoices.length === invoices.length;

    const getStatusStyles = (status) => {
        const lowerStatus = status.toLowerCase();
        if (lowerStatus === 'paid') return 'bg-emerald-50 text-emerald-700 border-emerald-100';
        if (lowerStatus === 'pending') return 'bg-amber-50 text-amber-700 border-amber-100';
        if (lowerStatus === 'overdue') return 'bg-rose-50 text-rose-700 border-rose-100';
        return 'bg-slate-50 text-slate-700 border-slate-100';
    };

    const getTaxStyles = (type) => {
        const lowerType = type.toLowerCase();
        if (lowerType === 'vat') return 'bg-teal-50 text-teal-700 border-teal-100';
        if (lowerType === 'wht') return 'bg-indigo-50 text-indigo-700 border-indigo-100';
        if (lowerType === 'dst') return 'bg-orange-50 text-orange-700 border-orange-100';
        return 'bg-slate-50 text-slate-500 border-slate-100';
    };

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                            <th className="p-4 w-12 text-center">
                                <input
                                    type="checkbox"
                                    className="rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                                    checked={isAllSelected}
                                    onChange={onSelectAll}
                                />
                            </th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Invoice #</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Client</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Amount</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Tax Type</th>
                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                            <th className="p-4 w-12"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {invoices.map((inv) => (
                            <tr key={inv.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors group">
                                <td className="p-4 text-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                                        checked={selectedInvoices.includes(inv.id)}
                                        onChange={() => onSelectInvoice(inv.id)}
                                    />
                                </td>
                                <td className="p-4">
                                    <p className="text-sm font-bold text-slate-900 dark:text-white capitalize">
                                        {new Date(inv.invoiceDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </p>
                                    <p className="text-[10px] text-slate-500 font-medium">Updated 2h ago</p>
                                </td>
                                <td className="p-4">
                                    <span
                                        onClick={() => onViewInvoice(inv)}
                                        className="text-sm font-black text-teal-600 dark:text-teal-400 hover:underline cursor-pointer"
                                    >
                                        {inv.invoiceNumber}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">{inv.clientName}</p>
                                    <p className="text-xs text-slate-500">{inv.clientEmail}</p>
                                </td>
                                <td className="p-4 text-right">
                                    <p className="text-sm font-black text-slate-900 dark:text-white">
                                        ₦{inv.total.toLocaleString()}
                                    </p>
                                </td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold border ${getTaxStyles(inv.taxType)}`}>
                                        {inv.taxType.toUpperCase()}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold border ${getStatusStyles(inv.status)}`}>
                                        {inv.status.toUpperCase()}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <button
                                        onClick={() => onViewInvoice(inv)}
                                        className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                                    >
                                        <EyeIcon className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden divide-y divide-slate-100 dark:divide-slate-800">
                {invoices.map((inv) => (
                    <div key={inv.id} className="p-4 space-y-3" onClick={() => onViewInvoice(inv)}>
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="rounded border-slate-300"
                                    checked={selectedInvoices.includes(inv.id)}
                                    onChange={() => onSelectInvoice(inv.id)}
                                />
                                <div>
                                    <p className="text-xs font-black text-teal-600">{inv.invoiceNumber}</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">{inv.clientName}</p>
                                </div>
                            </div>
                            <button className="p-1 text-slate-400">
                                <EllipsisVerticalIcon className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex justify-between items-end">
                            <div className="space-y-1">
                                <p className="text-[10px] text-slate-500 font-bold uppercase">Amount</p>
                                <p className="text-base font-black text-slate-900 dark:text-white">₦{inv.total.toLocaleString()}</p>
                            </div>
                            <div className="text-right space-y-2">
                                <span className={`px-2 py-1 rounded-full text-[9px] font-bold border ${getStatusStyles(inv.status)}`}>
                                    {inv.status.toUpperCase()}
                                </span>
                                <p className="text-[10px] text-slate-500">Due {new Date(inv.dueDate).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InvoiceTable;
