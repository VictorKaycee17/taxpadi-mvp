import React, { useState } from 'react';
import VendorBillsHeader from '../components/vendorBills/VendorBillsHeader';
import InvoiceSummaryBar from '../components/vendorBills/InvoiceSummaryBar';
import VendorBillFilters from '../components/vendorBills/VendorBillFilters';
import VendorInvoicesTable from '../components/vendorBills/VendorInvoicesTable';

const VendorBills = () => {
    // Mock Data
    const summaryData = {
        totalInvoices: 40,
        thisPeriodCount: 34,
        totalAmount: 1240000,
        inputVat: 223200,
        whtDeducted: 15000,
        matchedCount: 34,
        matchedPercentage: 85,
        pendingCount: 6
    };

    const invoicesData = [
        {
            id: 1,
            date: '20-Dec-2025',
            vendor: 'First Bank Plc',
            invoiceNumber: 'INV-8741',
            amount: 45000,
            vatInput: 8100,
            wht: 0,
            status: 'matched',
            category: 'Bank Charges'
        },
        {
            id: 2,
            date: '18-Dec-2025',
            vendor: 'Zenith Bank',
            invoiceNumber: 'INV-5234',
            amount: 120500,
            vatInput: 21700,
            wht: 0,
            status: 'matched',
            category: 'Finance Costs'
        },
        {
            id: 3,
            date: '15-Dec-2025',
            vendor: 'Contractor ABC',
            invoiceNumber: 'CON-2024',
            amount: 50000,
            vatInput: 0,
            wht: 2500,
            status: 'pending',
            category: 'Professional Services'
        },
        {
            id: 4,
            date: '12-Dec-2025',
            vendor: 'Office Supplies Ltd',
            invoiceNumber: 'INV-9012',
            amount: 180000,
            vatInput: 32400,
            wht: 0,
            status: 'matched',
            category: 'Office Expenses'
        },
        {
            id: 5,
            date: '10-Dec-2025',
            vendor: 'Legal & Co',
            invoiceNumber: 'LGL-4421',
            amount: 250000,
            vatInput: 45000,
            wht: 12500,
            status: 'disputed',
            category: 'Legal Fees'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            <VendorBillsHeader
                onNewInvoice={() => console.log('New Invoice')}
                onImport={() => console.log('Import CSV')}
                onSearch={() => console.log('Search')}
                onAnalytics={() => console.log('Analytics')}
                onExport={() => console.log('Export')}
                onSettings={() => console.log('Settings')}
            />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <InvoiceSummaryBar {...summaryData} />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Main Content Area */}
                    <div className="lg:col-span-3 space-y-6">
                        <VendorBillFilters
                            onFilterChange={(key, val) => console.log(key, val)}
                            onClear={() => console.log('Clear filters')}
                        />
                        <VendorInvoicesTable
                            invoices={invoicesData}
                            onView={(id) => console.log('View invoice', id)}
                        />
                    </div>

                    {/* Sidebar Area */}
                    <div className="space-y-6">
                        {/* WHT Evidence Box */}
                        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                            <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                WHT Evidence
                            </h3>
                            <div className="space-y-4">
                                <div className="text-sm">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-slate-600">Total Deducted</span>
                                        <span className="font-bold text-slate-900">₦15,000</span>
                                    </div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-slate-600">Remitted</span>
                                        <span className="font-bold text-emerald-600">₦12,500</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-600">Pending</span>
                                        <span className="font-bold text-amber-600">₦2,500</span>
                                    </div>
                                </div>
                                <button className="w-full py-2 bg-slate-50 text-slate-700 text-xs font-bold rounded-lg border border-slate-200 hover:bg-slate-100">
                                    View WHT Schedule
                                </button>
                            </div>
                        </div>

                        {/* Recent Vendors */}
                        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                            <h3 className="text-sm font-bold text-slate-900 mb-4">Top Vendors</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">FB</div>
                                        <span className="text-slate-700 font-medium">First Bank</span>
                                    </div>
                                    <span className="text-slate-900 font-medium">₦485k</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">OS</div>
                                        <span className="text-slate-700 font-medium">Office Supp.</span>
                                    </div>
                                    <span className="text-slate-900 font-medium">₦320k</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">CA</div>
                                        <span className="text-slate-700 font-medium">Contractor A</span>
                                    </div>
                                    <span className="text-slate-900 font-medium">₦220k</span>
                                </div>
                            </div>
                            <button className="w-full mt-4 text-xs font-bold text-teal-600 hover:text-teal-700">
                                View All Vendors
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorBills;
