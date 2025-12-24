import React, { useState, useEffect } from 'react';
import { XMarkIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { calculateInvoiceTotals, TAX_RATES } from '../../../utils/invoiceCalculations';

const CreateInvoiceModal = ({ isOpen, onClose, onSave }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        clientName: '',
        clientEmail: '',
        invoiceDate: new Date().toISOString().split('T')[0],
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        invoiceNumber: `INV-2025-${Math.floor(10000 + Math.random() * 90000)}`,
        items: [{ id: Date.now(), description: '', quantity: 1, unitPrice: 0, taxable: true }],
        taxType: 'vat',
        customWhtRate: 5,
        notes: ''
    });

    const [totals, setTotals] = useState({ subtotalAll: 0, subtotalTaxable: 0, taxAmount: 0, total: 0 });

    useEffect(() => {
        const newTotals = calculateInvoiceTotals(formData.items, formData.taxType, formData.customWhtRate);
        setTotals(newTotals);
    }, [formData.items, formData.taxType, formData.customWhtRate]);

    if (!isOpen) return null;

    const addItem = () => {
        setFormData({
            ...formData,
            items: [...formData.items, { id: Date.now(), description: '', quantity: 1, unitPrice: 0, taxable: true }]
        });
    };

    const removeItem = (id) => {
        if (formData.items.length === 1) return;
        setFormData({
            ...formData,
            items: formData.items.filter(item => item.id !== id)
        });
    };

    const updateItem = (id, field, value) => {
        setFormData({
            ...formData,
            items: formData.items.map(item => item.id === id ? { ...item, [field]: value } : item)
        });
    };

    const handleSave = () => {
        onSave({ ...formData, ...totals });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

            <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-scale-in">
                {/* Header */}
                <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                    <div>
                        <h2 className="text-xl font-black text-slate-900 dark:text-white">Create New Invoice</h2>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Step {step} of 2</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors">
                        <XMarkIcon className="w-6 h-6 text-slate-500" />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
                    {step === 1 ? (
                        <div className="space-y-6 animate-fade-in">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase">Client Name *</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all font-medium"
                                        placeholder="e.g. Acme Corp"
                                        value={formData.clientName}
                                        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase">Client Email *</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all font-medium"
                                        placeholder="e.g. billing@acme.com"
                                        value={formData.clientEmail}
                                        onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase">Invoice #</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-teal-600"
                                        value={formData.invoiceNumber}
                                        readOnly
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase">Issue Date</label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none font-medium"
                                        value={formData.invoiceDate}
                                        onChange={(e) => setFormData({ ...formData, invoiceDate: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase">Due Date</label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none font-medium text-rose-500"
                                        value={formData.dueDate}
                                        onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-8 animate-fade-in">
                            {/* Table */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Line Items</h3>
                                    <button
                                        onClick={addItem}
                                        className="flex items-center gap-2 text-teal-600 hover:text-teal-700 text-xs font-bold uppercase transition-colors"
                                    >
                                        <PlusIcon className="w-4 h-4" />
                                        <span>Add Item</span>
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    {formData.items.map((item) => (
                                        <div key={item.id} className="grid grid-cols-12 gap-3 items-center group">
                                            <div className="col-span-12 sm:col-span-5">
                                                <input
                                                    type="text"
                                                    placeholder="Description"
                                                    className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium"
                                                    value={item.description}
                                                    onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                                                />
                                            </div>
                                            <div className="col-span-4 sm:col-span-2">
                                                <input
                                                    type="number"
                                                    placeholder="Qty"
                                                    className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-center"
                                                    value={item.quantity}
                                                    onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value))}
                                                />
                                            </div>
                                            <div className="col-span-4 sm:col-span-2">
                                                <input
                                                    type="number"
                                                    placeholder="Price"
                                                    className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-right"
                                                    value={item.unitPrice}
                                                    onChange={(e) => updateItem(item.id, 'unitPrice', parseFloat(e.target.value))}
                                                />
                                            </div>
                                            <div className="col-span-2 sm:col-span-1 text-center">
                                                <input
                                                    type="checkbox"
                                                    className="w-5 h-5 rounded border-slate-300 text-teal-600"
                                                    checked={item.taxable}
                                                    onChange={(e) => updateItem(item.id, 'taxable', e.target.checked)}
                                                />
                                            </div>
                                            <div className="col-span-2 sm:col-span-2 flex justify-end">
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="p-2 text-slate-300 hover:text-rose-500 transition-colors"
                                                >
                                                    <TrashIcon className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tax Selection */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase block mb-4">Tax Configuration</label>
                                    <div className="space-y-3">
                                        {[
                                            { id: 'vat', label: 'VAT (7.5%)', desc: 'Value Added Tax' },
                                            { id: 'wht', label: 'WHT (5-10%)', desc: 'Withholding Tax' },
                                            { id: 'dst', label: 'DST (0.5%)', desc: 'Digital Services Tax' },
                                            { id: 'none', label: 'None', desc: 'No tax applicable' }
                                        ].map((t) => (
                                            <div
                                                key={t.id}
                                                onClick={() => setFormData({ ...formData, taxType: t.id })}
                                                className={`p-4 rounded-2xl border cursor-pointer transition-all ${formData.taxType === t.id
                                                        ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/10'
                                                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                                                    }`}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <p className="text-sm font-black text-slate-900 dark:text-white">{t.label}</p>
                                                        <p className="text-[10px] text-slate-500 font-bold uppercase">{t.desc}</p>
                                                    </div>
                                                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.taxType === t.id ? 'border-teal-500' : 'border-slate-300'
                                                        }`}>
                                                        {formData.taxType === t.id && <div className="w-2 h-2 bg-teal-500 rounded-full" />}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Sumary */}
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl space-y-4">
                                    <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2">Invoice Summary</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-500 font-bold uppercase text-[10px]">Subtotal (All)</span>
                                            <span className="font-bold text-slate-900 dark:text-white">₦{totals.subtotalAll.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-500 font-bold uppercase text-[10px]">Taxable Amount</span>
                                            <span className="font-bold text-slate-900 dark:text-white">₦{totals.subtotalTaxable.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-teal-600 font-bold uppercase text-[10px]">Tax ({formData.taxType.toUpperCase()})</span>
                                            <span className="font-black text-teal-600">₦{totals.taxAmount.toLocaleString()}</span>
                                        </div>
                                        <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                                            <span className="text-slate-900 dark:text-white font-black uppercase text-xs">Total Due</span>
                                            <span className="text-2xl font-black text-teal-600">₦{totals.total.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors uppercase tracking-widest"
                    >
                        Cancel
                    </button>

                    <div className="flex gap-3">
                        {step === 2 && (
                            <button
                                onClick={() => setStep(1)}
                                className="px-6 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all"
                            >
                                Back
                            </button>
                        )}
                        {step === 1 ? (
                            <button
                                onClick={() => setStep(2)}
                                className="px-8 py-3 bg-slate-900 dark:bg-teal-500 text-white rounded-xl text-sm font-bold shadow-lg transition-all active:scale-95"
                            >
                                Next: Line Items
                            </button>
                        ) : (
                            <button
                                onClick={handleSave}
                                className="px-8 py-3 bg-teal-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-teal-500/20 transition-all active:scale-95"
                            >
                                Create & Send Invoice
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateInvoiceModal;
