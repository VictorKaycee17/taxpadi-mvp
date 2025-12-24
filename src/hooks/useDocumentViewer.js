import { useState, useEffect } from 'react';

const useDocumentViewer = (documentId) => {
    const [document, setDocument] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [highlights, setHighlights] = useState([]);
    const [annotations, setAnnotations] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Mock document loading
    useEffect(() => {
        if (!documentId) return;

        setIsLoading(true);
        setTimeout(() => {
            const mockDoc = {
                id: documentId,
                title: documentId === 'vat_act' ? 'VAT Act 2020' : 'Tax Regulation',
                totalPages: 12,
                content: `Chapter 1: Scope and Application
                
                1.1 Scope of Application
                This Act applies to the supply of goods and services within the Federal Republic of Nigeria, including:
                - Supply of goods in Nigeria
                - Supply of services
                - Importation of goods into Nigeria
                - Supply of goods by non-residents
                
                1.2 Tax Base
                The tax shall be computed on the value of all taxable supplies of goods and services.
                
                1.3 Rate of Tax
                The rate of tax shall be 7.5% of the value of the supply.
                
                Chapter 2: Taxable Persons
                2.1 Definition
                A taxable person is a person who is registered or required to be registered under this Act.
                `,
            };
            setDocument(mockDoc);
            setIsLoading(false);
        }, 1000);
    }, [documentId]);

    const highlightText = (text, color = 'yellow') => {
        const newHighlight = {
            id: Math.random().toString(36).substr(2, 9),
            text,
            color,
            page: currentPage,
            createdAt: new Date(),
        };
        setHighlights(prev => [...prev, newHighlight]);
        return newHighlight;
    };

    const addAnnotation = (highlightId, note) => {
        const newAnnotation = {
            id: Math.random().toString(36).substr(2, 9),
            highlightId,
            note,
            createdAt: new Date(),
        };
        setAnnotations(prev => [...prev, newAnnotation]);
        return newAnnotation;
    };

    const searchDocument = (query) => {
        setSearchQuery(query);
        if (!query || !document) {
            setSearchResults([]);
            return;
        }

        const results = [];
        const regex = new RegExp(query, 'gi');
        let match;
        while ((match = regex.exec(document.content)) !== null) {
            results.push({
                index: match.index,
                text: match[0],
                context: document.content.substring(Math.max(0, match.index - 20), Math.min(document.content.length, match.index + query.length + 20))
            });
        }
        setSearchResults(results);
    };

    return {
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
        readingProgress: (currentPage / (document?.totalPages || 1)) * 100
    };
};

export default useDocumentViewer;
