import React from 'react';
import SalesTaxCard from './SalesTaxCard';

const SalesTaxStatsGrid = ({ data }) => {
    const formatCurrency = (val) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(val);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <SalesTaxCard
                type="sales"
                title="Total Sales (This Month)"
                value={formatCurrency(data.totalSales.thisMonth)}
                subValue={`Taxable: ${formatCurrency(data.totalSales.breakdown.taxable)}`}
                trend={data.totalSales.trend}
                info={`Exempt: ${formatCurrency(data.totalSales.breakdown.exempt)}`}
                linkText="View Sales Breakdown"
            />
            <SalesTaxCard
                type="vat"
                title="VAT Collected (This Month)"
                value={formatCurrency(data.vatCollected.thisMonth)}
                subValue="(7.5% on taxable sales)"
                trend={data.totalSales.trend} // Reusing trend for mock
                info={`Next Remittance: ${new Date(data.vatCollected.nextRemittanceDate).toLocaleDateString()}`}
                linkText="Schedule Reminder"
            />
            <SalesTaxCard
                type="remittance"
                title="Remittance Due"
                value={formatCurrency(data.remittanceDue.amount)}
                subValue={`Due by: ${new Date(data.remittanceDue.dueDate).toLocaleDateString()}`}
                info={`${data.vatCollected.daysRemaining} Days Remaining`}
                linkText="Pay Now"
            />
        </div>
    );
};

export default SalesTaxStatsGrid;
