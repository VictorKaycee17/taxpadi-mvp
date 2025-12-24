import React from 'react';
import {
    CheckCircleIcon,
    XCircleIcon,
    ExclamationTriangleIcon,
    QuestionMarkCircleIcon,
    DocumentTextIcon,
    ArrowDownTrayIcon,
    EnvelopeIcon,
    BookmarkIcon
} from '@heroicons/react/24/outline';

const TaxabilityOutput = ({ result }) => {
    if (!result) return null;

    const getVerdictConfig = (verdict) => {
        const configs = {
            taxable: {
                icon: CheckCircleIcon,
                label: 'TAXABLE',
                bg: 'bg-emerald-50',
                text: 'text-emerald-700',
                border: 'border-emerald-500',
                opacity: 'border-emerald-500/30'
            },
            exempt: {
                icon: XCircleIcon,
                label: 'EXEMPT',
                bg: 'bg-rose-50',
                text: 'text-rose-700',
                border: 'border-rose-500',
                opacity: 'border-rose-500/30'
            },
            conditional: {
                icon: ExclamationTriangleIcon,
                label: 'CONDITIONAL',
                bg: 'bg-amber-50',
                text: 'text-amber-700',
                border: 'border-amber-500',
                opacity: 'border-amber-500/30'
            },
            unclear: {
                icon: QuestionMarkCircleIcon,
                label: 'UNCLEAR',
                bg: 'bg-slate-50',
                text: 'text-slate-700',
                border: 'border-slate-500',
                opacity: 'border-slate-500/30'
            }
        };
        return configs[verdict.toLowerCase()] || configs.unclear;
    };

    const config = getVerdictConfig(result.verdict);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans">
            <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-widest pl-4 border-l-4 border-teal-500">Taxability Analysis Result</h3>

            <div className={`p-6 rounded-2xl border-l-4 ${config.border} ${config.bg} dark:bg-slate-800/40 ${config.opacity} border shadow-sm`}>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Verdict</p>
                <div className="flex items-center gap-3">
                    <config.icon className={`w-8 h-8 ${config.text}`} />
                    <div>
                        <p className={`text-2xl font-black ${config.text}`}>{config.label}</p>
                        <p className="text-sm font-bold text-slate-600 dark:text-slate-300">At {result.taxRate}% VAT</p>
                    </div>
                </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-200 dark:border-slate-700 p-8">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Reasoning & Explanation</p>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                        {result.explanation.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                {result.recommendations && (
                    <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 text-teal-600">Recommendations</p>
                        <ul className="space-y-3">
                            {result.recommendations.map((rec, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-emerald-500 pt-0.5 font-bold">✓</span>
                                    <p className="text-xs font-bold text-slate-700 dark:text-slate-200">{rec}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-4 border-l-2 border-teal-500">Relevant Tax Laws</p>
                    <div className="space-y-3">
                        {result.relevantLaws.map((law, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all cursor-pointer group">
                                <div className="flex items-start gap-3">
                                    <DocumentTextIcon className="w-5 h-5 text-teal-600 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors uppercase tracking-tight">{law.title}</h4>
                                        <p className="text-[10px] text-slate-500 font-bold mb-3">{law.description}</p>
                                        <button className="text-[10px] font-black text-teal-600 uppercase tracking-widest">Read Full Section →</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-4 border-l-2 border-slate-300">Related Exemptions</p>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                        <p className="text-xs font-bold text-slate-500 mb-4">Similar products that ARE exempt:</p>
                        <ul className="space-y-3">
                            {result.relatedExemptions.map((ex, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                    <p className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight">{ex.category}</p>
                                </li>
                            ))}
                        </ul>
                        <button className="mt-6 w-full py-2 border border-slate-100 dark:border-slate-800 rounded-lg text-[10px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-50 transition-all">Browse All Exemptions</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
                <button className="flex items-center gap-2 px-6 py-3 bg-teal-600/10 text-teal-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-teal-600 hover:text-white transition-all">
                    <BookmarkIcon className="w-4 h-4" /> Save for Reference
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                    <EnvelopeIcon className="w-4 h-4" /> Email to Client
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                    <ArrowDownTrayIcon className="w-4 h-4" /> Export PDF
                </button>
            </div>
        </div>
    );
};

export default TaxabilityOutput;
