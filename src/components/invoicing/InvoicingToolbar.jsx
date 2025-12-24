import React from 'react';
import { MagnifyingGlassIcon, FunnelIcon, PlusIcon } from '@heroicons/react/24/outline';

const InvoicingToolbar = ({ filters, onFilterChange, onCreateClick }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 mb-6 pt-2">
            <div className="flex-1 relative group">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                <input
                    type="text"
                    placeholder="Search invoices by client name, invoice #, or amount..."
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-sm font-medium transition-all"
                    value={filters.searchQuery || ''}
                    onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
                />
            </div>

            <div className="flex flex-wrap items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:border-teal-500 hover:text-teal-600 transition-all shadow-sm">
                    <FunnelIcon className="w-5 h-5" />
                    <span>Filters</span>
                    <span className="w-5 h-5 bg-teal-500 text-white rounded-full text-[10px] flex items-center justify-center">2</span>
                </button>

                <select
                    className="px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:border-teal-500 transition-all shadow-sm focus:outline-none"
                    value={filters.status || 'all'}
                    onChange={(e) => onFilterChange({ status: e.target.value })}
                >
                    <option value="all">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="paid">Paid</option>
                    <option value="overdue">Overdue</option>
                    <option value="draft">Draft</option>
                </select>

                <button
                    onClick={onCreateClick}
                    className="lg:hidden flex-1 px-6 py-3 bg-teal-500 text-white rounded-xl font-bold flex items-center justify-center gap-2"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>Create</span>
                </button>
            </div>
        </div>
    );
};

export default InvoicingToolbar;
