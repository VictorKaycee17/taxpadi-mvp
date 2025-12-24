import React, { useState } from 'react';
import useDocumentViewer from '../hooks/useDocumentViewer';
import useAIAssistant from '../hooks/useAIAssistant';
import DocumentReviewHeader from '../components/document-review/DocumentReviewHeader';
import DocumentControls from '../components/document-review/DocumentControls';
import DocumentViewerPanel from '../components/document-review/DocumentViewerPanel';
import AIAssistantPanel from '../components/document-review/AIAssistantPanel';

const DocumentReview = () => {
    const [selectedDocId, setSelectedDocId] = useState('vat_act');

    const {
        document,
        currentPage,
        setCurrentPage,
        highlights,
        highlightText,
        annotations,
        addAnnotation,
        searchQuery,
        searchResults,
        searchDocument,
        isLoading,
        readingProgress
    } = useDocumentViewer(selectedDocId);

    const {
        messages,
        sendMessage,
        isLoading: isAIThinking,
        suggestions
    } = useAIAssistant(selectedDocId, currentPage);

    return (
        <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 p-4 md:p-8">
            <div className="max-w-[1600px] mx-auto">
                <DocumentReviewHeader
                    documentTitle={document?.title}
                    annotationsCount={annotations.length}
                    readingTime="18 min"
                />

                <DocumentControls
                    selectedDocument={selectedDocId}
                    onDocumentChange={setSelectedDocId}
                    onSearchOpen={() => alert('Search feature coming soon')}
                    onZoomIn={() => alert('Zoom feature coming soon')}
                    onZoomOut={() => alert('Zoom feature coming soon')}
                    onHighlight={() => alert('Annotation tool activated')}
                    onExport={() => alert('Exporting review report...')}
                />

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                    <div className="xl:col-span-7">
                        <DocumentViewerPanel
                            document={document}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            searchQuery={searchQuery}
                            onSearch={searchDocument}
                            isLoading={isLoading}
                        />
                    </div>
                    <div className="xl:col-span-5">
                        <AIAssistantPanel
                            messages={messages}
                            sendMessage={sendMessage}
                            isLoading={isAIThinking}
                            suggestions={suggestions}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentReview;
