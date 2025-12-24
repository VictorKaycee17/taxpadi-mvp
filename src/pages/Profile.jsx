import React, { useState } from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileCard from '../components/profile/ProfileCard';
import SignInProviderCard from '../components/profile/SignInProviderCard';
import ActivityItem from '../components/profile/ActivityItem';
import AccountStatusCard from '../components/profile/AccountStatusCard';
import SecurityStatusCard from '../components/profile/SecurityStatusCard';
import {
    EnvelopeIcon,
    PhoneIcon,
    GlobeAltIcon,
    UserIcon,
    BriefcaseIcon,
    AcademicCapIcon,
    TrashIcon,
    ArrowDownTrayIcon,
    ExclamationTriangleIcon,
    LinkIcon
} from '@heroicons/react/24/outline';

const Profile = ({ onGoToSettings }) => {
    // Mock States
    const [isEditingPersonal, setIsEditingPersonal] = useState(false);
    const [isEditingProfessional, setIsEditingProfessional] = useState(false);

    const userData = {
        name: 'John Adeyemi',
        avatar: null,
        jobTitle: 'Finance Manager',
        memberSince: 'Jan 2024',
        email: 'john.adeyemi@taxgee.com',
        phone: '+234 701 234 5678',
        bio: 'I am a tax professional specializing in corporate compliance and VAT advisory with over 8 years of experience in the Nigerian market.',
        isPublic: false,
        practiceType: 'In-House Tax (Corporate)',
        specialties: ['CIT', 'VAT', 'WHT'],
        certifications: ['ICAN', 'CITN'],
        experience: '5-10 years'
    };

    return (
        <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 pb-20 font-sans">
            <ProfileHeader
                user={userData}
                onEdit={() => setIsEditingPersonal(true)}
                onGoToSettings={onGoToSettings}
                onHelp={() => console.log('Help clicked')}
            />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column - Primary Content (66%) */}
                    <div className="lg:col-span-8 space-y-6">

                        {/* Personal Information */}
                        <ProfileCard
                            title="Personal Information"
                            description="Manage your name, email, phone, and public bio."
                            isEditing={isEditingPersonal}
                            onEdit={() => setIsEditingPersonal(true)}
                            onSave={() => setIsEditingPersonal(false)}
                            onCancel={() => setIsEditingPersonal(false)}
                            lastUpdated="2 days ago"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">First Name</label>
                                    <input type="text" className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all ${isEditingPersonal ? 'border-teal-200 bg-white' : 'border-transparent bg-slate-50 cursor-not-allowed'}`} defaultValue="John" readOnly={!isEditingPersonal} />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Last Name</label>
                                    <input type="text" className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all ${isEditingPersonal ? 'border-teal-200 bg-white' : 'border-transparent bg-slate-50 cursor-not-allowed'}`} defaultValue="Adeyemi" readOnly={!isEditingPersonal} />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                                        Email Address
                                        <span className="text-[10px] text-teal-600 font-bold hover:underline cursor-pointer">Change</span>
                                    </label>
                                    <div className="relative">
                                        <input type="email" className="w-full pl-10 pr-4 py-2 border border-transparent bg-slate-50 rounded-xl text-slate-600 cursor-not-allowed" defaultValue={userData.email} readOnly />
                                        <EnvelopeIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                                    <div className="relative">
                                        <input type="tel" className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all ${isEditingPersonal ? 'border-teal-200 bg-white' : 'border-transparent bg-slate-50 cursor-not-allowed'}`} defaultValue={userData.phone} readOnly={!isEditingPersonal} />
                                        <PhoneIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    </div>
                                </div>
                                <div className="md:col-span-2 space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Public Bio</label>
                                    <textarea className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all min-h-[100px] ${isEditingPersonal ? 'border-teal-200 bg-white' : 'border-transparent bg-slate-50 cursor-not-allowed'}`} defaultValue={userData.bio} readOnly={!isEditingPersonal} />
                                </div>
                            </div>
                        </ProfileCard>

                        {/* Professional Identity */}
                        <ProfileCard
                            title="Professional Identity"
                            description="Update your professional credentials and specialties."
                            isEditing={isEditingProfessional}
                            onEdit={() => setIsEditingProfessional(true)}
                            onSave={() => setIsEditingProfessional(false)}
                            onCancel={() => setIsEditingProfessional(false)}
                            lastUpdated="5 days ago"
                        >
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Job Title</label>
                                        <div className="relative">
                                            <input type="text" className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all ${isEditingProfessional ? 'border-teal-200 bg-white' : 'border-transparent bg-slate-50 cursor-not-allowed'}`} defaultValue={userData.jobTitle} readOnly={!isEditingProfessional} />
                                            <BriefcaseIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Practice Type</label>
                                        <select disabled={!isEditingProfessional} className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all appearance-none ${isEditingProfessional ? 'border-teal-200 bg-white' : 'border-transparent bg-slate-50'}`}>
                                            <option>{userData.practiceType}</option>
                                            <option>Solo Practitioner</option>
                                            <option>Small Firm (2-5)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tax Specialties</label>
                                    <div className="flex flex-wrap gap-2">
                                        {userData.specialties.map(s => (
                                            <span key={s} className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-lg border border-teal-100">{s}</span>
                                        ))}
                                        {isEditingProfessional && <button className="px-3 py-1 border border-dashed border-slate-300 text-slate-400 text-xs font-bold rounded-lg hover:border-teal-300 hover:text-teal-500 transition-all">+ Add</button>}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Professional Certifications</label>
                                    <div className="flex flex-wrap gap-2">
                                        {userData.certifications.map(c => (
                                            <span key={c} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg border border-indigo-100 flex items-center gap-1.5">
                                                <AcademicCapIcon className="w-3.5 h-3.5" />
                                                {c}
                                            </span>
                                        ))}
                                        {isEditingProfessional && <button className="px-3 py-1 border border-dashed border-slate-300 text-slate-400 text-xs font-bold rounded-lg hover:border-teal-300 hover:text-teal-500 transition-all">+ Add</button>}
                                    </div>
                                </div>
                            </div>
                        </ProfileCard>

                        {/* Sign-in Providers */}
                        <ProfileCard
                            title="Sign-in Providers"
                            description="Connect or disconnect sign-in methods for easier access."
                        >
                            <div className="space-y-4">
                                <SignInProviderCard
                                    provider="Google"
                                    email="john.adeyemi@gmail.com"
                                    connectedAt="3 months ago"
                                    isConnected={true}
                                    isPrimary={false}
                                />
                                <SignInProviderCard
                                    provider="Microsoft"
                                    email="john@taxgee.com"
                                    connectedAt="1 month ago"
                                    isConnected={true}
                                    isPrimary={true}
                                />
                                <SignInProviderCard
                                    provider="Apple"
                                    isConnected={false}
                                    onConnect={() => console.log('Connect Apple')}
                                />
                            </div>
                        </ProfileCard>

                        {/* Activity Log */}
                        <ProfileCard
                            title="Account Activity"
                            description="View recent logins and activity on your account."
                        >
                            <div className="space-y-4">
                                <ActivityItem
                                    type="login"
                                    timestamp="Today, 2:45 PM"
                                    description="Logged in via Chrome on Windows 10"
                                    deviceInfo="Chrome on Windows 10"
                                    location="Port Harcourt, Rivers State, NG"
                                    ipAddress="196.12.34.56"
                                    isCurrentSession={true}
                                />
                                <ActivityItem
                                    type="action"
                                    timestamp="Today, 2:30 PM"
                                    description="Updated profile information"
                                />
                                <ActivityItem
                                    type="login"
                                    timestamp="Yesterday, 11:23 AM"
                                    description="Logged in via Safari on macOS"
                                    deviceInfo="Safari on macOS Ventura"
                                    location="Lagos, Lagos State, NG"
                                    ipAddress="192.168.1.1"
                                    onSignOut={() => console.log('Sign out clicked')}
                                />
                            </div>
                            <div className="mt-6 flex justify-center">
                                <button className="text-xs font-bold text-teal-600 hover:text-teal-700 hover:underline">View Full Activity Log</button>
                            </div>
                        </ProfileCard>

                    </div>

                    {/* Right Column - Sidebar (33%) */}
                    <div className="lg:col-span-4 space-y-6">

                        <AccountStatusCard
                            planTier="TaxGee Pro"
                            status="Active"
                            cost="₦3,333 / mo"
                            renewalDate="23 Jan 2026"
                            memberSince="Jan 15, 2024"
                        />

                        <SecurityStatusCard
                            passwordStatus="Good"
                            twoFactorEnabled={true}
                            emailVerified={true}
                            phoneVerified={false}
                            overallScore={85}
                        />

                        {/* Quick Links */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Quick Links</h3>
                            <div className="space-y-3">
                                <button onClick={onGoToSettings} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-700 text-sm font-medium transition-all group">
                                    <LinkIcon className="w-5 h-5 text-slate-400 group-hover:text-teal-500" />
                                    Account Settings
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-700 text-sm font-medium transition-all group">
                                    <GlobeAltIcon className="w-5 h-5 text-slate-400 group-hover:text-teal-500" />
                                    Help & Documentation
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-700 text-sm font-medium transition-all group">
                                    <EnvelopeIcon className="w-5 h-5 text-slate-400 group-hover:text-teal-500" />
                                    Contact Support
                                </button>
                            </div>
                        </div>

                        {/* Danger Zone */}
                        <div className="bg-rose-50/30 border border-rose-100 rounded-2xl p-6">
                            <h3 className="text-sm font-bold text-rose-700 uppercase tracking-wider mb-2 flex items-center gap-2">
                                <ExclamationTriangleIcon className="w-4 h-4" />
                                Danger Zone
                            </h3>
                            <p className="text-xs text-rose-600 mb-6">These actions are irreversible and will affect your access to all TaxGee services.</p>
                            <div className="space-y-3">
                                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-rose-200 text-rose-600 text-xs font-bold rounded-xl hover:bg-rose-50 transition-all">
                                    <ArrowDownTrayIcon className="w-4 h-4" />
                                    Download My Data
                                </button>
                                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-rose-600 text-white text-xs font-bold rounded-xl hover:bg-rose-700 transition-all shadow-lg shadow-rose-500/20">
                                    <TrashIcon className="w-4 h-4" />
                                    Delete Account
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
