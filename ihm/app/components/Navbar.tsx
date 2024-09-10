import React from 'react';
import { Image } from '@chakra-ui/react'
import { Flex, IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => (
    <Flex justify="space-between" align="center" p="4" bg="teal.500" color="white">
        <Image src="/logo.png" alt="Logo" boxSize="50px" />
        <IconButton
            aria-label="User Icon"
            icon={<FontAwesomeIcon icon={faUser} />}
            isRound
            size="lg"
        />
    </Flex>
);

export default Navbar;
