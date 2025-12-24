import React from 'react';
import { BookOpenIcon, ChevronRightIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const RelatedPolicies = ({ relatedActs, crossReferences, examples }) => {
    return (
        <div className="mt-16 bg-slate-50 dark:bg-slate-900/40 rounded-3xl p-8 sm:p-12 border border-slate-100 dark:border-slate-800/50 font-sans">
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-10 tracking-tight flex items-center gap-3">
                <BookOpenIcon className="w-6 h-6 text-indigo-500" />
                Related Policies & Legislation
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Related Acts */}
                <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Related Acts & Sections</h4>
                    <div className="space-y-6">
                        {relatedActs?.map((act, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <h5 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors uppercase tracking-tight mb-1">{act.title}</h5>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-3">{act.description}</p>
                                <button className="text-[10px] font-black text-indigo-600 hover:text-indigo-700 uppercase tracking-widest flex items-center gap-1 transition-all">
                                    Learn More <ChevronRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cross References */}
                <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Cross-References</h4>
                    <div className="space-y-4">
                        {crossReferences?.map((ref, idx) => (
                            <div key={idx} className="flex items-center gap-3 group cursor-pointer hover:translate-x-1 transition-transform">
                                <span className="text-indigo-500 font-black">➜</span>
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 transition-colors uppercase tracking-tight underline underline-offset-4 decoration-indigo-200">{ref}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Implementation Examples */}
                <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Implementation Examples</h4>
                    <div className="space-y-4">
                        {examples?.map((ex, idx) => (
                            <div key={idx} className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-pointer group">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-amber-50 dark:bg-amber-500/10 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                                        <LightBulbIcon className="w-4 h-4 text-amber-600" />
                                    </div>
                                    <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight">{ex}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedPolicies;
