import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const PolicyEngineHeader = ({ breadcrumbs }) => {
    return (
        <div className="mb-8 font-sans">
            <div className="mb-6">
                {breadcrumbs && (
                    <nav className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
                        {breadcrumbs.map((crumb, idx) => (
                            <React.Fragment key={idx}>
                                {crumb.href ? (
                                    <a href={crumb.href} className="hover:text-teal-600 transition-colors uppercase tracking-widest">{crumb.label}</a>
                                ) : (
                                    <span className="uppercase tracking-widest">{crumb.label}</span>
                                )}
                                {idx < breadcrumbs.length - 1 && <ChevronRightIcon className="w-3 h-3" />}
                            </React.Fragment>
                        ))}
                    </nav>
                )}
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-1">Policy Intelligence Engine</h1>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Search, understand, and leverage tax policies</p>
            </div>
            <div className="h-px bg-slate-200 dark:bg-slate-800 w-full" />
        </div>
    );
};

export default PolicyEngineHeader;
