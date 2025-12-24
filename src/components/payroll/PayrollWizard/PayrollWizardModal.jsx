import React, { useState } from 'react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import WizardSteps from './WizardSteps';
import ValidationStep from './ValidationStep';
import CalculationStep from './CalculationStep';
import ApprovalStep from './ApprovalStep';

const PayrollWizardModal = ({ employees, month, year, totals, onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [approvalChecks, setApprovalChecks] = useState({
        dataValidated: false,
        calculationsReviewed: false,
        compliancePassed: false,
        acknowledgeResponsibility: false
    });

    const canGoNext = () => {
        if (currentStep === 1) return true; // Could add validation check here
        if (currentStep === 2) return true;
        return false;
    };

    const isApprovalComplete = () => {
        return Object.values(approvalChecks).every(v => v === true);
    };

    const handleNext = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleSubmit = () => {
        setIsSubmitting(true);
        // Simulate FIRS API submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Payroll submitted successfully to FIRS! Transaction ID: TXG-' + Math.random().toString(36).substr(2, 9).toUpperCase());
            onClose();
        }, 2000);
    };

    const toggleCheck = (key) => {
        setApprovalChecks(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-sans">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={onClose} />

            {/* Modal */}
            <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-scale-in">
                {/* Header */}
                <div className="px-8 py-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
                    <div>
                        <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Payroll Run Wizard</h2>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Guided Compliance Processing</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-xl text-slate-400 hover:text-rose-500 transition-all shadow-sm"
                    >
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <WizardSteps currentStep={currentStep} />

                    <div className="mt-8 animate-fade-in">
                        {currentStep === 1 && <ValidationStep employees={employees} />}
                        {currentStep === 2 && <CalculationStep employees={employees} totals={totals} />}
                        {currentStep === 3 && (
                            <ApprovalStep
                                month={month}
                                year={year}
                                totals={totals}
                                employees={employees}
                                checks={approvalChecks}
                                onCheckToggle={toggleCheck}
                            />
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        className={`flex items-center gap-2 px-6 h-12 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${currentStep === 1 ? 'text-slate-300 pointer-events-none' : 'text-slate-500 hover:bg-white dark:hover:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700'
                            }`}
                    >
                        <ChevronLeftIcon className="w-4 h-4" />
                        Back
                    </button>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={onClose}
                            className="px-6 h-12 text-[10px] font-black text-slate-400 hover:text-rose-500 uppercase tracking-widest transition-colors"
                        >
                            Cancel Process
                        </button>

                        {currentStep < 3 ? (
                            <button
                                onClick={handleNext}
                                className="flex items-center gap-2 px-8 h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95"
                            >
                                Next Step
                                <ChevronRightIcon className="w-4 h-4" />
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                disabled={!isApprovalComplete() || isSubmitting}
                                className={`flex items-center gap-2 px-8 h-12 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 ${isApprovalComplete() && !isSubmitting ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-400 pointer-events-none'
                                    }`}
                            >
                                {isSubmitting ? 'Submitting to FIRS...' : 'Approve & Submit to FIRS'}
                                {!isSubmitting && <PaperAirplaneIcon className="w-4 h-4" />}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayrollWizardModal;
