import React, { useRef, useState } from 'react';
import SourceTextPanel from './panels/SourceTextPanel';
import AIExplanationPanel from './panels/AIExplanationPanel';

const PolicyResultsView = ({ document, interpretation, onSave, onShare, onExport }) => {
    const [activePanel, setActivePanel] = useState('both'); // For mobile toggle: 'source', 'explanation', 'both'

    // In a real implementation, we would use refs and an onScroll event to sync panels
    // For now, focusing on the layout and responsive behavior

    return (
        <div className="space-y-6 font-sans">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] pl-4 border-l-4 border-teal-500">Analysis Output</h3>

                {/* Mobile/Tablet Toggle */}
                <div className="flex lg:hidden bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                    <button
                        onClick={() => setActivePanel('source')}
                        className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${activePanel === 'source' ? 'bg-white dark:bg-slate-700 text-teal-600 shadow-sm' : 'text-slate-500'}`}
                    >
                        Source
                    </button>
                    <button
                        onClick={() => setActivePanel('explanation')}
                        className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${activePanel === 'explanation' ? 'bg-white dark:bg-slate-700 text-teal-600 shadow-sm' : 'text-slate-500'}`}
                    >
                        Interpretation
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Source Panel */}
                <div className={`${activePanel === 'explanation' ? 'hidden lg:block' : 'block'}`}>
                    <SourceTextPanel
                        title={document?.title || interpretation?.title}
                        subtitle={document?.subtitle || `Section ${document?.number || '---'}`}
                        content={document?.content}
                        相关Sections={document?.relatedSections}
                    />
                </div>

                {/* AI Panel */}
                <div className={`${activePanel === 'source' ? 'hidden lg:block' : 'block'}`}>
                    <AIExplanationPanel
                        result={interpretation}
                        onSave={onSave}
                        onShare={onShare}
                        onExport={onExport}
                    />
                </div>
            </div>
        </div>
    );
};

export default PolicyResultsView;
