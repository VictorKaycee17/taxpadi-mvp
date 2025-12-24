import React from 'react';
import { FunnelIcon, CalendarDaysIcon, XMarkIcon } from '@heroicons/react/24/outline';

const VendorBillFilters = ({ activeFilters = {}, onFilterChange, onClear }) => {
    return (
        <div className="flex flex-wrap items-center gap-3 mb-6 p-1">
            {/* Date Filter */}
            <div className="relative group">
                <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 text-slate-700">
                    <CalendarDaysIcon className="w-4 h-4 text-slate-500" />
                    Date: All Time
                </button>
            </div>

            {/* Vendor Filter */}
            <div className="relative group">
                <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 text-slate-700">
                    <FunnelIcon className="w-4 h-4 text-slate-500" />
                    Vendor: All
                </button>
            </div>

            {/* Status Filter */}
            <select
                className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                onChange={(e) => onFilterChange('status', e.target.value)}
            >
                <option value="all">Status: All</option>
                <option value="matched">Matched</option>
                <option value="pending">Pending</option>
                <option value="disputed">Disputed</option>
            </select>

            {/* Tax Type Filter */}
            <select
                className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                onChange={(e) => onFilterChange('taxType', e.target.value)}
            >
                <option value="all">Tax: All</option>
                <option value="vat">VAT Input</option>
                <option value="wht">WHT Deducted</option>
            </select>

            {/* Apply/Clear Actions */}
            <div className="ml-auto flex items-center gap-2">
                <button className="px-4 py-2 bg-teal-600 text-white text-sm font-bold rounded-lg hover:bg-teal-700 transition-all shadow-sm">
                    Apply
                </button>
                <button
                    onClick={onClear}
                    className="flex items-center gap-1 px-3 py-2 text-slate-500 hover:text-red-600 text-sm font-medium transition-colors"
                >
                    <XMarkIcon className="w-4 h-4" />
                    Clear
                </button>
            </div>
        </div>
    );
};

export default VendorBillFilters;
