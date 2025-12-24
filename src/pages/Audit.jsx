import React, { useState } from 'react';
import useAuditData from '../hooks/useAuditData';
import AuditHeader from '../components/audit/AuditHeader';
import AuditControls from '../components/audit/AuditControls';
import AuditInfoPanel from '../components/audit/AuditInfoPanel';
import AuditTabs from '../components/audit/AuditTabs';
import DocumentChecklistTab from '../components/audit/tabs/DocumentChecklistTab';
import QueryLetterTab from '../components/audit/tabs/QueryLetterTab';
import DraftResponseTab from '../components/audit/tabs/DraftResponseTab';

const Audit = () => {
    const [activeTab, setActiveTab] = useState('checklist');
    const [auditType, setAuditType] = useState('VAT Audit');

    const {
        audit,
        checklist,
        queryIssues,
        response,
        isLoading,
        uploadDocument,
        updateResponse,
        progress
    } = useAuditData();

    const handleSubmit = () => {
        alert('Audit response submitted successfully to FIRS portal.');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 p-8 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-teal-500/20 border-t-teal-500 rounded-full animate-spin"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Initializing Audit Workspace...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 p-4 md:p-8">
            <div className="max-w-[1600px] mx-auto">
                <AuditHeader />

                <AuditControls
                    selectedType={auditType}
                    onTypeChange={setAuditType}
                    onSubmit={handleSubmit}
                />

                <AuditInfoPanel
                    audit={audit}
                    progress={progress}
                />

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 md:p-8 shadow-sm">
                    <AuditTabs
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    />

                    <div className="mt-8 transition-all duration-300">
                        {activeTab === 'checklist' && (
                            <DocumentChecklistTab
                                checklist={checklist}
                                onUpload={uploadDocument}
                            />
                        )}
                        {activeTab === 'query' && (
                            <QueryLetterTab
                                issues={queryIssues}
                            />
                        )}
                        {activeTab === 'response' && (
                            <DraftResponseTab
                                audit={audit}
                                issues={queryIssues}
                                onUpdate={updateResponse}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Audit;
