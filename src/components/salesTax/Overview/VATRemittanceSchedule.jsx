import React from 'react';
import {
    CalendarIcon,
    CheckCircleIcon,
    ClockIcon,
    ExclamationCircleIcon
} from '@heroicons/react/24/outline';

const VATRemittanceSchedule = ({ schedule }) => {
    const formatCurrency = (val) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(val);

    const getStatusConfig = (status) => {
        const configs = {
            upcoming: { icon: ClockIcon, color: 'text-slate-500', bg: 'bg-slate-50', border: 'border-l-slate-400', label: 'Not Yet Due' },
            approaching: { icon: ExclamationCircleIcon, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-l-amber-500', label: 'Approaching' },
            overdue: { icon: ExclamationCircleIcon, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-l-rose-500', label: 'Overdue' },
            paid: { icon: CheckCircleIcon, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-l-emerald-500', label: 'Paid' }
        };
        return configs[status] || configs.upcoming;
    };

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm h-full font-sans">
            <div className="flex items-center gap-3 mb-6">
                <CalendarIcon className="w-5 h-5 text-teal-600" />
                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">VAT Remittance Schedule</h3>
            </div>

            <div className="space-y-6">
                <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Upcoming</h4>
                    <div className={`p-4 rounded-xl border-l-2 ${getStatusConfig(schedule.status).border} ${getStatusConfig(schedule.status).bg} dark:bg-slate-800/40 relative overflow-hidden group`}>
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <p className="text-sm font-black text-slate-900 dark:text-white">
                                    {new Date(schedule.dueDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </p>
                                <p className="text-[10px] font-bold text-slate-500 uppercase">28 days remaining</p>
                            </div>
                            <div className={`flex items-center gap-1.5 px-2 py-1 rounded-lg ${getStatusConfig(schedule.status).bg} border border-white/50 shadow-sm`}>
                                {React.createElement(getStatusConfig(schedule.status).icon, { className: `w-3 h-3 ${getStatusConfig(schedule.status).color}` })}
                                <span className={`text-[10px] font-black uppercase ${getStatusConfig(schedule.status).color}`}>{getStatusConfig(schedule.status).label}</span>
                            </div>
                        </div>
                        <p className="text-lg font-black text-slate-900 dark:text-white mb-4">{formatCurrency(schedule.amount)}</p>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-teal-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-teal-700 transition-all shadow-sm">Pay Now</button>
                            <button className="px-4 py-2 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 border border-slate-200 dark:border-slate-600 text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-slate-50 dark:hover:bg-slate-600 transition-all">Schedule</button>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Recent Remittances</h4>
                    <div className="space-y-3">
                        {schedule.history.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-dashed border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all">
                                <div>
                                    <p className="text-xs font-black text-slate-900 dark:text-white">{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase">Paid: {item.date}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-black text-slate-900 dark:text-white">{formatCurrency(item.amount)}</p>
                                    <div className="flex items-center justify-end gap-1 text-emerald-600">
                                        <CheckCircleIcon className="w-3 h-3" />
                                        <span className="text-[10px] font-black uppercase">Confirmed</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-2">
                    <button className="text-[10px] font-black text-teal-600 hover:text-teal-700 uppercase tracking-widest flex items-center gap-2 group">
                        View Full History
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VATRemittanceSchedule;
