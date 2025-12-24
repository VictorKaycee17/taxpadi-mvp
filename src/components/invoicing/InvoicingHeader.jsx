import React from 'react';
import { PlusIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const InvoicingHeader = ({ title, subtitle, breadcrumbs, onCreateClick }) => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
                {breadcrumbs && (
                    <nav className="flex items-center gap-2 text-xs text-slate-500 mb-2">
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
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1">{title}</h1>
                <p className="text-sm text-slate-500 font-medium">{subtitle}</p>
            </div>

            <button
                onClick={onCreateClick}
                className="w-full sm:w-auto px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-bold shadow-lg shadow-teal-500/20 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
                <PlusIcon className="w-5 h-5" />
                <span>Create Invoice</span>
            </button>
        </div>
    );
};

export default InvoicingHeader;
