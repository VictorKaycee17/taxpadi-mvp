import React from 'react';
import { XMarkIcon, ArrowDownTrayIcon, PrinterIcon, EnvelopeIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const InvoiceDetailModal = ({ isOpen, onClose, invoice }) => {
    if (!isOpen || !invoice) return null;

    const getStatusStyles = (status) => {
        const lowerStatus = status.toLowerCase();
        if (lowerStatus === 'paid') return 'bg-emerald-50 text-emerald-700 border-emerald-100';
        if (lowerStatus === 'pending') return 'bg-amber-50 text-amber-700 border-amber-100';
        if (lowerStatus === 'overdue') return 'bg-rose-50 text-rose-700 border-rose-100';
        return 'bg-slate-50 text-slate-700 border-slate-100';
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

            <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[95vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col animate-scale-in">
                {/* Header */}
                <div className="p-8 border-b border-slate-200 dark:border-slate-800 flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white">{invoice.invoiceNumber}</h2>
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${getStatusStyles(invoice.status)}`}>
                                {invoice.status.toUpperCase()}
                            </span>
                        </div>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                            Issued: {new Date(invoice.invoiceDate).toLocaleDateString()} • Due: {new Date(invoice.dueDate).toLocaleDateString()}
                        </p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                        <XMarkIcon className="w-6 h-6 text-slate-400" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8 space-y-12">
                    {/* Client & Company Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Billed To</h3>
                            <div className="space-y-1">
                                <p className="text-lg font-black text-slate-900 dark:text-white">{invoice.clientName}</p>
                                <p className="text-sm font-medium text-slate-500">{invoice.clientEmail}</p>
                                <p className="text-sm font-medium text-slate-500">+234 123 456 7890</p>
                            </div>
                        </div>
                        <div className="space-y-4 sm:text-right">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Issued By</h3>
                            <div className="space-y-1">
                                <p className="text-lg font-black text-teal-600">TaxGee Systems</p>
                                <p className="text-sm font-medium text-slate-500">billing@taxgee.ng</p>
                                <p className="text-sm font-medium text-slate-500">Lagos, Nigeria</p>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 dark:bg-slate-800/50">
                                <tr>
                                    <th className="p-4 text-[10px] font-black text-slate-500 uppercase">Item Description</th>
                                    <th className="p-4 text-[10px] font-black text-slate-500 uppercase text-center">Qty</th>
                                    <th className="p-4 text-[10px] font-black text-slate-500 uppercase text-right">Price</th>
                                    <th className="p-4 text-[10px] font-black text-slate-500 uppercase text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {invoice.items.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="p-4 text-sm font-bold text-slate-900 dark:text-white">{item.description}</td>
                                        <td className="p-4 text-sm font-medium text-slate-500 text-center">{item.quantity}</td>
                                        <td className="p-4 text-sm font-medium text-slate-500 text-right">₦{item.unitPrice.toLocaleString()}</td>
                                        <td className="p-4 text-sm font-black text-slate-900 dark:text-white text-right">₦{(item.quantity * item.unitPrice).toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Summary */}
                    <div className="flex flex-col items-end pt-6">
                        <div className="w-full sm:w-64 space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500 font-bold uppercase text-[10px]">Subtotal</span>
                                <span className="font-bold text-slate-900 dark:text-white">₦{invoice.subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-teal-600 font-bold uppercase text-[10px]">Tax ({invoice.taxType.toUpperCase()})</span>
                                <span className="font-black text-teal-600">₦{invoice.taxAmount.toLocaleString()}</span>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                                <span className="text-slate-900 dark:text-white font-black uppercase text-xs">Total Amount</span>
                                <span className="text-3xl font-black text-teal-600">₦{invoice.total.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Notes</h4>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                            {invoice.notes || "Please include the invoice number in your payment reference. Thank you for your business!"}
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="p-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex flex-wrap gap-4 justify-between items-center">
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-black uppercase hover:border-teal-500 transition-all">
                            <ArrowDownTrayIcon className="w-4 h-4" />
                            PDF
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-black uppercase hover:border-teal-500 transition-all">
                            <PrinterIcon className="w-4 h-4" />
                            Print
                        </button>
                    </div>

                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-6 py-3 bg-teal-50 border border-teal-100 text-teal-700 rounded-xl text-xs font-black uppercase hover:bg-teal-100 transition-all">
                            <EnvelopeIcon className="w-4 h-4" />
                            Resend
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-xl text-xs font-black uppercase shadow-lg shadow-teal-500/20 hover:bg-teal-600 transition-all">
                            <CheckBadgeIcon className="w-4 h-4" />
                            Mark as Paid
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceDetailModal;
