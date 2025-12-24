import React from 'react';

const AuditTabs = ({ activeTab, onTabChange }) => {
    const tabs = [
        { id: 'checklist', label: 'Document Checklist', icon: '📁' },
        { id: 'query', label: 'FIRS Query Letter', icon: '✉️' },
        { id: 'response', label: 'Draft Response', icon: '📝' }
    ];

    return (
        <div className="flex items-center gap-1 border-b border-slate-200 dark:border-slate-800 mb-8 font-sans overflow-x-auto custom-scrollbar">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 text-[10px] font-black uppercase tracking-widest transition-all relative whitespace-nowrap ${activeTab === tab.id
                            ? 'text-teal-600'
                            : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                        }`}
                >
                    <span className="text-sm">{tab.icon}</span>
                    {tab.label}

                    {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-teal-500 rounded-t-full" />
                    )}
                </button>
            ))}
        </div>
    );
};

export default AuditTabs;
