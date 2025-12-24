import React from 'react';

const AuditInfoPanel = ({ audit, progress }) => {
    const stats = [
        { label: 'Audit Status', value: audit?.status, detail: 'Action Required', type: 'status' },
        { label: 'Submission Deadline', value: audit?.deadline, detail: '7 days remaining', type: 'date' },
        { label: 'Audit Type', value: audit?.type, detail: `Tax Year ${audit?.taxYear}`, type: 'text' },
        { label: 'Documents Uploaded', value: `${Math.round(progress)}%`, detail: '8 of 12 required', type: 'progress' }
    ];

    const getStatusStyles = (status) => {
        if (status === 'Pending') return 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 border-amber-100 dark:border-amber-500/20';
        return 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border-emerald-100 dark:border-emerald-500/20';
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 font-sans">
            {stats.map((stat, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{stat.label}</p>
                    <div className="flex items-center justify-between">
                        {stat.type === 'status' ? (
                            <div className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${getStatusStyles(stat.value)}`}>
                                {stat.value}
                            </div>
                        ) : (
                            <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                                {stat.value}
                            </h3>
                        )}
                    </div>
                    <p className="mt-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.detail}</p>

                    {stat.type === 'progress' && (
                        <div className="mt-3 w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-teal-500 transition-all duration-1000"
                                style={{ width: stat.value }}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AuditInfoPanel;
