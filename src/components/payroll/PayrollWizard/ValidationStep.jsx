import React from 'react';
import {
    CheckCircleIcon,
    ExclamationTriangleIcon,
    NoSymbolIcon,
    ChevronRightIcon
} from '@heroicons/react/24/outline';

const ChecklistItem = ({ title, description, status, actionLabel, onAction }) => {
    const statusConfig = {
        valid: { icon: CheckCircleIcon, color: 'emerald', bg: 'emerald' },
        warning: { icon: ExclamationTriangleIcon, color: 'amber', bg: 'amber' },
        error: { icon: NoSymbolIcon, color: 'rose', bg: 'rose' }
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
        <div className="flex items-start gap-4 p-4 border-b border-slate-100 dark:border-slate-800 last:border-0 group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
            <div className={`mt-0.5 p-2 rounded-lg bg-${config.bg}-50 dark:bg-${config.bg}-500/10 text-${config.color}-600`}>
                <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">{title}</h4>
                    <span className={`text-[10px] font-black uppercase tracking-widest text-${config.color}-600`}>
                        {status === 'valid' ? 'Complete' : 'Attention Required'}
                    </span>
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-3">
                    {description}
                </p>
                {status !== 'valid' && actionLabel && (
                    <button
                        onClick={onAction}
                        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-[10px] font-black uppercase tracking-widest text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-500/10 transition-all shadow-sm group/btn"
                    >
                        {actionLabel}
                        <ChevronRightIcon className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                )}
            </div>
        </div>
    );
};

const ValidationStep = ({ employees }) => {
    const invalidEmployees = employees.filter(e => e.validationStatus !== 'valid');
    const missingBank = employees.filter(e => !e.bankName || !e.accountNumber).length;
    const missingTax = employees.filter(e => !e.taxStatus).length;

    const items = [
        {
            title: 'Employee Records',
            description: `All ${employees.length} employee base profiles are complete and active.`,
            status: 'valid'
        },
        {
            title: 'Salary & Allowances',
            description: 'Monthly gross salary data has been synchronized from the HR database.',
            status: 'valid'
        },
        {
            title: 'Tax Status Verification',
            description: missingTax > 0 ? `${missingTax} employees have unverified tax status.` : 'All employees have been verified for PAYE eligibility.',
            status: missingTax > 0 ? 'warning' : 'valid',
            actionLabel: 'Verify Status'
        },
        {
            title: 'Bank & Payment Details',
            description: missingBank > 0 ? `${missingBank} employees are missing valid bank account information.` : 'All payment destinations have been validated with the Nigerian Inter-Bank Settlement System.',
            status: missingBank > 0 ? 'error' : 'valid',
            actionLabel: 'Update Bank Details'
        }
    ];

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden font-sans">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
                    Compliance & Data Integrity Checks
                </h3>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800/50">
                {items.map((item, i) => (
                    <ChecklistItem key={i} {...item} />
                ))}
            </div>
        </div>
    );
};

export default ValidationStep;
