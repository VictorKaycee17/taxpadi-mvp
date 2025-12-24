import React from 'react';

const InvoiceSummaryBar = ({
    totalInvoices = 0,
    thisPeriodCount = 0,
    totalAmount = 0,
    inputVat = 0,
    whtDeducted = 0,
    matchedCount = 0,
    matchedPercentage = 0,
    pendingCount = 0
}) => {
    return (
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Total & Recent */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">📄</span>
                        <span className="text-xs font-medium text-slate-600">Invoices</span>
                    </div>
                    <div className="text-xl font-bold text-slate-900">{totalInvoices}</div>
                    <div className="text-xs text-slate-500">{thisPeriodCount} this period</div>
                </div>

                {/* Total Amount */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">💰</span>
                        <span className="text-xs font-medium text-slate-600">Total Amount</span>
                    </div>
                    <div className="text-xl font-bold text-slate-900">₦{totalAmount.toLocaleString()}</div>
                </div>

                {/* Tax Breakdown */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">⚖️</span>
                        <span className="text-xs font-medium text-slate-600">Tax Impact</span>
                    </div>
                    <div className="flex flex-col text-xs font-bold space-y-0.5">
                        <span className="text-emerald-700">VAT Input: ₦{inputVat.toLocaleString()}</span>
                        <span className="text-red-700">WHT: ₦{whtDeducted.toLocaleString()}</span>
                    </div>
                </div>

                {/* Matching Status */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">🔗</span>
                        <span className="text-xs font-medium text-slate-600">Matching</span>
                    </div>
                    <div className="text-xl font-bold text-slate-700">{matchedPercentage}%</div>
                    <div className="flex gap-2 text-xs">
                        <span className="text-emerald-600">{matchedCount} matched</span>
                        <span className="text-amber-600">{pendingCount} pending</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceSummaryBar;
