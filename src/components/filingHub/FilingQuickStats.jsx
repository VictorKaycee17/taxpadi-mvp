import React from 'react';

const FilingQuickStats = ({
    totalReturns = 0,
    thisYear = 0,
    filed = 0,
    pending = 0,
    draft = 0,
    vatLiability = 0,
    citLiability = 0
}) => {
    return (
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {/* Total Returns */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">📄</span>
                        <span className="text-xs font-medium text-slate-600">Total Returns</span>
                    </div>
                    <div className="text-xl font-bold text-teal-700">{totalReturns}</div>
                </div>

                {/* This Year */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">📅</span>
                        <span className="text-xs font-medium text-slate-600">This Year</span>
                    </div>
                    <div className="text-xl font-bold text-teal-700">{thisYear}</div>
                </div>

                {/* Filed */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">✓</span>
                        <span className="text-xs font-medium text-slate-600">Filed</span>
                    </div>
                    <div className="text-xl font-bold text-emerald-700">{filed}</div>
                </div>

                {/* Pending */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">⏳</span>
                        <span className="text-xs font-medium text-slate-600">Pending</span>
                    </div>
                    <div className="text-xl font-bold text-blue-700">{pending}</div>
                </div>

                {/* Draft */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">📝</span>
                        <span className="text-xs font-medium text-slate-600">Draft</span>
                    </div>
                    <div className="text-xl font-bold text-slate-700">{draft}</div>
                </div>

                {/* VAT Liability */}
                <div className="flex flex-col gap-1 md:col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">💰</span>
                        <span className="text-xs font-medium text-slate-600">VAT Liability</span>
                    </div>
                    <div className="text-xl font-bold text-teal-700">₦{vatLiability.toLocaleString()}</div>
                </div>

                {/* CIT Liability */}
                <div className="flex flex-col gap-1 md:col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">🏢</span>
                        <span className="text-xs font-medium text-slate-600">CIT Liability</span>
                    </div>
                    <div className="text-xl font-bold text-teal-700">₦{citLiability.toLocaleString()}</div>
                </div>
            </div>
        </div>
    );
};

export default FilingQuickStats;
