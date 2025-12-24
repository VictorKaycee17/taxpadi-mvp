import React from 'react';
import { Cog8ToothIcon, XMarkIcon, PlusIcon } from '@heroicons/react/24/outline';

const IntegrationCard = ({
    name,
    description,
    status = 'disconnected',
    lastSync,
    syncFreq,
    icon,
    onConnect,
    onDisconnect,
    onSettings
}) => {
    const statusConfig = {
        connected: {
            label: 'Connected',
            color: 'text-emerald-500',
            bg: 'bg-emerald-50',
            dot: 'bg-emerald-500'
        },
        disconnected: {
            label: 'Not Connected',
            color: 'text-slate-400',
            bg: 'bg-slate-100',
            dot: 'bg-slate-400'
        },
        syncing: {
            label: 'Syncing...',
            color: 'text-amber-500',
            bg: 'bg-amber-50',
            dot: 'bg-amber-500'
        },
        error: {
            label: 'Error',
            color: 'text-rose-500',
            bg: 'bg-rose-50',
            dot: 'bg-rose-500'
        }
    };

    const config = statusConfig[status] || statusConfig.disconnected;

    return (
        <div className="border border-slate-200 rounded-lg p-5 bg-white hover:border-teal-200 transition-colors shadow-sm group">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-2xl border border-slate-100 group-hover:bg-teal-50 transition-colors">
                        {icon}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">{name}</h4>
                        <p className="text-xs text-slate-500">{description}</p>
                    </div>
                </div>

                <div className="flex-1 sm:text-center px-4">
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${config.bg} ${config.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${config.dot} mr-1.5`}></span>
                        {config.label}
                    </div>
                    {status === 'connected' && (
                        <div className="mt-1 text-[10px] text-slate-500 uppercase tracking-wider font-medium">
                            {syncFreq} • Last: {lastSync}
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    {status === 'connected' ? (
                        <>
                            <button
                                onClick={onSettings}
                                className="p-2 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all"
                                title="Settings"
                            >
                                <Cog8ToothIcon className="w-5 h-5" />
                            </button>
                            <button
                                onClick={onDisconnect}
                                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                                title="Disconnect"
                            >
                                <XMarkIcon className="w-5 h-5" />
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={onConnect}
                            className="flex items-center gap-1.5 px-4 py-2 bg-teal-50 text-teal-600 hover:bg-teal-100 text-sm font-bold rounded-lg transition-all"
                        >
                            <PlusIcon className="w-4 h-4" />
                            Connect
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default IntegrationCard;
