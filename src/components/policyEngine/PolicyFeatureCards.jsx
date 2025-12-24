import React from 'react';
import SimplifierCard from './cards/SimplifierCard';
import StatutorySearchCard from './cards/StatutorySearchCard';
import ExemptionCheckerCard from './cards/ExemptionCheckerCard';

const PolicyFeatureCards = ({ onSimplifier, onStatutory, onExemption }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <SimplifierCard
                onUpload={() => onSimplifier('upload')}
                onPaste={() => onSimplifier('paste')}
            />
            <StatutorySearchCard
                onSearchStatutes={onStatutory}
            />
            <ExemptionCheckerCard
                onQuickLookup={onExemption}
            />
        </div>
    );
};

export default PolicyFeatureCards;
