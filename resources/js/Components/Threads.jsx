import React from 'react';

const Threads = ({ threads, activeThread, loadMessages }) => {
    return (
        <div className="threads w-1/4 border-r overflow-y-auto">
            <h2 className="text-lg font-bold p-4">Chat Threads</h2>
            <ul>
                {threads.map((thread) => (
                    <li
                        key={thread.id}
                        className={`p-4 cursor-pointer ${
                            activeThread === thread.id ? 'bg-gray-200' : ''
                        }`}
                        onClick={() => loadMessages(thread.id)}
                    >
                        {thread.name || `Thread #${thread.id}`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Threads;