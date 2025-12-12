import React from 'react';
import PropTypes from 'prop-types';
import { trackEvent } from '../utils/analytics';

/**
 * Income Input Component
 * Input field for gross annual income
 */
const IncomeInput = ({ value, onChange }) => {
    return (
        <div className="mb-6">
            <label htmlFor="grossIncome" className="label-text">
                Gross Annual Income
            </label>
            <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light font-semibold">
                    ₦
                </span>
                <input
                    id="grossIncome"
                    type="number"
                    min="0"
                    step="1000"
                    value={value || ''}
                    onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
                    onBlur={() => {
                        if (value > 0) {
                            trackEvent('income_entered', { value_range: value < 1000000 ? 'low' : value < 10000000 ? 'mid' : 'high' });
                        }
                    }}
                    placeholder="5,000,000"
                    className="currency-input"
                />
            </div>
            <p className="text-xs text-text-light mt-1">
                Enter your total annual gross income
            </p>
        </div>
    );
};

IncomeInput.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default IncomeInput;
