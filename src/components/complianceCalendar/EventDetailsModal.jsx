import React from 'react';
import {
    XMarkIcon,
    CalendarIcon,
    ClockIcon,
    ShieldCheckIcon,
    MapPinIcon,
    DocumentTextIcon,
    ArrowUpTrayIcon,
    CheckCircleIcon,
    TrashIcon,
    PencilIcon
} from '@heroicons/react/24/outline';

const EventDetailsModal = ({ event, onClose, onComplete }) => {
    if (!event) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-sans">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose} />

            <div className="relative bg-white dark:bg-slate-950 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 border border-slate-100 dark:border-slate-800">
                {/* Header */}
                <div className="p-8 border-b border-slate-100 dark:border-slate-900 flex justify-between items-start bg-slate-50/50 dark:bg-slate-900/30">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-teal-50 dark:bg-teal-500/10 border border-teal-100 dark:border-teal-500/30 rounded-lg text-[10px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                                {event.type.toUpperCase()} Obligation
                            </span>
                            <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-[0.15em] ${event.status === 'completed' ? 'text-emerald-600 bg-emerald-50' : 'text-amber-500 bg-amber-50'}`}>
                                {event.status.replace('_', ' ')}
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            {event.title}
                        </h2>
                    </div>
                    <button onClick={onClose} className="p-3 bg-white dark:bg-slate-800 rounded-full hover:bg-rose-50 dark:hover:bg-rose-500/10 hover:text-rose-600 transition-all shadow-sm border border-slate-100 dark:border-slate-800">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    {/* Grid Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl group-hover:scale-110 transition-transform">
                                    <CalendarIcon className="w-5 h-5 text-slate-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Due Date</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-slate-200">{event.dueDate.toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl group-hover:scale-110 transition-transform">
                                    <ClockIcon className="w-5 h-5 text-slate-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Submission Time</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-slate-200">{event.dueTime} WAT</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl group-hover:scale-110 transition-transform">
                                    <MapPinIcon className="w-5 h-5 text-slate-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Jurisdiction</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-slate-200 uppercase tracking-tight">{event.jurisdiction} {event.state ? `(${event.state})` : ''}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl group-hover:scale-110 transition-transform">
                                    <ShieldCheckIcon className="w-5 h-5 text-slate-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Priority Level</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-slate-200 uppercase tracking-tight">{event.priority}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-12">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Obligation Summary</h4>
                        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 italic text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            {event.description}
                        </div>
                    </div>

                    {/* Documents */}
                    <div className="mb-12">
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Required Documents</h4>
                            <button className="flex items-center gap-2 text-[10px] font-black text-teal-600 uppercase tracking-widest hover:text-teal-700 transition-colors">
                                <ArrowUpTrayIcon className="w-4 h-4" /> Upload New
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {event.documents?.map((doc, idx) => (
                                <div key={idx} className="flex justify-between items-center p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl group hover:border-teal-200 transition-all">
                                    <div className="flex items-center gap-3">
                                        <DocumentTextIcon className="w-5 h-5 text-slate-300 group-hover:text-teal-500 transition-colors" />
                                        <span className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-tight">{doc}</span>
                                    </div>
                                    <button className="text-[9px] font-black text-slate-400 hover:text-teal-600 uppercase tracking-widest transition-colors">View</button>
                                </div>
                            ))}
                            {!event.documents?.length && (
                                <div className="col-span-full py-8 text-center text-slate-400 font-bold uppercase tracking-widest text-[10px] border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-3xl">
                                    No documents attached
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-8 border-t border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/30 flex flex-wrap gap-4">
                    {event.status !== 'completed' && (
                        <button
                            onClick={() => {
                                onComplete(event.id);
                                onClose();
                            }}
                            className="flex-grow min-w-[200px] h-16 flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-teal-500/10 transition-all active:scale-95 translate-y-0 hover:-translate-y-1"
                        >
                            <CheckCircleIcon className="w-5 h-5" />
                            Mark as Completed
                        </button>
                    )}
                    <div className="flex gap-2 w-full sm:w-auto">
                        <button className="flex-1 sm:w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl text-slate-400 hover:text-teal-600 transition-all shadow-sm active:scale-90">
                            <PencilIcon className="w-5 h-5" />
                        </button>
                        <button className="flex-1 sm:w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl text-slate-400 hover:text-rose-600 transition-all shadow-sm active:scale-90">
                            <TrashIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsModal;
