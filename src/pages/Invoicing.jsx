import React, { useState } from 'react';
import { useInvoiceData } from '../hooks/useInvoiceData';
import InvoicingHeader from '../components/invoicing/InvoicingHeader';
import InvoiceStatsGrid from '../components/invoicing/InvoiceStatsGrid';
import InvoicingToolbar from '../components/invoicing/InvoicingToolbar';
import InvoiceTable from '../components/invoicing/InvoiceTable';
import TablePagination from '../components/invoicing/TablePagination';
import BulkActionBar from '../components/invoicing/BulkActionBar';
import EmptyInvoiceState from '../components/invoicing/EmptyInvoiceState';
import CreateInvoiceModal from '../components/invoicing/modals/CreateInvoiceModal';
import InvoiceDetailModal from '../components/invoicing/modals/InvoiceDetailModal';

const Invoicing = () => {
    const [filters, setFilters] = useState({ searchQuery: '', status: 'all' });
    const { invoices, loading, error, stats } = useInvoiceData(filters);

    // Selection state
    const [selectedInvoices, setSelectedInvoices] = useState([]);

    // Modal states
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [activeInvoice, setActiveInvoice] = useState(null);

    const handleSelectInvoice = (id) => {
        setSelectedInvoices(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleSelectAll = () => {
        if (selectedInvoices.length === invoices.length) {
            setSelectedInvoices([]);
        } else {
            setSelectedInvoices(invoices.map(i => i.id));
        }
    };

    const handleViewInvoice = (invoice) => {
        setActiveInvoice(invoice);
        setIsDetailModalOpen(true);
    };

    const handleFilterChange = (newFilters) => {
        setFilters(prev => ({ ...prev, ...newFilters }));
    };

    const handleSaveInvoice = (newInvoice) => {
        console.log('Saving Invoice:', newInvoice);
        // This would typically trigger a POST/PUT request and cache invalidation
        alert('Invoice created successfully!');
    };

    return (
        <div className="max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in relative min-h-screen">
            <InvoicingHeader
                title="e-Invoicing"
                subtitle="Generate and track tax-compliant invoices for your business"
                breadcrumbs={[
                    { label: 'Pro Dashboard', href: '#' },
                    { label: 'e-Invoicing' }
                ]}
                onCreateClick={() => setIsCreateModalOpen(true)}
            />

            <InvoiceStatsGrid stats={stats} />

            <InvoicingToolbar
                filters={filters}
                onFilterChange={handleFilterChange}
                onCreateClick={() => setIsCreateModalOpen(true)}
            />

            {loading ? (
                <div className="space-y-4 animate-pulse">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-20 bg-slate-100 dark:bg-slate-800 rounded-2xl w-full" />
                    ))}
                </div>
            ) : invoices.length === 0 ? (
                <EmptyInvoiceState onCreateClick={() => setIsCreateModalOpen(true)} />
            ) : (
                <div className="space-y-6">
                    <InvoiceTable
                        invoices={invoices}
                        selectedInvoices={selectedInvoices}
                        onSelectInvoice={handleSelectInvoice}
                        onSelectAll={handleSelectAll}
                        onViewInvoice={handleViewInvoice}
                    />

                    <TablePagination
                        currentPage={1}
                        totalItems={234} // Mock total
                        itemsPerPage={50}
                        onPageChange={(page) => console.log('Change page', page)}
                    />
                </div>
            )}

            <BulkActionBar
                selectedCount={selectedInvoices.length}
                onClear={() => setSelectedInvoices([])}
                onMarkPaid={() => alert('Marked as paid')}
                onEmail={() => alert('Sending emails')}
                onDelete={() => alert('Deleting invoices')}
            />

            <CreateInvoiceModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onSave={handleSaveInvoice}
            />

            <InvoiceDetailModal
                isOpen={isDetailModalOpen}
                onClose={() => {
                    setIsDetailModalOpen(false);
                    setActiveInvoice(null);
                }}
                invoice={activeInvoice}
            />
        </div>
    );
};

export default Invoicing;
