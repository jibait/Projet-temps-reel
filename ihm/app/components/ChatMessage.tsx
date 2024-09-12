import React from 'react';
import { Flex, Avatar, Box, Text, Image } from '@chakra-ui/react';
import { Message } from '../store/types';

const ChatMessage: React.FC<Message> = ({ pseudo, message, profilePicture: photoProfil, image }) => (
    <Flex my="4" p="3" bg="gray.100" borderRadius="md" align="center">
        <Avatar src={photoProfil} name={pseudo} size="md" mr="4" />
        <Box>
            <Text fontWeight="bold">{pseudo}</Text>
            {image ? <Image src={image} alt="message" boxSize="150px" /> : <Text>{message}</Text>}
        </Box>
    </Flex>
);

export default ChatMessage;
