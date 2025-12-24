import React from 'react';
import {
    ArrowUpTrayIcon,
    MagnifyingGlassIcon,
    ChartBarIcon,
    Cog6ToothIcon
} from '@heroicons/react/24/outline';

const ReceiptsHeader = ({ onUpload, onSearch, onReports, onSettings }) => {
    return (
        <div className="bg-gradient-to-b from-teal-50 to-white border-b border-slate-200 px-6 py-6 mb-6">
            <div className="max-w-[1400px] mx-auto">
                {/* Breadcrumb */}
                <div className="text-sm text-slate-500 mb-2 font-medium">
                    Home &gt; Receipts & Expenses
                </div>

                {/* Title & Subtitle */}
                <div className="mb-5">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">
                        Receipts & Expenses
                    </h1>
                    <p className="text-sm text-slate-600">
                        Store and organize purchase receipts for tax deductions.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                    <button
                        onClick={onUpload}
                        className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-500/20"
                    >
                        <ArrowUpTrayIcon className="w-5 h-5" />
                        Upload Receipt
                    </button>
                    <button
                        onClick={onSearch}
                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-300 transition-all"
                    >
                        <MagnifyingGlassIcon className="w-5 h-5" />
                        Advanced Search
                    </button>
                    <button
                        onClick={onReports}
                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-300 transition-all"
                    >
                        <ChartBarIcon className="w-5 h-5" />
                        Reports
                    </button>
                    <button
                        onClick={onSettings}
                        className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all"
                    >
                        <Cog6ToothIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReceiptsHeader;
