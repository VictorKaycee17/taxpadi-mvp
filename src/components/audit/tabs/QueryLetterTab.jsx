import React from 'react';
import { ExclamationTriangleIcon, SparklesIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const QueryLetterTab = ({ issues }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-sans">
            <div className="lg:col-span-8">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">
                                FIRS Query: MB/2024/00892
                            </span>
                        </div>
                        <button className="p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-500 hover:text-teal-600 transition-colors">
                            <ArrowDownTrayIcon className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="p-12 prose prose-slate dark:prose-invert max-w-none">
                        <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            <div className="text-center font-black uppercase mb-8 border-b-2 border-slate-900 dark:border-white pb-4 inline-block">
                                Federal Inland Revenue Service
                            </div>
                            <p className="font-bold">The Managing Director,<br />Tech Solutions Ltd,<br />Lagos, Nigeria.</p>
                            <p className="font-black uppercase tracking-widest text-xs">NOTICE OF TAX AUDIT AND INVESTIGATION</p>
                            <p>We refer to the preliminary desk review of your Value Added Tax (VAT) filings for the 2024 accounting period. Our observations indicate significant discrepancies between reported sales and turnover disclosed in bank statements provided.</p>
                            <p>Specifically, you are requested to provide clarification on the following:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Variance in January 2024 VAT return for your Lagos branch.</li>
                                <li>Supporting documentation for inputs totaling ₦4,500,000.</li>
                                <li>Historical evidence of WHT remittances from tier-1 clients.</li>
                            </ul>
                            <p>Please note that failure to respond within 14 days may result in estimated assessments and penalties.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
                <div className="bg-teal-600 rounded-2xl p-6 text-white shadow-lg shadow-teal-500/20">
                    <div className="flex items-center gap-2 mb-4">
                        <SparklesIcon className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-widest">AI Audit Insights</span>
                    </div>
                    <p className="text-sm font-medium leading-relaxed mb-6 opacity-90">
                        Gee AI has identified 12 risk points in this query. Priority: High.
                    </p>
                    <button className="w-full py-3 bg-white text-teal-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-colors">
                        Analyze Risks
                    </button>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                    <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Key Observations</h5>
                    <div className="space-y-4">
                        {issues.map((issue, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <div className={`mt-1 p-1 rounded-md ${issue.severity === 'high' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'}`}>
                                    <ExclamationTriangleIcon className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-800 dark:text-slate-200">{issue.title}</p>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                                        {issue.points.length} linked documents
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryLetterTab;
