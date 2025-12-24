import React from 'react';
import {
    CheckCircleIcon,
    XCircleIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/solid';

const SecurityStatusCard = ({ passwordStatus, twoFactorEnabled, emailVerified, phoneVerified, overallScore, onImprove }) => {
    const getStatusIcon = (status) => {
        if (status === true || status === 'Good') return <CheckCircleIcon className="w-4 h-4 text-emerald-500" />;
        return <XCircleIcon className="w-4 h-4 text-slate-300" />;
    };

    const getScoreColor = (score) => {
        if (score >= 80) return 'bg-emerald-500';
        if (score >= 50) return 'bg-amber-500';
        return 'bg-rose-500';
    };

    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Security Status</h3>
                <ShieldCheckIcon className="w-5 h-5 text-teal-600" />
            </div>
            <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 font-medium">Password</span>
                    <div className="flex items-center gap-1.5">
                        <span className={`text-xs font-bold ${passwordStatus === 'Good' ? 'text-emerald-600' : 'text-amber-600'}`}>{passwordStatus}</span>
                        {getStatusIcon(passwordStatus === 'Good')}
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 font-medium">2FA</span>
                    <div className="flex items-center gap-1.5">
                        <span className={`text-xs font-bold ${twoFactorEnabled ? 'text-emerald-600' : 'text-slate-400'}`}>{twoFactorEnabled ? 'Enabled' : 'Disabled'}</span>
                        {getStatusIcon(twoFactorEnabled)}
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 font-medium">Email</span>
                    <div className="flex items-center gap-1.5">
                        <span className={`text-xs font-bold ${emailVerified ? 'text-emerald-600' : 'text-slate-400'}`}>{emailVerified ? 'Verified' : 'Unverified'}</span>
                        {getStatusIcon(emailVerified)}
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 font-medium">Phone</span>
                    <div className="flex items-center gap-1.5">
                        <span className={`text-xs font-bold ${phoneVerified ? 'text-emerald-600' : 'text-slate-400'}`}>{phoneVerified ? 'Verified' : 'Unverified'}</span>
                        {getStatusIcon(phoneVerified)}
                    </div>
                </div>

                <div className="pt-4 space-y-2">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-slate-700">Overall Security Score</span>
                        <span className="text-xs font-black text-slate-900">{overallScore}/100</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className={`h-full transition-all duration-500 ${getScoreColor(overallScore)}`}
                            style={{ width: `${overallScore}%` }}
                        />
                    </div>
                </div>
            </div>
            <div className="px-6 py-4 bg-slate-50">
                <button
                    onClick={onImprove}
                    className="w-full py-2 bg-white border border-teal-200 text-teal-700 text-xs font-black rounded-xl hover:bg-teal-50 hover:border-teal-300 transition-all uppercase tracking-wider"
                >
                    Improve Security
                </button>
            </div>
        </div>
    );
};

export default SecurityStatusCard;
