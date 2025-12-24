import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const AuditHeader = () => {
    return (
        <div className="mb-6 font-sans">
            <nav className="flex mb-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span className="hover:text-teal-600 cursor-pointer transition-colors">Home</span>
                <ChevronRightIcon className="w-3 h-3 mx-2 self-center" />
                <span className="hover:text-teal-600 cursor-pointer transition-colors">Compliance</span>
                <ChevronRightIcon className="w-3 h-3 mx-2 self-center" />
                <span className="text-slate-900 dark:text-white">Audit & Dispute Kit</span>
            </nav>

            <div>
                <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">
                    Audit & Dispute Kit
                </h1>
                <p className="text-slate-500 dark:text-slate-400 font-bold text-sm tracking-wide">
                    Manage audit responses, upload documents, and submit to FIRS
                </p>
            </div>
        </div>
    );
};

export default AuditHeader;
