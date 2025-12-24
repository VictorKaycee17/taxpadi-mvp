import React from 'react';
import {
    HomeModernIcon,
    BanknotesIcon,
    WalletIcon,
    ShieldCheckIcon,
    HeartIcon,
    BuildingLibraryIcon
} from '@heroicons/react/24/outline';

const SummaryCard = ({ label, value, detail, icon: Icon, color }) => (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[140px] hover:shadow-md transition-all group">
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-xl bg-${color}-50 dark:bg-${color}-500/10 text-${color}-600 dark:text-${color}-400 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-500/10 rounded-md">
                <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600">Valid</span>
            </div>
        </div>

        <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1 uppercase tracking-tight">
                ₦{value.toLocaleString()}
            </h3>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.1em]">{detail}</p>
        </div>
    </div>
);

const PayrollSummary = ({ totals }) => {
    const cards = [
        {
            label: 'Total Gross Salary',
            value: totals.totalGross,
            detail: 'Including Allowances',
            icon: BanknotesIcon,
            color: 'teal'
        },
        {
            label: 'Total PAYE Tax',
            value: totals.totalPAYE,
            detail: 'Monthly Liability',
            icon: ShieldCheckIcon,
            color: 'blue'
        },
        {
            label: 'Net Payable',
            value: totals.totalNet,
            detail: 'Individual Accounts',
            icon: WalletIcon,
            color: 'emerald'
        },
        {
            label: 'Pension (18%)',
            value: totals.totalPension,
            detail: '8% EE, 10% ER',
            icon: BuildingLibraryIcon,
            color: 'purple'
        },
        {
            label: 'NHIS (15%)',
            value: totals.totalNHIS,
            detail: 'National Health Fund',
            icon: HeartIcon,
            color: 'rose'
        },
        {
            label: 'NHF (2.5%)',
            value: totals.totalNHF,
            detail: 'Housing Allocation',
            icon: HomeModernIcon,
            color: 'amber'
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8 font-sans">
            {cards.map((card, i) => (
                <SummaryCard key={i} {...card} />
            ))}
        </div>
    );
};

export default PayrollSummary;
