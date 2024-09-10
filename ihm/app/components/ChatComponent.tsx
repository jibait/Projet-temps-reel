import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

interface Message {
    username: string;
    text?: string;
    imageUrl?: string;
}

const ChatComponent: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSendMessage = (text: string) => {
        setMessages([...messages, { username: 'User', text }]);
    };

    const handleSendImage = () => {
        setMessages([...messages, { username: 'User', imageUrl: 'https://via.placeholder.com/150' }]);
    };

    return (
        <Box p="4">
            {messages.map((msg, index) => (
                <ChatMessage
                    key={index}
                    username={msg.username}
                    text={msg.text}
                    imageUrl={msg.imageUrl}
                />
            ))}
            <ChatInput onSendMessage={handleSendMessage} onSendImage={handleSendImage} />
        </Box>
    );
};

export default ChatComponent;
