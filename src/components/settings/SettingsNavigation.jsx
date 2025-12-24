import React from 'react';

const SettingsNavigation = ({ activeTab, onTabChange }) => {
    const tabs = [
        { id: 'profile', label: 'Profile', icon: '👤' },
        { id: 'integrations', label: 'Integrations', icon: '🔗' },
        { id: 'team', label: 'Team', icon: '👥' },
        { id: 'billing', label: 'Billing', icon: '💳' },
        { id: 'security', label: 'Security', icon: '🔒' },
        { id: 'preferences', label: 'Preferences', icon: '⚙️' },
    ];

    return (
        <div className="bg-white border-b-2 border-slate-200 mb-6 sticky top-0 z-10 overflow-x-auto scrollbar-hide">
            <div className="flex px-2 md:px-0">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`
                            flex items-center gap-2 px-4 py-4 md:px-6 whitespace-nowrap text-sm font-semibold transition-all duration-200 relative border-b-2
                            ${activeTab === tab.id
                                ? 'text-teal-600 border-teal-500 bg-teal-50/10'
                                : 'text-slate-500 border-transparent hover:text-slate-700 hover:bg-slate-50'
                            }
                        `}
                    >
                        <span className="text-lg">{tab.icon}</span>
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SettingsNavigation;
