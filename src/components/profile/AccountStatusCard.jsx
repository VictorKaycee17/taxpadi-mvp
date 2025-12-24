import React from 'react';
import {
    CreditCardIcon,
    ArrowPathIcon,
    ShieldExclamationIcon,
    ArrowUpCircleIcon
} from '@heroicons/react/24/solid';

const AccountStatusCard = ({ planTier, status, cost, renewalDate, memberSince, onUpgrade, onBilling, onCancel }) => {
    const getStatusStyles = (s) => {
        switch (s.toLowerCase()) {
            case 'active': return 'bg-emerald-100 text-emerald-700';
            case 'cancelled': return 'bg-rose-100 text-rose-700';
            case 'expiring': return 'bg-amber-100 text-amber-700';
            default: return 'bg-slate-100 text-slate-700';
        }
    };

    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Account Status</h3>
            </div>
            <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 font-medium">Plan Tier</span>
                    <span className="text-sm font-black text-teal-600 uppercase">{planTier}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 font-medium">Status</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${getStatusStyles(status)}`}>
                        {status}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 font-medium">Monthly Cost</span>
                    <span className="text-sm font-bold text-slate-900">{cost}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 font-medium">Renewal</span>
                    <span className="text-sm font-medium text-slate-600">{renewalDate}</span>
                </div>
                <div className="pt-2 border-t border-slate-50">
                    <p className="text-[10px] text-slate-400 font-medium italic text-right">Member since: {memberSince}</p>
                </div>
            </div>
            <div className="px-6 py-4 bg-slate-50 flex flex-col gap-2">
                <button
                    onClick={onUpgrade}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 text-white text-xs font-black rounded-xl hover:bg-emerald-700 transition-all shadow-md shadow-emerald-500/10"
                >
                    <ArrowUpCircleIcon className="w-4 h-4" />
                    Upgrade Plan
                </button>
                <div className="flex gap-2">
                    <button
                        onClick={onBilling}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-50 transition-all"
                    >
                        <CreditCardIcon className="w-4 h-4 text-slate-400" />
                        Billing
                    </button>
                    <button
                        onClick={onCancel}
                        className="flex-1 px-3 py-2 text-rose-500 text-xs font-bold hover:bg-rose-50 rounded-xl transition-all"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccountStatusCard;
