import React from 'react';
import EnterMessage from './EnterMessage';

const MessagingWindow = ({ messages, sendMessage, thread }) => {
    return (
        <div className="messages flex-grow overflow-y-auto">
            <div className="thread-info bg-gray-100 p-4 border-b">
                <h2 className="text-lg font-bold">{thread?.name || 'Thread'}</h2>
                <p className="text-sm text-gray-600">
                    Participants: {thread?.participants?.join(', ') || 'No participants'}
                </p>
            </div>
            <div className="message-list p-4">
                {messages.map((message) => (
                    <div key={message.id} className="mb-4">
                        <p className="font-bold">{message.user.name}</p>
                        <p>{message.content}</p>
                        {message.file_path && (
                            <a href={message.file_path} target="_blank" rel="noopener noreferrer">
                                View File
                            </a>
                        )}
                        {message.link && (
                            <a href={message.link} target="_blank" rel="noopener noreferrer">
                                {message.link}
                            </a>
                        )}
                    </div>
                ))}
            </div>
            <EnterMessage sendMessage={sendMessage} />
        </div>
    );
};

export default MessagingWindow;