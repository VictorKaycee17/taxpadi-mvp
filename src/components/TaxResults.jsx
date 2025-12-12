import React from 'react';
import PropTypes from 'prop-types';
import { formatCurrency } from '../utils/taxCalculator';
import { generateTaxPDF } from '../utils/pdfGenerator';
import { trackEvent } from '../utils/analytics';

/**
 * Tax Results Component
 * Displays complete tax calculation breakdown for both individuals and companies
 */
const TaxResults = ({ results }) => {
    if (!results) {
        return null;
    }

    const { userType } = results;

    // Company Tax Results
    if (userType === 'company') {
        const { turnover, totalTax, netIncome, effectiveTaxRate, companyType, applicableRate } = results;

        return (
            <div className="animate-slide-up">
                {/* Summary Card */}
                <div className="gradient-primary rounded-2xl p-6 mb-6 text-white">
                    <p className="text-sm opacity-90 mb-1">Total Corporate Tax</p>
                    <h2 className="text-4xl font-bold mb-4">
                        {formatCurrency(totalTax)}
                    </h2>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="opacity-80">Annual Turnover</p>
                            <p className="font-semibold">{formatCurrency(turnover)}</p>
                        </div>
                        <div>
                            <p className="opacity-80">Net After Tax</p>
                            <p className="font-semibold">{formatCurrency(netIncome)}</p>
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/20">
                        <p className="text-xs opacity-80">{companyType}</p>
                        <p className="text-lg font-semibold">Tax Rate: {(applicableRate * 100).toFixed(0)}%</p>
                    </div>
                </div>

                {/* Download PDF Button */}
                <button
                    onClick={() => {
                        trackEvent('download_pdf', { userType: 'company' });
                        generateTaxPDF({ userType: 'company' }, results);
                    }}
                    className="w-full mb-6 bg-white hover:bg-gray-50 text-primary font-semibold 
                             py-4 px-6 rounded-xl border-2 border-primary transition-all duration-200 
                             transform hover:scale-105 hover:shadow-xl
                             focus:outline-none focus:ring-2 focus:ring-primary/50
                             flex items-center justify-center gap-3"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-lg">Download Assessment PDF</span>
                </button>

                {/* Detailed Breakdown */}
                <div className="card">
                    <h3 className="text-lg font-semibold text-text mb-4">Company Tax Breakdown</h3>

                    <div className="result-row">
                        <span className="font-medium text-text">Annual Turnover</span>
                        <span className="font-semibold text-primary">{formatCurrency(turnover)}</span>
                    </div>

                    <div className="result-row">
                        <span className="font-medium text-text">Company Type</span>
                        <span className="font-semibold text-text">{companyType}</span>
                    </div>

                    <div className="result-row">
                        <span className="font-medium text-text">Applicable Tax Rate</span>
                        <span className="font-semibold text-primary">{(applicableRate * 100).toFixed(0)}%</span>
                    </div>

                    <div className="result-row bg-background-light -mx-6 px-6">
                        <span className="font-bold text-text">Total Tax Payable</span>
                        <span className="text-2xl font-bold text-primary">
                            {formatCurrency(totalTax)}
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    // Individual Tax Results
    const {
        grossIncome,
        deductions,
        reliefs,
        chargeableIncome,
        tax,
        netIncome,
        effectiveTaxRate
    } = results;

    return (
        <div className="animate-slide-up">
            {/* Summary Card */}
            <div className="gradient-primary rounded-2xl p-6 mb-6 text-white">
                <p className="text-sm opacity-90 mb-1">Total Tax Payable</p>
                <h2 className="text-4xl font-bold mb-4">
                    {formatCurrency(tax.total)}
                </h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="opacity-80">Gross Income</p>
                        <p className="font-semibold">{formatCurrency(grossIncome)}</p>
                    </div>
                    <div>
                        <p className="opacity-80">Net Income</p>
                        <p className="font-semibold">{formatCurrency(netIncome)}</p>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-xs opacity-80">Effective Tax Rate</p>
                    <p className="text-lg font-semibold">{effectiveTaxRate.toFixed(2)}%</p>
                </div>
            </div>

            {/* Download PDF Button */}
            <button
                onClick={() => {
                    trackEvent('download_pdf', { userType: 'individual' });
                    generateTaxPDF({ userType: 'individual' }, results);
                }}
                className="w-full mb-6 bg-white hover:bg-gray-50 text-primary font-semibold 
                         py-4 px-6 rounded-xl border-2 border-primary transition-all duration-200 
                         transform hover:scale-105 hover:shadow-xl
                         focus:outline-none focus:ring-2 focus:ring-primary/50
                         flex items-center justify-center gap-3"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-lg">Download Assessment PDF</span>
            </button>

            {/* Detailed Breakdown */}
            <div className="card mb-6">
                <h3 className="text-lg font-semibold text-text mb-4">Calculation Breakdown</h3>

                {/* Income */}
                <div className="result-row">
                    <span className="font-medium text-text">Gross Income</span>
                    <span className="font-semibold text-primary">{formatCurrency(grossIncome)}</span>
                </div>

                {/* Deductions */}
                <div className="py-3 border-b border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-text">Total Deductions</span>
                        <span className="font-semibold text-red-500">-{formatCurrency(deductions.total)}</span>
                    </div>
                    <div className="pl-4 space-y-1 text-sm text-text-light">
                        <div className="flex justify-between">
                            <span>• Pension</span>
                            <span>{formatCurrency(deductions.pension)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>• NHF</span>
                            <span>{formatCurrency(deductions.nhf)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>• NHIS</span>
                            <span>{formatCurrency(deductions.nhis)}</span>
                        </div>
                    </div>
                </div>

                {/* Reliefs */}
                <div className="py-3 border-b border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-text">Total Reliefs</span>
                        <span className="font-semibold text-red-500">-{formatCurrency(reliefs.total)}</span>
                    </div>
                    <div className="pl-4 space-y-1 text-sm text-text-light">
                        <div className="flex justify-between">
                            <span>• Rent Relief (20%, max ₦500k)</span>
                            <span>{formatCurrency(reliefs.rentRelief)}</span>
                        </div>
                    </div>
                </div>

                {/* Chargeable Income */}
                <div className="result-row bg-background-light -mx-6 px-6">
                    <span className="font-semibold text-text">Chargeable Income</span>
                    <span className="font-bold text-text">{formatCurrency(chargeableIncome)}</span>
                </div>
            </div>

            {/* Tax Bands Breakdown */}
            {tax.breakdown && tax.breakdown.length > 0 && (
                <div className="card">
                    <h3 className="text-lg font-semibold text-text mb-4">Tax Bands Applied (2025 Tax Act)</h3>
                    <div className="space-y-3">
                        {tax.breakdown.map((band, index) => (
                            <div key={index} className="p-3 bg-background-light rounded-lg">
                                <div className="flex justify-between items-start mb-1">
                                    <div>
                                        <p className="text-xs text-text-light">{band.range}</p>
                                        <p className="text-sm font-semibold text-text">
                                            Rate: {band.rate}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-text-light">Tax</p>
                                        <p className="text-sm font-bold text-primary">
                                            {formatCurrency(band.tax)}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-text-light">
                                    Taxable: {formatCurrency(band.taxableAmount)}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 pt-4 border-t-2 border-primary/20">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-text">Total Tax</span>
                            <span className="text-2xl font-bold text-primary">
                                {formatCurrency(tax.total)}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

TaxResults.propTypes = {
    results: PropTypes.shape({
        userType: PropTypes.string.isRequired,
        grossIncome: PropTypes.number,
        deductions: PropTypes.object,
        reliefs: PropTypes.object,
        chargeableIncome: PropTypes.number,
        tax: PropTypes.object,
        netIncome: PropTypes.number,
        effectiveTaxRate: PropTypes.number,
        turnover: PropTypes.number,
        totalTax: PropTypes.number,
        companyType: PropTypes.string,
        applicableRate: PropTypes.number,
    }),
};

export default TaxResults;
