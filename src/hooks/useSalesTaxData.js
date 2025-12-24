import { useState, useEffect } from 'react';

const MOCK_SALES_DATA = {
    totalSales: {
        thisMonth: 15847500,
        lastMonth: 12936735,
        trend: {
            direction: 'up',
            percentage: 22.5
        },
        breakdown: {
            taxable: 14500000,
            exempt: 1347500
        }
    },
    vatCollected: {
        thisMonth: 1087562.50,
        rate: 7.5,
        nextRemittanceDate: '2026-01-20',
        daysRemaining: 28,
        status: 'upcoming'
    },
    remittanceDue: {
        amount: 1087562.50,
        dueDate: '2026-01-20',
        status: 'upcoming',
        history: [
            { date: '2025-12-20', amount: 847350, status: 'paid' },
            { date: '2025-11-20', amount: 756200, status: 'paid' }
        ]
    },
    chartData: [
        { month: 'Jul', taxable: 8500000, exempt: 1200000 },
        { month: 'Aug', taxable: 9200000, exempt: 1100000 },
        { month: 'Sep', taxable: 10500000, exempt: 1400000 },
        { month: 'Oct', taxable: 11800000, exempt: 1300000 },
        { month: 'Nov', taxable: 12900000, exempt: 1500000 },
        { month: 'Dec', taxable: 14500000, exempt: 1347500 }
    ],
    exemptions: [
        { id: '1', category: 'Healthcare Services', description: 'Medical services, supplies', icon: '🏥' },
        { id: '2', category: 'Education', description: 'School fees, books', icon: '📚' },
        { id: '3', category: 'Agriculture', description: 'Seeds, fertilizer', icon: '🌾' },
        { id: '4', category: 'Basic Food Items', description: 'Rice, beans, flour', icon: '📦' },
        { id: '5', category: 'Financial Services', description: 'Loans, insurance', icon: '🏦' }
    ]
};

export const useSalesTaxData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 800));
                setData(MOCK_SALES_DATA);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};
