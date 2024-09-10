'use client'
import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import ProfileModal from './components/UserInfoModale';

const Page: React.FC = () => {
  const [isUserInfoModaleOpen, setUserInfoModaleOpen] = useState(false);

  const handleOpenProfileModal = () => setUserInfoModaleOpen(true);
  const handleCloseProfileModal = () => setUserInfoModaleOpen(false);
  const handleSaveProfile = (pseudo: string, profilePicture: string) => {
    // Logique pour enregistrer le profil
    handleCloseProfileModal();
  };

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar onProfileIconClick={handleOpenProfileModal} />
      <ProfileModal
        isOpen={isUserInfoModaleOpen}
        onClose={handleCloseProfileModal}
        onSave={handleSaveProfile}
      />
      <Box flex="1" p="4" bg="gray.50">
        <Chat />
      </Box>
    </Box>
  );
};

export default Page;