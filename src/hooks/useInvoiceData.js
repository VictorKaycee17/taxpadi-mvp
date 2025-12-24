import { useState, useEffect } from 'react';

const MOCK_INVOICES = [
    {
        id: '1',
        invoiceNumber: 'INV-2025-00247',
        clientId: 'c1',
        clientName: 'Acme Corp',
        clientEmail: 'john@acme.com',
        invoiceDate: '2025-12-20',
        dueDate: '2026-01-20',
        items: [{ id: 'i1', description: 'Consulting Services', quantity: 10, unitPrice: 50000, taxable: true }],
        subtotal: 500000,
        taxType: 'vat',
        taxAmount: 37500,
        taxRate: 7.5,
        total: 537500,
        status: 'pending',
        createdAt: '2025-12-20T09:00:00Z'
    },
    {
        id: '2',
        invoiceNumber: 'INV-2025-00246',
        clientId: 'c2',
        clientName: 'Jane Doe',
        clientEmail: 'jane@email.com',
        invoiceDate: '2025-12-18',
        dueDate: '2026-01-18',
        items: [{ id: 'i2', description: 'Graphic Design', quantity: 1, unitPrice: 250000, taxable: true }],
        subtotal: 250000,
        taxType: 'wht',
        taxAmount: 12500,
        taxRate: 5,
        total: 262500,
        status: 'paid',
        paidDate: '2025-12-22',
        createdAt: '2025-12-18T10:00:00Z'
    }
];

export const useInvoiceData = (filters) => {
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [stats, setStats] = useState({
        outstanding: 0,
        outstandingCount: 0,
        overdue: 0,
        overdueCount: 0,
        paidToday: 0,
        paidTodayCount: 0,
        draftCount: 0,
    });

    useEffect(() => {
        const fetchInvoices = async () => {
            setLoading(true);
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 800));

                let filtered = [...MOCK_INVOICES];
                if (filters?.searchQuery) {
                    const q = filters.searchQuery.toLowerCase();
                    filtered = filtered.filter(inv =>
                        inv.clientName.toLowerCase().includes(q) ||
                        inv.invoiceNumber.toLowerCase().includes(q)
                    );
                }

                if (filters?.status && filters.status !== 'all') {
                    filtered = filtered.filter(inv => inv.status === filters.status);
                }

                setInvoices(filtered);

                // Calculate stats
                const now = new Date();
                const outstanding = MOCK_INVOICES
                    .filter(inv => inv.status === 'pending' || inv.status === 'overdue')
                    .reduce((sum, inv) => sum + inv.total, 0);

                const outstandingCount = MOCK_INVOICES.filter(inv => inv.status === 'pending' || inv.status === 'overdue').length;
                const overdueCount = MOCK_INVOICES.filter(inv => inv.status === 'overdue').length;
                const paidTodayCount = MOCK_INVOICES.filter(inv => inv.status === 'paid').length; // Simplified for mock
                const draftCount = MOCK_INVOICES.filter(inv => inv.status === 'draft').length;

                setStats({
                    outstanding,
                    outstandingCount,
                    overdue: 0, // Mock overdue for now
                    overdueCount,
                    paidToday: 1234500, // Mock
                    paidTodayCount,
                    draftCount
                });

                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchInvoices();
    }, [filters]);

    return { invoices, loading, error, stats };
};
