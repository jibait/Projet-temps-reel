import React from 'react';
import { Image } from '@chakra-ui/react'
import { Flex, IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => (
    <Flex justify="space-between" align="center" p="4" bg="blue.600" color="white">
        <Image
            src="https://lh3.googleusercontent.com/d/1XhYGaNFMfFDFFqIehAZX2g1BzRjyvatB"
            alt="Logo"
            objectFit="contain" // Maintient les proportions de l'image
            width="100%" // Ajustez en fonction de vos besoins
            maxWidth="350px" // Limite la largeur maximale si nécessaire
        />
        <IconButton
            aria-label="User Icon"
            icon={<FontAwesomeIcon icon={faUser} />}
            isRound
            size="lg"
        />
    </Flex>
);

export default Navbar;
