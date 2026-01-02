/**
 * Gee Knowledge Base Helper
 * Enhanced with Tax Rules Engine integration for comprehensive coverage
 */

import { calculatePIT, calculateVAT, calculateWHT, calculatePenalty, formatNaira, parseIncomeFromMessage } from './taxCalculatorBridge';

/**
 * Question patterns and their responses
 */
const RESPONSE_PATTERNS = [
    {
        keywords: ['tax band', 'rate', 'percentage', 'how much tax', 'tax rate'],
        response: `Nigeria uses a progressive tax system with 6 bands:

• First ₦800,000: 0% (Tax Free! 🎉)
• Next ₦2.2M: 15%
• Next ₦9M: 18%
• Next ₦13M: 21%
• Next ₦25M: 23%
• Above ₦50M: 25%

Your tax is calculated by applying each rate to the portion of your income in that band.`
    },
    {
        keywords: ['rent', 'rent relief', 'housing'],
        response: `You can claim Rent Relief under the 2025 Tax Act!

✅ How it works:
• Claim 20% of your annual rent
• Maximum cap: ₦500,000

Example: If your annual rent is ₦3,000,000:
• 20% = ₦600,000
• But you can only claim ₦500,000 (the cap)

This reduces your taxable income!`
    },
    {
        keywords: ['pension', 'nhf', 'nhis', 'deduction', 'deduct'],
        response: `Yes! These deductions reduce your taxable income:

💰 **Tax-Deductible Contributions:**
• Pension: Usually 8% of your salary
• NHF (National Housing Fund): 2.5% of basic salary
• NHIS: Health insurance premiums

All of these are subtracted from your gross income before calculating tax.`
    },
    {
        keywords: ['small business', 'company', '50 million', 'turnover', 'cit'],
        response: `Great news for small businesses!

🏢 **Small Company (Turnover ≤ ₦50M):**
• Tax Rate: 0% 🎉
• You pay NO Companies Income Tax!

🏭 **Large Company (Turnover > ₦50M):**
• Tax Rate: 30% of assessable profits
• Development Levy: 4%

Note: Even at 0%, you must still file returns to get your Tax Clearance Certificate.`
    },
    {
        keywords: ['vat', 'value added', '7.5', 'sales tax'],
        response: `VAT (Value Added Tax) in Nigeria:

📊 **Standard Rate:** 7.5%

🚫 **Exempt Items (No VAT):**
• Basic food items
• Medical/pharmaceutical products
• Educational books and materials
• Baby products
• Fertilizers
• Locally produced animal feeds`
    },
    {
        keywords: ['minimum wage', 'exempt', 'poor', 'low income'],
        response: `If you earn the National Minimum Wage or less, you are COMPLETELY EXEMPT from paying income tax! 🎉

You still should file returns for record purposes, but you won't owe any tax.

Plus, with the new ₦800,000 tax-free threshold, many low-income earners pay zero or minimal tax.`
    },
    {
        keywords: ['tin', 'tax identification', 'number'],
        response: `TIN (Tax Identification Number):

📋 It's a mandatory number for:
• Opening bank accounts
• Government services
• Business registration
• Tax filing

You can get it from FIRS (Federal Inland Revenue Service) or your State tax office.`
    },
    {
        keywords: ['calculate', 'how', 'computation', 'formula'],
        response: `Here's how your tax is calculated:

1️⃣ Start with Gross Income
2️⃣ Subtract Deductions (Pension, NHF, NHIS)
3️⃣ Subtract Reliefs (Rent Relief, etc.)
4️⃣ = Chargeable Income
5️⃣ Apply progressive tax bands
6️⃣ = Total Tax

The TaxGee calculator does all this automatically! Just enter your details and click Calculate Tax. 😊`
    },
    {
        keywords: ['cra', 'consolidated relief', 'allowance'],
        response: `Good question! Under the NEW Nigeria Tax Act 2025, the old Consolidated Relief Allowance (CRA) has been replaced.

❌ Old: CRA (₦200k + 20% of gross)
✅ New: 
• ₦800,000 tax-free threshold
• Specific reliefs like Rent Relief
• Higher exemption bands

The new system is actually more generous for most taxpayers!`
    },
    {
        keywords: ['file', 'filing', 'return', 'deadline', 'when'],
        response: `Tax filing in Nigeria:

📅 **Assessment Year:** January 1 - December 31

📝 **Filing Deadlines 2025:**
• VAT: Monthly (due 21st of following month)
• CIT: Annual (due April 30)
• PAYE: Monthly (due 10th of following month)
• WHT: Monthly (within 21 days of withholding)

📌 **Key 2025 Dates:**
• Jan 21: Q4 CIT Advance Payment
• Apr 21: Q1 CIT Advance Payment
• Apr 30: 2024 CIT Annual Return Due ⚠️
• Jul 21: Q2 CIT Advance Payment
• Oct 21: Q3 CIT Advance Payment

💡 Keep records for 5-7 years!`
    },
    // === NEW COMPREHENSIVE PATTERNS ===
    {
        keywords: ['wht', 'withholding', 'withhold', 'contractor', 'professional'],
        response: `Withholding Tax (WHT) Rates in Nigeria:

💼 **Professional Services:**
• Consulting/Professional Fees: 5%
• Contractor/Construction: 10%

🏢 **Property & Finance:**
• Rent: 10%
• Interest: 10%
• Dividends: 10%

🚛 **Other:**
• Transport/Haulage: 3%
• Agriculture: 3%

📋 **Key Rules:**
• Remit WHT within 21 days of withholding
• Issue WHT certificate to payee
• WHT is a credit against final tax

Example: ₦1M contractor payment = ₦100,000 WHT (10%)`
    },
    {
        keywords: ['deduction', 'allowable', 'expense', 'claim', 'business expense'],
        response: `Allowable Deductions for Tax:

✅ **Fully Deductible (100%):**
• Salaries & wages
• Rent for business premises
• Utilities (electricity, water)
• Professional fees
• Depreciation (as per schedule)
• Insurance premiums

⚠️ **Restricted Deductions:**
• Entertainment: 50% only
• Vehicle expenses: 50% only
• Donations: max 5% of profits

❌ **NOT Deductible:**
• Personal expenses
• Penalties & fines
• VAT paid
• Loan principal repayments
• Capital expenditure (depreciate instead)`
    },
    {
        keywords: ['exempt', 'exemption', 'zero', 'no tax', 'tax free'],
        response: `Tax Exemptions in Nigeria:

🚫 **VAT Exempt Items (0% VAT):**
• Basic food items (unprocessed)
• Medical & pharmaceutical products
• Educational materials & textbooks
• Baby products
• Fertilizers
• Agricultural equipment
• Financial services
• Healthcare services

🏢 **CIT Exemptions:**
• Small companies (≤₦25M): 20% with 50% relief
• Cooperatives: Only 10% rate
• Non-profits: 0% (with certificate)
• Pioneer industries: Tax holiday available

📋 **To claim exemption:**
1. Apply for exemption certificate
2. Maintain proper documentation
3. File returns (even if exempt)`
    },
    {
        keywords: ['penalty', 'late', 'interest', 'fine', 'overdue'],
        response: `Penalties & Interest in Nigeria:

💰 **Interest on Late Payment:**
• 5% per annum (simple interest)
• Calculated from due date

⚠️ **Late Filing Penalties:**
• CIT: 25% of tax (min ₦10,000)
• VAT: ₦50,000 - ₦5,000,000 (graduated)
• Non-filing: ₦500,000 - ₦10,000,000

📈 **Escalation:**
• After 90 days: 2x penalty
• After 180 days: 3x penalty

Example: ₦1M tax, 30 days late:
• Interest: ₦1M × 5% × (30/365) = ₦4,110
• Filing penalty: ₦250,000 (25%)
• Total extra: ₦254,110 😱`
    },
    {
        keywords: ['business type', 'sole proprietor', 'company type', 'partnership', 'cooperative', 'structure'],
        response: `Business Types & Tax Rates:

👤 **Sole Proprietor:**
• Progressive income tax (0-25%)
• VAT optional if <₦25M turnover
• Simpler compliance

🏢 **Small Company (≤₦25M):**
• CIT: 20% (with 50% relief for 3 years!)
• Must file for Tax Clearance

🏭 **Large Company (>₦25M):**
• CIT: 30%
• Quarterly advance payments required

🤝 **Partnership:**
• 20% CIT on firm profits
• Partners pay personal income tax too

🌾 **Cooperative:**
• Only 10% CIT! (incentive rate)

🎗️ **Non-Profit:**
• 0% CIT (with certificate)
• Still file returns`
    },
    {
        keywords: ['loss', 'carry', 'forward', 'offset'],
        response: `Loss Carry-Forward Rules:

📉 **How it works:**
• Losses can offset future profits
• Maximum carry-forward: 4 years
• FIFO method (oldest losses first)

📋 **Requirements:**
• Losses must be documented
• Must be from same business
• Cannot exceed 50% of current year profit

Example:
2024: ₦10M loss
2025: ₦20M profit
→ Offset ₦10M loss
→ Pay tax on ₦10M only! 🎉`
    },
    {
        keywords: ['nexus', 'state', 'multi-state', 'jurisdiction', 'where'],
        response: `Nexus & Multi-State Operations:

📍 **Nexus = Tax obligation in a state**

You have nexus if you have:
• Office/premises in the state
• Employees working there
• Property (owned or leased)
• Revenue ≥₦25M from that state

📋 **Filing Requirements:**
• CIT: One federal return (consolidated)
• VAT: Returns per state (if nexus)
• PAYE: Monthly per state (for employees there)

💡 Track employee locations carefully!`
    },
    {
        keywords: ['quarterly', 'advance', 'instalment', 'payment schedule'],
        response: `CIT Quarterly Advance Payments:

📅 **2025 Schedule:**
• Q1: April 21 (25%)
• Q2: July 21 (25%)
• Q3: October 21 (25%)
• Q4: January 21, 2026 (25%)

💰 **How to calculate:**
Based on PRIOR year tax liability ÷ 4

Example: 2024 CIT was ₦4M
→ Each quarter pay ₦1M in advance

⚠️ **Missed payment?**
Interest + possible penalties apply!`
    }
];

/**
 * Get AI response from Gee
 * Enhanced with calculation support
 */
export function getGeeResponse(userMessage) {
    const messageLower = userMessage.toLowerCase();

    // Check greeting
    if (messageLower.match(/^(hi|hello|hey|good)/)) {
        return `Hello! 👋 I'm Gee, your friendly Nigerian tax assistant!

I can help you understand:
• Tax bands and rates
• Deductions and reliefs
• Small business tax
• VAT rules
• WHT & penalties
• How tax is calculated

What would you like to know about Nigerian tax?`;
    }

    // Check thank you
    if (messageLower.match(/(thank|thanks|appreciate)/)) {
        return `You're welcome! 😊 Feel free to ask if you have more questions about Nigerian tax. I'm here to help!`;
    }

    // Check for calculation requests
    const incomeAmount = parseIncomeFromMessage(userMessage);
    if (incomeAmount && messageLower.includes('tax')) {
        const pitResult = calculatePIT(incomeAmount);
        return `💰 **Tax Estimate for ${formatNaira(incomeAmount)} income:**

📊 **Total Tax:** ${formatNaira(pitResult.tax)}
📈 **Effective Rate:** ${pitResult.effectiveRate}%

This is your Personal Income Tax using the 2025 progressive bands. It doesn't include deductions (pension, NHF) or reliefs (rent relief) which could lower your tax.

Use our main calculator for a detailed breakdown!`;
    }

    // Search for matching pattern
    for (const pattern of RESPONSE_PATTERNS) {
        if (pattern.keywords.some(keyword => messageLower.includes(keyword))) {
            return pattern.response;
        }
    }

    // Default response if no pattern matches
    return `I'm Gee, your tax assistant! 🤔

I can help you with:
• Tax bands and calculation
• Rent relief and deductions
• Small business tax (0% for turnover ≤ ₦50M!)
• VAT information
• WHT rates & penalties
• Filing deadlines
• Business type comparisons

Could you rephrase your question? Or try asking about any of the topics above!`;
}
