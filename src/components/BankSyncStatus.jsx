import React from 'react';
import {
    BuildingLibraryIcon,
    ArrowPathIcon,
    CheckCircleIcon,
    ChevronDownIcon
} from '@heroicons/react/24/outline';

const BankSyncStatus = ({ data }) => {
    return (
        <div className="card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <BuildingLibraryIcon className="w-5 h-5 text-teal-500" />
                    Bank Sync Status
                </h3>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600">ACTIVE</span>
                </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-3 sm:p-4 mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                    <div>
                        <p className="text-[10px] sm:text-xs font-semibold text-slate-500 mb-1">Connected Account</p>
                        <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1">
                            {data.bankName}
                            <ChevronDownIcon className="w-3 h-3 text-slate-400" />
                        </p>
                    </div>
                    <div className="text-left sm:text-right">
                        <p className="text-[10px] sm:text-xs font-semibold text-slate-500 mb-1">Last Sync</p>
                        <p className="text-[9px] sm:text-[10px] font-bold text-slate-700 dark:text-slate-300">2 hours ago</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white dark:bg-slate-800 p-2 sm:p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center sm:text-left">
                        <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 mb-1 uppercase">Transactions</p>
                        <p className="text-base sm:text-lg font-black text-teal-600">{data.transactionCount.toLocaleString()}</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-2 sm:p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center sm:text-left">
                        <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 mb-1 uppercase">Volume</p>
                        <p className="text-base sm:text-lg font-black text-teal-600">₦{(data.transactionVolume / 1000000).toFixed(1)}M</p>
                    </div>
                </div>
            </div>

            <div className="space-y-3 mb-6 flex-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Category Breakdown</p>
                {Object.entries(data.byCategory).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${key === 'income' ? 'bg-emerald-500' : key === 'expenses' ? 'bg-rose-500' : 'bg-slate-400'
                                }`} />
                            <span className="text-[10px] sm:text-xs font-semibold text-slate-600 dark:text-slate-400 capitalize">{key}</span>
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-slate-900 dark:text-white">₦{(value.volume / 1000000).toFixed(1)}M</span>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-4 bg-teal-500 rounded-full relative cursor-pointer">
                        <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500">Daily Auto-sync</span>
                </div>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-500 text-white rounded-lg text-xs font-bold shadow-sm hover:bg-teal-600 transition-colors">
                    <ArrowPathIcon className="w-3.5 h-3.5" />
                    Sync Now
                </button>
            </div>
        </div>
    );
};

export default BankSyncStatus;
