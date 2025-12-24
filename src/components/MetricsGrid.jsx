import React from 'react';
import MetricCard from './MetricCard';
import {
    ExclamationCircleIcon,
    PresentationChartBarIcon,
    CheckBadgeIcon,
    ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

const MetricsGrid = ({ outstanding, average, trend, complianceScore, complianceGrade, tccStatus }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <MetricCard
                title="Outstanding Tax"
                value={outstanding}
                status="danger"
                trend={trend}
                icon={<ExclamationCircleIcon className="w-5 h-5 text-rose-500" />}
                actionLabel="Pay Now"
                onAction={() => console.log('Pay Now')}
            />

            <MetricCard
                title="Avg. Tax Liability"
                value={average}
                status="info"
                trend={{ direction: 'down', percentage: 5.2, period: 'vs last month' }}
                icon={<PresentationChartBarIcon className="w-5 h-5 text-slate-500" />}
                actionLabel="Trend Details"
                onAction={() => console.log('View Trend')}
            />

            <MetricCard
                title="TCC Status"
                value={tccStatus.status.toUpperCase()}
                status="success"
                icon={<CheckBadgeIcon className="w-5 h-5 text-emerald-500" />}
                actionLabel="Renew TCC"
                onAction={() => console.log('Renew TCC')}
            />

            <MetricCard
                title="Compliance Score"
                value={`${complianceScore}/100`}
                status="teal"
                icon={<ArrowTrendingUpIcon className="w-5 h-5 text-teal-500" />}
                actionLabel={`Grade: ${complianceGrade}`}
            />
        </div>
    );
};

export default MetricsGrid;
