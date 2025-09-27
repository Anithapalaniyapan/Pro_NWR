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
      address: "Plot no. 21, 8-3-231/w/21, Rd no. 2, krishna nagar, Jubilee Hills, Hyderabad, Telangana - 500045, India",
      icon: <LocationOn sx={{ fontSize: 30, color: '#FF6B35' }} />,
      mapLink: "https://maps.google.com/?q=Jubilee+Hills,+Hyderabad,+Telangana",
      coordinates: "17.4065°N, 78.4772°E"
    },
    {
      title: "Branch office (India)",
      address: "Near Delanipur Masjid, AIR Road, Delanipur Port Blair, Andaman and Nicobar Islands - 744102, India",
      icon: <LocationOn sx={{ fontSize: 30, color: '#FF6B35' }} />,
      mapLink: "https://maps.google.com/?q=Delanipur,+Port+Blair,+Andaman+and+Nicobar+Islands",
      coordinates: "11.6234°N, 92.7265°E"
    },
    {
      title: "Head Quarters (USA)",
      address: "16192 Coastal Highway, Lewes, Delaware - 19958, United States of America (USA)",
      icon: <LocationOn sx={{ fontSize: 30, color: '#FF6B35' }} />,
      mapLink: "https://maps.google.com/?q=Lewes,+Delaware,+USA",
      coordinates: "38.7746°N, 75.1393°W"
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          pt: 6,
          pb: 2,
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 'bold',
                fontSize: { xs: '1.8rem', md: '2.2rem', lg: '2.5rem' },
                background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 50%, #FFD700 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                letterSpacing: '0.02em',
              }}
            >
              CONTACT US
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
            
            {/* Real Interactive Map */}
            <Box
              sx={{
                height: 400,
                borderRadius: 2,
                mb: 3,
                position: 'relative',
                overflow: 'hidden',
                border: '2px solid #FF6B35',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890123!2d78.4567890123456!3d17.4567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebddfb%3A0xae93b78392bafbc2!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nobel World Records - Hyderabad Office"
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  backgroundColor: 'rgba(255, 107, 53, 0.9)',
                  color: 'white',
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                }}
              >
                📍 Head Office
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
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {office.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {office.address}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                        📍 {office.coordinates}
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => window.open(office.mapLink, '_blank')}
                        sx={{
                          borderColor: '#FF6B35',
                          color: '#FF6B35',
                          '&:hover': {
                            backgroundColor: '#FF6B35',
                            color: 'white',
                          },
                        }}
                      >
                        View on Map
                      </Button>
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

    </Layout>
  );
};

export default Contact;
