'use client';

import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
          <Box sx={{ flex: 1, pt: { xs: '120px', md: '160px' } }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
