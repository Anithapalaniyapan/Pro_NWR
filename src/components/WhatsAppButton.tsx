'use client';

import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number (include country code, no + sign)
    const phoneNumber = '918877887768'; // Example: Indian number
    const message = 'Hello! I would like to know more about Nobel World Records.';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Tooltip title="Chat with us on WhatsApp" placement="left">
      <IconButton
        onClick={handleWhatsAppClick}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          backgroundColor: '#25D366',
          color: 'white',
          width: 60,
          height: 60,
          zIndex: 1000,
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          '&:hover': {
            backgroundColor: '#128C7E',
            transform: 'scale(1.1)',
            boxShadow: '0 6px 25px rgba(37, 211, 102, 0.6)',
          },
          transition: 'all 0.3s ease',
          animation: 'pulse 2s infinite',
          '@keyframes pulse': {
            '0%': {
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
            },
            '50%': {
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.8)',
            },
            '100%': {
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
            },
          },
        }}
      >
        <WhatsApp sx={{ fontSize: 30 }} />
      </IconButton>
    </Tooltip>
  );
};

export default WhatsAppButton;
