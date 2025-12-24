import React from 'react';
import { XMarkIcon, StarIcon } from '@heroicons/react/24/outline';

const ReceiptFiltersBar = ({
    filters = {},
    onFilterChange,
    onClearFilters,
    onSaveFilterSet
}) => {
    return (
        <div className="bg-white border border-slate-200 rounded-xl p-4 mb-5 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {/* Date Range */}
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Date Range</label>
                    <select
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                        value={filters.dateRange || 'all'}
                        onChange={(e) => onFilterChange('dateRange', e.target.value)}
                    >
                        <option value="all">All Time</option>
                        <option value="thisMonth">This Month</option>
                        <option value="lastMonth">Last Month</option>
                        <option value="thisYear">This Year</option>
                        <option value="custom">Custom Range</option>
                    </select>
                </div>

                {/* Category */}
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Category</label>
                    <select
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                        value={filters.category || 'all'}
                        onChange={(e) => onFilterChange('category', e.target.value)}
                    >
                        <option value="all">All Categories</option>
                        <option value="office">Office Supplies</option>
                        <option value="professional">Professional Services</option>
                        <option value="utilities">Utilities</option>
                        <option value="travel">Travel & Transport</option>
                        <option value="entertainment">Entertainment</option>
                    </select>
                </div>

                {/* Tax Type */}
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Tax Type</label>
                    <select
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                        value={filters.taxType || 'all'}
                        onChange={(e) => onFilterChange('taxType', e.target.value)}
                    >
                        <option value="all">All Tax Types</option>
                        <option value="vat">VAT Input</option>
                        <option value="wht">WHT</option>
                        <option value="cit">CIT Support</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Match Status */}
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Status</label>
                    <select
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                        value={filters.status || 'all'}
                        onChange={(e) => onFilterChange('status', e.target.value)}
                    >
                        <option value="all">All Status</option>
                        <option value="matched">Matched</option>
                        <option value="unmatched">Unmatched</option>
                        <option value="untagged">Untagged</option>
                        <option value="deductible">Deductible</option>
                    </select>
                </div>
            </div>

            {/* Filter Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100">
                <button
                    onClick={onClearFilters}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-lg transition-all"
                >
                    <XMarkIcon className="w-4 h-4" />
                    Clear All Filters
                </button>
                <button
                    onClick={onSaveFilterSet}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-all"
                >
                    <StarIcon className="w-4 h-4" />
                    Save Filter Set
                </button>
            </div>
        </div>
    );
};

export default ReceiptFiltersBar;
