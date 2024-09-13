import React, { useState } from 'react';
import { Flex, Input, IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faImage } from '@fortawesome/free-solid-svg-icons';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
    onSendImage: (file: File) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, onSendImage }) => {
    const [message, setMessage] = useState<string>('');
    const fileInputRef = React.createRef<HTMLInputElement>();

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            onSendImage(selectedFile);
        }
    };

    return (
        <Flex mt="4" align="center">
            <Input
                placeholder="Tapez un message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                mr="4"
            />
            <Input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                display="none"
                ref={fileInputRef}
            />
            <IconButton
                aria-label="Upload Image"
                icon={<FontAwesomeIcon icon={faImage} />}
                onClick={() => fileInputRef.current?.click()}
                mr="2"
            />
            <IconButton
                aria-label="Send Message"
                icon={<FontAwesomeIcon icon={faPaperPlane} />}
                onClick={() => {
                    onSendMessage(message);
                    setMessage('');
                }}
            />
        </Flex>
    );
};

export default ChatInput;