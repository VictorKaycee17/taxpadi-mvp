import React from 'react';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ArrowPathIcon,
    PlusIcon,
    CalendarDaysIcon,
    ListBulletIcon,
    ClockIcon
} from '@heroicons/react/24/outline';

const CalendarControls = ({
    view,
    onViewChange,
    onPrev,
    onNext,
    onToday,
    onSync,
    syncing,
    onAdd
}) => {
    const views = [
        { id: 'month', label: 'Month', icon: CalendarDaysIcon },
        { id: 'week', label: 'Week', icon: ClockIcon },
        { id: 'day', label: 'Day', icon: ClockIcon },
        { id: 'agenda', label: 'Agenda', icon: ListBulletIcon },
    ];

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 mb-6 shadow-sm font-sans flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* View Selection */}
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
                {views.map((v) => (
                    <button
                        key={v.id}
                        onClick={() => onViewChange(v.id)}
                        className={`flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${view === v.id
                                ? 'bg-white dark:bg-slate-700 text-teal-600 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                            }`}
                    >
                        {v.label}
                    </button>
                ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onToday}
                    className="px-4 py-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-slate-200 dark:border-slate-800"
                >
                    Today
                </button>
                <div className="flex items-center gap-1">
                    <button
                        onClick={onPrev}
                        className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-teal-600 transition-colors"
                    >
                        <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                    <button
                        onClick={onNext}
                        className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-teal-600 transition-colors"
                    >
                        <ChevronRightIcon className="w-5 h-5" />
                    </button>
                </div>
                <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight ml-2">December 2025</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
                <button
                    onClick={onSync}
                    disabled={syncing}
                    className={`flex items-center gap-2 px-6 h-12 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${syncing
                            ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                            : 'bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 hover:bg-teal-100 dark:hover:bg-teal-500/20 shadow-sm'
                        }`}
                >
                    <ArrowPathIcon className={`w-4 h-4 ${syncing ? 'animate-spin' : ''}`} />
                    {syncing ? 'Syncing with FIRS...' : 'Sync with FIRS'}
                </button>
                <button
                    onClick={onAdd}
                    className="flex items-center gap-2 px-6 h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95"
                >
                    <PlusIcon className="w-4 h-4" />
                    Add Obligation
                </button>
            </div>
        </div>
    );
};

export default CalendarControls;
