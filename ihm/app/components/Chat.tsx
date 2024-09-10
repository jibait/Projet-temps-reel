import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { VStack, Textarea, Input, Button } from '@chakra-ui/react';
import { apiClient } from '../api/apiClient';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const Chat: React.FC = observer(() => {

    useEffect(() => {
        apiClient.fetchMessages();
    }, []);

    const handleSendMessage = async (message: string) => {
        if (message.trim()) {
            await apiClient.createMessage({ pseudo: 'Utilisateur123', message });
        }
    };

    const handleSendImage = async (file: File) => {
        const reader = new FileReader();
        reader.onloadend = async () => {
            if (reader.result) {
                await apiClient.createMessage({ pseudo: 'Utilisateur123', image: reader.result as string });
            }
        };
        reader.readAsDataURL(file);
    };

    return (
        <VStack spacing={4} align="stretch">
            {apiClient.messages.map((msg, index) => (
                <ChatMessage
                    key={index}
                    username={msg.pseudo}
                    text={msg.message}
                    imageUrl={msg.image}
                />
            ))}
            <ChatInput onSendMessage={handleSendMessage} onSendImage={handleSendImage} />
        </VStack>
    );
});

export default Chat;