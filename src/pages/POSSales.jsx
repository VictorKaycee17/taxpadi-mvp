import React, { useState } from 'react';
import POSSalesHeader from '../components/posSales/POSSalesHeader';
import DailySalesSummary from '../components/posSales/DailySalesSummary';
import TerminalCardsGrid from '../components/posSales/TerminalCardsGrid';
import SalesByCategory from '../components/posSales/SalesByCategory';
import TransactionsTable from '../components/posSales/TransactionsTable';
import { CalendarDaysIcon, FunnelIcon } from '@heroicons/react/24/outline';

const POSSales = () => {
    // Mock Data
    const summaryData = {
        totalSales: 485230,
        transactionCount: 156,
        avgTransaction: 3110,
        growth: 12,
        activeTerminals: 3,
        outputVat: 87340,
        paymentMethods: {
            cash: 194000,
            card: 266405,
            wallet: 24825
        }
    };

    const terminalsData = [
        {
            id: 'Pos-01',
            name: 'Terminal 1',
            sales: 125000,
            transactions: 35,
            avgTicket: 3571,
            status: 'online',
            lastSync: '12:45 PM'
        },
        {
            id: 'Pos-02',
            name: 'Terminal 2',
            sales: 185400,
            transactions: 48,
            avgTicket: 3863,
            status: 'online',
            lastSync: '12:43 PM'
        },
        {
            id: 'Pos-03',
            name: 'Terminal 3',
            sales: 174830,
            transactions: 40,
            avgTicket: 4371,
            status: 'offline',
            lastSync: '12:20 PM'
        }
    ];

    const categoriesData = [
        { name: 'Retail', amount: 245000, percentage: 50.5 },
        { name: 'Food & Beverage', amount: 156700, percentage: 32.3 },
        { name: 'Services', amount: 58400, percentage: 12.0 },
        { name: 'Other', amount: 25130, percentage: 5.2 }
    ];

    const transactionsData = [
        { id: 1, time: '14:45', terminal: 'Pos-01', amount: 5200, method: 'card', category: 'Retail' },
        { id: 2, time: '14:42', terminal: 'Pos-02', amount: 8300, method: 'cash', category: 'F&B' },
        { id: 3, time: '14:40', terminal: 'Pos-03', amount: 2100, method: 'card', category: 'Retail' },
        { id: 4, time: '14:38', terminal: 'Pos-01', amount: 3450, method: 'wallet', category: 'Services' },
        { id: 5, time: '14:35', terminal: 'Pos-02', amount: 12500, method: 'card', category: 'Retail' },
        { id: 6, time: '14:30', terminal: 'Pos-03', amount: 4500, method: 'cash', category: 'F&B' }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            <POSSalesHeader
                onSync={() => console.log('Sync clicked')}
                onAnalytics={() => console.log('Analytics clicked')}
                onExport={() => console.log('Export clicked')}
                onSettings={() => console.log('Settings clicked')}
            />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Filters Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
                        <CalendarDaysIcon className="w-5 h-5 text-slate-500" />
                        <span className="text-sm font-bold text-slate-700">Today: Dec 24, 2025</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">
                            <FunnelIcon className="w-4 h-4 text-slate-500" />
                            Filter
                        </button>
                    </div>
                </div>

                <DailySalesSummary {...summaryData} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <TerminalCardsGrid terminals={terminalsData} />
                        <TransactionsTable transactions={transactionsData} onViewAll={() => console.log('View all txns')} />
                    </div>
                    <div className="space-y-6">
                        <SalesByCategory categories={categoriesData} />

                        {/* Mock Reconciliation Card */}
                        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                            <h3 className="text-sm font-bold text-slate-900 mb-3">Reconciliation Status</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-600">POS Total</span>
                                    <span className="font-medium">₦485,230</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-600">Bank Deposits</span>
                                    <span className="font-medium">₦483,500</span>
                                </div>
                                <div className="pt-2 border-t border-slate-100 flex justify-between text-amber-600 font-bold">
                                    <span>Discrepancy</span>
                                    <span>-₦1,730</span>
                                </div>
                                <button className="w-full mt-2 py-2 bg-amber-50 text-amber-700 text-xs font-bold rounded-lg hover:bg-amber-100">
                                    Resolve Discrepancy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default POSSales;
