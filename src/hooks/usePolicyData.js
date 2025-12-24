import { useState } from 'react';

const MOCK_STATUTES = [
    {
        id: 'vat-2025',
        type: 'act',
        title: 'VAT Act 2025',
        shortName: 'VAT Act',
        yearEffective: 2025,
        sectionsCount: 267,
        status: 'Active',
        description: 'Standard VAT rate and exemption rules for Nigerian businesses.',
        sections: [
            { number: '146', title: 'Standard Rate of VAT', content: '(1) Subject to the provisions of this Act, a person engaged in a taxable activity shall, in relation to taxable supplies made by him, charge value added tax at the rate of seven and a half percent (7.5%) on the supply of all goods and services other than those goods and services listed in the First Schedule to this Act.' },
            { number: '147', title: 'Reduced Rate', content: 'Certain essential goods may be subject to a reduced rate of 5% as directed by the Minister.' }
        ]
    },
    {
        id: 'cit-2011',
        type: 'act',
        title: 'Companies Income Tax Act 2011',
        shortName: 'CIT Act',
        yearEffective: 2011,
        lastAmendment: 2023,
        sectionsCount: 432,
        status: 'Active',
        description: 'Corporate tax provisions and deductible expenses.'
    }
];

const MOCK_EXEMPTIONS = [
    {
        item: 'Rice (White, Polished)',
        status: 'exempt',
        vatRate: 0,
        description: 'Agricultural product - processed but not fully prepared for consumption.',
        legalReference: 'VAT Act 2025, Schedule B, Item 15 - Basic Food Items',
        conditions: [
            'Applies to raw/unprocessed rice',
            'Parboiled rice may qualify depending on processing',
            'Does NOT apply to rice flour or rice-based products',
            'Does NOT apply to rice sold prepared as food'
        ],
        relatedItems: [
            { name: 'Beans (Dried)', status: 'exempt' },
            { name: 'Corn', status: 'exempt' },
            { name: 'Flour', status: 'taxable' }
        ]
    }
];

export const usePolicyData = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [statutes] = useState(MOCK_STATUTES);
    const [exemptionResult, setExemptionResult] = useState(null);

    const searchPolicies = async (query) => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Simple mock search
        const results = MOCK_STATUTES.filter(s =>
            s.title.toLowerCase().includes(query.toLowerCase()) ||
            s.description.toLowerCase().includes(query.toLowerCase())
        );

        setSearchResults(results.map(r => ({
            id: r.id,
            title: r.title,
            type: 'act',
            content: r.description,
            relevanceScore: 0.95
        })));

        setLoading(false);
    };

    const checkExemption = async (itemName) => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 800));

        const found = MOCK_EXEMPTIONS.find(e => e.item.toLowerCase().includes(itemName.toLowerCase()));
        setExemptionResult(found || null);
        setLoading(false);
    };

    return {
        searchResults,
        loading,
        searchPolicies,
        statutes,
        checkExemption,
        exemptionResult
    };
};
