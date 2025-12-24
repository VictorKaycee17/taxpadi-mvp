import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const ReceiptTable = ({ receipts, onView, onSelect, selectedIds = [] }) => {
    const getStatusBadge = (status) => {
        const badges = {
            matched: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: 'Matched', icon: '✓' },
            unmatched: { bg: 'bg-slate-100', text: 'text-slate-600', label: 'Unmatched', icon: '' },
            untagged: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Untagged', icon: '⚠️' }
        };
        return badges[status] || badges.unmatched;
    };

    return (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    {/* Table Header */}
                    <thead className="bg-slate-50 border-b-2 border-slate-200">
                        <tr>
                            <th className="px-4 py-3 text-xs font-bold text-slate-700 uppercase tracking-wider w-10">
                                <input type="checkbox" className="rounded border-slate-300" />
                            </th>
                            <th className="px-4 py-3 text-xs font-bold text-slate-700 uppercase tracking-wider min-w-[150px]">Vendor</th>
                            <th className="px-4 py-3 text-xs font-bold text-slate-700 uppercase tracking-wider min-w-[100px]">Amount</th>
                            <th className="px-4 py-3 text-xs font-bold text-slate-700 uppercase tracking-wider min-w-[120px]">Date</th>
                            <th className="px-4 py-3 text-xs font-bold text-slate-700 uppercase tracking-wider min-w-[140px]">Category</th>
                            <th className="px-4 py-3 text-xs font-bold text-slate-700 uppercase tracking-wider min-w-[100px]">Tax Type</th>
                            <th className="px-4 py-3 text-xs font-bold text-slate-700 uppercase tracking-wider min-w-[80px]">Status</th>
                            <th className="px-4 py-3 text-xs font-bold text-slate-700 uppercase tracking-wider w-16">Actions</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-slate-100">
                        {receipts.length === 0 ? (
                            <tr>
                                <td colSpan="8" className="px-4 py-12 text-center text-slate-500">
                                    <div className="flex flex-col items-center gap-2">
                                        <span className="text-4xl">📁</span>
                                        <span className="text-sm font-medium">No receipts found</span>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            receipts.map((receipt) => {
                                const badge = getStatusBadge(receipt.status);
                                const isSelected = selectedIds.includes(receipt.id);

                                return (
                                    <tr
                                        key={receipt.id}
                                        className={`hover:bg-slate-50 transition-colors cursor-pointer ${isSelected ? 'bg-teal-50' : ''}`}
                                        onClick={() => onView(receipt.id)}
                                    >
                                        <td className="px-4 py-3">
                                            <input
                                                type="checkbox"
                                                className="rounded border-slate-300"
                                                checked={isSelected}
                                                onChange={(e) => { e.stopPropagation(); onSelect(receipt.id); }}
                                            />
                                        </td>
                                        <td className="px-4 py-3 text-sm font-bold text-slate-900">{receipt.vendor}</td>
                                        <td className="px-4 py-3 text-sm font-bold text-slate-900">₦{receipt.amount.toLocaleString()}</td>
                                        <td className="px-4 py-3 text-sm text-slate-600">{receipt.date}</td>
                                        <td className="px-4 py-3 text-sm text-slate-600">{receipt.category}</td>
                                        <td className="px-4 py-3 text-sm text-slate-600">{receipt.taxType || '-'}</td>
                                        <td className="px-4 py-3">
                                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${badge.bg} ${badge.text} text-[10px] font-bold uppercase tracking-wider`}>
                                                {badge.icon} {badge.label}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); onView(receipt.id); }}
                                                className="text-teal-600 hover:text-teal-700 font-bold text-xs"
                                            >
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReceiptTable;
