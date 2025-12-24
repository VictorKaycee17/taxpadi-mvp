import React from 'react';
import {
    CheckCircleIcon,
    EllipsisVerticalIcon,
    ExclamationCircleIcon,
    ClockIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';

const PRIORITY_COLOR = {
    high: 'text-rose-500 bg-rose-50 dark:bg-rose-500/10 border-rose-100 dark:border-rose-500/20',
    medium: 'text-amber-500 bg-amber-50 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/20',
    low: 'text-teal-500 bg-teal-50 dark:bg-teal-500/10 border-teal-100 dark:border-teal-500/20'
};

const ComplianceScore = ({ score, total, completed }) => {
    const isHigh = score >= 80;
    const isMedium = score >= 50 && score < 80;

    return (
        <div className="mb-10 p-8 bg-slate-900 dark:bg-slate-950 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl" />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Compliance Score</h4>
                    <span className="px-2 py-0.5 bg-white/10 rounded-md text-[9px] font-black uppercase tracking-[0.15em] text-teal-400">Real-time</span>
                </div>

                <div className="flex items-end gap-3 mb-6">
                    <span className="text-5xl font-black">{score}%</span>
                    <span className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-tight">On track</span>
                </div>

                <div className="w-full h-3 bg-white/5 rounded-full mb-6 overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-1000 ${isHigh ? 'bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.5)]' : 'bg-amber-500'}`}
                        style={{ width: `${score}%` }}
                    />
                </div>

                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {completed} of {total} obligations completed
                </p>
            </div>
        </div>
    );
};

const ObligationTaskItem = ({ obligation, onComplete, onSelect }) => {
    const isCompleted = obligation.status === 'completed';

    return (
        <div
            onClick={() => onSelect(obligation)}
            className={`group p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl hover:shadow-lg transition-all cursor-pointer relative overflow-hidden ${isCompleted ? 'opacity-60' : ''}`}
        >
            {isCompleted && (
                <div className="absolute top-3 right-3">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-500" />
                </div>
            )}

            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg border text-[10px] font-black uppercase tracking-widest ${PRIORITY_COLOR[obligation.priority]}`}>
                        {obligation.priority}
                    </div>
                    {obligation.status === 'overdue' && (
                        <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-rose-500">
                            <ExclamationCircleIcon className="w-4 h-4" /> Overdue
                        </div>
                    )}
                </div>
                {!isCompleted && (
                    <button className="p-1 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors">
                        <EllipsisVerticalIcon className="w-5 h-5 text-slate-400" />
                    </button>
                )}
            </div>

            <h5 className={`font-black uppercase tracking-tight text-sm mb-1 ${isCompleted ? 'line-through text-slate-400' : 'text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors'}`}>
                {obligation.title}
            </h5>

            <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1.5 opacity-60">
                    <ClockIcon className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Dec {obligation.dueDate.getDate()}</span>
                </div>
                <div className="flex items-center gap-1.5 opacity-60">
                    <ShieldCheckIcon className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{obligation.type}</span>
                </div>
            </div>

            {!isCompleted && (
                <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-800 flex justify-between items-center">
                    <span className="text-[9px] font-black text-rose-500 uppercase tracking-widest">
                        {Math.max(0, Math.ceil((obligation.dueDate - new Date()) / (1000 * 60 * 60 * 24)))} Days Left
                    </span>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onComplete(obligation.id);
                        }}
                        className="text-[10px] font-black text-teal-600 hover:text-teal-700 uppercase tracking-widest transition-all hover:translate-x-1"
                    >
                        Mark Complete →
                    </button>
                </div>
            )}
        </div>
    );
};

const UpcomingObligationsSidebar = ({ obligations, score, onComplete, onSelect }) => {
    const upcoming = obligations.filter(o => o.status !== 'completed').sort((a, b) => a.dueDate - b.dueDate);

    return (
        <div className="font-sans">
            <ComplianceScore
                score={score}
                total={obligations.length}
                completed={obligations.filter(o => o.status === 'completed').length}
            />

            <div className="flex justify-between items-baseline mb-6 px-2">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Upcoming Obligations</h4>
                <button className="text-[9px] font-black text-teal-600 uppercase tracking-widest hover:underline decoration-2">View All</button>
            </div>

            <div className="space-y-4">
                {upcoming.map(o => (
                    <ObligationTaskItem
                        key={o.id}
                        obligation={o}
                        onComplete={onComplete}
                        onSelect={onSelect}
                    />
                ))}

                {upcoming.length === 0 && (
                    <div className="p-10 text-center bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 opacity-40 grayscale">
                        <CheckCircleIcon className="w-12 h-12 mx-auto mb-4 text-teal-500" />
                        <p className="text-[10px] font-black uppercase tracking-widest">All caught up!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UpcomingObligationsSidebar;
