import React from 'react';

const ProfileCard = ({
    title,
    description,
    children,
    onEdit,
    onSave,
    onCancel,
    lastUpdated,
    isEditing = false
}) => {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden mb-6">
            {/* Card Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                    <h3 className="text-base font-bold text-slate-900 uppercase tracking-tight">{title}</h3>
                    {description && <p className="text-xs text-slate-500 mt-1">{description}</p>}
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
                {children}
            </div>

            {/* Card Footer */}
            <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {isEditing ? (
                        <>
                            <button
                                onClick={onSave}
                                className="px-5 py-2 bg-teal-600 text-white text-xs font-bold rounded-lg hover:bg-teal-700 transition-all shadow-sm"
                            >
                                Save Changes
                            </button>
                            <button
                                onClick={onCancel}
                                className="px-5 py-2 text-slate-500 text-xs font-bold hover:text-slate-700 transition-all"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={onEdit}
                            className="px-5 py-2 bg-slate-200 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-300 transition-all"
                        >
                            Edit Section
                        </button>
                    )}
                </div>
                {lastUpdated && (
                    <span className="text-[10px] text-slate-400 italic">
                        Last updated: {lastUpdated}
                    </span>
                )}
            </div>
        </div>
    );
};

export default ProfileCard;
