import React, { useState } from 'react';
import { BookOpenIcon, FunnelIcon, MagnifyingGlassIcon, BookmarkIcon } from '@heroicons/react/24/outline';

const StatutorySearchMode = ({ statutes, onSelectAct, onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const filteredStatutes = statutes.filter(s => {
        const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'all' || s.type === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="bg-white dark:bg-slate-950 min-h-screen font-sans animate-in slide-in-from-right duration-500">
            <div className="max-w-[1440px] mx-auto p-4 sm:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
                    <div>
                        <button onClick={onClose} className="text-xs font-black text-teal-600 hover:text-teal-700 uppercase tracking-widest mb-4 flex items-center gap-2 group">
                            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Engine
                        </button>
                        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                            <BookOpenIcon className="w-8 h-8 text-indigo-500" />
                            Statutory Search
                        </h2>
                    </div>

                    <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-full sm:w-auto overflow-x-auto">
                        {['all', 'act', 'circular', 'gazette'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all whitespace-nowrap ${filter === type
                                        ? 'bg-white dark:bg-slate-700 text-teal-600 shadow-sm'
                                        : 'text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <div className="relative flex-grow group">
                        <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Filter by keyword, act name, or year..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full h-14 pl-12 pr-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                        />
                    </div>
                    <button className="h-14 px-8 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-slate-800 transition-all shrink-0">
                        <FunnelIcon className="w-4 h-4" />
                        Refine Search
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredStatutes.map((statute) => (
                        <div key={statute.id} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl group-hover:rotate-6 transition-transform">
                                    <BookOpenIcon className="w-6 h-6 text-indigo-600" />
                                </div>
                                <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border border-slate-100 dark:border-slate-800 ${statute.status === 'Active' ? 'text-emerald-600' : 'text-slate-400'}`}>
                                    {statute.status}
                                </span>
                            </div>

                            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{statute.title}</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-6 leading-relaxed flex-grow">
                                {statute.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-slate-50 dark:border-slate-800">
                                <div>
                                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Effective Date</p>
                                    <p className="text-xs font-black text-slate-700 dark:text-slate-300">{statute.yearEffective}</p>
                                </div>
                                <div>
                                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Sections</p>
                                    <p className="text-xs font-black text-slate-700 dark:text-slate-300">{statute.sectionsCount}</p>
                                </div>
                            </div>

                            <div className="flex gap-2 mt-auto">
                                <button
                                    onClick={() => onSelectAct(statute)}
                                    className="flex-grow h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95"
                                >
                                    View Full Act
                                </button>
                                <button className="w-12 h-12 flex items-center justify-center bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-slate-400 hover:text-indigo-600 transition-all active:scale-90">
                                    <BookmarkIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}

                    {filteredStatutes.length === 0 && (
                        <div className="col-span-full py-20 text-center grayscale opacity-50">
                            <MagnifyingGlassIcon className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                            <h4 className="text-sm font-black text-slate-500 uppercase tracking-[0.2em]">No statutes found matching your criteria</h4>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StatutorySearchMode;
