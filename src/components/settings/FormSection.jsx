import React from 'react';

const FormSection = ({ title, description, children, footerAction }) => {
    return (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-6 shadow-sm">
            <div className="px-6 py-5 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                {description && (
                    <p className="mt-1 text-sm text-slate-500">{description}</p>
                )}
            </div>

            <div className="p-6">
                {children}
            </div>

            {footerAction && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3 font-medium">
                    {footerAction}
                </div>
            )}
        </div>
    );
};

export default FormSection;
