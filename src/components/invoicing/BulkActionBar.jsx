import React from 'react';
import { CheckBadgeIcon, EnvelopeIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';

const BulkActionBar = ({ selectedCount, onClear, onMarkPaid, onEmail, onDelete }) => {
    if (selectedCount === 0) return null;

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 animate-fade-in-up">
            <div className="bg-slate-900 text-white rounded-2xl shadow-2xl py-3 px-6 flex items-center gap-6 border border-slate-800 backdrop-blur-md bg-slate-900/90">
                <div className="flex items-center gap-3 pr-6 border-r border-slate-700">
                    <div className="w-6 h-6 bg-teal-500 rounded flex items-center justify-center text-[10px] font-black">
                        {selectedCount}
                    </div>
                    <span className="text-sm font-bold whitespace-nowrap">Selected</span>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={onMarkPaid}
                        className="flex items-center gap-2 px-3 py-1.5 hover:bg-emerald-500/10 text-emerald-400 rounded-lg transition-colors text-xs font-bold"
                    >
                        <CheckBadgeIcon className="w-4 h-4" />
                        <span className="hidden sm:inline">Mark Paid</span>
                    </button>
                    <button
                        onClick={onEmail}
                        className="flex items-center gap-2 px-3 py-1.5 hover:bg-teal-500/10 text-teal-400 rounded-lg transition-colors text-xs font-bold"
                    >
                        <EnvelopeIcon className="w-4 h-4" />
                        <span className="hidden sm:inline">Email</span>
                    </button>
                    <button
                        onClick={onDelete}
                        className="flex items-center gap-2 px-3 py-1.5 hover:bg-rose-500/10 text-rose-400 rounded-lg transition-colors text-xs font-bold"
                    >
                        <TrashIcon className="w-4 h-4" />
                        <span className="hidden sm:inline">Delete</span>
                    </button>
                </div>

                <button
                    onClick={onClear}
                    className="p-1 hover:text-white text-slate-400 transition-colors"
                >
                    <XMarkIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default BulkActionBar;
