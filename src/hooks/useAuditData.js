import { useState, useEffect } from 'react';

const useAuditData = (auditId) => {
    const [audit, setAudit] = useState(null);
    const [checklist, setChecklist] = useState([]);
    const [queryIssues, setQueryIssues] = useState([]);
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        // Mock data initialization
        setTimeout(() => {
            setAudit({
                id: auditId || 'AUD-2025-001',
                type: 'VAT Audit',
                taxYear: '2024',
                status: 'Pending',
                deadline: '2025-12-31',
                queryDate: '2025-12-01',
                amount: 2500000,
                company: 'Tech Solutions Ltd'
            });

            setChecklist([
                {
                    id: '1',
                    category: 'FINANCIAL',
                    name: 'Bank Statements',
                    status: 'uploaded',
                    files: [{ name: 'bank_stmt_jan_dec.pdf', size: '2.4 MB' }]
                },
                {
                    id: '2',
                    category: 'FINANCIAL',
                    name: 'Sales Invoices',
                    status: 'uploaded',
                    files: [{ name: 'sales_summary.xlsx', size: '12.8 MB' }]
                },
                {
                    id: '3',
                    category: 'FINANCIAL',
                    name: 'Expense Receipts',
                    status: 'pending',
                    files: []
                },
                {
                    id: '4',
                    category: 'COMPLIANCE',
                    name: 'VAT Returns',
                    status: 'uploaded',
                    files: [{ name: 'vat_returns_2024.pdf', size: '1.2 MB' }]
                }
            ]);

            setQueryIssues([
                {
                    id: 'iss_1',
                    title: 'Discrepancy in VAT Returns',
                    severity: 'high',
                    points: [
                        'Variance in January 2024 VAT return',
                        'Missing supporting invoices for ₦450k deduction'
                    ]
                },
                {
                    id: 'iss_2',
                    title: 'Deduction Documentation',
                    severity: 'medium',
                    points: [
                        'Incomplete expense receipts for utility payments'
                    ]
                }
            ]);

            setIsLoading(false);
        }, 1000);
    }, [auditId]);

    const uploadDocument = (checklistItemId, file) => {
        setChecklist(prev => prev.map(item =>
            item.id === checklistItemId
                ? { ...item, status: 'uploaded', files: [...item.files, { name: file.name, size: 'Pending' }] }
                : item
        ));
    };

    const updateResponse = (content) => {
        setResponse(prev => ({ ...prev, content, updatedAt: new Date() }));
    };

    return {
        audit,
        checklist,
        queryIssues,
        response,
        isLoading,
        uploadDocument,
        updateResponse,
        progress: (checklist.filter(i => i.status === 'uploaded').length / checklist.length) * 100
    };
};

export default useAuditData;
