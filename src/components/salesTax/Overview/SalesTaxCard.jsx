import React from 'react';

const SalesTaxCard = ({ title, value, subValue, trend, info, type, linkText, onLinkClick }) => {
    const config = {
        sales: 'border-l-4 border-l-teal-500',
        vat: 'border-l-4 border-l-emerald-500',
        remittance: 'border-l-4 border-l-amber-500'
    };

    const style = config[type] || config.sales;

    return (
        <div className={`bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-md ${style}`}>
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">{title}</h3>

            <div className="space-y-1 mb-6">
                <p className="text-2xl font-black text-slate-900 dark:text-white">{value}</p>
                {subValue && <p className="text-sm font-bold text-slate-600 dark:text-slate-300">{subValue}</p>}
            </div>

            <div className="flex flex-col gap-3">
                {trend && (
                    <div className="flex items-center gap-2">
                        <span className={`text-xs font-black ${trend.direction === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                            {trend.direction === 'up' ? '↑' : '↓'} {trend.percentage}%
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase">vs last month</span>
                    </div>
                )}

                {info && (
                    <div className="py-2 px-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-wider">{info}</p>
                    </div>
                )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-800">
                <button
                    onClick={onLinkClick}
                    className="text-xs font-black text-teal-600 hover:text-teal-700 underline transition-colors uppercase tracking-widest"
                >
                    {linkText || 'View Details'} →
                </button>
            </div>
        </div>
    );
};

export default SalesTaxCard;
