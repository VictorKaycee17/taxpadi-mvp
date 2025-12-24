import React from 'react';

const QuickStatsBar = ({
    totalReceipts = 0,
    thisMonth = 0,
    totalDeductible = 0,
    untagged = 0,
    vatInput = 0
}) => {
    return (
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {/* Total Receipts */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">📄</span>
                        <span className="text-xs font-medium text-slate-600">Total Receipts</span>
                    </div>
                    <div className="text-xl font-bold text-teal-700">{totalReceipts}</div>
                </div>

                {/* This Month */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">📅</span>
                        <span className="text-xs font-medium text-slate-600">This Month</span>
                    </div>
                    <div className="text-xl font-bold text-teal-700">{thisMonth}</div>
                </div>

                {/* Total Deductible */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">💰</span>
                        <span className="text-xs font-medium text-slate-600">Total Deductible</span>
                    </div>
                    <div className="text-xl font-bold text-teal-700">₦{totalDeductible.toLocaleString()}</div>
                </div>

                {/* Untagged */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">⚠️</span>
                        <span className="text-xs font-medium text-slate-600">Untagged</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-xl font-bold text-amber-700">{untagged}</div>
                        {untagged > 0 && (
                            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold">
                                Action Needed
                            </span>
                        )}
                    </div>
                </div>

                {/* This Year VAT Input */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">📊</span>
                        <span className="text-xs font-medium text-slate-600">This Year VAT Input</span>
                    </div>
                    <div className="text-xl font-bold text-teal-700">₦{vatInput.toLocaleString()}</div>
                </div>
            </div>
        </div>
    );
};

export default QuickStatsBar;
