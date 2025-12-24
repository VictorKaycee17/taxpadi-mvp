import React from 'react';
import {
    DevicePhoneMobileIcon,
    ComputerDesktopIcon,
    GlobeAltIcon,
    DocumentCheckIcon,
    UserIcon,
    ClockIcon
} from '@heroicons/react/24/outline';

const ActivityItem = ({ type, description, timestamp, deviceInfo, location, ipAddress, isCurrentSession, onSignOut }) => {
    const getIcon = () => {
        if (type === 'login') {
            if (deviceInfo.toLowerCase().includes('mobile') || deviceInfo.toLowerCase().includes('ios') || deviceInfo.toLowerCase().includes('android')) {
                return <DevicePhoneMobileIcon className="w-5 h-5" />;
            }
            return <ComputerDesktopIcon className="w-5 h-5" />;
        }
        if (description.toLowerCase().includes('profile') || description.toLowerCase().includes('password')) {
            return <UserIcon className="w-5 h-5" />;
        }
        if (description.toLowerCase().includes('document') || description.toLowerCase().includes('calendar')) {
            return <DocumentCheckIcon className="w-5 h-5" />;
        }
        return <ClockIcon className="w-5 h-5" />;
    };

    return (
        <div className="bg-white border-l-4 border-teal-500 p-4 rounded-r-xl shadow-sm hover:bg-slate-50 transition-colors duration-200">
            <div className="flex justify-between items-start gap-4">
                <div className="flex gap-4">
                    <div className="mt-1 p-2 bg-teal-50 text-teal-600 rounded-lg">
                        {getIcon()}
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <p className="text-sm font-bold text-slate-900">{timestamp}</p>
                            {isCurrentSession && (
                                <span className="px-2 py-0.5 rounded-full bg-teal-100 text-teal-700 text-[10px] font-black uppercase tracking-wider">
                                    Current Session
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-slate-700 mt-0.5">{description}</p>
                        {(deviceInfo || location || ipAddress) && (
                            <div className="mt-2 text-xs text-slate-500 space-y-1">
                                {deviceInfo && <p className="flex items-center gap-1.5"><ComputerDesktopIcon className="w-3.5 h-3.5" /> {deviceInfo}</p>}
                                {location && <p className="flex items-center gap-1.5"><GlobeAltIcon className="w-3.5 h-3.5" /> {location}</p>}
                                {ipAddress && <p className="flex items-center gap-1.5 font-mono">IP: {ipAddress}</p>}
                            </div>
                        )}
                    </div>
                </div>
                {!isCurrentSession && type === 'login' && (
                    <button
                        onClick={onSignOut}
                        className="text-xs font-bold text-rose-500 hover:text-rose-700 hover:underline transition-all"
                    >
                        Sign Out
                    </button>
                )}
            </div>
        </div>
    );
};

export default ActivityItem;
