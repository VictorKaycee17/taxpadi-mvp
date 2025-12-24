import { useState, useEffect } from 'react';

export const useDashboardData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulating API fetch
        const fetchData = async () => {
            try {
                // Mocking a delay
                await new Promise(resolve => setTimeout(resolve, 800));

                const mockData = {
                    user: {
                        companyName: "Acme Nigeria Ltd",
                        firstName: "Jane",
                        email: "jane@acme.ng",
                        tierStatus: 'pro'
                    },
                    taxLiability: {
                        outstanding: 547350,
                        byType: {
                            pit: 45000,
                            cit: 350000,
                            vat: 125000,
                            wht: 27350,
                            cgt: 0
                        },
                        averageMonthly: 185400,
                        trend: {
                            direction: 'up',
                            percentage: 12.5
                        }
                    },
                    compliance: {
                        score: 85,
                        grade: 'A',
                        filingCompleteness: 90,
                        paymentTimeliness: 80,
                        accuracy: 85
                    },
                    tccStatus: {
                        status: 'active',
                        expiryDate: new Date('2026-02-20'),
                        daysRemaining: 424 // Calculated roughly
                    },
                    chartsData: {
                        taxLiabilityHistory: [
                            { month: 'Jul', total: 180000 },
                            { month: 'Aug', total: 420000 },
                            { month: 'Sep', total: 210000 },
                            { month: 'Oct', total: 240000 },
                            { month: 'Nov', total: 190000 },
                            { month: 'Dec', total: 310000 },
                        ],
                        complianceTrend: [
                            { month: 'Jul', score: 75 },
                            { month: 'Aug', score: 82 },
                            { month: 'Sep', score: 78 },
                            { month: 'Oct', score: 85 },
                            { month: 'Nov', score: 88 },
                            { month: 'Dec', score: 85 },
                        ]
                    },
                    upcomingObligations: [
                        {
                            id: '1',
                            title: 'VAT Return Filing',
                            taxType: 'VAT',
                            dueDate: new Date('2025-12-31'),
                            status: 'overdue',
                            daysRemaining: 8
                        },
                        {
                            id: '2',
                            title: 'WHT Reconciliation',
                            taxType: 'WHT',
                            dueDate: new Date('2025-12-31'),
                            status: 'approaching',
                            daysRemaining: 8
                        },
                        {
                            id: '3',
                            title: 'Annual CIT Filing',
                            taxType: 'CIT',
                            dueDate: new Date('2026-03-31'),
                            status: 'scheduled',
                            daysRemaining: 98
                        }
                    ],
                    bankSync: {
                        isConnected: true,
                        bankName: 'GTBank',
                        lastSyncTime: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
                        transactionCount: 1247,
                        transactionVolume: 54200000,
                        byCategory: {
                            income: { count: 847, volume: 34500000 },
                            expenses: { count: 312, volume: 12300000 },
                            transfers: { count: 88, volume: 7400000 }
                        },
                        autoSyncEnabled: true
                    }
                };

                setData(mockData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};
