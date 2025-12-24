import { useState } from 'react';

const useAIAssistant = (documentId, currentPage) => {
    const [messages, setMessages] = useState([
        {
            id: '1',
            sender: 'assistant',
            text: 'Hello! I am your TaxGee AI Assistant. I can help you analyze this document. What would you like to know?',
            timestamp: new Date(),
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([
        'Define key terms',
        'Who is affected?',
        'What are the requirements?',
        'Important deadlines'
    ]);

    const sendMessage = async (text) => {
        if (!text.trim()) return;

        const userMessage = {
            id: Math.random().toString(36).substr(2, 9),
            sender: 'user',
            text,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);

        // Mock AI Response
        setTimeout(() => {
            const assistantMessage = {
                id: Math.random().toString(36).substr(2, 9),
                sender: 'assistant',
                text: `Based on page ${currentPage} of the document, here is the information regarding "${text}": 
                
The provision states that VAT applies to all supplies of goods and services in Nigeria unless specifically exempted. A taxable person must register with the FIRS within 6 months of commencement of business.`,
                citations: [
                    { page: currentPage, text: 'VAT applies to all supplies...' }
                ],
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, assistantMessage]);
            setSuggestions([
                'Are there any exemptions?',
                'How do I register?',
                'What are the penalties for non-compliance?'
            ]);
            setIsLoading(false);
        }, 1500);
    };

    return {
        messages,
        sendMessage,
        isLoading,
        suggestions
    };
};

export default useAIAssistant;
