'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
} from '@mui/material';
import {
  CheckCircle,
  Event,
  Email,
  Description,
  Gavel,
  ContactSupport,
} from '@mui/icons-material';
import Layout from '../../../components/Layout';

const InviteJudgePage: React.FC = () => {
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const handleContactUs = () => {
    // Open contact form or redirect to contact page
    window.open('mailto:info@nobelworldrecords.org', '_blank');
    setContactFormOpen(true);
    setTimeout(() => setContactFormOpen(false), 3000);
  };

  return (
    <Layout>
      {/* A4 Document Container */}
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
          py: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Paper
          elevation={8}
          sx={{
            width: { xs: '95%', sm: '90%', md: '210mm' },
            minHeight: '297mm',
            maxWidth: '210mm',
            backgroundColor: '#ffffff',
            position: 'relative',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
          }}
        >
          {/* Document Header */}
          <Box
            sx={{
              background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 100%)',
              color: 'white',
              py: 3,
              px: 4,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Title Only */}
            <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem', lg: '3rem' } }}>
                INVITE A JUDGE
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9, fontSize: { xs: '1rem', md: '1.2rem' }, fontWeight: 400 }}>
                Nobel World Records - Professional Adjudication Service
              </Typography>
            </Box>
          </Box>

          {/* Document Content */}
          <Box sx={{ p: 4 }}>
            {/* Introduction */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', color: '#333' }}>
                Get your record verified on-site by inviting a qualified judge from Nobel World Records 
                to witness your record-breaking attempt. Our professional adjudication service includes 
                comprehensive support and immediate certification upon successful completion.
              </Typography>
            </Box>

            {/* Services Section */}
            <Box sx={{ mb: 5 }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 3, 
                  color: '#1976D2',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Gavel sx={{ fontSize: 28 }} />
                Professional Adjudication Services
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Card sx={{ border: '1px solid #E3F2FD', borderRadius: 2 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box sx={{ backgroundColor: '#E3F2FD', borderRadius: '50%', p: 1 }}>
                        <Event sx={{ color: '#1976D2', fontSize: 24 }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#1976D2' }}>
                          On-Site Record Verification
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                          Professional judge will visit your location to witness and verify the record attempt in real-time
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            {/* Contact Section */}
            <Box sx={{ mb: 5 }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 3, 
                  color: '#1976D2',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <ContactSupport sx={{ fontSize: 28 }} />
                Request Judge Service
              </Typography>
              
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleContactUs}
                  sx={{
                    backgroundColor: '#FF9800',
                    color: 'white',
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    borderRadius: 3,
                    '&:hover': { backgroundColor: '#F57C00' },
                  }}
                  startIcon={<Email />}
                >
                  {contactFormOpen ? 'Email Opened!' : 'Contact Us for Judge Service'}
                </Button>
              </Box>
            </Box>

            {/* Rules Section */}
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 3, 
                  color: '#1976D2',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Description sx={{ fontSize: 28 }} />
                Important Guidelines & Rules
              </Typography>

              <List sx={{ pl: 0 }}>
                <ListItem sx={{ px: 0, py: 1 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircle sx={{ color: '#4CAF50', fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Contact our adjudicator at least 15 days before your planned record attempt"
                    primaryTypographyProps={{ sx: { fontSize: '1rem', lineHeight: 1.6, color: '#333' } }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0, py: 1 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircle sx={{ color: '#4CAF50', fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Submit complete record details at least 2 weeks prior to the attempt date"
                    primaryTypographyProps={{ sx: { fontSize: '1rem', lineHeight: 1.6, color: '#333' } }}
                  />
                </ListItem>
              </List>
            </Box>

            {/* Footer Info */}
            <Box sx={{ backgroundColor: '#FFF3E0', borderRadius: 3, p: 3, border: '2px solid #FFB74D' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#E65100' }}>
                Service Pricing
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                The cost of inviting a judge depends on the location distance from our office and the 
                duration of your record attempt. Contact us for a personalized quote.
              </Typography>
            </Box>
          </Box>

          {/* Document Footer */}
          <Box
            sx={{
              backgroundColor: '#F5F5F5',
              py: 2,
              px: 4,
              borderTop: '1px solid #E0E0E0',
              textAlign: 'center',
            }}
          >
            <Typography variant="caption" sx={{ color: '#666' }}>
              © 2025 Nobel World Records. All rights reserved. | Professional Judge Invitation Service
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Layout>
  );
};

export default InviteJudgePage;
