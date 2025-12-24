import React from 'react';
import { DocumentPlusIcon } from '@heroicons/react/24/outline';

const EmptyInvoiceState = ({ onCreateClick }) => {
    return (
        <div className="flex flex-col items-center justify-center p-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] text-center min-h-[400px]">
            <div className="w-20 h-20 bg-teal-50 dark:bg-teal-900/10 rounded-3xl flex items-center justify-center mb-6">
                <DocumentPlusIcon className="w-10 h-10 text-teal-500" />
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">No invoices found</h3>
            <p className="text-slate-500 font-medium max-w-xs mb-8">
                Create your first invoice to start tracking your business revenue and tax compliance.
            </p>
            <button
                onClick={onCreateClick}
                className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl font-black shadow-xl shadow-teal-500/20 transition-all active:scale-95 flex items-center gap-2"
            >
                <DocumentPlusIcon className="w-5 h-5" />
                <span>Create Your First Invoice</span>
            </button>
        </div>
    );
};

export default EmptyInvoiceState;
