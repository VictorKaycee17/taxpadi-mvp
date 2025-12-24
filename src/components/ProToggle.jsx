import React from 'react';

const ProToggle = ({ isPro, onToggle }) => {
    return (
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 animate-fade-in z-50">
            <div className="relative inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1 cursor-pointer shadow-inner transition-all duration-300">
                <div
                    className={`w-full h-full absolute top-0 left-0 bg-white dark:bg-gray-700 rounded-full shadow-sm transition-transform duration-300 ease-in-out ${isPro ? 'translate-x-[100%]' : 'translate-x-0'
                        }`}
                    style={{ width: '50%' }}
                />
                <button
                    onClick={() => onToggle(false)}
                    className={`relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${!isPro ? 'text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                        }`}
                >
                    Free
                </button>
                <button
                    onClick={() => onToggle(true)}
                    className={`relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-1 ${isPro ? 'text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                        }`}
                >
                    Pro
                    {/* Simple star icon or badge could go here */}
                    <span className="text-xs bg-gradient-to-r from-amber-400 to-orange-500 text-white px-1 rounded-sm ml-1 font-bold">
                        PRO
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ProToggle;
