import React, { useState } from 'react';
import TaxTips from './components/TaxTips';
import TaxCalculator from './components/TaxCalculator';
import PadiChat from './components/PadiChat';
import Footer from './components/Footer';

function App() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-3">
                        TaxPadi
                    </h1>
                    <p className="text-text-light text-lg">
                        Nigeria Tax Act 2025 • Effective 2026
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Accurate & Up-to-Date
                    </div>
                </header>

                {/* Tax Tips Section */}
                <TaxTips />

                {/* Main Calculator */}
                <main>
                    <TaxCalculator />
                </main>

                <Footer />
            </div>

            {/* Floating Action Button (FAB) */}
            {!isChatOpen && (
                <button
                    onClick={() => setIsChatOpen(true)}
                    className="fixed bottom-6 right-6 z-40
                             w-16 h-16 bg-primary hover:bg-primary-dark
                             text-white rounded-full shadow-2xl
                             flex items-center justify-center
                             transition-all duration-200 transform hover:scale-110
                             focus:outline-none focus:ring-4 focus:ring-primary/50
                             group"
                    aria-label="Open Padi Chat Assistant"
                >
                    <svg className="w-8 h-8 group-hover:scale-110 transition-transform"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    {/* Tooltip */}
                    <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-text text-white text-xs rounded-lg
                                  opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Ask Padi 💬
                    </div>
                </button>
            )}

            {/* Padi Chat Assistant */}
            <PadiChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
    );
}

export default App;
