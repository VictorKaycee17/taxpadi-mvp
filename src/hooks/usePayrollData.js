import { useState, useEffect, useCallback } from 'react';

const MOCK_EMPLOYEES = [
    {
        id: 'emp-1',
        name: 'John Doe',
        employeeId: 'TG-001',
        email: 'john.doe@acme.ng',
        state: 'Lagos',
        taxStatus: 'taxable',
        bankName: 'Access Bank',
        accountNumber: '0123456789',
        accountName: 'John Doe',
        basicSalary: 80000,
        allowances: 0,
        validationStatus: 'valid'
    },
    {
        id: 'emp-2',
        name: 'Jane Smith',
        employeeId: 'TG-002',
        email: 'jane.smith@acme.ng',
        state: 'Abuja',
        taxStatus: 'taxable',
        bankName: 'GTBank',
        accountNumber: '0987654321',
        accountName: 'Jane Smith',
        basicSalary: 120000,
        allowances: 30000,
        validationStatus: 'valid'
    },
    {
        id: 'emp-3',
        name: 'Mike Tyson',
        employeeId: 'TG-003',
        email: 'mike.tyson@acme.ng',
        state: 'Lagos',
        taxStatus: 'taxable',
        bankName: 'UBA',
        accountNumber: '1122334455',
        accountName: 'Mike Tyson',
        basicSalary: 60000,
        allowances: 0,
        validationStatus: 'valid'
    },
    {
        id: 'emp-4',
        name: 'Sarah Connor',
        employeeId: 'TG-004',
        email: 's.connor@acme.ng',
        state: 'Kano',
        taxStatus: 'taxable',
        bankName: 'Zenith Bank',
        accountNumber: '5544332211',
        accountName: 'Sarah Connor',
        basicSalary: 95000,
        allowances: 15000,
        validationStatus: 'invalid', // Missing bank details in mock logic below
        bankName: '',
        accountNumber: ''
    }
];

const PAYE_TAX_TABLE = [
    { min: 0, max: 25000, rate: 0.01 },         // 1% (Monthly) -> 300k Annual
    { min: 25000, max: 50000, rate: 0.03 },    // 3% (Monthly) -> 600k Annual
    { min: 50000, max: 83333, rate: 0.1 },     // 10% (Monthly) -> 1M Annual
    { min: 83333, max: Infinity, rate: 0.15 }  // 15% (Monthly) -> Over 1M Annual
];

const calculatePAYE = (grossSalary) => {
    // 2025 Rules: CRA is 20% of gross or 200k max annual (16,666 monthly)
    const monthlyCRA = Math.min(grossSalary * 0.2, 16666);
    const taxableIncome = Math.max(0, grossSalary - monthlyCRA);

    let tax = 0;
    for (const bracket of PAYE_TAX_TABLE) {
        if (taxableIncome <= bracket.min) break;
        const applyTo = Math.min(taxableIncome, bracket.max) - bracket.min;
        tax += applyTo * bracket.rate;
    }
    return Math.round(tax);
};

export const usePayrollData = (month, year) => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const processPayroll = useCallback(() => {
        setLoading(true);
        // Simulate API fetch delay
        setTimeout(() => {
            const processed = MOCK_EMPLOYEES.map(emp => {
                const gross = emp.basicSalary + emp.allowances;
                const paye = calculatePAYE(gross);
                const pension = Math.round(gross * 0.08); // 8% Employee
                const employerPension = Math.round(gross * 0.10); // 10% Employer
                const nhis = Math.round(gross * 0.05); // 5% Employee
                const nhf = Math.round(gross * 0.025); // 2.5% Employee

                const totalDeductions = paye + pension + nhis + nhf;
                const netPay = gross - totalDeductions;

                return {
                    ...emp,
                    grossSalary: gross,
                    paye,
                    pension,
                    employerPension,
                    nhis,
                    nhf,
                    totalDeductions,
                    netPay,
                    // Check for invalid data
                    validationStatus: (emp.bankName && emp.accountNumber) ? 'valid' : 'invalid',
                    validationErrors: (emp.bankName && emp.accountNumber) ? [] : ['Missing bank details']
                };
            });
            setEmployees(processed);
            setLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        processPayroll();
    }, [month, year, processPayroll]);

    // Totals
    const totals = employees.reduce((acc, curr) => ({
        totalGross: acc.totalGross + curr.grossSalary,
        totalPAYE: acc.totalPAYE + curr.paye,
        totalNet: acc.totalNet + curr.netPay,
        totalPension: acc.totalPension + curr.pension + curr.employerPension,
        totalNHIS: acc.totalNHIS + curr.nhis,
        totalNHF: acc.totalNHF + curr.nhf
    }), {
        totalGross: 0,
        totalPAYE: 0,
        totalNet: 0,
        totalPension: 0,
        totalNHIS: 0,
        totalNHF: 0
    });

    return {
        employees,
        loading,
        error,
        totals,
        reload: processPayroll
    };
};
