import React from 'react';

const MessagingWindow = ({ messages, sendMessage }) => {
    return (
        <div className="messages flex-grow overflow-y-auto">
            <h2 className="text-lg font-bold p-4">Messages</h2>
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
            <div className="message-input p-4">
                <textarea
                    className="w-full border rounded p-2"
                    placeholder="Type your message..."
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            sendMessage(e.target.value);
                            e.target.value = '';
                        }
                    }}
                ></textarea>
            </div>
        </div>
    );
};

export default MessagingWindow;