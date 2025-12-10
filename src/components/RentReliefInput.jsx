import React from 'react';
import PropTypes from 'prop-types';

/**
 * Rent Relief Input Component
 * Input field for annual rent paid
 */
const RentReliefInput = ({ value, onChange }) => {
    return (
        <div className="mb-6">
            <label htmlFor="annualRent" className="label-text">
                Annual Rent Paid
            </label>
            <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light font-semibold">
                    ₦
                </span>
                <input
                    id="annualRent"
                    type="number"
                    min="0"
                    step="10000"
                    value={value || ''}
                    onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
                    placeholder="2,000,000"
                    className="currency-input"
                />
            </div>
            <p className="text-xs text-text-light mt-1">
                Rent relief is 20% of rent, capped at ₦500,000
            </p>
        </div>
    );
};

RentReliefInput.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default RentReliefInput;
