import React from 'react';

const TAX_TYPES = {
    cit: { label: 'CIT', color: '#3B82F6', text: 'text-white' },
    vat: { label: 'VAT', color: '#10B981', text: 'text-white' },
    paye: { label: 'PAYE', color: '#8B5CF6', text: 'text-white' },
    payroll: { label: 'PRR', color: '#EF4444', text: 'text-white' },
    audit: { label: 'AUD', color: '#F97316', text: 'text-white' },
    wht: { label: 'WHT', color: '#6366F1', text: 'text-white' },
    other: { label: 'OTH', color: '#64748B', text: 'text-white' }
};

const MainCalendarView = ({ view, obligations, onSelectEvent }) => {
    // For now, only Month view is fully implemented as a custom grid
    // In a production app, we would use a library like react-big-calendar

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Mock days for December 2025 (Starts on Monday, 31 days)
    const days = Array.from({ length: 31 }, (_, i) => ({
        day: i + 1,
        events: obligations.filter(o => o.dueDate.getDate() === i + 1 && o.dueDate.getMonth() === 11)
    }));

    // Add empty slots for the first day (Monday = index 1)
    const emptySlots = Array.from({ length: 1 }, () => null);
    const allSlots = [...emptySlots, ...days];

    if (view !== 'month') {
        return (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-20 text-center opacity-40 grayscale font-sans">
                <p className="text-sm font-black uppercase tracking-widest text-slate-500">{view} view is coming soon in the next release!</p>
                <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-tight">Only Month View is currently supported in this Pro preview.</p>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-sm font-sans">
            {/* Header */}
            <div className="grid grid-cols-7 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                {daysOfWeek.map(day => (
                    <div key={day} className="py-4 text-center">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{day}</span>
                    </div>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-7 grid-rows-5">
                {allSlots.map((slot, idx) => (
                    <div
                        key={idx}
                        className={`min-h-[140px] p-3 border-r border-b border-slate-50 dark:border-slate-800 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/30 ${idx % 7 === 6 ? 'border-r-0' : ''}`}
                    >
                        {slot && (
                            <>
                                <div className="flex justify-between items-start mb-3">
                                    <span className={`text-sm font-black transition-colors ${slot.day === new Date().getDate() ? 'w-7 h-7 bg-teal-600 text-white rounded-full flex items-center justify-center -mt-1 -ml-1' : 'text-slate-900 dark:text-slate-200'}`}>
                                        {slot.day}
                                    </span>
                                </div>
                                <div className="space-y-1.5">
                                    {slot.events.map(event => (
                                        <button
                                            key={event.id}
                                            onClick={() => onSelectEvent(event)}
                                            className="w-full flex items-center gap-2 group cursor-pointer"
                                        >
                                            <div
                                                className="w-1.5 h-6 rounded-full shrink-0 group-hover:scale-x-150 transition-transform"
                                                style={{ backgroundColor: TAX_TYPES[event.type]?.color || '#64748B' }}
                                            />
                                            <div className="flex flex-col items-start overflow-hidden">
                                                <span className="text-[10px] font-black text-slate-900 dark:text-slate-200 uppercase tracking-tight truncate w-full text-left leading-none">
                                                    {event.title}
                                                </span>
                                                <span className={`text-[8px] font-bold uppercase tracking-widest opacity-60 leading-none mt-1`} style={{ color: TAX_TYPES[event.type]?.color }}>
                                                    {TAX_TYPES[event.type]?.label}
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="p-6 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-6 justify-center">
                {Object.entries(TAX_TYPES).map(([key, config]) => (
                    <div key={key} className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: config.color }} />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{config.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainCalendarView;
