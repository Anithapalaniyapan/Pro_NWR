'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Card,
  CardContent,
} from '@mui/material';
import {
  Star,
  Person,
  Group,
  Email,
  Phone,
  LocationOn,
  AttachMoney,
  Schedule,
  Verified,
  Download,
} from '@mui/icons-material';
import Layout from '../../../components/Layout';

const ApplyPage: React.FC = () => {
  const [premiumDialogOpen, setPremiumDialogOpen] = useState(false);
  const [groupDialogOpen, setGroupDialogOpen] = useState(false);
  const [formType, setFormType] = useState<'online' | 'offline'>('online');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    recordType: '',
    description: '',
    participants: '',
    organization: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDownloadPremiumPDF = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/Offline NFI.pdf';
    link.download = 'Premium-Application-Form.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadGroupPDF = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/offline form NWG.pdf';
    link.download = 'Group-Attempt-Application-Form.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (type: 'premium' | 'group') => {
    console.log(`${type} form submitted:`, formData);
    // Handle form submission here
    if (type === 'premium') {
      setPremiumDialogOpen(false);
    } else {
      setGroupDialogOpen(false);
    }
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      recordType: '',
      description: '',
      participants: '',
      organization: '',
    });
  };

  const premiumFeatures = [
    '1 person eligible to attempt',
    'NWR Framed Certificate, Handy Certificate & NWR Medal',
    'NWR Record Holder\'s Privilege Card & Vehicle Sticker',
    'Social Media Promotion Min- 3000 to 5000',
    'Response in 24 Hours',
  ];

  const groupFeatures = [
    'Minimum 100 participants must',
    'NWR Hand Certificate',
    'NWR Medal',
    'NWR Framed Certificate for Organizer',
    'Response in 7 Days',
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
              APPLY TO SET OR BREAK RECORDS
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Subtitle Section */}
      <Box sx={{ py: 3, backgroundColor: '#F5F5F5' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h6" 
            sx={{ 
              textAlign: 'center',
              color: '#666666',
              fontSize: '1.1rem',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Join thousands of record holders worldwide and make your mark in the Nobel Book of World Records
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Premium Application Card */}
          <Box sx={{ flex: 1 }}>
            <Card
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)',
                color: 'white',
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(156, 39, 176, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 100,
                  height: 100,
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '0 0 0 100px',
                }}
              />
              <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Person sx={{ fontSize: 48, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                    PREMIUM APPLICATION
                  </Typography>
                  <Chip
                    label="Individual Record"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  />
                </Box>

                <List sx={{ mb: 3 }}>
                  {premiumFeatures.map((feature, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <Star sx={{ color: '#FFD700' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          fontSize: '0.95rem',
                          fontWeight: 500,
                        }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    For Pricing Contact Us
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                    <Email sx={{ fontSize: 20 }} />
                    <Phone sx={{ fontSize: 20 }} />
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => {
                      setFormType('online');
                      setPremiumDialogOpen(true);
                    }}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      fontWeight: 'bold',
                      py: 1.5,
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      },
                    }}
                  >
                    ONLINE FORM
                  </Button>
                   <Button
                     variant="outlined"
                     size="large"
                     onClick={handleDownloadPremiumPDF}
                     startIcon={<Download />}
                     sx={{
                       borderColor: 'white',
                       color: 'white',
                       fontWeight: 'bold',
                       py: 1.5,
                       '&:hover': {
                         backgroundColor: 'rgba(255, 255, 255, 0.1)',
                         borderColor: 'white',
                       },
                     }}
                   >
                     OFFLINE FORM
                   </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Group Attempt Card */}
          <Box sx={{ flex: 1 }}>
            <Card
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #00695C 0%, #004D40 100%)',
                color: 'white',
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0, 105, 92, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 100,
                  height: 100,
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '0 0 0 100px',
                }}
              />
              <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Group sx={{ fontSize: 48, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                    GROUP ATTEMPT
                  </Typography>
                  <Chip
                    label="Group Record"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  />
                </Box>

                <List sx={{ mb: 3 }}>
                  {groupFeatures.map((feature, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <Star sx={{ color: '#FFD700' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          fontSize: '0.95rem',
                          fontWeight: 500,
                        }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    For Pricing Contact Us
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                    <Email sx={{ fontSize: 20 }} />
                    <Phone sx={{ fontSize: 20 }} />
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => {
                      setFormType('online');
                      setGroupDialogOpen(true);
                    }}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      fontWeight: 'bold',
                      py: 1.5,
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      },
                    }}
                  >
                    ONLINE FORM
                  </Button>
                   <Button
                     variant="outlined"
                     size="large"
                     onClick={handleDownloadGroupPDF}
                     startIcon={<Download />}
                     sx={{
                       borderColor: 'white',
                       color: 'white',
                       fontWeight: 'bold',
                       py: 1.5,
                       '&:hover': {
                         backgroundColor: 'rgba(255, 255, 255, 0.1)',
                         borderColor: 'white',
                       },
                     }}
                   >
                     OFFLINE FORM
                   </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Additional Information */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              background: 'linear-gradient(135deg, #F5F5F5 0%, #EEEEEE 100%)',
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#FF6B35' }}>
              Why Choose Nobel World Records?
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
              <Box sx={{ flex: 1, textAlign: 'center' }}>
                <Verified sx={{ fontSize: 48, color: '#FF6B35', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Authentic Certification
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Internationally recognized certificates and medals
                </Typography>
              </Box>
              <Box sx={{ flex: 1, textAlign: 'center' }}>
                <Schedule sx={{ fontSize: 48, color: '#FF6B35', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Quick Response
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fast processing and immediate feedback
                </Typography>
              </Box>
              <Box sx={{ flex: 1, textAlign: 'center' }}>
                <AttachMoney sx={{ fontSize: 48, color: '#FF6B35', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Competitive Pricing
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Affordable packages for all budgets
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>

      {/* Premium Application Dialog */}
      <Dialog
        open={premiumDialogOpen}
        onClose={() => setPremiumDialogOpen(false)}
        maxWidth="md"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: 3,
          },
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', pb: 1 }}>
          <Typography component="span" sx={{ fontWeight: 'bold', color: '#9C27B0', fontSize: '1.5rem' }}>
            Premium Application Form
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formType === 'online' ? 'Online Form' : 'Offline Form'}
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                variant="outlined"
              />
              <FormControl fullWidth>
                <InputLabel>Record Type</InputLabel>
                <Select
                  name="recordType"
                  value={formData.recordType}
                  onChange={(e) => setFormData(prev => ({ ...prev, recordType: e.target.value }))}
                  label="Record Type"
                >
                  <MenuItem value="sports">Sports</MenuItem>
                  <MenuItem value="academic">Academic</MenuItem>
                  <MenuItem value="arts">Arts & Culture</MenuItem>
                  <MenuItem value="technology">Technology</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField
              fullWidth
              label="Record Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              multiline
              rows={4}
              variant="outlined"
              placeholder="Describe the record you want to set or break..."
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setPremiumDialogOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => handleSubmit('premium')}
            sx={{
              backgroundColor: '#9C27B0',
              '&:hover': {
                backgroundColor: '#7B1FA2',
              },
            }}
          >
            Submit Application
          </Button>
        </DialogActions>
      </Dialog>

      {/* Group Attempt Dialog */}
      <Dialog
        open={groupDialogOpen}
        onClose={() => setGroupDialogOpen(false)}
        maxWidth="md"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: 3,
          },
        }}
      >
         <DialogTitle sx={{ textAlign: 'center', pb: 1 }}>
           <Typography component="span" sx={{ fontWeight: 'bold', color: '#00695C', fontSize: '1.5rem' }}>
             Group Attempt Application Form
           </Typography>
           <Typography variant="body2" color="text.secondary">
             {formType === 'online' ? 'Online Form' : 'Offline Form'}
           </Typography>
         </DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
              <TextField
                fullWidth
                label="Organizer Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Organization"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
              <TextField
                fullWidth
                label="Number of Participants"
                name="participants"
                value={formData.participants}
                onChange={handleInputChange}
                variant="outlined"
                placeholder="Minimum 100 required"
              />
              <FormControl fullWidth>
                <InputLabel>Record Type</InputLabel>
                <Select
                  name="recordType"
                  value={formData.recordType}
                  onChange={(e) => setFormData(prev => ({ ...prev, recordType: e.target.value }))}
                  label="Record Type"
                >
                  <MenuItem value="sports">Sports</MenuItem>
                  <MenuItem value="academic">Academic</MenuItem>
                  <MenuItem value="arts">Arts & Culture</MenuItem>
                  <MenuItem value="technology">Technology</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField
              fullWidth
              label="Group Record Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              multiline
              rows={4}
              variant="outlined"
              placeholder="Describe the group record attempt..."
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setGroupDialogOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => handleSubmit('group')}
            sx={{
              backgroundColor: '#00695C',
              '&:hover': {
                backgroundColor: '#004D40',
              },
            }}
          >
            Submit Application
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
};

export default ApplyPage;
