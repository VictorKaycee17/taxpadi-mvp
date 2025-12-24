import React, { useState, useEffect } from 'react';
import PolicyEngineHeader from '../components/policyEngine/PolicyEngineHeader';
import PolicyHeroSearch from '../components/policyEngine/PolicyHeroSearch';
import PolicyFeatureCards from '../components/policyEngine/PolicyFeatureCards';
import PolicyResultsView from '../components/policyEngine/PolicyResultsView';
import RelatedPolicies from '../components/policyEngine/RelatedPolicies';
import StatutorySearchMode from '../components/policyEngine/modes/StatutorySearchMode';
import ExemptionCheckerMode from '../components/policyEngine/modes/ExemptionCheckerMode';
import SimplifierMode from '../components/policyEngine/modes/SimplifierMode';
import SearchResultsSkeleton from '../components/policyEngine/Skeletons/SearchResultsSkeleton';

import { usePolicyData } from '../hooks/usePolicyData';
import { useSimplifier } from '../hooks/useSimplifier';

const PolicyEngine = () => {
    const [viewMode, setViewMode] = useState('landing'); // landing, statutory, exemption, simplifier, results
    const [breadcrumbs, setBreadcrumbs] = useState([{ label: 'Policy Engine' }]);

    const {
        searchResults,
        loading: searchLoading,
        searchPolicies,
        statutes,
        checkExemption,
        exemptionResult
    } = usePolicyData();

    const {
        result: simplifierResult,
        loading: simplifierLoading,
        simplifyPolicy,
        clearSimplifier
    } = useSimplifier();

    // Side effect to handle results navigation when AI simplification completes
    useEffect(() => {
        if (simplifierResult) {
            setViewMode('results');
            setBreadcrumbs([
                { label: 'Policy Engine', href: '#' },
                { label: 'AI Simplifier', href: '#' },
                { label: 'Results' }
            ]);
        }
    }, [simplifierResult]);

    const handleSearch = async (query) => {
        setViewMode('results');
        setBreadcrumbs([
            { label: 'Policy Engine', href: '#' },
            { label: 'Search Results' }
        ]);
        await searchPolicies(query);
    };

    const handleBackToLanding = () => {
        setViewMode('landing');
        setBreadcrumbs([{ label: 'Policy Engine' }]);
        clearSimplifier();
    };

    const renderView = () => {
        switch (viewMode) {
            case 'statutory':
                return (
                    <StatutorySearchMode
                        statutes={statutes}
                        onSelectAct={(act) => {
                            // In a real app, this would load the act details
                            console.log('Selected act:', act);
                        }}
                        onClose={handleBackToLanding}
                    />
                );

            case 'exemption':
                return (
                    <ExemptionCheckerMode
                        result={exemptionResult}
                        onSearch={checkExemption}
                        onSelectRelated={checkExemption}
                        onClose={handleBackToLanding}
                    />
                );

            case 'simplifier':
                return (
                    <SimplifierMode
                        result={simplifierResult}
                        loading={simplifierLoading}
                        onSimplify={simplifyPolicy}
                        onClear={clearSimplifier}
                        onClose={handleBackToLanding}
                    />
                );

            case 'results':
                if (searchLoading && !simplifierResult) return <SearchResultsSkeleton />;

                return (
                    <div className="animate-in fade-in duration-700">
                        <PolicyResultsView
                            document={searchResults[0] || {
                                title: 'Input Legal Text',
                                content: simplifierResult?.originalText,
                                subtitle: 'Section Analysis'
                            }}
                            interpretation={simplifierResult || {
                                plainEnglish: searchResults[0]?.content || "No AI interpretation available for this search result.",
                                keyPoints: ["Select an area to see AI points"],
                                implications: ["Analysis pending"],
                                taxImplications: ["Penalties may apply for non-compliance"]
                            }}
                            onSave={() => alert('Saved to Policy Library')}
                        />
                        <RelatedPolicies
                            relatedActs={[
                                { title: 'Finance Act 2024', description: 'Updates to corporate income tax rates.' },
                                { title: 'Stamp Duties Act', description: 'Rules for electronic money transfer levy.' }
                            ]}
                            crossReferences={['Section 147 - Reduced Rate', 'Schedule B - Exemptions']}
                            examples={['VAT on Digital Services', 'Export Documentation']}
                        />
                    </div>
                );

            default:
                return (
                    <>
                        <PolicyHeroSearch
                            onSearch={handleSearch}
                            onAdvancedSearch={() => alert('Advanced AI Search coming soon!')}
                        />
                        <PolicyFeatureCards
                            onSimplifier={(mode) => setViewMode('simplifier')}
                            onStatutory={() => setViewMode('statutory')}
                            onExemption={() => setViewMode('exemption')}
                        />
                    </>
                );
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-6 sm:py-10">
                {viewMode !== 'statutory' && viewMode !== 'exemption' && viewMode !== 'simplifier' && (
                    <PolicyEngineHeader breadcrumbs={breadcrumbs} />
                )}

                {renderView()}
            </div>
        </div>
    );
};

export default PolicyEngine;
