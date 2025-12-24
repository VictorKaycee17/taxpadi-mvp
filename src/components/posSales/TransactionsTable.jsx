import React from 'react';
import { EyeIcon } from '@heroicons/react/24/outline';

const TransactionsTable = ({ transactions = [], onViewAll }) => {
    return (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            {/* Header */}
            <div className="px-5 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                <h3 className="text-sm font-bold text-slate-900">
                    Recent Transactions ({transactions.length})
                </h3>
                {onViewAll && (
                    <button
                        onClick={onViewAll}
                        className="text-xs font-bold text-teal-600 hover:text-teal-700 hover:underline"
                    >
                        View All
                    </button>
                )}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-5 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">Time</th>
                            <th className="px-5 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">Terminal</th>
                            <th className="px-5 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">Amount</th>
                            <th className="px-5 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">Method</th>
                            <th className="px-5 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">Category</th>
                            <th className="px-5 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">Status</th>
                            <th className="px-5 py-3 w-10"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {transactions.map(txn => (
                            <tr key={txn.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-5 py-3 text-sm text-slate-600 whitespace-nowrap">{txn.time}</td>
                                <td className="px-5 py-3 text-sm font-medium text-slate-700">{txn.terminal}</td>
                                <td className="px-5 py-3 text-sm font-bold text-slate-900">₦{txn.amount.toLocaleString()}</td>
                                <td className="px-5 py-3">
                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium capitalize">
                                        {txn.method === 'card' && '💳'}
                                        {txn.method === 'cash' && '💵'}
                                        {txn.method === 'wallet' && '📱'}
                                        {txn.method}
                                    </span>
                                </td>
                                <td className="px-5 py-3 text-sm text-slate-600">{txn.category}</td>
                                <td className="px-5 py-3">
                                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                                        ✓ Matched
                                    </span>
                                </td>
                                <td className="px-5 py-3 text-right">
                                    <button className="text-slate-400 hover:text-teal-600 transition-colors">
                                        <EyeIcon className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer Pagination Placeholder */}
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

export default TransactionsTable;
