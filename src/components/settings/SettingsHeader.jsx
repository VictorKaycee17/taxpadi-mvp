import React from 'react';
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/20/solid';

const SettingsHeader = ({ lastSynced = "2 minutes ago" }) => {
    return (
        <div className="border-b border-slate-200 py-6 mb-6">
            <nav className="flex mb-4" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-xs text-slate-500">
                    <li>
                        <a href="/" className="hover:text-teal-600 transition-colors">Home</a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-slate-400" />
                        <span className="font-medium text-slate-900">Settings</span>
                    </li>
                </ol>
            </nav>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Settings</h1>
                    <p className="mt-1 text-sm text-slate-500">Manage your account, team, integrations, and preferences.</p>
                </div>
                <div className="flex items-center text-xs font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100 self-start md:self-center">
                    <span>Last synced: {lastSynced}</span>
                    <CheckCircleIcon className="ml-1.5 h-4 w-4 text-emerald-500" />
                </div>
            </div>
        </div>
    );
};

export default SettingsHeader;
