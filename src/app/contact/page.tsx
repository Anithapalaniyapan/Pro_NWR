'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Paper,
  IconButton,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Send,
  WhatsApp,
} from '@mui/icons-material';
import Layout from '../../components/Layout';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const officeLocations = [
    {
      title: "Head Quarters (India)",
      address: "Nobel World Records Private Limited Ansari Nagar (East), New Delhi, Delhi - 110029, India",
      icon: <LocationOn sx={{ fontSize: 30, color: '#FF6B35' }} />,
    },
    {
      title: "Branch office (India)",
      address: "Nobel World Records Private Limited Melakottaiyur, Chennai - 600127, Tamilnadu, India",
      icon: <LocationOn sx={{ fontSize: 30, color: '#FF6B35' }} />,
    },
    {
      title: "Head Quarters (USA)",
      address: "Nobel World Records Limited 16192 Coastal Highway, Lewes, Delaware - 19958, United States of America (USA)",
      icon: <LocationOn sx={{ fontSize: 30, color: '#FF6B35' }} />,
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #9C27B0 100%)',
          color: 'white',
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
              CONTACT US
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              HOME &gt; CONTACT
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Google Map Section */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Paper
            elevation={3}
            sx={{
              p: 4,
              backgroundColor: 'white',
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#FF6B35' }}>
              Our Location
            </Typography>
            
            {/* Map Placeholder */}
            <Box
              sx={{
                height: 400,
                backgroundColor: '#E0E0E0',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <LocationOn sx={{ fontSize: 60, color: '#FF6B35', mb: 2 }} />
                <Typography variant="h6" sx={{ color: '#666' }}>
                  Nobel World Records
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                  Hyderabad, Telangana, India
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>
                  Rating: 4.9 ⭐⭐⭐⭐⭐
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
              <Box sx={{ flex: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Nobel World Records near JCF Tollywood
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Plot no. 21, 8-3-231/w/21, Krishna Nagar, Jubilee Hills, Hyderabad, Telangana 500045
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="outlined"
                    startIcon={<LocationOn />}
                    sx={{
                      borderColor: '#FF6B35',
                      color: '#FF6B35',
                      '&:hover': {
                        borderColor: '#E64A19',
                        backgroundColor: '#FFF3E0',
                      },
                    }}
                  >
                    Directions
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: '#FF6B35',
                      color: '#FF6B35',
                      '&:hover': {
                        borderColor: '#E64A19',
                        backgroundColor: '#FFF3E0',
                      },
                    }}
                  >
                    View Larger Map
                  </Button>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Contact Information */}
      <Box sx={{ py: 6, backgroundColor: '#F5F5F5' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: '#1976D2',
              color: 'white',
              px: 3,
              py: 1,
              mb: 4,
              display: 'inline-block',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              CONTACT INFORMATION
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3 
          }}>
            {officeLocations.map((office, index) => (
                <Paper
                  key={index}
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    {office.icon}
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {office.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {office.address}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
            ))}
          </Box>

          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 3,
            mt: 2 
          }}>
            <Box>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Phone sx={{ fontSize: 30, color: '#FF6B35' }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Phone Number
                  </Typography>
                  <Typography variant="body1">
                    +91-8877887768
                  </Typography>
                </Box>
              </Paper>
            </Box>
            <Box>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Email sx={{ fontSize: 30, color: '#FF6B35' }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Email Address
                  </Typography>
                  <Typography variant="body1">
                    info@nobelworldrecords.org
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Contact Form */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: '#1976D2',
              color: 'white',
              px: 3,
              py: 1,
              mb: 4,
              display: 'inline-block',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              CONTACT HERE
            </Typography>
          </Box>

          <Paper
            elevation={3}
            sx={{
              p: 4,
              backgroundColor: 'white',
              borderRadius: 3,
            }}
          >
            <form onSubmit={handleSubmit}>
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 3 
              }}>
                <Box>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    variant="outlined"
                    required
                  />
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    variant="outlined"
                    required
                  />
                </Box>
                <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                  <TextField
                    fullWidth
                    label="Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    variant="outlined"
                    required
                  />
                </Box>
                <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                  <TextField
                    fullWidth
                    label="Comment"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                  />
                </Box>
                <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    startIcon={<Send />}
                    sx={{
                      backgroundColor: '#1976D2',
                      '&:hover': { backgroundColor: '#1565C0' },
                      px: 4,
                      py: 2,
                    }}
                  >
                    SEND NOW
                  </Button>
                </Box>
              </Box>
            </form>
          </Paper>
        </Container>
      </Box>

      {/* WhatsApp Floating Button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        <IconButton
          sx={{
            backgroundColor: '#25D366',
            color: 'white',
            width: 60,
            height: 60,
            '&:hover': {
              backgroundColor: '#128C7E',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <WhatsApp sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>
    </Layout>
  );
};

export default Contact;
