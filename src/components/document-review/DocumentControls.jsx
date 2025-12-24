import React from 'react';
import {
    MagnifyingGlassIcon,
    MagnifyingGlassPlusIcon,
    MagnifyingGlassMinusIcon,
    PencilSquareIcon,
    ShareIcon,
    PrinterIcon,
    DocumentArrowDownIcon,
    ChevronDownIcon
} from '@heroicons/react/24/outline';

const DocumentControls = ({
    selectedDocument,
    onDocumentChange,
    onSearchOpen,
    onZoomIn,
    onZoomOut,
    onHighlight,
    onExport
}) => {
    const documents = [
        { id: 'vat_act', name: 'VAT Act 2020' },
        { id: 'cita', name: 'Companies Income Tax Act (CITA)' },
        { id: 'paye', name: 'PAYE Regulations' },
        { id: 'wht', name: 'Withholding Tax Rules' },
        { id: 'firs_manual', name: 'FIRS Procedures Manual' }
    ];

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 mb-6 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4 font-sans">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <select
                        value={selectedDocument}
                        onChange={(e) => onDocumentChange(e.target.value)}
                        className="appearance-none bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-10 py-2.5 text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all cursor-pointer min-w-[200px]"
                    >
                        {documents.map(doc => (
                            <option key={doc.id} value={doc.id}>{doc.name}</option>
                        ))}
                    </select>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        📄
                    </div>
                    <ChevronDownIcon className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
                <button
                    onClick={onSearchOpen}
                    className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                >
                    <MagnifyingGlassIcon className="w-4 h-4 group-hover:text-teal-600" />
                    <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">Search</span>
                </button>

                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                    <button onClick={onZoomOut} className="p-2.5 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors">
                        <MagnifyingGlassMinusIcon className="w-4 h-4" />
                    </button>
                    <button onClick={onZoomIn} className="p-2.5 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors border-l border-slate-200 dark:border-slate-700">
                        <MagnifyingGlassPlusIcon className="w-4 h-4" />
                    </button>
                </div>

                <button
                    onClick={onHighlight}
                    className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                >
                    <PencilSquareIcon className="w-4 h-4 group-hover:text-teal-600" />
                    <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">Annotate</span>
                </button>

                <button className="p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group">
                    <ShareIcon className="w-4 h-4 group-hover:text-teal-600" />
                </button>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={onExport}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                    <DocumentArrowDownIcon className="w-4 h-4 text-teal-600" />
                    Export
                </button>
                <button className="p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    <PrinterIcon className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default DocumentControls;
