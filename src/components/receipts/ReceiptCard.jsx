import React from 'react';
import { EyeIcon, EllipsisVerticalIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const ReceiptCard = ({
    receipt,
    onView,
    onAction,
    isSelected = false
}) => {
    const getStatusBadge = (status) => {
        const badges = {
            matched: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: 'Matched', icon: '✓' },
            unmatched: { bg: 'bg-slate-100', text: 'text-slate-600', label: 'Unmatched', icon: '' },
            untagged: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Untagged', icon: '⚠️' }
        };
        return badges[status] || badges.unmatched;
    };

    const badge = getStatusBadge(receipt.status);

    return (
        <div
            className={`bg-white border rounded-xl p-3 transition-all duration-200 cursor-pointer hover:shadow-lg hover:border-teal-300 ${isSelected ? 'border-teal-500 bg-teal-50' : 'border-slate-200'
                }`}
            onClick={() => onView(receipt.id)}
        >
            {/* Thumbnail */}
            <div className="h-[120px] bg-slate-100 rounded-lg mb-3 flex items-center justify-center text-4xl overflow-hidden">
                {receipt.thumbnail ? (
                    <img src={receipt.thumbnail} alt={receipt.vendor} className="w-full h-full object-cover" />
                ) : (
                    <span>📄</span>
                )}
            </div>

            {/* Vendor Name */}
            <h3 className="text-sm font-bold text-slate-900 mb-2 truncate">
                {receipt.vendor}
            </h3>

            {/* Amount & Date */}
            <div className="flex justify-between items-center text-xs text-slate-700 mb-2">
                <span className="font-bold">₦{receipt.amount.toLocaleString()}</span>
                <span>{receipt.date}</span>
            </div>

            {/* Category & Tax Type */}
            <div className="text-xs text-slate-600 mb-2 space-y-1">
                <div>Category: {receipt.category}</div>
                <div>Tax Type: {receipt.taxType || 'None'}</div>
            </div>

            {/* Status Badge */}
            <div className="mb-3">
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${badge.bg} ${badge.text} text-[10px] font-bold uppercase tracking-wider`}>
                    {badge.icon} {badge.label}
                </span>
            </div>

            {/* Card Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <button
                    onClick={(e) => { e.stopPropagation(); onView(receipt.id); }}
                    className="text-xs font-bold text-teal-600 hover:text-teal-700 hover:underline transition-all"
                >
                    View Details
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); onAction(receipt.id); }}
                    className="p-1 text-slate-400 hover:text-slate-600 rounded transition-all"
                >
                    <EllipsisVerticalIcon className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default ReceiptCard;
