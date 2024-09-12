import React from "react";
import { observer } from "mobx-react-lite";
import { VStack } from "@chakra-ui/react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import UserInfoModale from "./UserInfoModale";
import { useComService } from "../Hooks/useRabbitMQ";
import { useStore } from "../Hooks/useStore";

const Chat: React.FC = observer(() => {
  const store = useStore();
  const comService = useComService();

  const handleSendMessage = async (message: string) => {
    const trimmedMessage = message.trim();
    if (trimmedMessage.length === 0) {
      // Si le message est vide, ne rien faire
      return;
    }

    comService.sendMessage({
      pseudo: store.pseudo,
      profilePicture: store.profilePicture,
      message: trimmedMessage,
    });
  };

  const handleSendImage = async (file: File) => {
    const reader = new FileReader();
    reader.onloadend = async () => {
      if (reader.result) {
        comService.sendMessage({pseudo: store.pseudo, profilePicture: store.profilePicture, image: reader.result as string})
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <UserInfoModale />
      <VStack spacing={4} align="stretch">
        {/* Afficher les messages déjà présents dans apiClient */}
        {store.messages.map((msg, index) => (
          <ChatMessage
            key={index}
            pseudo={msg.pseudo}
            message={msg.message}
            profilePicture={msg.profilePicture}
            image={msg.image}
          />
        ))}
        <ChatInput
          onSendMessage={handleSendMessage}
          onSendImage={handleSendImage}
        />
      </VStack>
    </>
  );
});

export default Chat;
