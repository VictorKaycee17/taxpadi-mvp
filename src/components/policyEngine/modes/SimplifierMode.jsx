import React, { useState } from 'react';
import { SparklesIcon, DocumentArrowUpIcon, PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/outline';

const SimplifierMode = ({ result, loading, onSimplify, onClear, onClose }) => {
    const [mode, setMode] = useState('none'); // 'upload', 'paste', 'none'
    const [text, setText] = useState('');
    const MAX_CHARS = 5000;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() && !loading) {
            onSimplify(text);
        }
    };

    if (result) return null; // Logic to handle overall results view will be in parent

    return (
        <div className="bg-white dark:bg-slate-950 min-h-[80vh] font-sans rounded-t-[3rem] p-8 sm:p-12 animate-in slide-in-from-bottom duration-500 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] border-t border-slate-100 dark:border-slate-800">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white flex items-center gap-3 mb-2">
                            <SparklesIcon className="w-8 h-8 text-teal-500" />
                            AI Simplifier
                        </h2>
                        <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Transform dense tax law into meaningful business insights</p>
                    </div>
                    <button onClick={onClose} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-rose-50 dark:hover:bg-rose-500/10 hover:text-rose-600 transition-all">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Initial Selection */}
                {mode === 'none' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-12">
                        <button
                            onClick={() => setMode('upload')}
                            className="p-12 bg-white dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl hover:border-teal-500 hover:bg-teal-50/50 dark:hover:bg-teal-500/5 transition-all group flex flex-col items-center text-center"
                        >
                            <div className="w-20 h-20 bg-teal-50 dark:bg-teal-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                <DocumentArrowUpIcon className="w-10 h-10 text-teal-600" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">Upload Policy Document</h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Supports PDF, DOC, TXT (Max 50MB)</p>
                        </button>

                        <button
                            onClick={() => setMode('paste')}
                            className="p-12 bg-white dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl hover:border-teal-500 hover:bg-teal-50/50 dark:hover:bg-teal-500/5 transition-all group flex flex-col items-center text-center"
                        >
                            <div className="w-20 h-20 bg-teal-50 dark:bg-teal-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                                <PencilSquareIcon className="w-10 h-10 text-teal-600" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">Paste Legal Text</h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Manual entry up to 5000 chars</p>
                        </button>
                    </div>
                )}

                {/* Paste View */}
                {mode === 'paste' && (
                    <div className="animate-in fade-in zoom-in-95 duration-300">
                        <form onSubmit={handleSubmit}>
                            <div className="relative mb-8 shadow-2xl rounded-3xl overflow-hidden border-2 border-slate-100 dark:border-slate-800">
                                <textarea
                                    value={text}
                                    onChange={(e) => setText(e.target.value.slice(0, MAX_CHARS))}
                                    placeholder="Paste tax statute or legal snippet here..."
                                    className="w-full h-80 p-8 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-serif text-lg leading-relaxed focus:outline-none resize-none placeholder:opacity-30"
                                    required
                                />
                                <div className="absolute bottom-6 right-8">
                                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${text.length >= MAX_CHARS ? 'text-rose-500' : 'text-slate-400'}`}>
                                        {text.length} / {MAX_CHARS} Characters
                                    </span>
                                </div>
                                <div className="absolute top-6 right-8">
                                    <button onClick={() => setMode('none')} className="text-[10px] font-black text-rose-500 hover:text-rose-600 uppercase tracking-widest transition-colors flex items-center gap-1">
                                        <XMarkIcon className="w-3 h-3" /> Clear & Cancel
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={!text.trim() || loading}
                                    className={`relative flex items-center gap-4 px-12 py-5 bg-teal-600 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-teal-700 transition-all active:scale-95 disabled:grayscale disabled:opacity-50 overflow-hidden group`}
                                >
                                    <span className="relative z-10">{loading ? 'Synthesizing interpretation...' : 'Simplify Policy'}</span>
                                    {!loading && <SparklesIcon className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />}
                                    {loading && (
                                        <div className="absolute inset-0 bg-teal-500 flex items-center justify-center">
                                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        </div>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Upload View */}
                {mode === 'upload' && (
                    <div className="animate-in fade-in zoom-in-95 duration-300 py-12">
                        <div className="max-w-lg mx-auto p-12 bg-white dark:bg-slate-900 border-2 border-dashed border-teal-500 rounded-[3rem] text-center cursor-pointer hover:bg-teal-50/50 dark:hover:bg-teal-500/5 transition-all group">
                            <DocumentArrowUpIcon className="w-20 h-20 text-teal-600 mx-auto mb-6 group-hover:-translate-y-2 transition-transform" />
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">Drop your file here</h3>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">PDF, DOCX, or TXT (Max 50MB)</p>
                            <button className="px-8 py-4 bg-teal-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-teal-700 shadow-xl">
                                Browse Files
                            </button>
                        </div>
                        <div className="mt-8 text-center">
                            <button onClick={() => setMode('none')} className="text-[10px] font-black text-slate-400 hover:text-teal-600 uppercase tracking-widest transition-colors">
                                Go Back
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SimplifierMode;
