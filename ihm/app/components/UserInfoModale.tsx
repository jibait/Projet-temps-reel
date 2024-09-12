import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, VStack, Image, Grid, GridItem, Text, Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faImage } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '../Hooks/useStore';

const predefinedImages = [
    'https://lh3.googleusercontent.com/d/1UkgnKngCa3YMkhcXbzx73_-D88L2sxrQ',
    'https://lh3.googleusercontent.com/d/1d-E1Wikbb6188HhF24XJYxKsRyshee5P',
    'https://lh3.googleusercontent.com/d/1aHs0TP2GMjQBog2cTASA6a5UR8MObdCj',
    'https://lh3.googleusercontent.com/d/1iTGu6mfOwuGE594uvQb98gcRq72AXbZ6',
    'https://lh3.googleusercontent.com/d/1f8pmbZApyxrfxWaekcLYAIZATfabOoD4'
];

const UserInfoModale: React.FC = observer(() => {

    const store = useStore();

    const [pseudo, setPseudo] = useState(store.pseudo);
    const [profilePicture, setProfilePicture] = useState<string | undefined>(store.profilePicture);
    const [pseudoError, setPseudoError] = useState(false);

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
        if (!pseudo.trim()) {
            setPseudoError(true);
            return;
        }
        setPseudoError(false);
        store.setPseudo(pseudo);
        store.setProfilePicture(profilePicture);
        store.setModaleOpen(false);
    };

    return (
        <Modal isOpen={store.isModaleOpen} onClose={() => { }} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Configuration du Profil</ModalHeader>
                <ModalBody>
                    <VStack spacing={4}>
                        <Box width="100%">
                            <Text fontSize="lg" fontWeight="bold" pb={2}>
                                <FontAwesomeIcon icon={faUser} /> Pseudo
                            </Text>
                            <Input
                                placeholder="Entrez votre pseudo"
                                value={pseudo}
                                onChange={(e) => setPseudo(e.target.value)}
                                isInvalid={pseudoError}
                            />
                            {pseudoError && <Text color="red.500">Le pseudo est obligatoire.</Text>}
                        </Box>

                        <Box width="100%">
                            <Text fontSize="lg" fontWeight="bold" pb={2}>
                                <FontAwesomeIcon icon={faImage} /> Photo de profil
                            </Text>
                            <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                                {predefinedImages.map((image, index) => (
                                    <GridItem key={index} onClick={() => handlePredefinedImageClick(image)}>
                                        <Image
                                            borderRadius="full"
                                            boxSize="70px"
                                            src={image}
                                            alt="Profile Picture"
                                            objectFit="cover"
                                            cursor="pointer"
                                            border={profilePicture === image ? '4px solid #2b6cb0' : 'none'}
                                            _hover={{
                                                filter: 'grayscale(80%)',
                                                transition: '0.3s',
                                            }}
                                        />
                                    </GridItem>
                                ))}
                            </Grid>

                            <Text p={2} m={2}>Ou mettez votre photo de profil personnalisée :</Text>
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </Box>

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
});

export default UserInfoModale;
