import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { VStack } from '@chakra-ui/react';
import { apiClient } from '../api/apiClient';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import UserInfoModale from './UserInfoModale';
import { useRabbitMQ } from '../Hooks/useRabbitMQ';

const Chat: React.FC = observer(() => {
    const [isProfileModalOpen, setProfileModalOpen] = useState(true); // La modale est ouverte par défaut
    const messagesFromRabbitMQ = useRabbitMQ('ws://localhost:8080'); // Utilisation du Hook pour se connecter à RabbitMQ

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
                {/* Afficher les messages déjà présents dans apiClient */}
                {apiClient.messages.map((msg, index) => (
                    <ChatMessage
                        key={index}
                        pseudo={msg.pseudo}
                        message={msg.message}
                        photoProfil={msg.photoProfil}
                        image={msg.image}
                    />
                ))}
                {/* Afficher les messages reçus via RabbitMQ */}
                {messagesFromRabbitMQ.map((msg, index) => (
                    <ChatMessage
                        key={index + apiClient.messages.length} // Clé unique basée sur l'index
                        pseudo="RabbitMQ User" // Mettre le pseudo
                        message={msg}
                        photoProfil="" // Si vous voulez une photo de profil, sinon, enlever
                        image="" // Si on envoie une image
                    />
                ))}
                <ChatInput onSendMessage={handleSendMessage} onSendImage={handleSendImage} />
            </VStack>
        </>
    );
});

export default Chat;
