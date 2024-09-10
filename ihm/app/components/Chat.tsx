import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { VStack } from '@chakra-ui/react';
import { apiClient } from '../api/apiClient';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import UserInfoModale from './UserInfoModale';

const Chat: React.FC = observer(() => {
    const [isProfileModalOpen, setProfileModalOpen] = useState(true); // La modale est ouverte par défaut

    useEffect(() => {
        apiClient.fetchMessages();
    }, []);

    const handleSendMessage = async (message: string) => {
        if (message.trim()) {
            await apiClient.createMessage({ pseudo: apiClient.pseudo, message });
        }
    };

    const handleSendImage = async (file: File) => {
        const reader = new FileReader();
        reader.onloadend = async () => {
            if (reader.result) {
                await apiClient.createMessage({ pseudo: apiClient.pseudo, image: reader.result as string });
            }
        };
        reader.readAsDataURL(file);
    };

    const handleProfileSave = (pseudo: string, profilePicture: string) => {
        apiClient.setProfile(pseudo, profilePicture); // Mettez à jour le profil dans apiClient
        setProfileModalOpen(false); // Fermez la modale après la sauvegarde
    };

    return (
        <>
            <UserInfoModale />
            <VStack spacing={4} align="stretch">
                {apiClient.messages.map((msg, index) => (
                    <ChatMessage
                        key={index}
                        pseudo={msg.pseudo}
                        message={msg.message}
                        photoProfil={msg.photoProfil}
                        image={msg.image}
                    />
                ))}
                <ChatInput onSendMessage={handleSendMessage} onSendImage={handleSendImage} />
            </VStack>
        </>
    );
});

export default Chat;
