'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  TextField,
  Button,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
  Pinterest,
  Phone,
  Email,
  LocationOn,
  ArrowUpward,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const Footer: React.FC = () => {
  const router = useRouter();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickLinkClick = (link: string) => {
    switch (link) {
      case 'About NWR':
        router.push('/about');
        break;
      case 'Records':
        router.push('/records');
        break;
      case 'Invite a Judge':
        router.push('/records/invite');
        break;
      case 'Apply for Judge':
        router.push('/records/judge');
        break;
      case 'Contact Us':
        router.push('/contact');
        break;
      default:
        break;
    }
  };

  const officeLocations = [
    {
      country: 'INDIA',
      type: 'Head office',
      address: 'Plot no. 21, 8-3-231/w/21, Rd no. 2, krishna nagar, Jubilee Hills, Hyderabad, Telangana - 500045, India',
      flag: '🇮🇳',
    },
    {
      country: 'INDIA',
      type: 'Andaman Island - Branch office',
      address: 'Near Delanipur Masjid, AIR Road, Delanipur Port Blair, Andaman and Nicobar Islands - 744102, India',
      flag: '🇮🇳',
    },
    {
      country: 'USA',
      type: 'Headquarters',
      address: '16192 Coastal Highway, Lewes, Delaware - 19958, United States of America (USA)',
      flag: '🇺🇸',
    },
    {
      country: 'KUWAIT',
      type: 'Kuwait office',
      address: 'Mahboula block 1,Street 114, Building Number 102, Kuwait -54001',
      flag: '🇰🇼',
    },
    {
      country: 'RUSSIA',
      type: 'Moscow office',
      address: 'Stelotova 8 Street, flat no. 81, entrance- 2, 7th floor. (Moscow), Russia - 119192',
      flag: '🇷🇺',
    },
    {
      country: 'GERMANY',
      type: 'Frankfurt office',
      address: 'No. 504, Platenstrasse 4, Frankfurt - 60320, Germany',
      flag: '🇩🇪',
    },
  ];

  const quickLinks = [
    'About NWR',
    'Records',
    'Invite a Judge',
    'Apply for Judge',
    'Contact Us',
  ];

  const socialIcons = [
    { icon: Facebook, color: '#1877F2', url: 'https://www.facebook.com/nobelworldrecords' },
    { 
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      color: '#1DA1F2', 
      url: 'https://x.com/nobel_records/' 
    },
    { icon: Instagram, color: '#E4405F', url: 'https://www.instagram.com/nobelworldrecords' },
    { icon: LinkedIn, color: '#0077B5', url: 'https://www.linkedin.com/in/nobel-world-records-b566341a4/' },
    { icon: YouTube, color: '#FF0000', url: 'https://www.youtube.com/@nobelworldrecords' },
    { icon: Pinterest, color: '#BD081C', url: 'https://www.pinterest.com/nobelworldrecords' },
  ];

  return (
    <Box sx={{ backgroundColor: '#424242', color: 'white' }}>
      {/* Quick Links and Social Media */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Quick Links */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#FF6B35' }}>
              Quick Link
            </Typography>
            <Box>
              {quickLinks.map((link, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography sx={{ mr: 1, color: '#FF6B35' }}>→</Typography>
                  <Link
                    component="button"
                    onClick={() => handleQuickLinkClick(link)}
                    sx={{
                      color: 'white',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      font: 'inherit',
                      '&:hover': { color: '#FF6B35' },
                    }}
                  >
                    {link}
                  </Link>
                </Box>
              ))}
            </Box>

            {/* Social Media Icons */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, color: '#FF6B35' }}>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialIcons.map((social, index) => (
                  <IconButton
                    key={index}
                    onClick={() => window.open(social.url, '_blank')}
                    sx={{
                      backgroundColor: social.color,
                      color: 'white',
                      '&:hover': {
                        backgroundColor: social.color,
                        transform: 'scale(1.1)',
                      },
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <social.icon />
                  </IconButton>
                ))}
              </Box>
            </Box>

            {/* Language Selector */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="caption" sx={{ color: '#FF6B35' }}>
                Powered by Google
              </Typography>
            </Box>
          </Box>

          {/* Office Locations */}
          <Box sx={{ flex: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#FF6B35' }}>
              Our Offices
            </Typography>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 2 
            }}>
              {officeLocations.map((office, index) => (
                  <Box
                    key={index}
                    sx={{
                      backgroundColor: '#FF9800',
                      p: 2,
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1,
                    }}
                  >
                    <LocationOn sx={{ color: 'white', mt: 0.5 }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'white' }}>
                        {office.type} ({office.country})
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white', fontSize: '0.8rem' }}>
                        Nobel World Records Private Limited
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white', fontSize: '0.8rem' }}>
                        {office.address}
                      </Typography>
                    </Box>
                  </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>

      <Divider sx={{ backgroundColor: '#666' }} />

      {/* Subscribe Section */}
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="h6" sx={{ color: '#FF6B35' }}>
              Subscribe Now
            </Typography>
            <TextField
              placeholder="Enter your email"
              size="small"
              sx={{
                backgroundColor: 'white',
                borderRadius: 1,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { border: 'none' },
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FF6B35',
                '&:hover': { backgroundColor: '#E64A19' },
              }}
            >
              SUBSCRIBE NOW
            </Button>
          </Box>
        </Box>
      </Container>

      <Divider sx={{ backgroundColor: '#666' }} />

      {/* Bottom Bar */}
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone sx={{ fontSize: 16 }} />
              <Typography variant="body2">+91-8877887768</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Email sx={{ fontSize: 16 }} />
              <Typography variant="body2">info@nobelworldrecords.org</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2">
              ©CopyRight | All Rights Reserved - Nobel World Records
            </Typography>
            <IconButton
              onClick={scrollToTop}
              sx={{
                backgroundColor: '#FF6B35',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#E64A19',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <ArrowUpward />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
