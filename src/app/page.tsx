'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Paper,
} from '@mui/material';
import {
  Star,
  EmojiEvents,
  Gavel,
  TrendingUp,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideshowImages = [
    '/images.jpeg',
    '/images.jpeg',
    '/images.jpeg',
    '/images.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  const latestRecords = [
    {
      title: "FASTEST DURATION TO TELL INDIA'S 30 RIVERS",
      description: "Young achiever sets new record",
    },
    {
      title: "LONGEST DURATION TO PERFORM GANDA PERUNDASANA",
      description: "Yoga excellence demonstrated",
    },
    {
      title: "LONGEST DURATION TO PERFORM LAGHU VAIRASANA",
      description: "Meditation mastery achieved",
    },
    {
      title: "CHAKRASANA KNUCKLE PUSH-UPS IN 60 SECONDS",
      description: "Physical fitness milestone",
    },
    {
      title: "INDIA STATES AND CAPITALS WITHIN 30 SECONDS BY 3 YEARS KID",
      description: "Child prodigy achievement",
    },
    {
      title: "EKA PADA KOUNDINYASANA FOR 2.19 MINUTES ON SKATE BOARD",
      description: "Unique combination record",
    },
  ];

  const applicationSteps = [
    {
      number: "01",
      title: "APPLY TO SET NEW RECORDS",
      description: "Submit your application to create a new world record in any field of excellence.",
      icon: <Star sx={{ fontSize: 40 }} />,
      color: "#1976D2",
    },
    {
      number: "02",
      title: "APPLY TO BREAK RECORDS",
      description: "Challenge existing records and prove your exceptional abilities.",
      icon: <EmojiEvents sx={{ fontSize: 40 }} />,
      color: "#2E7D32",
    },
    {
      number: "03",
      title: "INVITE AN ADJUDICATOR",
      description: "Request our certified judges to witness and validate your record attempt.",
      icon: <Gavel sx={{ fontSize: 40 }} />,
      color: "#FF6B35",
    },
    {
      number: "04",
      title: "RULES & REGULATIONS",
      description: "Understand our comprehensive guidelines for fair and transparent record setting.",
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      color: "#F57C00",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976D2 0%, #FF6B35 100%)',
          color: 'white',
          pt: 0,
          pb: 8,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Enhanced Animated Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        
        {/* Floating Particles */}
        {[
          { left: '10%', top: '20%', duration: 3, delay: 0 },
          { left: '80%', top: '30%', duration: 4, delay: 0.5 },
          { left: '30%', top: '70%', duration: 3.5, delay: 1 },
          { left: '70%', top: '80%', duration: 4.5, delay: 1.5 },
          { left: '50%', top: '10%', duration: 3.2, delay: 2 },
          { left: '20%', top: '60%', duration: 4.2, delay: 2.5 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, mt: 0 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
              >
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontWeight: 'bold', 
                    mb: 3, 
                    textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    background: 'linear-gradient(45deg, #ffffff, #f0f0f0)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Welcome to NWR
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 1,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 4, 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  }}
                >
                  Nobel World Records is platform for Amazing person who willing to achieve or prove something special is any arena
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
              >
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: '#FF6B35',
                        '&:hover': { 
                          backgroundColor: '#E64A19',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 12px 30px rgba(255, 107, 53, 0.5)',
                        },
                        px: 5,
                        py: 2.5,
                        borderRadius: 4,
                        fontWeight: 700,
                        textTransform: 'none',
                        fontSize: '1rem',
                        boxShadow: '0 6px 20px rgba(255, 107, 53, 0.3)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                          transition: 'left 0.6s',
                        },
                        '&:hover::before': {
                          left: '100%',
                        },
                      }}
                    >
                      APPLY TO SET NEW RECORDS
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: '#2E7D32',
                        '&:hover': { 
                          backgroundColor: '#1B5E20',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 12px 30px rgba(46, 125, 50, 0.5)',
                        },
                        px: 5,
                        py: 2.5,
                        borderRadius: 4,
                        fontWeight: 700,
                        textTransform: 'none',
                        fontSize: '1rem',
                        boxShadow: '0 6px 20px rgba(46, 125, 50, 0.3)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                          transition: 'left 0.6s',
                        },
                        '&:hover::before': {
                          left: '100%',
                        },
                      }}
                    >
                      APPLY TO BREAK RECORDS
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </Box>
            
            {/* Enhanced Professional Slideshow */}
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
              >
                <Box
                  sx={{
                    width: 400,
                    height: 400,
                    borderRadius: 6,
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.4)',
                    border: '4px solid rgba(255, 255, 255, 0.3)',
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(15px)',
                    transform: 'perspective(1000px) rotateX(5deg)',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateX(0deg) scale(1.02)',
                      boxShadow: '0 35px 100px rgba(0, 0, 0, 0.5)',
                    },
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {/* Main Image Container */}
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.2, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        transition={{ 
                          duration: 0.8,
                          type: "spring",
                          stiffness: 200,
                          damping: 20
                        }}
                        style={{
                          width: '100%',
                          height: '100%',
                          backgroundImage: `url(${slideshowImages[currentSlide]})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }}
                      />
                    </AnimatePresence>
                    
                    {/* Professional Logo Overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 200,
                        height: 200,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #1976D2, #1565C0)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '6px solid #FFD700',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                        zIndex: 2,
                      }}
                    >
                      {/* Golden Star */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        style={{ fontSize: '3rem', color: '#FFD700', marginBottom: '10px' }}
                      >
                        ⭐
                      </motion.div>
                      
                      {/* Text */}
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#FFD700',
                          fontWeight: 'bold',
                          textAlign: 'center',
                          fontSize: '0.9rem',
                          lineHeight: 1.2,
                        }}
                      >
                        NOBEL
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#FFD700',
                          fontWeight: 'bold',
                          textAlign: 'center',
                          fontSize: '0.9rem',
                          lineHeight: 1.2,
                        }}
                      >
                        WORLD RECORDS
                      </Typography>
                    </Box>
                  </Box>
                  
                  {/* Enhanced Slideshow Indicators */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 25,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: 2,
                      zIndex: 3,
                    }}
                  >
                    {slideshowImages.map((_, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Box
                          sx={{
                            width: 16,
                            height: 16,
                            borderRadius: '50%',
                            backgroundColor: index === currentSlide ? '#FFD700' : 'rgba(255, 255, 255, 0.6)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            border: '2px solid rgba(255, 255, 255, 0.8)',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                          }}
                          onClick={() => setCurrentSlide(index)}
                        />
                      </motion.div>
                    ))}
                  </Box>
                  
                  {/* Enhanced Gradient Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.3), rgba(255, 107, 53, 0.3))',
                      zIndex: 1,
                    }}
                  />
                  
                  {/* Shimmer Effect */}
                  <motion.div
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                      zIndex: 4,
                    }}
                  />
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* News Section */}
      <Box sx={{ py: 6, backgroundColor: '#F5F5F5' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: '#F44336',
              color: 'white',
              px: 3,
              py: 1,
              mb: 4,
              display: 'inline-block',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              NEWS
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
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
              <Box sx={{ flex: 2 }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#FF6B35' }}>
                  Nobel World Records Private Limited felicitated with the title of &quot;World&apos;s Largest World Record Publication Company&quot;
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  This prestigious recognition was received and published in 130 news publications worldwide, 
                  establishing NWR as the leading authority in world record documentation.
                </Typography>
                <Chip
                  label="Indian News Network - Aug 05, 2022"
                  color="primary"
                  sx={{ fontWeight: 'bold' }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    backgroundColor: '#FF6B35',
                    color: 'white',
                    p: 3,
                    borderRadius: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                    NWR
                  </Typography>
                  <Typography variant="body2">
                    World&apos;s Largest World Record Publication Company
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* About Us Section */}
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
              ABOUT US
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{
                  backgroundColor: '#FF6B35',
                  color: 'white',
                  p: 4,
                  borderRadius: 3,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                  XMAZING
                </Typography>
                <Star sx={{ fontSize: 60, mb: 2 }} />
                <Typography variant="h6">
                  Amazing Performance
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flex: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: '#FF6B35' }}>
                NOBEL WORLD RECORDS IS AN INTERNATIONAL BRAND
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                Nobel World Records is a Private Limited Company encouraging young talent and documenting 
                human and natural world records through the &quot;Nobel Book of World Records.&quot; Launched in India 
                and Mauritius in 2020, NWR is the world&apos;s largest record book publication company.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                The &quot;Nobel Book of World Records&quot; is an annual reference book published in Mauritius and India, 
                categorizing human achievements in education, literature, agriculture, medical science, business, 
                sports, nature, adventure, radio, and cinema, adhering to Nobel World Record rules and regulations.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 3 }}>
                <Chip label="Approved by Govt of India" color="success" />
                <Chip label="Certifies Company 9001:2015" color="info" />
              </Box>
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
                Read More
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Latest Records Section */}
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
              LATEST NOBEL WORLD RECORDS
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3 
          }}>
            {latestRecords.map((record, index) => (
              <Card
                key={index}
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    backgroundColor: '#E0E0E0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666',
                  }}
                >
                  <Typography variant="h6">Record Image</Typography>
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {record.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {record.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Applications Section */}
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
              APPLICATIONS
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3 
          }}>
            {applicationSteps.map((step, index) => (
              <Card
                key={index}
                sx={{
                  height: '100%',
                  backgroundColor: step.color,
                  color: 'white',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {step.number}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {step.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
