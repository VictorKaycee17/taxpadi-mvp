import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const WizardSteps = ({ currentStep }) => {
    const steps = [
        { id: 1, label: 'Validation' },
        { id: 2, label: 'Calculation' },
        { id: 3, label: 'Approval' }
    ];

    return (
        <div className="flex items-center justify-between mb-10 px-4 font-sans">
            {steps.map((step, idx) => (
                <React.Fragment key={step.id}>
                    <div className="flex flex-col items-center relative z-10">
                        <div className={`
                            w-10 h-10 rounded-full flex items-center justify-center text-sm font-black transition-all duration-300
                            ${currentStep > step.id ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' :
                                currentStep === step.id ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/20 ring-4 ring-teal-500/10 scale-110' :
                                    'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600'}
                        `}>
                            {currentStep > step.id ? (
                                <CheckIcon className="w-6 h-6" />
                            ) : (
                                step.id
                            )}
                        </div>
                        <span className={`
                            absolute -bottom-7 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-colors
                            ${currentStep >= step.id ? 'text-teal-600 dark:text-teal-500' : 'text-slate-400 dark:text-slate-600'}
                        `}>
                            {step.label}
                        </span>
                    </div>
                    {idx < steps.length - 1 && (
                        <div className="flex-1 h-0.5 mx-4 -mt-7 bg-slate-100 dark:bg-slate-800 relative">
                            <div
                                className="absolute inset-0 bg-teal-500 transition-all duration-500 rounded-full"
                                style={{ width: currentStep > step.id ? '100%' : '0%' }}
                            />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default WizardSteps;
