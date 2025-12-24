import React, { useState } from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';

const TaxabilityInput = ({ onCheck, loading }) => {
    const [description, setDescription] = useState('');
    const MAX_CHARS = 500;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim() && !loading) {
            onCheck(description);
        }
    };

    return (
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm mb-8 font-sans">
            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">What is your product or service?</h3>
            <div className="space-y-4 mb-8">
                <p className="text-sm text-slate-500 font-medium">Describe it clearly. Include:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                    <li className="text-[10px] sm:text-xs text-slate-400 font-black uppercase tracking-widest flex items-center gap-2">• Product/service name</li>
                    <li className="text-[10px] sm:text-xs text-slate-400 font-black uppercase tracking-widest flex items-center gap-2">• What it does or is used for</li>
                    <li className="text-[10px] sm:text-xs text-slate-400 font-black uppercase tracking-widest flex items-center gap-2">• Any special characteristics</li>
                    <li className="text-[10px] sm:text-xs text-slate-400 font-black uppercase tracking-widest flex items-center gap-2">• Who the end customer is</li>
                </ul>
            </div>

            <form onSubmit={handleSubmit} className="relative">
                <div className="relative group">
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value.slice(0, MAX_CHARS))}
                        placeholder="Describe your product or service..."
                        className="w-full h-48 p-6 bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none shadow-inner"
                        maxLength={MAX_CHARS}
                        required
                    />
                    <div className="absolute bottom-4 left-6">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${description.length >= MAX_CHARS ? 'text-rose-500' : 'text-slate-400'}`}>
                            {description.length} / {MAX_CHARS} Characters
                        </span>
                    </div>
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        type="submit"
                        disabled={!description.trim() || loading}
                        className={`flex items-center gap-3 px-8 py-4 bg-teal-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-lg hover:shadow-teal-500/20 hover:bg-teal-700 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed group overflow-hidden relative`}
                    >
                        <span className="relative z-10">{loading ? 'Analyzing...' : 'Check Taxability'}</span>
                        {!loading && <SparklesIcon className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />}
                        {loading && (
                            <div className="absolute inset-0 bg-teal-500 flex items-center justify-center">
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            </div>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaxabilityInput;
