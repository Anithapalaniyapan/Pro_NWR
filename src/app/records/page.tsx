'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Layout from '../../components/Layout';
import NominationFormSection from './NominationFormSection';
import RulesSection from './RulesSection';

const Records: React.FC = () => {
  return (
    <Layout>
      {/* Nomination Form Section */}
      <div id="nomination-forms">
        <NominationFormSection />
      </div>
      
      {/* Apply For Judge Section */}
      <div id="apply-judge">
        <Box sx={{ py: 8, backgroundColor: '#F8F9FA' }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #1976D2 0%, #FF6B35 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 3,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                }}
              >
                APPLY FOR JUDGE
              </Typography>
              <Typography variant="h6" sx={{ color: '#666666', maxWidth: '600px', mx: 'auto' }}>
                Join our panel of certified judges and adjudicators
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h5" sx={{ color: '#333333', mb: 4 }}>
                Judge Application Coming Soon
              </Typography>
              <Typography variant="body1" sx={{ color: '#666666', maxWidth: '500px', mx: 'auto' }}>
                We are currently developing the judge application process. 
                Please check back later or contact us for more information.
              </Typography>
            </Box>
          </Container>
        </Box>
      </div>
      
      {/* Invite A Judge Section */}
      <div id="invite-judge">
        <Box sx={{ py: 8, backgroundColor: '#FFFFFF' }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 6 }}>
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
                }}
              >
                INVITE A JUDGE
              </Typography>
              <Typography variant="h6" sx={{ color: '#666666', maxWidth: '600px', mx: 'auto' }}>
                Request a certified judge for your record attempt
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h5" sx={{ color: '#333333', mb: 4 }}>
                Judge Invitation Coming Soon
              </Typography>
              <Typography variant="body1" sx={{ color: '#666666', maxWidth: '500px', mx: 'auto' }}>
                We are currently developing the judge invitation system. 
                Please check back later or contact us for more information.
              </Typography>
            </Box>
          </Container>
        </Box>
      </div>
      
      {/* Rules Section */}
      <RulesSection />
    </Layout>
  );
};

export default Records;