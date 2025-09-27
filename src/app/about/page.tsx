'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Paper,
} from '@mui/material';
import {
  Public,
  Business,
  School,
  Sports,
  Science,
} from '@mui/icons-material';
import Layout from '../../components/Layout';

const About: React.FC = () => {
  const committeeMembers = [
    {
      name: "H.E.DR. GOWTHAM M .PHARM., PH.D [AIIMS]",
      position: "Editor-in-Chief",
      avatar: "/committee/nwr01.jpeg",
    },
    {
      name: "H.E.MR. LAKSHMINARAYANANAN",
      position: "Publishing Editor / Publisher",
      avatar: "/committee/nwr02.jpeg",
    },
    {
      name: "H.E.DR.L. ARAVIND",
      position: "International Director / CEO",
      avatar: "/committee/nwr03.jpg",
    },
    {
      name: "H.E.MR. VINOTH.K.K",
      position: "Managing Editor International",
      avatar: "/committee/nwr04.jpg",
    },
    {
      name: "Mrs. FARAHNAZ",
      position: "National Director of Iran",
      avatar: "/committee/nwr05.jpg",
    },
    {
      name: "Mr. MOHAMMED ALI",
      position: "National joint Director of Iran",
      avatar: "/committee/nwr06.jpg",
    },
    {
      name: "Dr. ADRIAN SURESH ANTHONY JOHN",
      position: "National Director of Malaysia",
      avatar: "/committee/nwr07.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  
  const totalSlides = committeeMembers.length;
  
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlay(false);
    setTimeout(() => {
      setIsTransitioning(false);
      setIsAutoPlay(true);
    }, 600);
  };
  
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlay(false);
    setTimeout(() => {
      setIsTransitioning(false);
      setIsAutoPlay(true);
    }, 600);
  };

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const categories = [
    { icon: <School />, name: "Education", color: "#2196F3" },
    { icon: <Business />, name: "Literature", color: "#9C27B0" },
    { icon: <Science />, name: "Agriculture", color: "#4CAF50" },
    { icon: <Science />, name: "Medical Science", color: "#F44336" },
    { icon: <Business />, name: "Business", color: "#FF9800" },
    { icon: <Sports />, name: "Sports", color: "#795548" },
    { icon: <Public />, name: "Nature", color: "#607D8B" },
    { icon: <Sports />, name: "Adventure", color: "#E91E63" },
    { icon: <Business />, name: "Radio", color: "#3F51B5" },
    { icon: <Business />, name: "Cinema", color: "#FF5722" },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          py: { xs: 4, md: 2 }, // Increased mobile padding
          pt: { xs: 6, md: 2 }, // Extra top padding for mobile
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
              ABOUT US
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main About Section */}
      <Box sx={{ py: 3 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 3, md: 4 }, alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  height: '100%',
                  minHeight: { xs: '300px', sm: '350px', md: '400px' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
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
                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%)',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    p: { xs: 2, sm: 2.5, md: 3 },
                  }}
                >
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 'bold', 
                      color: 'white',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                      mb: 2,
                      fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem' }
                    }}
                  >
                    NOBEL WORLD RECORDS
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'white',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
                      fontWeight: 500,
                      fontSize: { xs: '0.8rem', sm: '0.95rem', md: '1.1rem' }
                    }}
                  >
                    Official Recognition Authority
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ flex: 2 }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 3,
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem', lg: '2.5rem' },
                  background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 50%, #FFD700 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  letterSpacing: '0.01em',
                }}
              >
                NOBEL WORLD RECORDS IS AN INTERNATIONAL BRAND
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                Nobel World Records is a Private Limited Company encouraging young talent and documenting 
                human and natural world records through the &quot;Nobel Book of World Records.&quot; Launched in India 
                and Mauritius in 2020, NWR is the world&apos;s largest record book publication company.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                The &quot;Nobel Book of World Records&quot; is an annual reference book published in Mauritius and India, 
                categorizing human achievements in education, literature, agriculture, medical science, business, 
                sports, nature, adventure, radio, and cinema, adhering to Nobel World Record rules and regulations.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, alignItems: 'center', mb: 3 }}>
                <Chip label="Approved by Govt of India" color="success" />
                <Chip label="Certifies Company 9001:2015" color="info" />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Categories Section */}
      <Box sx={{ 
        py: { xs: 4, sm: 5, md: 6 }, 
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5 } }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 50%, #FFD700 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                letterSpacing: '0.02em',
              }}
            >
              Record Categories
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#666666',
                fontSize: '1.1rem',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Explore our diverse range of record categories covering all aspects of human achievement and natural wonders.
            </Typography>
          </Box>
          
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)' },
            gap: { xs: 2, sm: 2.5, md: 3 },
            position: 'relative',
          }}>
            {categories.map((category, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  height: { xs: '100px', sm: '120px', md: '160px' },
                  borderRadius: 3,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-6px) scale(1.02)',
                    '& .category-overlay': {
                      opacity: 1,
                    },
                    '& .category-icon': {
                      transform: 'scale(1.1) rotate(5deg)',
                    },
                    '& .category-text': {
                      transform: 'translateY(-3px)',
                    },
                  },
                }}
              >
                {/* Background with gradient */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}DD 100%)`,
                    zIndex: 1,
                  }}
                />
                
                {/* Pattern overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M30 30c0-8.284-6.716-15-15-15s-15 6.716-15 15 6.716 15 15 15 15-6.716 15-15zm0 0c0 8.284 6.716 15 15 15s15-6.716 15-15-6.716-15-15-15-15 6.716-15 15z\'/%3E%3C/g%3E%3C/svg%3E")',
                    zIndex: 2,
                  }}
                />
                
                {/* Content */}
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: { xs: 1, sm: 1.5, md: 2.5 },
                    color: 'white',
                  }}
                >
                  <Box 
                    className="category-icon"
                    sx={{ 
                      mb: { xs: 0.5, sm: 1 },
                      transition: 'all 0.3s ease',
                      '& svg': {
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                        filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                      }
                    }}
                  >
                    {category.icon}
                  </Box>
                  
                  <Typography 
                    className="category-text"
                    variant="h6" 
                    sx={{ 
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1.1rem' },
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {category.name}
                  </Typography>
                </Box>
                
                {/* Hover overlay */}
                <Box
                  className="category-overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'white',
                      fontWeight: 600,
                      textAlign: 'center',
                      fontSize: '0.9rem',
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                    }}
                  >
                    View Records
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* NWR Committee Section */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 'bold',
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 50%, #FFD700 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                letterSpacing: '0.02em',
                mb: 2,
              }}
            >
              NWR COMMITTEE
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#666666',
                fontSize: '1.1rem',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Meet our distinguished committee members who oversee the recognition and validation of world records.
            </Typography>
          </Box>

          {/* 3D Card Carousel */}
          <Box 
            ref={carouselRef}
            className="carousel-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            sx={{ 
              position: 'relative',
              mx: 'auto',
              width: '100%',
              maxWidth: { xs: '100%', sm: '500px', md: '800px' },
              height: { xs: '400px', sm: '500px', md: '600px' },
              perspective: { xs: '800px', sm: '1000px' },
              overflow: 'hidden',
              '&:hover .carousel-container': {
                animationPlayState: 'paused',
              },
            }}
          >
            <Box 
              className="carousel-container"
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {committeeMembers.map((member, index) => {
                const isActive = index === currentSlide;
                const isPrev = index === (currentSlide - 1 + totalSlides) % totalSlides;
                const isNext = index === (currentSlide + 1) % totalSlides;
                const isVisible = isActive || isPrev || isNext;
                
                if (!isVisible) return null;

                return (
                  <Box
                    key={index}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: isActive 
                        ? 'translate(-50%, -50%) translateZ(0px) scale(1)'
                        : isPrev 
                        ? { 
                            xs: 'translate(-50%, -50%) translateX(-80px) translateZ(-80px) scale(0.6)',
                            sm: 'translate(-50%, -50%) translateX(-100px) translateZ(-80px) scale(0.7)',
                            md: 'translate(-50%, -50%) translateX(-120px) translateZ(-80px) scale(0.7)'
                          }
                        : { 
                            xs: 'translate(-50%, -50%) translateX(80px) translateZ(-80px) scale(0.6)',
                            sm: 'translate(-50%, -50%) translateX(100px) translateZ(-80px) scale(0.7)',
                            md: 'translate(-50%, -50%) translateX(120px) translateZ(-80px) scale(0.7)'
                          },
                      opacity: isActive ? 1 : 0.6,
                      filter: isActive ? 'none' : 'blur(2px)',
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      zIndex: isActive ? 3 : isPrev ? 2 : 1,
                    }}
                  >
                    <Paper
                      elevation={isActive ? 8 : 4}
                      className="committee-card"
                      sx={{
                        p: { xs: 3, sm: 4, md: 5 },
                        textAlign: 'center',
                        height: { xs: '320px', sm: '400px', md: '500px' },
                        width: { xs: '220px', sm: '300px', md: '400px' },
                        maxWidth: { xs: '90vw', sm: '300px', md: '400px' },
                        borderRadius: { xs: 3, sm: 4, md: 5 },
                        backgroundColor: '#FFFFFF',
                        border: isActive ? '3px solid #1976D2' : '2px solid #E3F2FD',
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: isActive ? 'default' : 'pointer',
                        '&:hover': {
                          transform: isActive ? 'translateY(-8px) scale(1.02)' : 'translateY(-4px) scale(1.05)',
                          boxShadow: isActive 
                            ? '0 20px 40px rgba(25, 118, 210, 0.25)'
                            : '0 15px 30px rgba(25, 118, 210, 0.15)',
                          borderColor: '#1976D2',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: isActive 
                            ? 'linear-gradient(90deg, #1976D2 0%, #42A5F5 50%, #1976D2 100%)'
                            : 'linear-gradient(90deg, #E3F2FD 0%, #BBDEFB 50%, #E3F2FD 100%)',
                          zIndex: 1,
                        },
                      }}
                      onClick={() => {
                        if (!isActive) {
                          const diff = index - currentSlide;
                          if (diff > 0) {
                            for (let i = 0; i < diff; i++) nextSlide();
                          } else {
                            for (let i = 0; i < Math.abs(diff); i++) prevSlide();
                          }
                        }
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 100, sm: 120, md: 160 },
                          height: { xs: 100, sm: 120, md: 160 },
                          mx: 'auto',
                          mb: { xs: 2, sm: 3, md: 4 },
                          borderRadius: '50%',
                          overflow: 'hidden',
                          border: isActive 
                            ? { xs: '4px solid #1976D2', sm: '5px solid #1976D2' }
                            : { xs: '3px solid #BBDEFB', sm: '4px solid #BBDEFB' },
                          boxShadow: isActive 
                            ? '0 8px 25px rgba(25, 118, 210, 0.25)'
                            : '0 4px 15px rgba(25, 118, 210, 0.15)',
                          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                          position: 'relative',
                          '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: isActive 
                              ? '0 12px 35px rgba(25, 118, 210, 0.35)'
                              : '0 8px 25px rgba(25, 118, 210, 0.25)',
                            borderColor: '#1565C0',
                          },
                          '&::after': isActive ? {
                            content: '""',
                            position: 'absolute',
                            top: '-2px',
                            left: '-2px',
                            right: '-2px',
                            bottom: '-2px',
                            borderRadius: '50%',
                            background: 'linear-gradient(45deg, #1976D2, #42A5F5, #1976D2)',
                            zIndex: -1,
                            animation: 'rotate 3s linear infinite',
                            '@keyframes rotate': {
                              '0%': { transform: 'rotate(0deg)' },
                              '100%': { transform: 'rotate(360deg)' },
                            },
                          } : {},
                        }}
                      >
                        <img
                          src={member.avatar}
                          alt={member.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '50%',
                          }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/images.jpeg';
                          }}
                        />
                      </Box>
                      
                      <Typography variant="h5" sx={{ 
                        fontWeight: 700, 
                        mb: { xs: 1.5, sm: 2, md: 3 }, 
                        fontSize: isActive 
                          ? { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' }
                          : { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' },
                        lineHeight: 1.2,
                        color: isActive ? '#1976D2' : '#90A4AE',
                        textAlign: 'center',
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}>
                        {member.name}
                      </Typography>
                      
                      <Typography variant="h6" color="text.secondary" sx={{ 
                        fontSize: isActive 
                          ? { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
                          : { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                        lineHeight: 1.4,
                        fontWeight: 500,
                        color: isActive ? '#666666' : '#B0BEC5',
                        textAlign: 'center',
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}>
                        {member.position}
                      </Typography>
                    </Paper>
                  </Box>
                );
              })}
            </Box>
          </Box>
            
            {/* Progress Indicators */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              mt: { xs: 4, sm: 5, md: 6 },
              gap: 2,
            }}>
              {Array.from({ length: totalSlides }, (_, index) => (
                <Box
                  key={index}
                  onClick={() => {
                    if (isTransitioning) return;
                    setCurrentSlide(index);
                    setIsAutoPlay(false);
                    setTimeout(() => setIsAutoPlay(true), 3000);
                  }}
                  sx={{
                    width: { xs: 12, sm: 14, md: 16 },
                    height: { xs: 12, sm: 14, md: 16 },
                    borderRadius: '50%',
                    backgroundColor: index === currentSlide ? '#1976D2' : '#E0E0E0',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: isTransitioning ? 'not-allowed' : 'pointer',
                    position: 'relative',
                    '&:hover': {
                      transform: 'scale(1.3)',
                      backgroundColor: '#1976D2',
                      boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
                    },
                    '&::after': index === currentSlide ? {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: 6, sm: 8, md: 10 },
                      height: { xs: 6, sm: 8, md: 10 },
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      animation: 'pulse 2s infinite',
                      '@keyframes pulse': {
                        '0%, 100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
                        '50%': { opacity: 0.7, transform: 'translate(-50%, -50%) scale(1.2)' },
                      },
                    } : {},
                  }}
                />
              ))}
            </Box>
            
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Box sx={{ py: 6, backgroundColor: '#F5F5F5' }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4 
          }}>
            <Box>
              <Card sx={{ height: '100%', backgroundColor: '#FF6B35', color: 'white' }}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                    Our Mission
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1rem' } }}>
                    To recognize and document exceptional human achievements across all fields, 
                    providing a platform for individuals to showcase their extraordinary talents 
                    and inspiring others to push the boundaries of human potential.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box>
              <Card sx={{ height: '100%', backgroundColor: '#9C27B0', color: 'white' }}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                    Our Vision
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1rem' } }}>
                    To become the world&apos;s most trusted and comprehensive record-keeping organization, 
                    celebrating human excellence and creating a legacy of achievement that inspires 
                    future generations to reach for greatness.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center', color: '#FF6B35' }}>
            Our Achievements
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 4 
          }}>
            <Box>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, md: 3 },
                  textAlign: 'center',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                  1000+
                </Typography>
                <Typography variant="h6">
                  Records Documented
                </Typography>
              </Paper>
            </Box>
            <Box>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, md: 3 },
                  textAlign: 'center',
                  backgroundColor: '#2196F3',
                  color: 'white',
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                  50+
                </Typography>
                <Typography variant="h6">
                  Countries Covered
                </Typography>
              </Paper>
            </Box>
            <Box>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, md: 3 },
                  textAlign: 'center',
                  backgroundColor: '#FF9800',
                  color: 'white',
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                  130+
                </Typography>
                <Typography variant="h6">
                  News Publications
                </Typography>
              </Paper>
            </Box>
            <Box>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, md: 3 },
                  textAlign: 'center',
                  backgroundColor: '#9C27B0',
                  color: 'white',
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                  2020
                </Typography>
                <Typography variant="h6">
                  Year Established
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default About;
