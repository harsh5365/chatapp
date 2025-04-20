import React from 'react';

const EnterMessage = ({ sendMessage }) => {
    return (
        <div className="message-input p-4 flex items-center">
            <label className="mr-2 cursor-pointer">
                <input type="file" className="hidden" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500 hover:text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828L18 10.828V7h-2.828z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 3h5v5"
                    />
                </svg>
            </label>
            <textarea
                className="flex-grow border rounded p-2 mr-2"
                placeholder="Type your message..."
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage(e.target.value);
                        e.target.value = '';
                    }
                }}
            ></textarea>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => {
                    const textarea = document.querySelector('textarea');
                    if (textarea) {
                        sendMessage(textarea.value);
                        textarea.value = '';
                    }
                }}
            >
                Send
            </button>
        </div>
    );
};

export default EnterMessage;