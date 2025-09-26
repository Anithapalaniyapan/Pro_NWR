'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
} from '@mui/material';
import Image from 'next/image';
import {
  Menu as MenuIcon,
  Phone,
  Email,
  Search,
  Close,
  ExpandMore,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isNavigating, setIsNavigating] = useState(false);
  const [recordsAnchor, setRecordsAnchor] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();

  // Handle hydration mismatch by ensuring consistent initial state
  useEffect(() => {
    // This ensures the component is fully hydrated before showing dynamic content
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearchOpen = () => {
    setSearchOpen(true);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchQuery('');
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Here you can implement actual search functionality
      // For now, we'll just show an alert
      alert(`Searching for: "${searchQuery}"`);
      handleSearchClose();
    }
  };

  const handleSearchKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };


  const handleRecordsClick = (event: React.MouseEvent<HTMLElement>) => {
    setRecordsAnchor(event.currentTarget);
  };

  const handleRecordsClose = () => {
    setRecordsAnchor(null);
  };


  const handleNavigation = (href: string) => {
    // Close mobile drawer if open
    if (mobileOpen) {
      setMobileOpen(false);
    }
    
    // Set navigating state for immediate feedback
    setIsNavigating(true);
    
    try {
      // Use router.push with scroll for faster navigation
      router.push(href);
      
      // Reset navigating state after a short delay
      setTimeout(() => {
        setIsNavigating(false);
      }, 100);
    } catch (error) {
      console.error('Navigation error:', error);
      setIsNavigating(false);
      // Fallback to window.location if router.push fails
      window.location.href = href;
    }
  };


  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Records', href: '/records', hasDropdown: true },
    { label: 'Contact Us', href: '/contact' },
  ];

  const recordsDropdownItems = [
    { label: 'Records', href: '/records' },
    { label: 'Apply To Set/Break A Records', href: '/records/apply' },
    { label: 'Apply For Judge', href: '/records/judge' },
    { label: 'Invite A Judge', href: '/records/invite' },
  ];

  const drawer = (
    <Box sx={{ 
      width: { xs: '100vw', sm: 400 },
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Header without logo - cleaner mobile design */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        py: 3,
        px: 2,
        borderBottom: '1px solid #E0E0E0',
        backgroundColor: '#F8F9FA',
      }}>
        <Typography variant="h5" sx={{ 
          color: '#1976D2',
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 1,
        }}>
          NOBEL WORLD RECORDS
        </Typography>
        <Typography variant="body2" sx={{ 
          color: '#666666',
          textAlign: 'center',
          fontWeight: 500,
        }}>
          Navigation Menu
        </Typography>
      </Box>
      <List sx={{ flex: 1, py: 2 }}>
        {navigationItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            {item.hasDropdown ? (
              <Box>
                <ListItemButton 
                  onClick={handleRecordsClick}
                  sx={{ 
                    textAlign: 'left',
                    color: '#333333',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    py: 2,
                    px: 3,
                    mx: 1,
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: '#F5F5F5',
                      color: '#1976D2',
                      textDecoration: 'none',
                    },
                    '&:active': {
                      transform: 'scale(0.98)',
                      backgroundColor: '#E3F2FD',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  <ListItemText 
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '1.1rem',
                      fontWeight: 500,
                    }}
                  />
                  <ExpandMore sx={{ ml: 1, fontSize: 20 }} />
                </ListItemButton>
                {recordsAnchor && (
                  <Box sx={{ pl: 4, pr: 2 }}>
                    {recordsDropdownItems.map((dropdownItem) => (
                      <ListItemButton
                        key={dropdownItem.label}
                        onClick={() => {
                          handleRecordsClose();
                          handleNavigation(dropdownItem.href);
                          setMobileOpen(false);
                        }}
                        sx={{
                          py: 1.5,
                          px: 2,
                          borderRadius: 1,
                          fontSize: '1rem',
                          color: '#666666',
                          '&:hover': {
                            backgroundColor: '#E3F2FD',
                            color: '#1976D2',
                          },
                        }}
                      >
                        <ListItemText 
                          primary={dropdownItem.label}
                          primaryTypographyProps={{
                            fontSize: '1rem',
                            fontWeight: 500,
                          }}
                        />
                      </ListItemButton>
                    ))}
                  </Box>
                )}
              </Box>
            ) : (
              <ListItemButton 
                onClick={() => handleNavigation(item.href)}
                disabled={isNavigating}
                sx={{ 
                  textAlign: 'left',
                  color: '#333333',
                  textDecoration: 'none',
                  cursor: isNavigating ? 'wait' : 'pointer',
                  py: 2,
                  px: 3,
                  mx: 1,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: '#F5F5F5',
                    color: '#1976D2',
                    textDecoration: 'none',
                  },
                  '&:active': {
                    transform: 'scale(0.98)',
                    backgroundColor: '#E3F2FD',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                <ListItemText 
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: '1.1rem',
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Top Bar */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #E64A19 100%)',
          color: 'white',
          py: { xs: 1, md: 1.5 },
          px: { xs: 1, md: 2 },
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          boxShadow: '0 4px 20px rgba(255, 107, 53, 0.3)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: { xs: 1, md: 2 },
            }}
          >
            {/* Left Section - Phone */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              minWidth: 0,
            }}>
              <Phone sx={{ fontSize: { xs: 14, md: 16 } }} />
              <Typography 
                variant="body2" 
                sx={{ 
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                +91-8877887768
              </Typography>
            </Box>
            
            {/* Center Section - Email */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              minWidth: 0,
            }}>
              <Email sx={{ fontSize: { xs: 14, md: 16 } }} />
              <Typography 
                variant="body2" 
                sx={{ 
                  fontSize: { xs: '0.7rem', sm: '0.875rem' },
                  display: { xs: 'none', md: 'block' }
                }}
              >
                info@nobelworldrecords.org
              </Typography>
            </Box>
            
            {/* Right Section - Search Button */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton 
                size="small" 
                sx={{ 
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                  px: 1.5,
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.05)',
                  },
                  transition: 'all 0.3s ease',
                }}
                onClick={handleSearchOpen}
                aria-label="Search"
              >
                <Search sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Header */}
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.95) 100%)',
          color: 'text.primary',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(255, 107, 53, 0.1)',
          top: { xs: '40px', md: '60px' }, // Responsive top position
          transition: 'all 0.3s ease',
          py: { xs: 2, md: 0 }, // Add vertical padding for mobile
          '&:hover': {
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 249, 250, 0.98) 100%)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
          }
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ 
            justifyContent: 'space-between', 
            minHeight: { xs: '70px', md: '100px' },
            px: { xs: 1, md: 2 }
          }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: { xs: 200, sm: 240, md: 280 },
                  height: { xs: 50, sm: 60, md: 80 },
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 8px 25px rgba(255, 107, 53, 0.2)',
                  }
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Nobel World Records Logo"
                  width={280}
                  height={80}
                  style={{
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Box>
            </Box>

             {/* Desktop Navigation */}
             {!isMobile && (
               <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                 {navigationItems.map((item) => {
                   if (item.hasDropdown) {
                     return (
                       <Button
                         key={item.label}
                         onClick={handleRecordsClick}
                         sx={{
                           color: '#333333',
                           backgroundColor: 'rgba(255, 107, 53, 0.05)',
                           borderRadius: 3,
                           px: 3,
                           py: 1.5,
                           fontWeight: 600,
                           fontSize: '0.95rem',
                           textTransform: 'none',
                           border: '2px solid rgba(255, 107, 53, 0.1)',
                           boxShadow: '0 2px 8px rgba(255, 107, 53, 0.08)',
                           textDecoration: 'none',
                           cursor: 'pointer',
                           position: 'relative',
                           overflow: 'hidden',
                           '&:hover': {
                             backgroundColor: 'rgba(255, 107, 53, 0.1)',
                             color: '#FF6B35',
                             borderColor: '#FF6B35',
                             transform: 'translateY(-2px)',
                             boxShadow: '0 6px 20px rgba(255, 107, 53, 0.15)',
                             textDecoration: 'none',
                           },
                           '&:active': {
                             transform: 'translateY(0px)',
                             backgroundColor: 'rgba(255, 107, 53, 0.15)',
                           },
                           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                         }}
                       >
                         {item.label}
                         <ExpandMore sx={{ ml: 1, fontSize: 18 }} />
                       </Button>
                     );
                   }
                   
                   return (
                     <Button
                       key={item.label}
                       onClick={() => handleNavigation(item.href)}
                       disabled={isNavigating}
                       sx={{
                         color: '#333333',
                         backgroundColor: 'rgba(255, 107, 53, 0.05)',
                         borderRadius: 3,
                         px: 3,
                         py: 1.5,
                         fontWeight: 600,
                         fontSize: '0.95rem',
                         textTransform: 'none',
                         border: '2px solid rgba(255, 107, 53, 0.1)',
                         boxShadow: '0 2px 8px rgba(255, 107, 53, 0.08)',
                         textDecoration: 'none',
                         cursor: isNavigating ? 'wait' : 'pointer',
                         position: 'relative',
                         overflow: 'hidden',
                         '&:hover': {
                           backgroundColor: 'rgba(255, 107, 53, 0.1)',
                           color: '#FF6B35',
                           borderColor: '#FF6B35',
                           transform: 'translateY(-2px)',
                           boxShadow: '0 6px 20px rgba(255, 107, 53, 0.15)',
                           textDecoration: 'none',
                         },
                         '&:active': {
                           transform: 'translateY(0px)',
                           backgroundColor: 'rgba(255, 107, 53, 0.15)',
                         },
                         transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                       }}
                     >
                       {item.label}
                     </Button>
                   );
                 })}
               </Box>
             )}

            {/* Records Dropdown Menu */}
            <Menu
              anchorEl={recordsAnchor}
              open={Boolean(recordsAnchor)}
              onClose={handleRecordsClose}
              PaperProps={{
                sx: {
                  mt: 1,
                  borderRadius: 2,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                  border: '1px solid rgba(255, 107, 53, 0.2)',
                  minWidth: 250,
                }
              }}
              transformOrigin={{ horizontal: 'center', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
            >
              {recordsDropdownItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => {
                    handleRecordsClose();
                    handleNavigation(item.href);
                  }}
                  sx={{
                    py: 1.5,
                    px: 2,
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: '#333333',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 107, 53, 0.08)',
                      color: '#FF6B35',
                    },
                    '&:last-child': {
                      borderBottom: 'none',
                    },
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  color: '#FF6B35',
                  backgroundColor: 'rgba(255, 107, 53, 0.1)',
                  borderRadius: 2,
                  p: 1.5,
                  border: '2px solid rgba(255, 107, 53, 0.2)',
                  boxShadow: '0 4px 15px rgba(255, 107, 53, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 107, 53, 0.15)',
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 20px rgba(255, 107, 53, 0.2)',
                  }
                }}
              >
                <MenuIcon sx={{ fontSize: 24 }} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: { xs: '100vw', sm: 400 },
            maxWidth: '100vw',
            border: 'none',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Search Dialog */}
      <Dialog 
        open={searchOpen} 
        onClose={handleSearchClose}
        maxWidth="sm"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: 3,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          pb: 1,
        }}>
          <Typography component="span" sx={{ fontWeight: 'bold', color: '#1976D2', fontSize: '1.25rem' }}>
            Search Nobel World Records
          </Typography>
          <IconButton onClick={handleSearchClose} size="small">
            <Close />
          </IconButton>
        </DialogTitle>
        
        <DialogContent sx={{ pt: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for records, achievements, or information..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleSearchKeyPress}
            autoFocus
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                '&:hover fieldset': {
                  borderColor: '#1976D2',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1976D2',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: '#1976D2' }} />
                </InputAdornment>
              ),
            }}
          />
          
          <Box sx={{ mt: 3 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Popular searches:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['World Records', 'Achievements', 'Certificates', 'Applications'].map((term) => (
                <Button
                  key={term}
                  variant="outlined"
                  size="small"
                  onClick={() => {
                    setSearchQuery(term);
                    handleSearch();
                  }}
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    borderColor: '#1976D2',
                    color: '#1976D2',
                    '&:hover': {
                      backgroundColor: '#1976D2',
                      color: 'white',
                    },
                  }}
                >
                  {term}
                </Button>
              ))}
            </Box>
          </Box>
        </DialogContent>
        
        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button 
            onClick={handleSearchClose}
            sx={{ 
              color: 'text.secondary',
              textTransform: 'none',
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSearch}
            variant="contained"
            disabled={!searchQuery.trim()}
            sx={{
              backgroundColor: '#1976D2',
              textTransform: 'none',
              borderRadius: 2,
              px: 3,
              '&:hover': {
                backgroundColor: '#1565C0',
              },
            }}
          >
            Search
          </Button>
        </DialogActions>
      </Dialog>


    </>
  );
};

export default Header;
