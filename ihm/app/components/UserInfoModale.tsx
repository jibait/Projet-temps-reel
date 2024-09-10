import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, VStack, Image, Grid, GridItem } from '@chakra-ui/react';

interface ProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (pseudo: string, profilePicture: string) => void;
}

const predefinedImages = [
    'https://lh3.googleusercontent.com/d/1UkgnKngCa3YMkhcXbzx73_-D88L2sxrQ',
    'https://lh3.googleusercontent.com/d/1d-E1Wikbb6188HhF24XJYxKsRyshee5P',
    'https://lh3.googleusercontent.com/d/1aHs0TP2GMjQBog2cTASA6a5UR8MObdCj',
    'https://lh3.googleusercontent.com/d/1iTGu6mfOwuGE594uvQb98gcRq72AXbZ6',
    'https://lh3.googleusercontent.com/d/1f8pmbZApyxrfxWaekcLYAIZATfabOoD4'
];

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, onSave }) => {
    const [pseudo, setPseudo] = useState('');
    const [profilePicture, setProfilePicture] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePredefinedImageClick = (image: string) => {
        setProfilePicture(image);
    };

    const handleSave = () => {
        if (pseudo && profilePicture) {
            onSave(pseudo, profilePicture);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={() => { }} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Configuration du Profil</ModalHeader>
                <ModalBody>
                    <VStack spacing={4}>
                        <Input
                            placeholder="Entrez votre pseudo"
                            value={pseudo}
                            onChange={(e) => setPseudo(e.target.value)}
                        />
                        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                            {predefinedImages.map((image, index) => (
                                <GridItem key={index} onClick={() => handlePredefinedImageClick(image)}>
                                    <Image
                                        borderRadius='full'
                                        boxSize='70px'
                                        src={image}
                                        objectFit="cover"
                                        cursor="pointer"
                                    />
                                </GridItem>
                            ))}
                        </Grid>
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            placeholder="Upload your own image"
                        />
                        {profilePicture &&
                            <Image
                                src={profilePicture}
                                alt="Profile Preview"
                                boxSize="100px"
                                borderRadius="full"
                                objectFit="cover"
                                mt={2}
                            />
                        }
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" onClick={handleSave}>Sauvegarder</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ProfileModal;
