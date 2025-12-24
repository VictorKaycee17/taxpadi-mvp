import React, { Suspense } from 'react';
import { useDashboardData } from '../hooks/useDashboardData';
import WelcomeHeader from '../components/WelcomeHeader';
import MetricsGrid from '../components/MetricsGrid';
import QuickActions from '../components/QuickActions';
import ChartWidget from '../components/ChartWidget';
import UpcomingObligations from '../components/UpcomingObligations';
import BankSyncStatus from '../components/BankSyncStatus';

const Dashboard = () => {
    const { data, loading, error } = useDashboardData();

    if (error) {
        return (
            <div className="p-8 max-w-4xl mx-auto">
                <div className="bg-rose-50 border border-rose-200 p-6 rounded-2xl text-center">
                    <h2 className="text-rose-900 font-bold mb-2 text-xl">⚠️ Failed to Load Dashboard</h2>
                    <p className="text-rose-700 mb-6 font-medium">{error.message || 'An unexpected error occurred.'}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 bg-rose-500 text-white rounded-xl font-bold hover:bg-rose-600 shadow-md transition-all active:scale-95"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="p-8 space-y-8 animate-pulse">
                <div className="h-32 bg-slate-100 dark:bg-slate-800 rounded-3xl w-full" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-40 bg-slate-100 dark:bg-slate-800 rounded-3xl" />
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="h-80 bg-slate-100 dark:bg-slate-800 rounded-3xl" />
                    <div className="h-80 bg-slate-100 dark:bg-slate-800 rounded-3xl" />
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
            {/* 12-Column Grid Wrapper */}
            <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">

                {/* Welcome Header - Full Width */}
                <div className="col-span-12">
                    <WelcomeHeader
                        companyName={data.user.companyName}
                        userFirstName={data.user.firstName}
                        currentDate={new Date()}
                        isPro={data.user.tierStatus === 'pro'}
                    />
                </div>

                {/* Metrics Grid - Full Width */}
                <div className="col-span-12">
                    <MetricsGrid
                        outstanding={data.taxLiability.outstanding}
                        average={data.taxLiability.averageMonthly}
                        trend={data.taxLiability.trend}
                        complianceScore={data.compliance.score}
                        complianceGrade={data.compliance.grade}
                        tccStatus={data.tccStatus}
                    />
                </div>

                {/* Charts Area */}
                <div className="col-span-12 xl:col-span-6">
                    <ChartWidget
                        type="bar"
                        title="Tax Liability History"
                        subtitle="Your monthly tax liability for 2025"
                        data={data.chartsData.taxLiabilityHistory}
                        timeframe="6M"
                        onTimeframeChange={(tf) => console.log('Change TF', tf)}
                        footer={
                            <p className="text-sm font-bold text-teal-700 dark:text-teal-400 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-teal-500" />
                                Total YTD: ₦1,547,350.00
                            </p>
                        }
                    />
                </div>

                <div className="col-span-12 xl:col-span-6">
                    <ChartWidget
                        type="line"
                        title="Compliance Trend"
                        subtitle="Your filing & payment adherence (%)"
                        data={data.chartsData.complianceTrend}
                        timeframe="6M"
                        onTimeframeChange={(tf) => console.log('Change TF', tf)}
                        footer={
                            <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                Current Score: {data.compliance.score}% (Grade {data.compliance.grade})
                            </p>
                        }
                    />
                </div>

                {/* Quick Actions - Full Width */}
                <div className="col-span-12">
                    <QuickActions />
                </div>

                {/* Final Row: Obligations & Bank Sync */}
                <div className="col-span-12 xl:col-span-7">
                    <UpcomingObligations items={data.upcomingObligations} />
                </div>

                <div className="col-span-12 xl:col-span-5">
                    <BankSyncStatus data={data.bankSync} />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
