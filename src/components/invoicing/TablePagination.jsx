import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const TablePagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 py-4 px-2 border-t border-slate-200 dark:border-slate-800">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Showing <span className="text-slate-900 dark:text-white">{startItem}–{endItem}</span> of <span className="text-slate-900 dark:text-white">{totalItems}</span> invoices
            </p>

            <div className="flex items-center gap-2">
                <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    <ChevronLeftIcon className="w-4 h-4" />
                </button>

                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => onPageChange(i + 1)}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${currentPage === i + 1
                                ? 'bg-teal-500 text-white shadow-lg'
                                : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    <ChevronRightIcon className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default TablePagination;
