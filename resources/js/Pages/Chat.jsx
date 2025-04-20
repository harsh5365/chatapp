import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import axios from 'axios';
import Sidebar from '../Components/Sidebar';
import Threads from '../Components/Threads';
import MessagingWindow from '../Components/MessagingWindow';

const Chat = () => {
    const [threads, setThreads] = useState([]);
    const [messages, setMessages] = useState([]);
    const [activeThread, setActiveThread] = useState(null);

    useEffect(() => {
        // Fetch chat threads
        axios.get('/chat/threads').then((response) => {
            setThreads(response.data);
        });
    }, []);

    const loadMessages = (threadId) => {
        setActiveThread(threadId);
        // Fetch messages for the selected thread
        axios.get(`/chat/threads/${threadId}/messages`).then((response) => {
            setMessages(response.data);
        });
    };

    const sendMessage = (content) => {
        if (!activeThread) return;
        // Send a new message
        axios.post(`/chat/threads/${activeThread}/messages`, { content }).then(() => {
            loadMessages(activeThread);
        });
    };

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-grow">
                <Threads
                    threads={threads}
                    activeThread={activeThread}
                    loadMessages={loadMessages}
                />
                <MessagingWindow
                    messages={messages}
                    sendMessage={sendMessage}
                />
            </div>
        </div>
    );
};

export default Chat;