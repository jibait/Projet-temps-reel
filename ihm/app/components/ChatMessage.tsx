import React from 'react';
import { Flex, Avatar, Box, Text, Image } from '@chakra-ui/react';

interface ChatMessageProps {
    username: string;
    text?: string;
    imageUrl?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ username, text, imageUrl }) => (
    <Flex my="4" p="3" bg="gray.100" borderRadius="md" align="center">
        <Avatar name={username} size="md" mr="4" />
        <Box>
            <Text fontWeight="bold">{username}</Text>
            {imageUrl ? <Image src={imageUrl} alt="message" boxSize="150px" /> : <Text>{text}</Text>}
        </Box>
    </Flex>
);

export default ChatMessage;
