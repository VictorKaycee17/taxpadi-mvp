import React from 'react';

const SalesByCategory = ({ categories = [] }) => {
    // Sort by percentage descending
    const sortedCategories = [...categories].sort((a, b) => b.percentage - a.percentage);

    return (
        <div className="bg-white border border-slate-200 rounded-xl p-5 mb-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-900">Sales by Category</h3>
                <button className="text-xs font-bold text-teal-600 hover:text-teal-700">View Report</button>
            </div>

            <div className="space-y-4">
                {sortedCategories.map((cat, index) => (
                    <div key={index} className="space-y-1">
                        <div className="flex justify-between items-end text-sm">
                            <span className="font-medium text-slate-700">{cat.name}</span>
                            <div className="text-right">
                                <span className="font-bold text-slate-900 block">₦{cat.amount.toLocaleString()}</span>
                                <span className="text-xs text-slate-500">({cat.percentage}%)</span>
                            </div>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-teal-500 rounded-full transition-all duration-500"
                                style={{ width: `${cat.percentage}%`, opacity: 1 - (index * 0.15) }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SalesByCategory;
