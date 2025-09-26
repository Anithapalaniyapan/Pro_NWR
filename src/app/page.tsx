'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
} from '@mui/material';
import {
  EmojiEvents,
  PlayArrow,
} from '@mui/icons-material';
import Layout from '../components/Layout';

const HomePage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Background images from Home_Pic folder
  const backgroundImages = [
    '/Home_Pic/Home_Nature.png',
    '/Home_Pic/Home_Business.png',
    '/Home_Pic/Home_Medical_Science.png',
    '/Home_Pic/Home_Literature.jpg',
    '/Home_Pic/Home_Education.jpg',
    '/Home_Pic/Home_Agri.jpg',
    '/Home_Pic/Home_Sports.jpg',
  ];

  // Auto-play slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleApplyNewRecords = () => {
    window.open('/records/apply', '_blank');
  };

  const handleApplyBreakRecords = () => {
    window.open('/records/apply', '_blank');
  };

  return (
    <Layout>
      {/* Hero Section - Auto-Playing Background Slideshow */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '85vh',
          py: { xs: 4, md: 6 },
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Auto-Playing Background Images */}
        {backgroundImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              zIndex: 1,
            }}
          />
        ))}
        
        {/* Gradient Overlay for Better Text Readability */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)',
            zIndex: 2,
          }}
        />
        
        {/* Trending Animated Dots */}
        <Box
          sx={{
              position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 2,
            zIndex: 4,
          }}
        >
          {backgroundImages.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              sx={{
                width: 12,
                height: 12,
              borderRadius: '50%',
                backgroundColor: index === currentImageIndex ? '#FFD700' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(255, 255, 255, 0.8)',
                '&:hover': {
                  backgroundColor: '#FFD700',
                  transform: 'scale(1.2)',
                },
            }}
          />
        ))}
        </Box>
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            {/* Logo */}
            <Box sx={{ mb: 4 }}>
              <img
                src="/logo NWR.png"
                alt="Nobel World Records"
                style={{
                  width: '180px',
                  height: '180px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
                }}
              />
            </Box>
            
            {/* Main Headline */}
                <Typography 
              variant="h2"
                  sx={{ 
                fontWeight: 900,
                    mb: 3, 
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' },
                color: '#FFFFFF',
                lineHeight: 1.1,
                textShadow: '0 4px 12px rgba(0,0,0,0.8)',
                letterSpacing: '-0.02em',
              }}
            >
              Break World Records.<br />
              Make History.
                </Typography>
            
            {/* Subtitle */}
                <Typography 
                  variant="h5" 
                  sx={{ 
                mb: 6,
                color: '#FFFFFF',
                maxWidth: '700px',
                mx: 'auto',
                fontSize: { xs: '1.2rem', md: '1.4rem' },
                fontWeight: 500,
                lineHeight: 1.6,
                textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                    opacity: 0.95, 
                  }}
                >
              The official platform to set, break, and verify world records. 
              Join thousands of record holders worldwide.
                </Typography>
            
            {/* CTA Buttons */}
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              justifyContent="center"
              alignItems="center"
                  >
                    <Button
                      variant="contained"
                      size="large"
                onClick={handleApplyNewRecords}
                startIcon={<EmojiEvents />}
                      sx={{
                  backgroundColor: '#FFD700',
                  color: '#1A1A1A',
                        px: 5,
                        py: 2.5,
                  fontSize: '1.2rem',
                        fontWeight: 700,
                  borderRadius: 3,
                        textTransform: 'none',
                  minWidth: '220px',
                  boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)',
                  '&:hover': {
                    backgroundColor: '#FFC107',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 35px rgba(255, 215, 0, 0.6)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Apply for Record
                    </Button>
                    <Button
                variant="outlined"
                      size="large"
                onClick={() => window.open('/about', '_blank')}
                startIcon={<PlayArrow />}
                      sx={{
                  borderColor: '#FFFFFF',
                  color: '#FFFFFF',
                  borderWidth: '2px',
                        px: 5,
                        py: 2.5,
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  borderRadius: 3,
                        textTransform: 'none',
                  minWidth: '220px',
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderColor: '#FFD700',
                    color: '#FFD700',
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Learn More
              </Button>
            </Stack>
                    </Box>
        </Container>
      </Box>

      {/* About Us Section */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          {/* Gradient Heading Banner */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
            sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 50%, #FFD700 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                letterSpacing: '0.02em',
              }}
            >
              ABOUT US
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
            {/* Logo Section */}
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{
                  width: '100%',
                  height: '400px',
                  borderRadius: 3,
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.2)',
                  }
                }}
              >
                <img
                  src="/logo1.jpg"
                  alt="Nobel World Records Official Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '16px',
                  }}
                />
                {/* Overlay for better text readability */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(255, 215, 0, 0.1) 100%)',
                    borderRadius: '16px',
                  }}
                />
              </Box>
            </Box>
            
            {/* Content Section */}
            <Box sx={{ flex: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 50%, #FFD700 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                NOBEL WORLD RECORDS IS AN INTERNATIONAL BRAND
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
                Nobel World Records is a Private Limited Company dedicated to encouraging young talent 
                and documenting extraordinary human and natural world records through our prestigious 
                &quot;Nobel Book of World Records.&quot; Established in India and Mauritius in 2020, NWR has 
                become the world&apos;s largest record book publication company.
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
                Our annual reference book, published in Mauritius and India, categorizes remarkable 
                human achievements across education, literature, agriculture, medical science, business, 
                sports, nature, adventure, radio, and cinema, all adhering to Nobel World Record 
                standards and regulations.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                <Chip label="Approved by Govt of India" color="success" />
                <Chip label="Certified Company 9001:2015" color="info" />
              </Box>
              
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#1976D2',
                  color: '#1976D2',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: '#1565C0',
                    backgroundColor: 'rgba(25, 118, 210, 0.04)',
                  },
                }}
                onClick={() => window.open('/about', '_blank')}
              >
                Read More
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Latest Nobel World Records Section */}
      <Box sx={{ py: 8, backgroundColor: '#F8F9FA' }}>
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
            sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 50%, #FFD700 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                letterSpacing: '0.02em',
              }}
            >
              LATEST NOBEL WORLD RECORDS
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#666666',
                fontSize: '1.1rem',
                maxWidth: '600px',
                mx: 'auto',
                mb: 4,
              }}
            >
              Celebrating extraordinary achievements and remarkable talents from around the world
            </Typography>
          </Box>

          {/* Records Grid */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 4,
            mb: 4
          }}>
            {[
              {
                image: '/LNWR/faster_teller.jpg',
                title: 'FASTEST DURATION TO TELL INDIA\'S 30 RIVERS',
                description: 'Young geography champion sets new record for fastest river knowledge demonstration',
                color: '#4CAF50'
              },
              {
                image: '/LNWR/long_duration.jpg',
                title: 'LONGEST DURATION TO PERFORM GANDA PERUNDASANA',
                description: 'Yoga endurance record achieved through dedicated practice and determination',
                color: '#FF9800'
              },
              {
                image: '/LNWR/per.jpg',
                title: 'LONGEST DURATION TO PERFORM LAGHU VAJRASANA',
                description: 'Meditation and yoga mastery demonstrated through sustained practice',
                color: '#2196F3'
              },
              {
                image: '/LNWR/perf.jpg',
                title: 'CHAKRASANA KNUCKLE PUSH-UPS',
                description: 'Incredible strength and flexibility showcased in advanced yoga challenge',
                color: '#9C27B0'
              },
              {
                image: '/LNWR/perfo.jpg',
                title: 'INDIA STATES AND CAPITALS WITHIN 30 SECONDS',
                description: 'Lightning-fast geographical knowledge displayed by young prodigy',
                color: '#F44336'
              },
              {
                image: '/LNWR/perfoma.jpg',
                title: 'EKA PADA KOUNDINYASANA FOR 2.19 MINUTES',
                description: 'Balancing mastery on skateboard sets new world record standard',
                color: '#FFD700'
              }
            ].map((record, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                  }
                }}
              >
                {/* Image Section */}
                <Box
                  sx={{
                    height: 250,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={record.image}
                    alt={record.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  {/* Colorful Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${record.color}20 0%, ${record.color}40 100%)`,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      '&:hover': {
                        opacity: 1,
                      }
                    }}
                  />
                </Box>

                {/* Content Section */}
                <Box sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      color: '#1A1A1A',
                      lineHeight: 1.3,
                      minHeight: '2.6rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {record.title}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                      lineHeight: 1.5,
                      fontSize: '0.9rem',
                      mb: 2,
                    }}
                  >
                    {record.description}
                  </Typography>

                  {/* Colorful Accent Line */}
                  <Box
                    sx={{
                      height: 3,
                      backgroundColor: record.color,
                      borderRadius: 2,
                      mb: 2,
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      
       


    </Layout>
  );
};

export default HomePage;
