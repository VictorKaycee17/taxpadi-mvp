import React, { useState } from 'react';
import { usePayrollData } from '../hooks/usePayrollData';
import PayrollHeader from '../components/payroll/PayrollHeader';
import PayrollControls from '../components/payroll/PayrollControls';
import PayrollSummary from '../components/payroll/PayrollSummary';
import PayrollTable from '../components/payroll/PayrollTable';
import PayrollWizardModal from '../components/payroll/PayrollWizard/PayrollWizardModal';
import { PayrollSummarySkeleton, PayrollTableSkeleton } from '../components/payroll/Skeletons/PayrollSkeletons';

const Payroll = () => {
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [year, setYear] = useState(new Date().getFullYear());
    const [isWizardOpen, setIsWizardOpen] = useState(false);

    const {
        employees,
        loading,
        error,
        totals,
        reload
    } = usePayrollData(month, year);

    if (error) {
        return (
            <div className="p-8 text-center font-sans">
                <div className="max-w-md mx-auto bg-rose-50 dark:bg-rose-500/10 p-8 rounded-[2rem] border border-rose-100 dark:border-rose-900/20">
                    <h2 className="text-xl font-black text-rose-600 mb-2 uppercase tracking-tight">Error Loading Payroll</h2>
                    <p className="text-sm font-bold text-rose-500 uppercase tracking-widest leading-relaxed mb-6">
                        {error.message || 'An unexpected error occurred while fetching payroll data.'}
                    </p>
                    <button
                        onClick={reload}
                        className="px-8 h-12 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95"
                    >
                        Retry Connection
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 sm:p-8 max-w-[1600px] mx-auto animate-fade-in font-sans">
            <PayrollHeader />

            <PayrollControls
                month={month}
                year={year}
                onMonthChange={setMonth}
                onYearChange={setYear}
                onReload={reload}
                onNewRun={() => setIsWizardOpen(true)}
            />

            {loading ? (
                <PayrollSummarySkeleton />
            ) : (
                <PayrollSummary totals={totals} />
            )}

            {loading ? (
                <PayrollTableSkeleton />
            ) : (
                <PayrollTable
                    employees={employees}
                    onRunPayroll={() => setIsWizardOpen(true)}
                />
            )}

            {isWizardOpen && (
                <PayrollWizardModal
                    employees={employees}
                    month={month}
                    year={year}
                    totals={totals}
                    onClose={() => setIsWizardOpen(false)}
                />
            )}
        </div>
    );
};

export default Payroll;
