/**
 * TaxPadi - Nigerian Tax Calculator Engine
 * Nigeria Tax Act 2025 (Effective January 1, 2026)
 * Source: Tax_Rules_Spec.md
 */

/**
 * Nigerian Tax Bands for 2026 (Section 1A - Fourth Schedule)
 * Progressive tax rates applied to Chargeable Income
 */
const INDIVIDUAL_TAX_BANDS = [
    { limit: 800000, rate: 0.00 },        // First ₦800,000 at 0% (Tax Exempt)
    { limit: 3000000, rate: 0.15 },       // Next ₦2,200,000 at 15%
    { limit: 12000000, rate: 0.18 },      // Next ₦9,000,000 at 18%
    { limit: 25000000, rate: 0.21 },      // Next ₦13,000,000 at 21%
    { limit: 50000000, rate: 0.23 },      // Next ₦25,000,000 at 23%
    { limit: Infinity, rate: 0.25 }       // Above ₦50,000,000 at 25%
];

/**
 * Company Tax Rates (Section 2A)
 */
const COMPANY_TAX_RATES = {
    SMALL_COMPANY_THRESHOLD: 50000000,    // ₦50 million
    SMALL_COMPANY_RATE: 0.00,             // 0% for turnover ≤ ₦50M
    LARGE_COMPANY_RATE: 0.30              // 30% for turnover > ₦50M
};

/**
 * Calculate Rent Relief (Section 1B)
 * 20% of actual rent paid, capped at ₦500,000
 * 
 * @param {number} annualRent - Annual rent paid
 * @returns {number} Rent relief amount
 */
export function calculateRentRelief(annualRent) {
    if (!annualRent || annualRent <= 0) return 0;
    const relief = annualRent * 0.20;
    return Math.min(relief, 500000);
}

/**
 * Apply individual tax bands to chargeable income
 * Progressive taxation per Section 1A
 * 
 * @param {number} chargeableIncome - Income after all deductions and reliefs
 * @returns {object} Tax breakdown by band and total tax
 */
export function applyIndividualTaxBands(chargeableIncome) {
    if (chargeableIncome <= 0) {
        return { totalTax: 0, breakdown: [] };
    }

    let remainingIncome = chargeableIncome;
    let totalTax = 0;
    const breakdown = [];
    let previousLimit = 0;

    for (const band of INDIVIDUAL_TAX_BANDS) {
        if (remainingIncome <= 0) break;

        const bandSize = band.limit - previousLimit;
        const taxableInThisBand = Math.min(remainingIncome, bandSize);
        const taxForThisBand = taxableInThisBand * band.rate;

        totalTax += taxForThisBand;

        // Only add to breakdown if there's taxable income in this band
        if (taxableInThisBand > 0) {
            breakdown.push({
                range: `₦${previousLimit.toLocaleString()} - ₦${band.limit === Infinity ? 'above' : band.limit.toLocaleString()}`,
                rate: `${(band.rate * 100)}%`,
                taxableAmount: taxableInThisBand,
                tax: taxForThisBand
            });
        }

        remainingIncome -= taxableInThisBand;
        previousLimit = band.limit;
    }

    return { totalTax, breakdown };
}

/**
 * Calculate Company Tax (Section 2A)
 * 
 * @param {number} annualTurnover - Company's annual turnover
 * @returns {object} Tax calculation for company
 */
export function calculateCompanyTax(annualTurnover) {
    if (!annualTurnover || annualTurnover <= 0) {
        return {
            turnover: 0,
            applicableRate: 0,
            taxableAmount: 0,
            totalTax: 0,
            companyType: 'Small Company'
        };
    }

    const isSmallCompany = annualTurnover <= COMPANY_TAX_RATES.SMALL_COMPANY_THRESHOLD;
    const applicableRate = isSmallCompany ? COMPANY_TAX_RATES.SMALL_COMPANY_RATE : COMPANY_TAX_RATES.LARGE_COMPANY_RATE;
    const totalTax = annualTurnover * applicableRate;

    return {
        turnover: annualTurnover,
        applicableRate,
        taxableAmount: annualTurnover,
        totalTax,
        companyType: isSmallCompany ? 'Small Company' : 'Medium/Large Company',
        threshold: COMPANY_TAX_RATES.SMALL_COMPANY_THRESHOLD
    };
}

/**
 * Calculate Individual Income Tax
 * Per Section 1 - Personal Income Tax
 * 
 * @param {object} inputs - Tax calculation inputs
 * @param {number} inputs.grossIncome - Annual gross income
 * @param {number} inputs.pension - Pension contribution
 * @param {number} inputs.nhf - National Housing Fund
 * @param {number} inputs.nhis - National Health Insurance Scheme
 * @param {number} inputs.annualRent - Annual rent paid
 * @returns {object} Complete individual tax calculation breakdown
 */
export function calculateIndividualTax(inputs) {
    const { grossIncome, pension, nhf, nhis, annualRent } = inputs;

    // Calculate reliefs
    const rentRelief = calculateRentRelief(annualRent || 0);

    // Total deductions (Section 1B)
    const totalDeductions = pension + nhf + nhis;

    // Total reliefs (only Rent Relief per spec - NO CRA)
    const totalReliefs = rentRelief;

    // Chargeable Income = Gross Income - Deductions - Reliefs (Section 1C)
    const chargeableIncome = Math.max(0, grossIncome - totalDeductions - totalReliefs);

    // Apply progressive tax bands
    const { totalTax, breakdown } = applyIndividualTaxBands(chargeableIncome);

    // Net income after tax and deductions
    const netIncome = grossIncome - totalDeductions - totalTax;

    return {
        userType: 'individual',
        grossIncome,
        deductions: {
            pension,
            nhf,
            nhis,
            total: totalDeductions
        },
        reliefs: {
            rentRelief,
            total: totalReliefs
        },
        chargeableIncome,
        tax: {
            total: totalTax,
            breakdown
        },
        netIncome,
        effectiveTaxRate: grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0
    };
}

/**
 * Main tax calculation function
 * Routes to individual or company tax calculation
 * 
 * @param {object} inputs - Tax calculation inputs
 * @param {string} inputs.userType - 'individual' or 'company'
 * @param {number} inputs.grossIncome - For individuals
 * @param {number} inputs.annualTurnover - For companies
 * @returns {object} Complete tax calculation
 */
export function calculateTax(inputs) {
    const { userType = 'individual' } = inputs;

    if (userType === 'company') {
        const companyTaxResult = calculateCompanyTax(inputs.annualTurnover || 0);
        return {
            userType: 'company',
            ...companyTaxResult,
            netIncome: companyTaxResult.turnover - companyTaxResult.totalTax,
            effectiveTaxRate: companyTaxResult.turnover > 0
                ? (companyTaxResult.totalTax / companyTaxResult.turnover) * 100
                : 0
        };
    }

    // Default to individual tax calculation
    return calculateIndividualTax(inputs);
}

/**
 * Format currency to Nigerian Naira
 * 
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount) {
    return `₦${amount.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

/**
 * Validate numeric input
 * 
 * @param {any} value - Value to validate
 * @returns {number} Valid number or 0
 */
export function validateNumber(value) {
    const num = parseFloat(value);
    return isNaN(num) || num < 0 ? 0 : num;
}
