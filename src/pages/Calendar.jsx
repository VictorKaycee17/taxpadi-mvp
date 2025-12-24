import React, { useState } from 'react';
import ComplianceCalendarHeader from '../components/complianceCalendar/ComplianceCalendarHeader';
import CalendarControls from '../components/complianceCalendar/CalendarControls';
import MainCalendarView from '../components/complianceCalendar/MainCalendarView';
import UpcomingObligationsSidebar from '../components/complianceCalendar/UpcomingObligationsSidebar';
import EventDetailsModal from '../components/complianceCalendar/EventDetailsModal';
import { useComplianceData } from '../hooks/useComplianceData';

const Calendar = () => {
    const [view, setView] = useState('month');
    const [selectedEvent, setSelectedEvent] = useState(null);

    const {
        obligations,
        syncing,
        syncWithFIRS,
        markAsComplete,
        complianceScore
    } = useComplianceData();

    const handleSync = async () => {
        await syncWithFIRS();
        alert('Compliance Calendar synchronized with FIRS database!');
    };

    const handleAddObligation = () => {
        alert('Add Obligation feature coming soon!');
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-6 sm:py-10">
                <ComplianceCalendarHeader complianceScore={complianceScore} />

                <CalendarControls
                    view={view}
                    onViewChange={setView}
                    onPrev={() => console.log('Prev')}
                    onNext={() => console.log('Next')}
                    onToday={() => console.log('Today')}
                    onSync={handleSync}
                    syncing={syncing}
                    onAdd={handleAddObligation}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8">
                        <MainCalendarView
                            view={view}
                            obligations={obligations}
                            onSelectEvent={setSelectedEvent}
                        />
                    </div>

                    <div className="lg:col-span-4 sticky top-10">
                        <UpcomingObligationsSidebar
                            obligations={obligations}
                            score={complianceScore}
                            onComplete={markAsComplete}
                            onSelect={setSelectedEvent}
                        />
                    </div>
                </div>
            </div>

            {selectedEvent && (
                <EventDetailsModal
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                    onComplete={markAsComplete}
                />
            )}
        </div>
    );
};

export default Calendar;
