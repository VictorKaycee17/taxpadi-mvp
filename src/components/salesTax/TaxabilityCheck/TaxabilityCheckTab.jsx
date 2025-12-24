import React from 'react';
import TaxabilityInput from './TaxabilityInput';
import TaxabilityOutput from './TaxabilityOutput';
import TaxabilityHistory from './TaxabilityHistory';

const TaxabilityCheckTab = ({ result, loading, onCheck, history }) => {
    return (
        <div className="animate-in fade-in duration-500 max-w-5xl">
            <TaxabilityInput onCheck={onCheck} loading={loading} />

            {result && <TaxabilityOutput result={result} />}

            <TaxabilityHistory history={history} />
        </div>
    );
};

export default TaxabilityCheckTab;
