import React from 'react';
import {
    DocumentTextIcon,
    ExclamationCircleIcon,
    CheckCircleIcon,
    PencilSquareIcon
} from '@heroicons/react/24/outline';

const StatCard = ({ title, value, subValue, info, type, linkText, onLinkClick }) => {
    const config = {
        outstanding: {
            icon: <DocumentTextIcon className="w-5 h-5 text-amber-500" />,
            border: 'border-l-4 border-l-amber-500',
            linkClass: 'text-amber-600 hover:text-amber-700'
        },
        overdue: {
            icon: <ExclamationCircleIcon className="w-5 h-5 text-rose-500" />,
            border: 'border-l-4 border-l-rose-500',
            linkClass: 'text-rose-600 hover:text-rose-700'
        },
        paid: {
            icon: <CheckCircleIcon className="w-5 h-5 text-emerald-500" />,
            border: 'border-l-4 border-l-emerald-500',
            linkClass: 'text-emerald-600 hover:text-emerald-700'
        },
        draft: {
            icon: <PencilSquareIcon className="w-5 h-5 text-slate-400" />,
            border: 'border-l-4 border-l-slate-400',
            linkClass: 'text-slate-600 hover:text-slate-700'
        }
    };

    const style = config[type] || config.outstanding;

    return (
        <div className={`bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md ${style.border}`}>
            <div className="flex items-center gap-2 mb-4">
                {style.icon}
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{title}</h3>
            </div>

            <div className="space-y-1 mb-4">
                <p className="text-2xl font-black text-slate-900 dark:text-white">{value}</p>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{subValue}</p>
            </div>

            <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{info}</span>
                <button
                    onClick={onLinkClick}
                    className={`text-xs font-bold underline transition-colors ${style.linkClass}`}
                >
                    {linkText} →
                </button>
            </div>
        </div>
    );
};

export default StatCard;
