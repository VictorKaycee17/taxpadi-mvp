import React from 'react';
import {
    SparklesIcon,
    PencilSquareIcon,
    DocumentCheckIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';

const DraftResponseTab = ({ audit, issues, onUpdate }) => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 font-sans">
            {/* Editor Side */}
            <div className="xl:col-span-8">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden h-[700px] flex flex-col">
                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-teal-50 dark:bg-teal-500/10 rounded-lg">
                                <PencilSquareIcon className="w-4 h-4 text-teal-600" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">
                                Response Editor
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md">
                                Auto-saved at 2:34 PM
                            </span>
                        </div>
                    </div>

                    <div className="flex-1 p-12">
                        <textarea
                            className="w-full h-full bg-transparent border-none focus:ring-0 text-sm leading-relaxed text-slate-700 dark:text-slate-300 resize-none custom-scrollbar"
                            placeholder="Drafting response based on AI insights..."
                            defaultValue={`To: The Executive Chairman,\nFederal Inland Revenue Service,\nRegional Office, Lagos.\n\nDate: December 14, 2025\n\nDear Sir,\n\nRE: RESPONSE TO TAX AUDIT QUERY - MB/2024/00892\n\nWe acknowledge receipt of your query dated December 1, 2025, regarding our Value Added Tax (VAT) filings for the 2024 period. We have conducted a thorough review of our records and wish to provide clarification as follows:\n\n1. VARIANCE IN JANUARY 2024 RETURNS:\nThe observed variance of ₦1.2M was due to a technical error in our previous ERP system which has since been rectified. We have attached the reconciliation statement showing the corrected turnover.\n\n2. INPUT VAT DOCUMENTATION:\nAll supporting invoices for the ₦4.5M claim are now compiled and attached as Appendix A. These represent valid business expenses incurred during the period under review.\n\n...`}
                            onChange={(e) => onUpdate(e.target.value)}
                        />
                    </div>

                    <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 text-slate-400 hover:text-teal-600 transition-colors">
                                <DocumentCheckIcon className="w-5 h-5" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Verify Appendices</span>
                            </button>
                        </div>
                        <button className="px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all">
                            Finalize Draft
                        </button>
                    </div>
                </div>
            </div>

            {/* AI Assistant & Safety Side */}
            <div className="xl:col-span-4 space-y-6">
                <div className="bg-slate-900 rounded-2xl p-6 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <SparklesIcon className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-6">
                            <SparklesIcon className="w-5 h-5 text-teal-400" />
                            <span className="text-[10px] font-black uppercase tracking-widest tracking-[0.2em] text-teal-400">Gee Compliance AI</span>
                        </div>
                        <h4 className="text-lg font-black uppercase tracking-tight mb-4">Draft Optimization</h4>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <div className="p-1 bg-emerald-500/20 rounded text-emerald-400 mt-0.5">
                                    <ShieldCheckIcon className="w-4 h-4" />
                                </div>
                                <p className="text-[11px] font-bold text-slate-300 leading-relaxed uppercase tracking-wide">
                                    Tone matches FIRS professional standards.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="p-1 bg-emerald-500/20 rounded text-emerald-400 mt-0.5">
                                    <ShieldCheckIcon className="w-4 h-4" />
                                </div>
                                <p className="text-[11px] font-bold text-slate-300 leading-relaxed uppercase tracking-wide">
                                    Cites relevant sections of the VAT Act (as amended).
                                </p>
                            </li>
                        </ul>
                        <button className="w-full py-4 bg-teal-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/10">
                            Re-generate Selection
                        </button>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                    <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Requirement Checklist</h5>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">Formal Header</span>
                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">Query Reference</span>
                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">Evidence Citations</span>
                            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">Directors Signature</span>
                            <div className="w-2 h-2 bg-slate-200 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DraftResponseTab;
