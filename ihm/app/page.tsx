'use client'
import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';

const Page: React.FC = () => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box flex="1" p="4" bg="gray.50">
        <Chat />
      </Box>
    </Box>
  );
};

export default Page;