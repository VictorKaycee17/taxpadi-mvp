import { useState } from 'react';

export const useTaxabilityCheck = () => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [history, setHistory] = useState([
        { id: 'h1', description: 'Mobile Phone Cases', date: 'Today, 10:30 AM', verdict: 'taxable' },
        { id: 'h2', description: "Men's Clothing Services", date: 'Dec 22', verdict: 'taxable' },
        { id: 'h3', description: 'Telemedicine Consultation', date: 'Dec 20', verdict: 'exempt' }
    ]);

    const checkTaxability = async (description) => {
        setLoading(true);
        setError(null);
        try {
            // Simulate AI API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            const mockResult = {
                verdict: 'taxable',
                taxRate: 7.5,
                explanation: `Based on VAT Act 2025, Section 146, your product is classified as GOODS (not services). The VAT Act explicitly lists specific categories exempt from VAT. This item is NOT in the exempt list. Standard 7.5% VAT applies. WHT may apply if sold B2B (5-10%).`,
                relevantLaws: [
                    { title: 'VAT Act 2025, Section 146', description: 'Standard Rate. Defines the 7.5% standard rate and scope of VAT.' },
                    { title: 'Nigeria Tax Act 2025, Schedule B', description: 'Exempt Goods. View list of goods exempt from VAT.' }
                ],
                relatedExemptions: [
                    { category: 'Medical protective equipment' },
                    { category: "Children's clothing" },
                    { category: 'Educational materials' }
                ],
                recommendations: [
                    'Collect 7.5% VAT on each unit sold.',
                    'Keep records of VAT collected for quarterly remittance.'
                ],
                confidence: 0.95
            };

            setResult(mockResult);

            // Add to history
            const newHistoryItem = {
                id: Date.now().toString(),
                description,
                date: 'Just now',
                verdict: mockResult.verdict
            };
            setHistory(prev => [newHistoryItem, ...prev.slice(0, 9)]);

            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    const clearResult = () => setResult(null);

    return { result, loading, error, checkTaxability, history, clearResult };
};
