import { useState, useCallback } from 'react';

const MOCK_OBLIGATIONS = [
    {
        id: 'vat-dec-2025',
        type: 'vat',
        title: 'VAT Return Filing',
        description: 'Monthly VAT return for December 2025 activities.',
        dueDate: new Date(2025, 11, 21), // Dec 21, 2025
        dueTime: '17:00',
        priority: 'high',
        status: 'upcoming',
        jurisdiction: 'federal',
        documents: ['Bank Statements', 'Sales Ledger']
    },
    {
        id: 'cit-annual-2025',
        type: 'cit',
        title: 'CIT Annual Return',
        description: 'Submission of annual corporate income tax returns.',
        dueDate: new Date(2025, 11, 31), // Dec 31, 2025
        dueTime: '16:00',
        priority: 'high',
        status: 'not_started',
        jurisdiction: 'federal',
        documents: ['Audited Accounts', 'Tax Computation']
    },
    {
        id: 'paye-state-2025',
        type: 'paye',
        title: 'PAYE Remittance',
        description: 'Employee income tax remittance for Lagos State.',
        dueDate: new Date(2025, 11, 10), // Dec 10, 2025
        dueTime: '12:00',
        priority: 'medium',
        status: 'completed',
        jurisdiction: 'state',
        state: 'Lagos',
        documents: ['Payroll Schedule']
    },
    {
        id: 'wht-vendor-2025',
        type: 'wht',
        title: 'WHT Remittance',
        description: 'Withholding tax remittance for vendor payments.',
        dueDate: new Date(2025, 11, 21), // Dec 21, 2025
        dueTime: '15:00',
        priority: 'medium',
        status: 'upcoming',
        jurisdiction: 'federal'
    },
    {
        id: 'audit-quarterly-2025',
        type: 'audit',
        title: 'Internal Audit Review',
        description: 'Quarterly internal compliance audit.',
        dueDate: new Date(2025, 11, 15), // Dec 15, 2025
        dueTime: '09:00',
        priority: 'low',
        status: 'in_progress',
        jurisdiction: 'lga'
    }
];

export const useComplianceData = () => {
    const [obligations, setObligations] = useState(MOCK_OBLIGATIONS);
    const [syncing, setSyncing] = useState(false);
    const [lastSync, setLastSync] = useState(new Date().toISOString());

    const syncWithFIRS = useCallback(async () => {
        setSyncing(true);
        // Simulate FIRS API latency
        await new Promise(resolve => setTimeout(resolve, 3000));

        // In a real app, this would merge FIRS deadlines with existing data
        setLastSync(new Date().toISOString());
        setSyncing(false);
    }, []);

    const markAsComplete = useCallback((id) => {
        setObligations(prev => prev.map(obs =>
            obs.id === id ? { ...obs, status: 'completed' } : obs
        ));
    }, []);

    const getComplianceScore = () => {
        const completed = obligations.filter(o => o.status === 'completed').length;
        const total = obligations.length;
        return Math.round((completed / total) * 100);
    };

    return {
        obligations,
        syncing,
        lastSync,
        syncWithFIRS,
        markAsComplete,
        complianceScore: getComplianceScore()
    };
};
