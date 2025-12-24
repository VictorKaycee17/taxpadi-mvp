import React from 'react';
import {
    HomeIcon,
    DocumentTextIcon,
    ReceiptPercentIcon,
    BookOpenIcon,
    CalendarDaysIcon,
    UsersIcon,
    ShieldCheckIcon,
    DocumentMagnifyingGlassIcon,
    AcademicCapIcon,
    Cog6ToothIcon
} from '@heroicons/react/24/outline';

const Sidebar = ({ activePage, onNavigate, isOpen, onClose }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <HomeIcon className="w-5 h-5" /> },
        { id: 'invoicing', label: 'e-Invoicing', icon: <DocumentTextIcon className="w-5 h-5" /> },
        { id: 'salestax', label: 'Sales Tax', icon: <ReceiptPercentIcon className="w-5 h-5" /> },
        { id: 'policy', label: 'Policy Engine', icon: <BookOpenIcon className="w-5 h-5" /> },
        { id: 'calendar', label: 'Compliance', icon: <CalendarDaysIcon className="w-5 h-5" /> },
        { id: 'payroll', label: 'Payroll', icon: <UsersIcon className="w-5 h-5" /> },
        { id: 'audit', label: 'Audit & Dispute', icon: <ShieldCheckIcon className="w-5 h-5" /> },
        { id: 'review', label: 'Document Review', icon: <DocumentMagnifyingGlassIcon className="w-5 h-5" /> },
        { id: 'practitioner', label: 'Practitioner', icon: <AcademicCapIcon className="w-5 h-5" /> },
        { id: 'settings', label: 'Settings', icon: <Cog6ToothIcon className="w-5 h-5" /> },
    ];

    return (
        <aside className={`
            w-[260px] bg-slate-900 text-white min-h-screen flex flex-col fixed left-0 top-0 bottom-0 z-30 transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
            <div className="p-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    <span className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center text-white text-lg font-black">T</span>
                    TAXGEE
                </h1>
                <button
                    onClick={onClose}
                    className="lg:hidden p-2 text-slate-400 hover:text-white"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group
                        ${activePage === item.id
                                ? 'bg-teal-500 text-white shadow-lg'
                                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                            }`}
                    >
                        <div className={`transition-transform duration-200 ${activePage === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                            {item.icon}
                        </div>
                        <span className="font-medium text-sm">{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 cursor-pointer transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold border-2 border-teal-500/20 group-hover:border-teal-500 transition-colors">
                        JO
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white truncate">Jane Obi</p>
                        <p className="text-xs text-slate-500 truncate">jane@acme.ng</p>
                    </div>
                    <button className="text-slate-500 hover:text-rose-500 p-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
