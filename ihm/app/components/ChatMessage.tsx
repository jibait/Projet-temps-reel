import React from 'react';
import { Flex, Avatar, Box, Text, Image } from '@chakra-ui/react';
import { Message } from '../api/generated/api';

const ChatMessage: React.FC<Message> = ({ pseudo, message, photoProfil, image }) => (
    <Flex my="4" p="3" bg="gray.100" borderRadius="md" align="center">
        <Avatar bgImage={photoProfil} name={pseudo} size="md" mr="4" />
        <Box>
            <Text fontWeight="bold">{pseudo}</Text>
            {image ? <Image src={image} alt="message" boxSize="150px" /> : <Text>{message}</Text>}
        </Box>
    </Flex>
);

export default ChatMessage;
