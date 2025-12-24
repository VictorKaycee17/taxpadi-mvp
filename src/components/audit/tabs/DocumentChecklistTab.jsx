import React from 'react';
import { CloudArrowUpIcon, CheckCircleIcon, DocumentIcon } from '@heroicons/react/24/outline';

const DocumentChecklistTab = ({ checklist, onUpload }) => {
    const categories = ['FINANCIAL', 'COMPLIANCE', 'LEGAL', 'SUBSIDIARY'];

    return (
        <div className="space-y-8 font-sans">
            {categories.map(cat => {
                const items = checklist.filter(i => i.category === cat);
                if (items.length === 0) return null;

                return (
                    <div key={cat}>
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                            {cat} DOCUMENTS
                            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {items.map(item => (
                                <div key={item.id} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 flex items-start justify-between group hover:border-teal-500/50 transition-all shadow-sm">
                                    <div className="flex gap-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.status === 'uploaded'
                                                ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600'
                                                : 'bg-slate-50 dark:bg-slate-800 text-slate-400'
                                            }`}>
                                            {item.status === 'uploaded' ? <CheckCircleIcon className="w-6 h-6" /> : <DocumentIcon className="w-6 h-6" />}
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-black uppercase tracking-widest text-slate-900 dark:text-white mb-1">
                                                {item.name}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {item.files.length > 0 ? (
                                                    item.files.map((f, idx) => (
                                                        <span key={idx} className="text-[9px] font-bold text-teal-600 bg-teal-50 dark:bg-teal-500/10 px-2 py-0.5 rounded-md">
                                                            {f.name}
                                                        </span>
                                                    ))
                                                ) : (
                                                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                                                        No file uploaded
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => onUpload(item.id, { name: 'sample_upload.pdf' })}
                                        className="p-2 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-400 hover:text-teal-600 hover:border-teal-500 transition-all"
                                    >
                                        <CloudArrowUpIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default DocumentChecklistTab;
