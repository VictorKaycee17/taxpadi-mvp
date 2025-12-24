export const TAX_RATES = {
    vat: 0.075,
    wht: 0.05, // Default 5%
    dst: 0.005,
    none: 0
};

export const calculateLineItemAmount = (quantity, unitPrice) => {
    return (quantity || 0) * (unitPrice || 0);
};

export const calculateInvoiceTax = (items, taxType, customWhtRate = null) => {
    const taxableItems = items.filter(item => item.taxable);
    const taxableAmount = taxableItems.reduce((sum, item) => sum + calculateLineItemAmount(item.quantity, item.unitPrice), 0);

    let rate = TAX_RATES[taxType] || 0;
    if (taxType === 'wht' && customWhtRate !== null) {
        rate = customWhtRate / 100;
    }

    return taxableAmount * rate;
};

export const calculateInvoiceTotals = (items, taxType, customWhtRate = null) => {
    const subtotalAll = items.reduce((sum, item) => sum + calculateLineItemAmount(item.quantity, item.unitPrice), 0);
    const taxableItems = items.filter(item => item.taxable);
    const subtotalTaxable = taxableItems.reduce((sum, item) => sum + calculateLineItemAmount(item.quantity, item.unitPrice), 0);

    const taxAmount = calculateInvoiceTax(items, taxType, customWhtRate);
    const total = subtotalAll + taxAmount;

    return {
        subtotalAll,
        subtotalTaxable,
        taxAmount,
        total
    };
};
