import React from 'react';

const DailySalesSummary = ({
    totalSales = 0,
    transactionCount = 0,
    avgTransaction = 0,
    growth = 0,
    activeTerminals = 0,
    outputVat = 0,
    paymentMethods = { cash: 0, card: 0, wallet: 0 }
}) => {
    return (
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-6">
            {/* Top Row: Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 pb-4 border-b border-teal-200/60">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">📊</span>
                        <span className="text-xs font-medium text-slate-600">Total Sales</span>
                    </div>
                    <div className="text-xl font-bold text-teal-900">₦{totalSales.toLocaleString()}</div>
                    <div className={`text-xs font-bold ${growth >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {growth >= 0 ? '+' : ''}{growth}% Growth
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">🔢</span>
                        <span className="text-xs font-medium text-slate-600">Transactions</span>
                    </div>
                    <div className="text-xl font-bold text-slate-700">{transactionCount}</div>
                    <div className="text-xs text-slate-500">Avg: ₦{avgTransaction.toLocaleString()}</div>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">💰</span>
                        <span className="text-xs font-medium text-slate-600">Output VAT (Est.)</span>
                    </div>
                    <div className="text-xl font-bold text-teal-700">₦{outputVat.toLocaleString()}</div>
                    <div className="text-xs text-slate-500">@ 18% standard</div>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">🟢</span>
                        <span className="text-xs font-medium text-slate-600">Active Terminals</span>
                    </div>
                    <div className="text-xl font-bold text-slate-700">{activeTerminals}</div>
                    <div className="text-xs text-emerald-600 font-bold">✓ System Online</div>
                </div>
            </div>

            {/* Bottom Row: Payment Breakdown */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                <span className="font-bold uppercase tracking-wider text-slate-500">Payment Mix:</span>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                    <span>Cash: ₦{paymentMethods.cash.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Card: ₦{paymentMethods.card.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Wallet: ₦{paymentMethods.wallet.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

export default DailySalesSummary;
