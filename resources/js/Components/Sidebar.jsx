// Add a left sidebar component for logged-in users with a link to chat with friends
import React from 'react';
import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';

const Sidebar = () => {
    return (
        <div className="sidebar text-gray-900 h-full w-64">
            <div className="p-4">
                <div className="flex items-center mb-4">
                    <ApplicationLogo className="h-10 w-10" />
                    <h2 className="text-lg font-bold ml-2">LiveChat</h2>
                </div>
                <ul className="mt-4 space-y-2">
                    <li>
                        <Link href="/dashboard" className="block px-4 py-2 rounded hover:bg-gray-700 hover:text-white">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/chat" className="block px-4 py-2 rounded hover:bg-gray-700 hover:text-white">Chat with Friends</Link>
                    </li>
                    {/* Add more links here as needed */}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;