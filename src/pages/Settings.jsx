import React from 'react';

const Settings = () => {
    return (
        <div className="p-6 max-w-2xl">
            <h1 className="text-2xl font-bold mb-6">Settings</h1>

            <div className="space-y-6">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                    <h3 className="font-semibold mb-2">Company Profile</h3>
                    <p className="text-sm text-gray-500 mb-4">Update your business details and tax identification numbers.</p>
                    <button className="text-primary text-sm font-medium">Edit Details</button>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                    <h3 className="font-semibold mb-2">Integration Settings</h3>
                    <p className="text-sm text-gray-500 mb-4">Connect your bank accounts and accounting software.</p>
                    <button className="text-primary text-sm font-medium">Manage Integrations</button>
                </div>

                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
                    <h3 className="font-semibold mb-2">User Management</h3>
                    <p className="text-sm text-gray-500 mb-4">Invite team members and assign roles.</p>
                    <button className="text-primary text-sm font-medium">Manage Users</button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
