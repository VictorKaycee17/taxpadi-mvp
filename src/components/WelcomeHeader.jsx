import React from 'react';

const WelcomeHeader = ({ companyName, userFirstName, currentDate, isPro }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-6 mb-4 sm:mb-8">
            <div className="space-y-2 text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                    Welcome back, {companyName}
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {userFirstName}, here's your tax summary for today.
                </p>

                {isPro && (
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-400 border border-teal-200 dark:border-teal-800">
                            Pro Plan
                        </span>
                        <span className="text-[10px] sm:text-xs text-slate-400">
                            Renews: Feb 23, 2026
                        </span>
                    </div>
                )}
            </div>

            <div className="mt-6 md:mt-0 text-left md:text-right">
                <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
                    {currentDate.toLocaleDateString('en-NG', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </div>
        </div>
    );
};

export default WelcomeHeader;
