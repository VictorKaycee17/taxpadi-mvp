import React from 'react';
import PropTypes from 'prop-types';

/**
 * Deductions Form Component
 * Input fields for Pension, NHF, and NHIS deductions
 */
const DeductionsForm = ({ deductions, onChange }) => {
    const handleChange = (field, value) => {
        onChange({
            ...deductions,
            [field]: parseFloat(value) || 0
        });
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text mb-4">Deductions</h3>

            {/* Pension */}
            <div>
                <label htmlFor="pension" className="label-text">
                    Pension Contribution
                </label>
                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light font-semibold">
                        ₦
                    </span>
                    <input
                        id="pension"
                        type="number"
                        min="0"
                        step="1000"
                        value={deductions.pension || ''}
                        onChange={(e) => handleChange('pension', e.target.value)}
                        placeholder="400,000"
                        className="currency-input"
                    />
                </div>
                <p className="text-xs text-text-light mt-1">
                    Typically 8% of gross income
                </p>
            </div>

            {/* NHF */}
            <div>
                <label htmlFor="nhf" className="label-text">
                    National Housing Fund (NHF)
                </label>
                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light font-semibold">
                        ₦
                    </span>
                    <input
                        id="nhf"
                        type="number"
                        min="0"
                        step="100"
                        value={deductions.nhf || ''}
                        onChange={(e) => handleChange('nhf', e.target.value)}
                        placeholder="12,500"
                        className="currency-input"
                    />
                </div>
                <p className="text-xs text-text-light mt-1">
                    2.5% of basic salary
                </p>
            </div>

            {/* NHIS */}
            <div>
                <label htmlFor="nhis" className="label-text">
                    National Health Insurance Scheme (NHIS)
                </label>
                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light font-semibold">
                        ₦
                    </span>
                    <input
                        id="nhis"
                        type="number"
                        min="0"
                        step="1000"
                        value={deductions.nhis || ''}
                        onChange={(e) => handleChange('nhis', e.target.value)}
                        placeholder="50,000"
                        className="currency-input"
                    />
                </div>
                <p className="text-xs text-text-light mt-1">
                    Annual NHIS contribution
                </p>
            </div>
        </div>
    );
};

DeductionsForm.propTypes = {
    deductions: PropTypes.shape({
        pension: PropTypes.number,
        nhf: PropTypes.number,
        nhis: PropTypes.number,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default DeductionsForm;
