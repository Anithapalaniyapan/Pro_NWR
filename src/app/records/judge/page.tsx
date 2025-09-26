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
  Divider,
  Card,
  CardContent,
  Snackbar,
  Alert,
  Slide,
} from '@mui/material';
import {
  CheckCircle,
  School,
  Work,
  People,
  Recommend,
  Download,
  Email,
  Gavel,
  Description,
  CheckCircleOutline,
} from '@mui/icons-material';
import Layout from '../../../components/Layout';

const JudgePage: React.FC = () => {
  const [applicationDownloaded, setApplicationDownloaded] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleDownloadApplication = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/pdfs/ReviewerApplication-converted.pdf';
    link.download = 'ReviewerApplication-converted.pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success feedback
    setApplicationDownloaded(true);
    setShowAlert(true);
    setTimeout(() => setApplicationDownloaded(false), 3000);
    setTimeout(() => setShowAlert(false), 4000);
  };

  const selectionCriteria = [
    {
      icon: <School />,
      title: "Educational Qualifications",
      description: "Any recognized degree or professional certification in your field of expertise"
    },
    {
      icon: <Work />,
      title: "Professional Experience",
      description: "Previous experience in record evaluation, judging, or related professional activities"
    },
    {
      icon: <People />,
      title: "Event Management",
      description: "Number of seminars, workshops, or events you have organized in your area of expertise"
    },
    {
      icon: <People />,
      title: "Communication Skills",
      description: "Ability to interact effectively with people and maintain professional relationships with editorial board members"
    },
    {
      icon: <Recommend />,
      title: "Professional References",
      description: "Recommendations from existing NWR Editorial Members who know your work and capabilities"
    }
  ];

  const reviewSteps = [
    "Carefully examine the record attempt documentation and evidence provided",
    "Verify the authenticity and accuracy of all submitted materials",
    "Assess whether the attempt meets NWR standards and guidelines",
    "Evaluate the uniqueness and significance of the record",
    "Provide detailed feedback and recommendations to the editorial board",
    "Maintain confidentiality and professional integrity throughout the process"
  ];

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
            width: { xs: '95%', sm: '90%', md: '210mm' }, // A4 width
            minHeight: '297mm', // A4 height
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
            {/* Decorative Elements */}
            <Box
              sx={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 100,
                height: 100,
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -30,
                left: -30,
                width: 80,
                height: 80,
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '50%',
              }}
            />
            
             {/* Title Only */}
             <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
               <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem', lg: '3rem' } }}>
                 HOW TO BECOME A JUDGE?
               </Typography>
               <Typography variant="h6" sx={{ opacity: 0.9, fontSize: { xs: '1rem', md: '1.2rem' }, fontWeight: 400 }}>
                 Nobel World Records - Adjudicator Application Guide
               </Typography>
             </Box>
          </Box>

          {/* Document Content */}
          <Box sx={{ p: 4 }}>
            {/* Introduction */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', color: '#333' }}>
                Many qualified professionals aspire to become Adjudicators (Judges) for Nobel World Records, 
                but breaking into this exclusive community requires meeting specific criteria. Our editorial 
                board carefully selects Adjudicators based on their expertise, experience, and professional 
                standing to ensure the highest standards of record evaluation.
              </Typography>
            </Box>

            {/* Selection Criteria */}
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
                Selection Criteria for Adjudicators
              </Typography>
              
              <Typography variant="body2" sx={{ mb: 3, color: '#666', fontStyle: 'italic' }}>
                Editors and Directors select Adjudicators based on the following criteria:
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {selectionCriteria.map((criteria, index) => (
                  <Card
                    key={index}
                    sx={{
                      border: '1px solid #E3F2FD',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 4px 15px rgba(25, 118, 210, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box
                          sx={{
                            backgroundColor: '#E3F2FD',
                            borderRadius: '50%',
                            p: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: 48,
                            height: 48,
                          }}
                        >
                          {React.cloneElement(criteria.icon, { 
                            sx: { color: '#1976D2', fontSize: 24 } 
                          })}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#1976D2' }}>
                            {criteria.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                            {criteria.description}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>

            {/* Application Section */}
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
                <Description sx={{ fontSize: 28 }} />
                Application Process
              </Typography>
              
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleDownloadApplication}
                  sx={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    borderRadius: 3,
                    boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
                    '&:hover': {
                      backgroundColor: '#45a049',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  startIcon={<Download />}
                >
                  {applicationDownloaded ? 'Downloaded!' : 'Download Application PDF'}
                </Button>
                
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mt: 2, 
                    color: '#666',
                    fontStyle: 'italic',
                    maxWidth: 400,
                    mx: 'auto',
                  }}
                >
                  Download the application form, complete all sections, and submit to: 
                  <Box component="span" sx={{ fontWeight: 'bold', color: '#1976D2' }}>
                    {' '}info@nobelworldrecords.org
                  </Box>
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 4, borderColor: '#E3F2FD' }} />

            {/* Review Process */}
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
                <CheckCircle sx={{ fontSize: 28 }} />
                How to Conduct a Review?
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: '#333' }}>
                When making recommendations as an Adjudicator, it&apos;s essential to consider the categories 
                that editors use for classifying record attempts. The following steps must be followed 
                by all Adjudicators and review panel members:
              </Typography>

              <List sx={{ pl: 0 }}>
                {reviewSteps.map((step, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          backgroundColor: '#1976D2',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {index + 1}
                      </Box>
                    </ListItemIcon>
                    <ListItemText
                      primary={step}
                      primaryTypographyProps={{
                        sx: { 
                          fontSize: '1rem',
                          lineHeight: 1.6,
                          color: '#333',
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Contact Information */}
            <Box
              sx={{
                backgroundColor: '#F8F9FA',
                borderRadius: 3,
                p: 3,
                border: '2px solid #E3F2FD',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1976D2' }}>
                Need More Information?
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                For questions about becoming an Adjudicator or the application process, 
                please contact our editorial team:
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ color: '#1976D2', fontSize: 20 }} />
                <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#1976D2' }}>
                  info@nobelworldrecords.org
                </Typography>
              </Box>
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
              © 2025 Nobel World Records. All rights reserved. | Official Adjudicator Application Guide
            </Typography>
          </Box>
        </Paper>
      </Box>

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
              Your application form has been downloaded successfully. 
              Please complete all sections and submit to info@nobelworldrecords.org
            </Typography>
          </Box>
        </Alert>
      </Snackbar>
    </Layout>
  );
};

export default JudgePage;
