import React, { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

const SalesChart = ({ data }) => {
    const [timeframe, setTimeframe] = useState('6M');

    const formatYAxis = (value) => {
        if (value >= 1000000) return `₦${(value / 1000000).toFixed(1)}M`;
        if (value >= 1000) return `₦${(value / 1000).toFixed(0)}K`;
        return `₦${value}`;
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl">
                    <p className="text-sm font-black text-slate-900 dark:text-white mb-2">{label}</p>
                    <div className="space-y-1">
                        <div className="flex justify-between gap-4">
                            <span className="text-xs font-bold text-slate-500">Taxable:</span>
                            <span className="text-xs font-black text-teal-600">₦{payload[0].value.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between gap-4">
                            <span className="text-xs font-bold text-slate-500">Exempt:</span>
                            <span className="text-xs font-black text-slate-400">₦{payload[1].value.toLocaleString()}</span>
                        </div>
                        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between gap-4 font-black">
                            <span className="text-xs text-slate-900 dark:text-white">Total:</span>
                            <span className="text-xs text-slate-900 dark:text-white">₦{(payload[0].value + payload[1].value).toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h3 className="text-sm font-black text-slate-900 dark:text-white mb-1">Sales Visualization</h3>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Monthly Sales with VAT Impact</p>
                </div>

                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                    {['3M', '6M', '12M', 'YTD'].map((tf) => (
                        <button
                            key={tf}
                            onClick={() => setTimeframe(tf)}
                            className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${timeframe === tf
                                    ? 'bg-white dark:bg-slate-700 text-teal-600 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            {tf}
                        </button>
                    ))}
                </div>
            </div>

            <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        barGap={0}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={formatYAxis}
                            tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc' }} />
                        <Legend
                            verticalAlign="top"
                            align="right"
                            iconType="circle"
                            iconSize={8}
                            wrapperStyle={{ paddingBottom: 20, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}
                        />
                        <Bar
                            name="Taxable Sales"
                            dataKey="taxable"
                            stackId="a"
                            fill="#0d9488"
                            radius={[0, 0, 0, 0]}
                            barSize={40}
                        />
                        <Bar
                            name="Exempt Sales"
                            dataKey="exempt"
                            stackId="a"
                            fill="#e2e8f0"
                            radius={[4, 4, 0, 0]}
                            barSize={40}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-50 dark:border-slate-800">
                <div className="space-y-1">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Avg. Monthly VAT</p>
                    <p className="text-lg font-black text-slate-900 dark:text-white">₦987,456.00</p>
                </div>
                <div className="space-y-1">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Taxable vs. Exempt</p>
                    <p className="text-lg font-black text-slate-900 dark:text-white">91.5% / 8.5%</p>
                </div>
                <div className="space-y-1">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Trending</p>
                    <p className="text-lg font-black text-emerald-500">↑ 15% YoY</p>
                </div>
            </div>

            <div className="mt-8 flex gap-4">
                <button className="px-6 py-2.5 bg-teal-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-teal-700 transition-all">Download Report</button>
                <button className="px-6 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Export Data</button>
            </div>
        </div>
    );
};

export default SalesChart;
