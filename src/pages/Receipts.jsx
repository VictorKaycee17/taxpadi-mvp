import React, { useState } from 'react';
import ReceiptsHeader from '../components/receipts/ReceiptsHeader';
import QuickStatsBar from '../components/receipts/QuickStatsBar';
import ReceiptFiltersBar from '../components/receipts/ReceiptFiltersBar';
import ReceiptCard from '../components/receipts/ReceiptCard';
import ReceiptTable from '../components/receipts/ReceiptTable';
import { Squares2X2Icon, TableCellsIcon } from '@heroicons/react/24/outline';

const Receipts = () => {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'table'
    const [filters, setFilters] = useState({
        dateRange: 'all',
        category: 'all',
        taxType: 'all',
        status: 'all'
    });
    const [selectedReceipts, setSelectedReceipts] = useState([]);

    // Mock receipt data
    const mockReceipts = [
        {
            id: 1,
            vendor: 'First Bank',
            amount: 45000,
            date: '15 Dec 2025',
            category: 'Office Supplies',
            taxType: 'VAT Input',
            status: 'matched',
            thumbnail: null
        },
        {
            id: 2,
            vendor: 'Zenith Bank',
            amount: 120500,
            date: '14 Dec 2025',
            category: 'Professional Services',
            taxType: null,
            status: 'untagged',
            thumbnail: null
        },
        {
            id: 3,
            vendor: 'IKEDC',
            amount: 28750,
            date: '13 Dec 2025',
            category: 'Utilities',
            taxType: 'VAT Input',
            status: 'matched',
            thumbnail: null
        },
        {
            id: 4,
            vendor: 'Uber Nigeria',
            amount: 8500,
            date: '12 Dec 2025',
            category: 'Travel & Transport',
            taxType: 'VAT Input',
            status: 'unmatched',
            thumbnail: null
        },
        {
            id: 5,
            vendor: 'Shoprite',
            amount: 15600,
            date: '11 Dec 2025',
            category: 'Entertainment',
            taxType: null,
            status: 'untagged',
            thumbnail: null
        },
        {
            id: 6,
            vendor: 'Jumia',
            amount: 52000,
            date: '10 Dec 2025',
            category: 'Office Supplies',
            taxType: 'VAT Input',
            status: 'matched',
            thumbnail: null
        }
    ];

    const stats = {
        totalReceipts: mockReceipts.length,
        thisMonth: mockReceipts.filter(r => r.date.includes('Dec 2025')).length,
        totalDeductible: mockReceipts.reduce((sum, r) => sum + r.amount, 0),
        untagged: mockReceipts.filter(r => r.status === 'untagged').length,
        vatInput: mockReceipts.filter(r => r.taxType === 'VAT Input').reduce((sum, r) => sum + r.amount, 0)
    };

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const handleClearFilters = () => {
        setFilters({
            dateRange: 'all',
            category: 'all',
            taxType: 'all',
            status: 'all'
        });
    };

    const handleSelectReceipt = (id) => {
        setSelectedReceipts(prev =>
            prev.includes(id) ? prev.filter(rid => rid !== id) : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            <ReceiptsHeader
                onUpload={() => console.log('Upload clicked')}
                onSearch={() => console.log('Search clicked')}
                onReports={() => console.log('Reports clicked')}
                onSettings={() => console.log('Settings clicked')}
            />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <QuickStatsBar {...stats} />

                <ReceiptFiltersBar
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onClearFilters={handleClearFilters}
                    onSaveFilterSet={() => console.log('Save filter set')}
                />

                {/* View Toggle */}
                <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-slate-600 font-medium">
                        Showing {mockReceipts.length} receipt{mockReceipts.length !== 1 ? 's' : ''}
                    </div>
                    <div className="flex gap-2 bg-white border border-slate-200 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded transition-all ${viewMode === 'grid'
                                    ? 'bg-teal-600 text-white shadow-sm'
                                    : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            <Squares2X2Icon className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setViewMode('table')}
                            className={`p-2 rounded transition-all ${viewMode === 'table'
                                    ? 'bg-teal-600 text-white shadow-sm'
                                    : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            <TableCellsIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Receipt Display */}
                {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {mockReceipts.map(receipt => (
                            <ReceiptCard
                                key={receipt.id}
                                receipt={receipt}
                                isSelected={selectedReceipts.includes(receipt.id)}
                                onView={(id) => console.log('View receipt', id)}
                                onAction={(id) => console.log('Action for receipt', id)}
                            />
                        ))}
                    </div>
                ) : (
                    <ReceiptTable
                        receipts={mockReceipts}
                        selectedIds={selectedReceipts}
                        onView={(id) => console.log('View receipt', id)}
                        onSelect={handleSelectReceipt}
                    />
                )}

                {/* Pagination */}
                <div className="mt-8 flex items-center justify-center gap-2">
                    <button className="px-3 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-all">
                        &lt; Previous
                    </button>
                    <button className="px-3 py-2 text-sm font-bold bg-teal-600 text-white rounded-lg">1</button>
                    <button className="px-3 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-all">2</button>
                    <button className="px-3 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-all">3</button>
                    <button className="px-3 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-all">
                        Next &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Receipts;
