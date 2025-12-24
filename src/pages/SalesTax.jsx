import React, { useState, Suspense } from 'react';
import { useSalesTaxData } from '../hooks/useSalesTaxData';
import { useTaxabilityCheck } from '../hooks/useTaxabilityCheck';
import SalesTaxHeader from '../components/salesTax/SalesTaxHeader';
import OverviewTab from '../components/salesTax/Overview/OverviewTab';
import TaxabilityCheckTab from '../components/salesTax/TaxabilityCheck/TaxabilityCheckTab';
import OverviewSkeleton from '../components/salesTax/Skeletons/OverviewSkeleton';

const SalesTax = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const { data, loading, error } = useSalesTaxData();
    const { result, loading: checkLoading, checkTaxability, history } = useTaxabilityCheck();

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Sales Tax Intelligence' }
    ];

    if (error) {
        return (
            <div className="p-8">
                <div className="bg-rose-50 dark:bg-rose-500/10 p-8 rounded-2xl border border-rose-100 dark:border-rose-500/20 text-center">
                    <div className="w-16 h-16 bg-rose-100 dark:bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⚠️</span>
                    </div>
                    <h2 className="text-xl font-black text-rose-900 dark:text-rose-400 mb-2">Unable to Load Sales Tax Data</h2>
                    <p className="text-sm text-rose-700 dark:text-rose-300 mb-6 font-bold uppercase tracking-widest">{error.message || 'We encountered an error fetching your tax records.'}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-8 py-3 bg-rose-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-rose-600/20 hover:bg-rose-700 transition-all"
                    >
                        Retry Loading
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 p-4 sm:p-8 font-sans">
            <div className="max-w-[1440px] mx-auto">
                <SalesTaxHeader
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    breadcrumbs={breadcrumbs}
                />

                <div className="mt-8">
                    {activeTab === 'overview' ? (
                        loading ? (
                            <OverviewSkeleton />
                        ) : (
                            <OverviewTab data={data} loading={loading} />
                        )
                    ) : (
                        <TaxabilityCheckTab
                            result={result}
                            loading={checkLoading}
                            onCheck={checkTaxability}
                            history={history}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SalesTax;
