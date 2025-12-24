import React from 'react';
import {
    CheckBadgeIcon,
    PencilSquareIcon,
    Cog6ToothIcon,
    QuestionMarkCircleIcon,
    CameraIcon
} from '@heroicons/react/24/solid';

const ProfileHeader = ({ user, onEdit, onGoToSettings, onHelp }) => {
    return (
        <div className="bg-gradient-to-b from-teal-50 to-white border-b-2 border-teal-200 p-8 sm:px-12 mb-8 text-center rounded-b-3xl shadow-sm">
            <div className="max-w-4xl mx-auto">
                {/* Avatar Section */}
                <div className="relative inline-block mb-4 group cursor-pointer">
                    <div className="w-[100px] h-[100px] rounded-full bg-teal-100 border-3 border-teal-500 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                        {user?.avatar ? (
                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-3xl font-bold text-teal-700">
                                {user?.name?.split(' ').map(n => n[0]).join('') || 'JA'}
                            </span>
                        )}
                        {/* Upload Overlay */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <CameraIcon className="w-8 h-8 text-white" />
                        </div>
                    </div>
                </div>

                {/* Name & Title */}
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-1.5">
                        {user?.name || 'John Adeyemi'}
                        <CheckBadgeIcon className="w-5 h-5 text-teal-500" />
                    </h1>
                    <p className="text-sm font-medium text-slate-600">
                        {user?.jobTitle || 'Finance Manager'} • TaxGee Pro • Member since {user?.memberSince || 'Jan 2024'}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                    <button
                        onClick={onEdit}
                        className="flex items-center gap-2 px-5 py-2.5 bg-teal-500 text-white font-bold rounded-xl hover:bg-teal-600 transition-all shadow-lg shadow-teal-500/20"
                    >
                        <PencilSquareIcon className="w-4 h-4" />
                        Edit Profile
                    </button>
                    <button
                        onClick={onGoToSettings}
                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all border border-slate-200"
                    >
                        <Cog6ToothIcon className="w-4 h-4" />
                        Go to Settings
                    </button>
                    <button
                        onClick={onHelp}
                        className="flex items-center gap-2 px-5 py-2.5 text-teal-600 font-bold rounded-xl hover:bg-teal-50 transition-all"
                    >
                        <QuestionMarkCircleIcon className="w-4 h-4" />
                        Help & Support
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
