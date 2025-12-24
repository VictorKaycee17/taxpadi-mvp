import React from 'react';

const Practitioner = () => {
    return (
        <div className="p-6 text-center mt-20">
            <div className="inline-block p-6 rounded-full bg-primary/10 mb-4">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /></svg>
            </div>
            <h1 className="text-3xl font-bold mb-2">Practitioner Console</h1>
            <p className="text-gray-500">Manage multiple client accounts and compliance tasks from one dashboard.</p>
            <button className="mt-6 px-6 py-2 bg-primary text-white rounded-full">Request Access</button>
        </div>
    );
};

export default Practitioner;
