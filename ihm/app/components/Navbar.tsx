import React from 'react';
import { Image, Flex, IconButton, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEdit } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react-lite';
import userStore from '../stores/userStore'; // Assure-toi que le chemin est correct

const Navbar: React.FC = () => {
    return (
        <Flex justify="space-between" align="center" p="4" bg="blue.600" color="white">
            <Image
                src="https://lh3.googleusercontent.com/d/1XhYGaNFMfFDFFqIehAZX2g1BzRjyvatB"
                alt="Logo"
                objectFit="contain"
                width="100%"
                maxWidth="350px"
            />
            {userStore.profilePicture ? (
                <Flex align="center">
                    <Image
                        src={userStore.profilePicture}
                        alt="Profile"
                        boxSize="50px"
                        borderRadius="full"
                    />
                    <IconButton
                        aria-label="Edit Profile"
                        icon={<FontAwesomeIcon icon={faEdit} />}
                        onClick={() => userStore.setModaleOpen(true)}
                        m={2}
                    />
                </Flex>
            ) : (
                <IconButton
                    aria-label="User Icon"
                    icon={<FontAwesomeIcon icon={faUser} />}
                    isRound
                    size="lg"
                    onClick={() => userStore.setModaleOpen(true)}
                />
            )}
        </Flex>
    );
};

export default observer(Navbar);
