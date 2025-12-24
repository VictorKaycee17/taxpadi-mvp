import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const SalesTaxHeader = ({ activeTab, onTabChange, breadcrumbs }) => {
    return (
        <div className="mb-8">
            <div className="mb-6">
                {breadcrumbs && (
                    <nav className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
                        {breadcrumbs.map((crumb, idx) => (
                            <React.Fragment key={idx}>
                                {crumb.href ? (
                                    <a href={crumb.href} className="hover:text-teal-600 transition-colors">{crumb.label}</a>
                                ) : (
                                    <span>{crumb.label}</span>
                                )}
                                {idx < breadcrumbs.length - 1 && <ChevronRightIcon className="w-3 h-3" />}
                            </React.Fragment>
                        ))}
                    </nav>
                )}
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-1">Sales Tax Intelligence</h1>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Monitor VAT compliance and product taxability</p>
            </div>

            <div className="flex border-b border-slate-200 dark:border-slate-800">
                <button
                    onClick={() => onTabChange('overview')}
                    className={`px-6 py-3 text-sm font-black transition-all border-b-2 uppercase tracking-widest ${activeTab === 'overview'
                            ? 'text-teal-500 border-teal-500 bg-teal-50/50 dark:bg-teal-500/5'
                            : 'text-slate-500 border-transparent hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                >
                    Overview
                </button>
                <button
                    onClick={() => onTabChange('taxabilityCheck')}
                    className={`px-6 py-3 text-sm font-black transition-all border-b-2 uppercase tracking-widest ${activeTab === 'taxabilityCheck'
                            ? 'text-teal-500 border-teal-500 bg-teal-50/50 dark:bg-teal-500/5'
                            : 'text-slate-500 border-transparent hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                >
                    AI Taxability Check
                </button>
            </div>
        </div>
    );
};

export default SalesTaxHeader;
