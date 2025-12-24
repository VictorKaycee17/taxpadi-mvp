import React from 'react';
import { EyeIcon, CheckBadgeIcon, ExclamationTriangleIcon, ClockIcon } from '@heroicons/react/24/outline';

const VendorInvoicesTable = ({ invoices = [], onView, onSelect }) => {
    const getStatusBadge = (status) => {
        const styles = {
            matched: 'bg-emerald-100 text-emerald-700',
            pending: 'bg-amber-100 text-amber-700',
            disputed: 'bg-red-100 text-red-700',
            unmatched: 'bg-slate-100 text-slate-600'
        };
        const icons = {
            matched: <CheckBadgeIcon className="w-3.5 h-3.5" />,
            pending: <ClockIcon className="w-3.5 h-3.5" />,
            disputed: <ExclamationTriangleIcon className="w-3.5 h-3.5" />,
            unmatched: null
        };

        return (
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold capitalize ${styles[status] || styles.unmatched}`}>
                {icons[status]}
                {status}
            </span>
        );
    };

    return (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="px-5 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                <h3 className="text-sm font-bold text-slate-900">
                    Recent Invoices ({invoices.length})
                </h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-5 py-3 w-10">
                                <input type="checkbox" className="rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
                            </th>
                            <th className="px-5 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">Date</th>
                            <th className="px-5 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">Vendor</th>
                            <th className="px-5 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">Invoice #</th>
                            <th className="px-5 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">Amount</th>
                            <th className="px-5 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">VAT Input</th>
                            <th className="px-5 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">WHT</th>
                            <th className="px-5 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">Status</th>
                            <th className="px-5 py-3 w-10"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {invoices.map(inv => (
                            <tr key={inv.id} className="hover:bg-slate-50 transition-colors cursor-pointer">
                                <td className="px-5 py-3">
                                    <input type="checkbox" className="rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
                                </td>
                                <td className="px-5 py-3 text-sm text-slate-600 whitespace-nowrap">{inv.date}</td>
                                <td className="px-5 py-3">
                                    <div className="text-sm font-medium text-slate-900">{inv.vendor}</div>
                                    <div className="text-xs text-slate-500">{inv.category}</div>
                                </td>
                                <td className="px-5 py-3 text-sm text-slate-600 font-mono">{inv.invoiceNumber}</td>
                                <td className="px-5 py-3 text-sm font-bold text-slate-900">₦{inv.amount.toLocaleString()}</td>
                                <td className="px-5 py-3 text-sm font-medium text-emerald-600">
                                    {inv.vatInput > 0 ? `₦${inv.vatInput.toLocaleString()}` : '-'}
                                </td>
                                <td className="px-5 py-3 text-sm font-medium text-red-600">
                                    {inv.wht > 0 ? `₦${inv.wht.toLocaleString()}` : '-'}
                                </td>
                                <td className="px-5 py-3">
                                    {getStatusBadge(inv.status)}
                                </td>
                                <td className="px-5 py-3 text-right">
                                    <button
                                        onClick={() => onView(inv.id)}
                                        className="text-slate-400 hover:text-teal-600 transition-colors"
                                    >
                                        <EyeIcon className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Placeholder */}
            <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex justify-center">
                <div className="flex gap-2">
                    <button className="px-2 py-1 text-xs text-slate-500 hover:text-slate-800 disabled:opacity-50">&lt; Prev</button>
                    <button className="px-2 py-1 text-xs font-bold text-teal-600 bg-teal-50 rounded">1</button>
                    <button className="px-2 py-1 text-xs text-slate-500 hover:text-slate-800">2</button>
                    <button className="px-2 py-1 text-xs text-slate-500 hover:text-slate-800">3</button>
                    <button className="px-2 py-1 text-xs text-slate-500 hover:text-slate-800">Next &gt;</button>
                </div>
            </div>
        </div>
    );
};

export default VendorInvoicesTable;
