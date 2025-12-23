import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatCurrency } from '../utils/taxCalculator';
import { trackEvent } from '../utils/analytics';

/**
 * Tax Forecast & Planner Component
 * Feature 2: Displays monthly savings target and provides calendar download
 */
const TaxForecast = ({ annualTax, userType = 'individual' }) => {
    if (!annualTax || annualTax <= 0) {
        return null; // Don't show if no tax
    }

    // Calculate monthly savings target
    const monthlySavings = annualTax / 12;

    /**
     * Generate and download ICS calendar file
     * Section B: Important tax dates for Nigeria
     */
    const downloadCalendarEvents = () => {
        // Nigerian Tax Calendar Events for 2026
        const events = [
            {
                title: 'Q1 Tax Payment Due',
                date: '2026-03-31',
                description: 'First Quarter Tax Payment Deadline'
            },
            {
                title: 'Q2 Tax Payment Due',
                date: '2026-06-30',
                description: 'Second Quarter Tax Payment Deadline'
            },
            {
                title: 'Q3 Tax Payment Due',
                date: '2026-09-30',
                description: 'Third Quarter Tax Payment Deadline'
            },
            {
                title: 'Annual Tax Return Due',
                date: '2026-12-31',
                description: 'Annual Tax Return Filing Deadline'
            },
            {
                title: 'Tax Planning Review',
                date: '2026-01-15',
                description: 'Review and update tax planning strategy for the year'
            },
            {
                title: 'Mid-Year Tax Review',
                date: '2026-07-01',
                description: 'Mid-year tax assessment and adjustment'
            }
        ];

        // Generate ICS file content
        let icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//TaxGee//Tax Calendar//EN',
            'CALSCALE:GREGORIAN',
            'METHOD:PUBLISH',
            'X-WR-CALNAME:TaxGee Tax Calendar 2026',
            'X-WR-TIMEZONE:Africa/Lagos',
            'X-WR-CALDESC:Important tax dates for Nigerian taxpayers'
        ];

        events.forEach(event => {
            const dateStr = event.date.replace(/-/g, '');
            const uid = `${dateStr}-${event.title.replace(/\s/g, '-')}@taxgee.com`;

            icsContent.push('BEGIN:VEVENT');
            icsContent.push(`UID:${uid}`);
            icsContent.push(`DTSTAMP:${dateStr}T090000Z`);
            icsContent.push(`DTSTART:${dateStr}`);
            icsContent.push(`DTEND:${dateStr}`);
            icsContent.push(`SUMMARY:${event.title}`);
            icsContent.push(`DESCRIPTION:${event.description}`);
            icsContent.push('STATUS:CONFIRMED');
            icsContent.push('BEGIN:VALARM');
            icsContent.push('TRIGGER:-P7D');
            icsContent.push('ACTION:DISPLAY');
            icsContent.push(`DESCRIPTION:Reminder: ${event.title} in 7 days`);
            icsContent.push('END:VALARM');
            icsContent.push('END:VEVENT');
        });

        icsContent.push('END:VCALENDAR');

        // Create and download the file
        const blob = new Blob([icsContent.join('\r\n')], {
            type: 'text/calendar;charset=utf-8'
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'taxgee-tax-calendar-2026.ics');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };

    // Feature: Social Sharing
    const [copySuccess, setCopySuccess] = useState(false);

    const shareMessage = encodeURIComponent('I just sorted my 2026 Tax Plan using TaxGee. It calculates your Rent Relief and new tax bands instantly. Check it out here: https://taxpadi-mvp.vercel.app');

    const handleWhatsAppShare = () => {
        trackEvent('share_on_whatsapp', { source: 'forecast_component' });
        window.open(`https://wa.me/?text=${shareMessage}`, '_blank');
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText('https://taxpadi-mvp.vercel.app');
            setCopySuccess(true);
            trackEvent('copy_link', { source: 'forecast_component' });

            // Reset success message after 2 seconds
            setTimeout(() => {
                setCopySuccess(false);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Monthly Savings Target Card */}
            <div className="card bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-text mb-1">
                            💰 Monthly Savings Target
                        </h3>
                        <p className="text-sm text-text-light">
                            Save this amount each month to cover your annual tax
                        </p>
                    </div>
                    <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                        PLANNER
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 mb-4">
                    <div className="text-center">
                        <p className="text-sm text-text-light mb-2">
                            Monthly Amount to Save
                        </p>
                        <p className="text-4xl font-bold text-primary mb-2">
                            {formatCurrency(monthlySavings)}
                        </p>
                        <p className="text-xs text-text-light">
                            Based on annual tax of {formatCurrency(annualTax)}
                        </p>
                    </div>

                    {/* Savings Breakdown */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center p-3 bg-background-light rounded-lg">
                                <p className="text-text-light mb-1">Quarterly</p>
                                <p className="font-bold text-text">
                                    {formatCurrency(annualTax / 4)}
                                </p>
                            </div>
                            <div className="text-center p-3 bg-background-light rounded-lg">
                                <p className="text-text-light mb-1">Bi-Annual</p>
                                <p className="font-bold text-text">
                                    {formatCurrency(annualTax / 2)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <button
                        onClick={downloadCalendarEvents}
                        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold 
                     py-3 px-6 rounded-lg transition-all duration-200 
                     transform hover:scale-105 hover:shadow-lg
                     focus:outline-none focus:ring-2 focus:ring-primary/50
                     flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Download Tax Calendar (ICS)
                    </button>

                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <h4 className="font-semibold text-text text-sm mb-2">
                            📅 Tax Calendar Includes:
                        </h4>
                        <ul className="text-xs text-text-light space-y-1">
                            <li>• Quarterly tax payment deadlines</li>
                            <li>• Annual tax return filing date</li>
                            <li>• Mid-year review reminders</li>
                            <li>• 7-day advance notifications</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Tax Planning Tips */}
            <div className="card">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Tax Planning Tips
                </h3>

                <div className="space-y-3 text-sm">
                    <div className="flex gap-3 p-3 bg-background-light rounded-lg">
                        <span className="text-primary font-bold">1.</span>
                        <div>
                            <p className="font-semibold text-text">Set Up Automatic Savings</p>
                            <p className="text-text-light text-xs mt-1">
                                Create a dedicated savings account and automate monthly transfers of {formatCurrency(monthlySavings)}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 p-3 bg-background-light rounded-lg">
                        <span className="text-primary font-bold">2.</span>
                        <div>
                            <p className="font-semibold text-text">Track Your Progress</p>
                            <p className="text-text-light text-xs mt-1">
                                Review your tax savings quarterly to ensure you're on track
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 p-3 bg-background-light rounded-lg">
                        <span className="text-primary font-bold">3.</span>
                        <div>
                            <p className="font-semibold text-text">Review Annually</p>
                            <p className="text-text-light text-xs mt-1">
                                Recalculate your tax liability each January or when your income changes
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Share Section */}
            <div className="card bg-[#F0FDF4] border border-[#DCFCE7]">
                <h3 className="text-lg font-semibold text-text mb-4">
                    📢 Share the Good News
                </h3>
                <p className="text-sm text-text-light mb-4">
                    Help your friends and colleagues plan their 2026 taxes too.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={handleWhatsAppShare}
                        className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold 
                                 py-3 px-4 rounded-xl transition-all duration-200 
                                 transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Share to WhatsApp
                    </button>

                    <button
                        onClick={handleCopyLink}
                        className={`flex-1 font-semibold py-3 px-4 rounded-xl transition-all duration-200 
                                  border-2 flex items-center justify-center gap-2
                                  ${copySuccess
                                ? 'bg-green-50 border-green-500 text-green-700'
                                : 'bg-white border-gray-200 text-text hover:border-primary hover:text-primary'}`}
                    >
                        {copySuccess ? (
                            <>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Link Copied!
                            </>
                        ) : (
                            <>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Copy Link
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

TaxForecast.propTypes = {
    annualTax: PropTypes.number.isRequired,
    userType: PropTypes.string,
};

export default TaxForecast;
