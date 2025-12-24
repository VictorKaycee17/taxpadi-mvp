import React from 'react';
import { SignalIcon, SignalSlashIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

const TerminalCardsGrid = ({ terminals = [] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {terminals.map(terminal => (
                <div
                    key={terminal.id}
                    className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-lg hover:border-teal-300 transition-all cursor-pointer"
                >
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${terminal.status === 'online' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'
                                }`}>
                                {terminal.status === 'online' ? <SignalIcon className="w-5 h-5" /> : <SignalSlashIcon className="w-5 h-5" />}
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-900">{terminal.name}</h3>
                                <p className="text-xs text-slate-500">{terminal.id}</p>
                            </div>
                        </div>
                        <button className="text-slate-400 hover:text-slate-600">
                            <EllipsisHorizontalIcon className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-600">Sales</span>
                            <span className="font-bold text-slate-900">₦{terminal.sales.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-600">Transactions</span>
                            <span className="font-medium text-slate-900">{terminal.transactions}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-600">Avg Ticket</span>
                            <span className="font-medium text-slate-900">₦{terminal.avgTicket.toLocaleString()}</span>
                        </div>
                    </div>

                    {/* Footer - Status */}
                    <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                        <div className="flex items-center gap-1.5">
                            <div className={`w-2 h-2 rounded-full ${terminal.status === 'online' ? 'bg-emerald-500' : 'bg-slate-400'
                                }`}></div>
                            <span className={`text-xs font-bold ${terminal.status === 'online' ? 'text-emerald-700' : 'text-slate-600'
                                }`}>
                                {terminal.status === 'online' ? 'Synced' : 'Offline'}
                            </span>
                        </div>
                        <span className="text-xs text-slate-400">Last: {terminal.lastSync}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TerminalCardsGrid;
