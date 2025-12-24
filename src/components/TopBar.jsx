import React from 'react';
import {
    MagnifyingGlassIcon,
    BellIcon,
    ChatBubbleLeftRightIcon,
    UserCircleIcon
} from '@heroicons/react/24/outline';

const TopBar = ({ onMenuClick }) => {
    return (
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 h-16 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-20 shadow-sm">
            {/* Mobile Menu Toggle */}
            <button
                onClick={onMenuClick}
                className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-600 dark:hover:text-white transition-colors rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 mr-2"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {/* Search Input */}
            <div className="flex-1 max-w-xl">
                <div className="relative group">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon className="w-5 h-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-sm bg-slate-50 dark:bg-slate-800 dark:text-white transition-all font-medium"
                    />
                    <div className="absolute inset-y-0 right-3 hidden md:flex items-center">
                        <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 bg-white border border-slate-200 rounded">Ctrl K</kbd>
                    </div>
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2 sm:space-x-6 pl-4">
                {/* Notifications */}
                <button className="relative p-2 text-slate-500 hover:text-teal-500 transition-colors rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800">
                    <BellIcon className="w-6 h-6" />
                    <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse"></span>
                </button>

                {/* Gee-AI Toggle */}
                <button className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-xl hover:bg-indigo-100 transition-all text-sm font-semibold border border-indigo-100 dark:border-indigo-800 group">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Ask AI</span>
                </button>

                {/* Profile Placeholder */}
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hidden sm:flex items-center justify-center text-slate-400 cursor-pointer hover:ring-2 hover:ring-teal-500/20 transition-all">
                    <UserCircleIcon className="w-8 h-8" />
                </div>
            </div>
        </header>
    );
};

export default TopBar;
