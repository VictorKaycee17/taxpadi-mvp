import React from 'react';
import ReturnCard from './ReturnCard';

const ActiveReturnsSection = ({ returns, onContinue, onView, onAction, onViewAll }) => {
    return (
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6 shadow-sm">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-slate-900">
                    Active Returns ({returns.length})
                </h2>
                {onViewAll && (
                    <button
                        onClick={onViewAll}
                        className="text-sm font-bold text-teal-600 hover:text-teal-700 hover:underline transition-all"
                    >
                        View All
                    </button>
                )}
            </div>

            {/* Returns Grid */}
            {returns.length === 0 ? (
                <div className="text-center py-12">
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-5xl">📋</span>
                        <p className="text-sm font-medium text-slate-600">No active returns</p>
                        <p className="text-xs text-slate-500">Create a new return to get started</p>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {returns.map(returnData => (
                        <ReturnCard
                            key={returnData.id}
                            returnData={returnData}
                            onContinue={onContinue}
                            onView={onView}
                            onAction={onAction}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ActiveReturnsSection;
