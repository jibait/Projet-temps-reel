import React from 'react';
import { Image, Flex, IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEdit } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react-lite';
import { useStore } from '../Hooks/useStore';

const Navbar: React.FC = () => {

    const store = useStore();

    return (
        <Flex justify="space-between" align="center" p="4" bg="blue.600" color="white">
            <Image
                src="/logo.png"
                alt="Logo"
                objectFit="contain"
                width="100%"
                maxWidth="350px"
            />
            {store.profilePicture ? (
                <Flex align="center">
                    <Image
                        src={store.profilePicture}
                        alt="Profile"
                        boxSize="50px"
                        borderRadius="full"
                    />
                    <IconButton
                        aria-label="Edit Profile"
                        icon={<FontAwesomeIcon icon={faEdit} />}
                        onClick={() => store.setModaleOpen(true)}
                        m={2}
                    />
                </Flex>
            ) : (
                <IconButton
                    aria-label="User Icon"
                    icon={<FontAwesomeIcon icon={faUser} />}
                    isRound
                    size="lg"
                    onClick={() => store.setModaleOpen(true)}
                />
            )}
        </Flex>
    );
};

export default observer(Navbar);
