import { useState } from 'react';

export const useSimplifier = () => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const simplifyPolicy = async (text) => {
        setLoading(true);
        setError(null);
        try {
            await new Promise(resolve => setTimeout(resolve, 2500));

            const mockResult = {
                originalText: text,
                plainEnglish: "This section establishes the standard VAT rate of 7.5% for all taxable goods and services. Most business transactions will fall under this rate, unless specifically exempted by the Minister or listed in the First Schedule.",
                keyPoints: [
                    "Standard VAT rate is set at 7.5%",
                    "Applies to all taxable supplies (goods and services)",
                    "Minister of Finance has powers to vary the list of exempt items",
                    "Implementation date is strictly based on the commencement of the Act"
                ],
                implications: [
                    "You must charge 7.5% VAT on most products and services",
                    "Keep records for VAT return filing to avoid penalties",
                    "You can claim input VAT credit on taxable purchases"
                ],
                implementation: [
                    "Identify if your product is taxable or exempt",
                    "Update your billing system to calculate VAT at 7.5%",
                    "Ensure VAT collected is remitted by the 21st of the following month"
                ],
                taxImplications: [
                    "Registration required if annual turnover exceeds ₦25M",
                    "Failure to charge VAT leads to penalties of up to 10% of tax due"
                ],
                confidence: 0.98
            };

            setResult(mockResult);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    const clearSimplifier = () => setResult(null);

    return { result, loading, error, simplifyPolicy, clearSimplifier };
};
