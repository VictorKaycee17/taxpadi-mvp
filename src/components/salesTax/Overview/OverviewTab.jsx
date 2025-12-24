import React from 'react';
import SalesTaxStatsGrid from './SalesTaxStatsGrid';
import SalesChart from './SalesChart';
import VATRemittanceSchedule from './VATRemittanceSchedule';
import ExemptionQuickLinks from './ExemptionQuickLinks';

const OverviewTab = ({ data, loading }) => {
    if (loading) return null; // Placeholder for skeletons

    return (
        <div className="animate-in fade-in duration-500">
            <SalesTaxStatsGrid data={data} />
            <SalesChart data={data.chartData} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <VATRemittanceSchedule schedule={data.remittanceDue} />
                <ExemptionQuickLinks exemptions={data.exemptions} />
            </div>
        </div>
    );
};

export default OverviewTab;
