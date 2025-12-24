import React, { useState } from 'react';
import FilingHubHeader from '../components/filingHub/FilingHubHeader';
import FilingQuickStats from '../components/filingHub/FilingQuickStats';
import ActiveReturnsSection from '../components/filingHub/ActiveReturnsSection';

const FilingHub = () => {
    // Mock returns data
    const mockReturns = [
        {
            id: 1,
            type: 'VAT Return',
            period: 'Q4 2025 (Oct-Dec)',
            status: 'draft',
            progress: 40,
            nextStep: 'Review & Validate',
            icon: '🟢'
        },
        {
            id: 2,
            type: 'CIT Return',
            period: 'Year 2025',
            status: 'pending',
            progress: 75,
            nextStep: 'FIRS Submission',
            icon: '🔵'
        },
        {
            id: 3,
            type: 'PAYE Return',
            period: 'November 2025',
            status: 'filed',
            filedDate: 'Dec 10, 2025',
            din: 'FIRS-2025-1254',
            icon: '🟣'
        },
        {
            id: 4,
            type: 'WHT Return',
            period: 'Q4 2025',
            status: 'draft',
            progress: 20,
            nextStep: 'Data Collection',
            icon: '🟡'
        }
    ];

    const stats = {
        totalReturns: 12,
        thisYear: 6,
        filed: 3,
        pending: 2,
        draft: 1,
        vatLiability: 156000,
        citLiability: 42000000
    };

    const handleViewAll = () => {
        console.log('View all returns clicked');
    };

    const handleCreateReturn = () => {
        console.log('Create return clicked');
    };

    const handleSyncData = () => {
        console.log('Sync data clicked');
    };

    const handleContinue = (id) => {
        console.log('Continue return:', id);
    };

    const handleView = (id) => {
        console.log('View return:', id);
    };

    const handleAction = (id) => {
        console.log('More actions for return:', id);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            <FilingHubHeader
                onViewAll={handleViewAll}
                onCreate={handleCreateReturn}
                onSync={handleSyncData}
                onSettings={() => console.log('Settings clicked')}
            />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <FilingQuickStats {...stats} />

                <ActiveReturnsSection
                    returns={mockReturns}
                    onContinue={handleContinue}
                    onView={handleView}
                    onAction={handleAction}
                    onViewAll={handleViewAll}
                />

                {/* Recent Activity Section */}
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <h2 className="text-lg font-bold text-slate-900 mb-4">
                        Recent Filing Activity
                    </h2>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                <div>
                                    <p className="text-sm font-medium text-slate-900">VAT Return (Q3 2025)</p>
                                    <p className="text-xs text-slate-500">Filed on Dec 15, 2025</p>
                                </div>
                            </div>
                            <span className="text-emerald-600 font-bold text-sm">✓</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                <div>
                                    <p className="text-sm font-medium text-slate-900">PAYE Return (Nov 2025)</p>
                                    <p className="text-xs text-slate-500">Filed on Dec 10, 2025</p>
                                </div>
                            </div>
                            <span className="text-emerald-600 font-bold text-sm">✓</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                <div>
                                    <p className="text-sm font-medium text-slate-900">CIT Return (2024)</p>
                                    <p className="text-xs text-slate-500">Filed on Dec 1, 2025 • DIN: FIRS-2024-9821</p>
                                </div>
                            </div>
                            <span className="text-emerald-600 font-bold text-sm">✓</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilingHub;
