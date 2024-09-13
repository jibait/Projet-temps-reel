import React from 'react';
import { Flex, Avatar, Box, Text, Image } from '@chakra-ui/react';
import { Message } from '../store/types';
import { useStore } from '../Hooks/useStore';



const ChatMessage: React.FC<Message> = ({ pseudo, message, profilePicture: photoProfil, image }) => {
    let highlight = false;
    const user = useStore().pseudo;
    if (message?.includes(`@` + user) || message?.includes(`@everyone`)) {
        console.log(`User ${pseudo} was mentioned in the message.`);
        highlight = true
    }

    return (
        <Flex my="4" p="3" bg={highlight ? "red.100" : "gray.100"} borderRadius="md" align="center">
            <Avatar src={photoProfil} name={pseudo} size="md" mr="4" />
            <Box>
                <Text fontWeight="bold">{pseudo}</Text>
                {image ? <Image src={image} alt="message" boxSize="150px" /> : <Text>{message}</Text>}
            </Box>
        </Flex>
    );
};

export default ChatMessage;
