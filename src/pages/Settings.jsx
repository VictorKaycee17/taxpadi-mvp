import React, { useState } from 'react';
import SettingsHeader from '../components/settings/SettingsHeader';
import SettingsNavigation from '../components/settings/SettingsNavigation';
import FormSection from '../components/settings/FormSection';
import IntegrationCard from '../components/settings/IntegrationCard';
import {
    CheckCircleIcon,
    ArrowPathIcon,
    CreditCardIcon,
    UserPlusIcon,
    ArrowUpCircleIcon,
    CloudArrowDownIcon,
    TrashIcon,
    ExclamationTriangleIcon
} from '@heroicons/react/24/solid';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const renderProfile = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <FormSection
                title="Business Information"
                description="Update your business details and official contact information."
                footerAction={
                    <>
                        <button className="px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors">Cancel</button>
                        <button className="px-6 py-2 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">Save Changes</button>
                    </>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-slate-700">Company Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" defaultValue="Victor Kaycee & Co." />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-slate-700">Registration Number</label>
                        <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" defaultValue="RC1234567" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-slate-700">Business Email</label>
                        <input type="email" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" defaultValue="admin@victorkaycee.com" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                        <input type="tel" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" defaultValue="+234 800 123 4567" />
                    </div>
                    <div className="md:col-span-2 space-y-1.5">
                        <label className="text-sm font-semibold text-slate-700">Business Address</label>
                        <textarea className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all min-h-[80px]" defaultValue="No. 12 Gee Street, Lagos Island, Lagos, Nigeria" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-slate-700">State</label>
                        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all">
                            <option>Lagos</option>
                            <option>Abuja (FCT)</option>
                            <option>Rivers</option>
                        </select>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-slate-700">Website (Optional)</label>
                        <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="https://example.com" />
                    </div>
                </div>
            </FormSection>

            <FormSection
                title="Tax Identification"
                description="Manage your tax registration details and verification status."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-slate-700 flex items-center justify-between">
                            Tax Identification Number (TIN)
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-100 text-teal-700 text-[10px] uppercase font-bold tracking-wider">
                                Verified <CheckCircleIcon className="h-3 w-3" />
                            </span>
                        </label>
                        <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg bg-slate-50 font-mono text-sm" defaultValue="23456789-0001" readOnly />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-slate-700 flex items-center justify-between">
                            VAT Number
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] uppercase font-bold tracking-wider">
                                Active <CheckCircleIcon className="h-3 w-3" />
                            </span>
                        </label>
                        <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg bg-slate-50 font-mono text-sm" defaultValue="IKV1200200300" readOnly />
                    </div>
                </div>
            </FormSection>
        </div>
    );

    const renderIntegrations = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <input
                    type="text"
                    placeholder="Search integrations..."
                    className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                />
                <button className="px-5 py-2 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 flex items-center justify-center gap-2 transition-all">
                    <span>+ Add Integration</span>
                </button>
            </div>

            <div className="space-y-3">
                <IntegrationCard
                    name="First Bank Feed"
                    description="Real-time transaction syncing for corporate account 1234..."
                    status="connected"
                    icon="🏦"
                    syncFreq="Hourly"
                    lastSync="5m ago"
                />
                <IntegrationCard
                    name="QuickBooks Online"
                    description="Automatic invoice and expense reconciliation."
                    status="connected"
                    icon="📊"
                    syncFreq="Daily"
                    lastSync="2h ago"
                />
            </div>
        </div>
    );

    const renderTeam = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
                    <UserPlusIcon className="w-5 h-5" />
                    Invite Team Member
                </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        <tr>
                            <td className="px-6 py-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold">VK</div>
                                    <div className="font-bold text-slate-900">Victor Kaycee</div>
                                </div>
                            </td>
                            <td className="px-6 py-5">Owner</td>
                            <td className="px-6 py-5 text-emerald-600 font-medium">Active</td>
                            <td className="px-6 py-5 text-right font-medium text-slate-400">—</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderBilling = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <FormSection title="Current Subscription">
                <div className="p-6 bg-teal-50/30 rounded-2xl border border-teal-100 flex justify-between items-center">
                    <div>
                        <div className="text-sm font-bold text-teal-600 uppercase">Pro Plan</div>
                        <div className="text-3xl font-extrabold text-slate-900">₦40,000 / year</div>
                    </div>
                    <button className="px-5 py-2.5 bg-teal-600 text-white font-black rounded-xl hover:bg-teal-700 transition-all">Upgrade Plan</button>
                </div>
            </FormSection>
        </div>
    );

    const renderSecurity = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <FormSection title="Two-Factor Authentication">
                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <div className="flex items-center gap-4">
                        <CheckCircleIcon className="w-6 h-6 text-emerald-600" />
                        <div className="font-bold text-slate-900">2FA is Enabled</div>
                    </div>
                    <button className="text-sm font-bold text-teal-600 hover:underline">Change</button>
                </div>
            </FormSection>
        </div>
    );

    const renderPreferences = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <FormSection title="Appearance">
                <div className="flex p-1 bg-slate-100 rounded-xl max-w-xs">
                    {['Light', 'Dark', 'Auto'].map((theme) => (
                        <button key={theme} className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${theme === 'Light' ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-500'}`}>{theme}</button>
                    ))}
                </div>
            </FormSection>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'profile': return renderProfile();
            case 'integrations': return renderIntegrations();
            case 'team': return renderTeam();
            case 'billing': return renderBilling();
            case 'security': return renderSecurity();
            case 'preferences': return renderPreferences();
            default: return renderProfile();
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pb-20">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <SettingsHeader />
                <SettingsNavigation activeTab={activeTab} onTabChange={setActiveTab} />
                <main className="max-w-4xl mx-auto">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default Settings;
