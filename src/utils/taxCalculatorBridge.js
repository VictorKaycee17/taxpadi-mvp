/**
 * Tax Calculator Bridge for Gee AI
 * Allows inline tax calculations in chat responses
 */

// PIT Tax Bands (Nigeria 2025)
const PIT_BANDS = [
    { limit: 800000, rate: 0 },
    { limit: 3000000, rate: 0.15 },   // Next 2.2M
    { limit: 12000000, rate: 0.18 },  // Next 9M
    { limit: 25000000, rate: 0.21 },  // Next 13M
    { limit: 50000000, rate: 0.23 },  // Next 25M
    { limit: Infinity, rate: 0.25 }   // Above 50M
];

// WHT Rates by Payment Type
const WHT_RATES = {
    consulting: 0.05,
    professional: 0.05,
    contractor: 0.10,
    construction: 0.10,
    rent: 0.10,
    interest: 0.10,
    dividend: 0.10,
    transport: 0.03,
    agriculture: 0.03
};

/**
 * Calculate PIT from income
 * @param {number} annualIncome - Annual income in Naira
 * @returns {object} - { tax, effectiveRate, breakdown }
 */
export function calculatePIT(annualIncome) {
    let remaining = annualIncome;
    let totalTax = 0;
    let prevLimit = 0;
    const breakdown = [];

    for (const band of PIT_BANDS) {
        const taxableInBand = Math.min(remaining, band.limit - prevLimit);
        if (taxableInBand <= 0) break;

        const taxForBand = taxableInBand * band.rate;
        totalTax += taxForBand;

        if (taxForBand > 0) {
            breakdown.push({
                range: `₦${prevLimit.toLocaleString()} - ₦${band.limit === Infinity ? '∞' : band.limit.toLocaleString()}`,
                rate: `${band.rate * 100}%`,
                amount: taxForBand
            });
        }

        remaining -= taxableInBand;
        prevLimit = band.limit;
    }

    return {
        income: annualIncome,
        tax: totalTax,
        effectiveRate: annualIncome > 0 ? (totalTax / annualIncome * 100).toFixed(2) : 0,
        breakdown
    };
}

/**
 * Calculate VAT (7.5%)
 * @param {number} amount - Amount in Naira
 * @param {boolean} inclusive - Is VAT already included?
 * @returns {object} - { netAmount, vatAmount, grossAmount }
 */
export function calculateVAT(amount, inclusive = false) {
    const VAT_RATE = 0.075;

    if (inclusive) {
        const netAmount = amount / (1 + VAT_RATE);
        const vatAmount = amount - netAmount;
        return { netAmount, vatAmount, grossAmount: amount };
    } else {
        const vatAmount = amount * VAT_RATE;
        return { netAmount: amount, vatAmount, grossAmount: amount + vatAmount };
    }
}

/**
 * Calculate WHT
 * @param {number} amount - Payment amount in Naira
 * @param {string} type - Payment type (consulting, contractor, rent, etc.)
 * @returns {object} - { whtAmount, netPayment, rate }
 */
export function calculateWHT(amount, type = 'consulting') {
    const rate = WHT_RATES[type.toLowerCase()] || 0.05;
    const whtAmount = amount * rate;
    return {
        grossAmount: amount,
        whtAmount,
        netPayment: amount - whtAmount,
        rate: `${rate * 100}%`,
        type
    };
}

/**
 * Calculate Late Payment Penalty & Interest
 * @param {number} taxAmount - Original tax amount
 * @param {number} daysLate - Number of days late
 * @returns {object} - { interest, penalty, total }
 */
export function calculatePenalty(taxAmount, daysLate) {
    // Interest: 5% per annum (simple)
    const annualInterestRate = 0.05;
    const interest = taxAmount * annualInterestRate * (daysLate / 365);

    // Filing penalty: 25% of tax (min ₦10,000), escalates after 90/180 days
    let penaltyRate = 0.25;
    if (daysLate > 180) penaltyRate = 0.75; // 3x
    else if (daysLate > 90) penaltyRate = 0.50; // 2x

    const penalty = Math.max(taxAmount * penaltyRate, 10000);

    return {
        taxAmount,
        daysLate,
        interest: Math.round(interest),
        penalty: Math.round(penalty),
        total: Math.round(taxAmount + interest + penalty)
    };
}

/**
 * Format currency for display
 */
export function formatNaira(amount) {
    return `₦${amount.toLocaleString()}`;
}

/**
 * Parse income query from chat message
 * Returns income amount if found, null otherwise
 */
export function parseIncomeFromMessage(message) {
    // Match patterns like "5M", "5 million", "5,000,000", "₦5000000"
    const patterns = [
        /₦?\s*([\d,]+(?:\.\d+)?)\s*(?:million|m)/i,
        /₦?\s*([\d,]+(?:\.\d+)?)\s*(?:naira)?/i
    ];

    for (const pattern of patterns) {
        const match = message.match(pattern);
        if (match) {
            let amount = parseFloat(match[1].replace(/,/g, ''));
            // If "million" or "m" was used, multiply
            if (/million|m/i.test(message)) {
                amount *= 1000000;
            }
            return amount;
        }
    }
    return null;
}
