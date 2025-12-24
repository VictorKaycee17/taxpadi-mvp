import React from 'react';

const SignInProviderCard = ({
    provider,
    email,
    connectedAt,
    isPrimary,
    isConnected,
    onConnect,
    onDisconnect,
    onMakePrimary
}) => {
    const getIcon = (name) => {
        switch (name.toLowerCase()) {
            case 'google': return '🔵';
            case 'microsoft': return '🔷';
            case 'apple': return '🟠';
            default: return '🔑';
        }
    };

    return (
        <div className={`p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 ${isConnected
                ? 'bg-white border-2 border-teal-100 shadow-sm'
                : 'bg-slate-50 border border-slate-200 opacity-80'
            }`}>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xl shadow-inner">
                    {getIcon(provider)}
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-900">{provider}</h4>
                        {isPrimary && (
                            <span className="px-2 py-0.5 rounded-full bg-teal-100 text-teal-700 text-[10px] font-black uppercase tracking-wider">
                                Primary
                            </span>
                        )}
                    </div>
                    {isConnected ? (
                        <div className="space-y-0.5">
                            <p className="text-sm text-slate-600 font-medium">{email}</p>
                            <p className="text-[10px] text-slate-400">Connected {connectedAt}</p>
                        </div>
                    ) : (
                        <p className="text-sm text-slate-500">Not connected</p>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-auto">
                {isConnected ? (
                    <>
                        {!isPrimary && (
                            <button
                                onClick={onMakePrimary}
                                className="text-xs font-bold text-teal-600 hover:text-teal-700 hover:underline transition-all"
                            >
                                Make Primary
                            </button>
                        )}
                        <button
                            onClick={onDisconnect}
                            className="px-4 py-1.5 border border-rose-200 text-rose-600 text-xs font-bold rounded-lg hover:bg-rose-50 transition-all"
                        >
                            Disconnect
                        </button>
                    </>
                ) : (
                    <button
                        onClick={onConnect}
                        className="px-6 py-2 bg-teal-600 text-white text-xs font-bold rounded-lg hover:bg-teal-700 transition-all shadow-sm"
                    >
                        Connect {provider}
                    </button>
                )}
            </div>
        </div>
    );
};

export default SignInProviderCard;
