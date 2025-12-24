import React from 'react';
import {
    DocumentTextIcon,
    PlusCircleIcon,
    ArrowPathIcon,
    Cog6ToothIcon
} from '@heroicons/react/24/outline';

const FilingHubHeader = ({ onViewAll, onCreate, onSync, onSettings }) => {
    return (
        <div className="bg-gradient-to-b from-teal-50 to-white border-b border-slate-200 px-6 py-6 mb-6">
            <div className="max-w-[1400px] mx-auto">
                {/* Breadcrumb */}
                <div className="text-sm text-slate-500 mb-2 font-medium">
                    Home &gt; Compliance &gt; Filing Hub
                </div>

                {/* Title & Subtitle */}
                <div className="mb-5">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">
                        Filing Hub
                    </h1>
                    <p className="text-sm text-slate-600">
                        Manage and submit tax returns directly to FIRS.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                    <button
                        onClick={onViewAll}
                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-300 transition-all"
                    >
                        <DocumentTextIcon className="w-5 h-5" />
                        View All Returns
                    </button>
                    <button
                        onClick={onCreate}
                        className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-500/20"
                    >
                        <PlusCircleIcon className="w-5 h-5" />
                        Create Return
                    </button>
                    <button
                        onClick={onSync}
                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-300 transition-all"
                    >
                        <ArrowPathIcon className="w-5 h-5" />
                        Sync Data
                    </button>
                    <button
                        onClick={onSettings}
                        className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all"
                    >
                        <Cog6ToothIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilingHubHeader;
