'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Snackbar,
  Alert,
  Slide,
} from '@mui/material';
import { Download, Description, CheckCircleOutline } from '@mui/icons-material';

const RulesSection: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [downloadedRule, setDownloadedRule] = useState('');
  const rules = [
    {
      title: 'NWR Rules & Regulation',
      icon: <Description sx={{ fontSize: 32, color: '#D32F2F' }} />,
      gradient: 'linear-gradient(135deg, #D32F2F 0%, #F44336 100%)',
      description: 'Official rules and regulations for record attempts',
      pdfFile: '/pdfs/rules.pdf',
    },
    {
      title: 'How to Set Nobel World Records',
      icon: <Description sx={{ fontSize: 32, color: '#1976D2' }} />,
      gradient: 'linear-gradient(135deg, #1976D2 0%, #42A5F5 100%)',
      description: 'Complete guide to setting world records',
      pdfFile: '/pdfs/rules (1).pdf',
    },
    {
      title: 'How Adjudicator should Act?',
      icon: <Description sx={{ fontSize: 32, color: '#2E7D32' }} />,
      gradient: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
      description: 'Guidelines for official adjudicators',
      pdfFile: '/pdfs/rules (2).pdf',
    },
    {
      title: 'Judges Sheet',
      icon: <Description sx={{ fontSize: 32, color: '#F57C00' }} />,
      gradient: 'linear-gradient(135deg, #F57C00 0%, #FFB74D 100%)',
      description: 'Official judging criteria and scoring',
      pdfFile: '/pdfs/Judges Sheet.pdf',
    },
  ];

  const handleDownload = (pdfFile: string, title: string) => {
    try {
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = pdfFile;
      link.download = `${title}.pdf`;
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success alert
      setDownloadedRule(title);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      // Fallback: open in new tab
      window.open(pdfFile, '_blank');
    }
  };

  return (
    <Box sx={{ 
      py: 8, 
      background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 30% 70%, rgba(255, 107, 53, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)',
        zIndex: 0,
      }
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #FF6B35 0%, #1976D2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              letterSpacing: '0.02em',
            }}
          >
            RULES & GUIDELINES
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#666666',
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto',
              mb: 4,
            }}
          >
            Access official documentation and guidelines for record setting
          </Typography>
          <Box
            sx={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(90deg, #FF6B35 0%, #1976D2 100%)',
              mx: 'auto',
              borderRadius: '2px',
            }}
          />
        </Box>

        {/* Rules Grid */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: 4 
        }}>
          {rules.map((rule, index) => (
            <Box key={index}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: '#FFFFFF',
                  border: 'none',
                  borderRadius: 4,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 25px rgba(0, 0, 0, 0.1)',
                    '& .icon-container': {
                      transform: 'scale(1.05)',
                    },
                    '& .download-button': {
                      backgroundColor: '#1976D2',
                      color: '#FFFFFF',
                    },
                  },
                }}
                onClick={() => handleDownload(rule.pdfFile, rule.title)}
              >
                
                <CardContent
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1.5,
                    height: '100%',
                    justifyContent: 'center',
                  }}
                >
                  {/* Icon Container */}
                  <Box
                    className="icon-container"
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      backgroundColor: '#F5F5F5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 1.5,
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {rule.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: '#333333',
                      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                      lineHeight: 1.3,
                      mb: 0.5,
                      textAlign: 'center',
                    }}
                  >
                    {rule.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                      fontSize: '0.8rem',
                      lineHeight: 1.3,
                      mb: 1.5,
                      textAlign: 'center',
                      maxWidth: '160px',
                    }}
                  >
                    {rule.description}
                  </Typography>

                  {/* Download Button */}
                  <Button
                    className="download-button"
                    variant="outlined"
                    startIcon={<Download sx={{ fontSize: 14 }} />}
                    sx={{
                      borderColor: '#1976D2',
                      color: '#1976D2',
                      textTransform: 'none',
                      fontWeight: 500,
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      fontSize: '0.8rem',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Download
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Beautiful Download Success Alert */}
      <Snackbar
        open={showAlert}
        autoHideDuration={5000}
        onClose={() => setShowAlert(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={Slide}
        TransitionProps={{ direction: 'down' } as React.ComponentProps<typeof Slide>}
        sx={{
          '& .MuiSnackbarContent-root': {
            padding: 0,
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }
        }}
      >
        <Alert
          severity="success"
          icon={<CheckCircleOutline sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />}
          onClose={() => setShowAlert(false)}
          sx={{
            background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
            color: 'white',
            borderRadius: { xs: 2, sm: 3, md: 4 },
            boxShadow: '0 12px 40px rgba(76, 175, 80, 0.4)',
            border: 'none',
            width: { xs: '90%', sm: '85%', md: 'auto' },
            minWidth: { xs: 280, sm: 350, md: 450 },
            maxWidth: { xs: 400, sm: 450, md: 500 },
            padding: { xs: '12px 16px', sm: '14px 18px', md: '16px 20px' },
            mx: { xs: 'auto', sm: 'auto', md: 0 },
            '& .MuiAlert-icon': {
              color: 'white',
              fontSize: { xs: 24, sm: 28, md: 32 },
              marginRight: { xs: 1.5, sm: 1.8, md: 2 },
            },
            '& .MuiAlert-message': {
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              fontWeight: 'bold',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: { xs: 0.3, sm: 0.5, md: 1 },
            },
            '& .MuiAlert-action': {
              color: 'white',
              marginLeft: { xs: 1, sm: 1.5, md: 2 },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '50%',
              },
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              borderRadius: { xs: 2, sm: 3, md: 4 },
              zIndex: -1,
            },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: { xs: 0.3, sm: 0.4, md: 0.5 } }}>
            <Typography sx={{ 
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }, 
              fontWeight: 'bold', 
              color: 'white',
              lineHeight: 1.2,
            }}>
              🎉 Download Successful!
            </Typography>
            <Typography sx={{ 
              fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' }, 
              color: 'rgba(255,255,255,0.9)', 
              fontWeight: 400,
              lineHeight: 1.4,
            }}>
              {downloadedRule} has been downloaded successfully. 
              Please review the guidelines and follow the official rules.
            </Typography>
          </Box>
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RulesSection;
