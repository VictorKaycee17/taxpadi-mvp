import React from 'react';
import StatCard from './StatCard';

const InvoiceStatsGrid = ({ stats }) => {
    const formatCurrency = (val) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(val);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard
                type="outstanding"
                title="Outstanding Invoices"
                value={`${stats.outstandingCount} invoices`}
                subValue={formatCurrency(stats.outstanding)}
                info="Oldest: 15 days overdue"
                linkText="View Overdue"
            />
            <StatCard
                type="overdue"
                title="Overdue Invoices"
                value={`${stats.overdueCount} invoices`}
                subValue={formatCurrency(stats.overdue)}
                info="Action Required"
                linkText="Send Reminders"
            />
            <StatCard
                type="paid"
                title="Paid Today"
                value={`${stats.paidTodayCount} invoices`}
                subValue={formatCurrency(stats.paidToday)}
                info="Updated: 2 hours ago"
                linkText="View Details"
            />
            <StatCard
                type="draft"
                title="Draft Invoices"
                value={`${stats.draftCount} invoices`}
                subValue="Ready to send"
                info="Email All"
                linkText="Manage Drafts"
            />
        </div>
    );
};

export default InvoiceStatsGrid;
