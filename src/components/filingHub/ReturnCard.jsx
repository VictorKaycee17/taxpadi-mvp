import React from 'react';
import { EyeIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';

const ReturnCard = ({
    returnData,
    onContinue,
    onView,
    onAction
}) => {
    const { id, type, period, status, progress, nextStep, din, filedDate, icon } = returnData;

    const getStatusBadge = (status) => {
        const badges = {
            draft: { bg: 'bg-slate-100', text: 'text-slate-700', label: 'Draft', icon: '📝' },
            pending: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Pending', icon: '⏳' },
            filed: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: 'Filed', icon: '✓' }
        };
        return badges[status] || badges.draft;
    };

    const badge = getStatusBadge(status);

    return (
        <div className="bg-white border border-slate-200 rounded-xl p-4 transition-all duration-200 hover:shadow-lg hover:border-teal-300">
            {/* Card Header */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                    <span className="text-2xl">{icon || '📄'}</span>
                    <div>
                        <h3 className="text-sm font-bold text-slate-900">{type}</h3>
                        <p className="text-xs text-slate-600">{period}</p>
                    </div>
                </div>
                <button
                    onClick={() => onAction(id)}
                    className="p-1 text-slate-400 hover:text-slate-600 rounded transition-all"
                >
                    <EllipsisVerticalIcon className="w-5 h-5" />
                </button>
            </div>

            {/* Status Badge */}
            <div className="mb-3">
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full ${badge.bg} ${badge.text} text-xs font-bold uppercase tracking-wider`}>
                    {badge.icon} {badge.label}
                </span>
            </div>

            {/* Progress Bar (for Draft/Pending) */}
            {(status === 'draft' || status === 'pending') && progress !== undefined && (
                <div className="mb-3">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-medium text-slate-600">Progress</span>
                        <span className="text-xs font-bold text-slate-900">{progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-teal-500 transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Filed Info */}
            {status === 'filed' && (
                <div className="mb-3 space-y-1">
                    <p className="text-xs text-slate-600">Filed on {filedDate}</p>
                    {din && <p className="text-xs font-mono text-slate-500">DIN: {din}</p>}
                </div>
            )}

            {/* Next Step */}
            {nextStep && (
                <p className="text-xs text-slate-500 mb-4">Next: {nextStep}</p>
            )}

            {/* Card Actions */}
            <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                {status === 'draft' && (
                    <button
                        onClick={() => onContinue(id)}
                        className="flex-1 px-4 py-2 bg-teal-600 text-white text-xs font-bold rounded-lg hover:bg-teal-700 transition-all shadow-sm"
                    >
                        Continue
                    </button>
                )}
                {status === 'pending' && (
                    <button
                        onClick={() => onContinue(id)}
                        className="flex-1 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-all shadow-sm"
                    >
                        File Return
                    </button>
                )}
                <button
                    onClick={() => onView(id)}
                    className={`flex items-center justify-center gap-1 px-4 py-2 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-50 transition-all ${status === 'filed' ? 'flex-1' : ''
                        }`}
                >
                    <EyeIcon className="w-4 h-4" />
                    View
                </button>
            </div>
        </div>
    );
};

export default ReturnCard;
