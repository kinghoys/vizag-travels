import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link, Stack, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const quickLinks = [
    { title: 'About Us', path: '/about' },
    { title: 'Tour Packages', path: '/tour-packages' },
    { title: 'Vehicle Rental', path: '/vehicle-rental' },
    { title: 'Contact Us', path: '/contact' }
  ];

  const popularDestinations = [
    { title: 'Araku Valley', path: '/destinations/araku-valley' },
    { title: 'Borra Caves', path: '/destinations/borra-caves' },
    { title: 'RK Beach', path: '/destinations/rk-beach' },
    { title: 'Kailasagiri', path: '/destinations/kailasagiri' }
  ];

  const services = [
    { title: 'Hotel Booking', path: '/services/hotels' },
    { title: 'Car Rental', path: '/services/car-rental' },
    { title: 'Travel Guide', path: '/services/guide' },
    { title: 'Custom Tours', path: '/services/custom-tours' }
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#2C3E50',
        color: 'white',
        pt: 8,
        pb: 4,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Vizag Travels Hub
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Your trusted partner for exploring the beautiful city of Vizag and its surroundings. We provide comprehensive travel services with local expertise.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
              <IconButton 
                href="https://facebook.com" 
                target="_blank"
                sx={{ 
                  color: 'white',
                  '&:hover': { color: '#FF4E50' }
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                href="https://twitter.com" 
                target="_blank"
                sx={{ 
                  color: 'white',
                  '&:hover': { color: '#FF4E50' }
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                href="https://instagram.com" 
                target="_blank"
                sx={{ 
                  color: 'white',
                  '&:hover': { color: '#FF4E50' }
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton 
                href="https://linkedin.com" 
                target="_blank"
                sx={{ 
                  color: 'white',
                  '&:hover': { color: '#FF4E50' }
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.path}
                  sx={{
                    color: 'white',
                    opacity: 0.8,
                    textDecoration: 'none',
                    '&:hover': {
                      opacity: 1,
                      color: '#FF4E50'
                    }
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Popular Destinations */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Popular Destinations
            </Typography>
            <Stack spacing={1}>
              {popularDestinations.map((destination) => (
                <Link
                  key={destination.title}
                  href={destination.path}
                  sx={{
                    color: 'white',
                    opacity: 0.8,
                    textDecoration: 'none',
                    '&:hover': {
                      opacity: 1,
                      color: '#FF4E50'
                    }
                  }}
                >
                  {destination.title}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  123 Beach Road, Vizag, Andhra Pradesh, India
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ opacity: 0.8 }} />
                <Link
                  href="tel:1800-123-5555"
                  sx={{
                    color: 'white',
                    opacity: 0.8,
                    textDecoration: 'none',
                    '&:hover': {
                      opacity: 1,
                      color: '#FF4E50'
                    }
                  }}
                >
                  1800-123-5555
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ opacity: 0.8 }} />
                <Link
                  href="mailto:info@vizagtravelshub.com"
                  sx={{
                    color: 'white',
                    opacity: 0.8,
                    textDecoration: 'none',
                    '&:hover': {
                      opacity: 1,
                      color: '#FF4E50'
                    }
                  }}
                >
                  info@vizagtravelshub.com
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Vizag Travels Hub. All rights reserved.
          </Typography>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              '& a': {
                color: 'white',
                opacity: 0.8,
                textDecoration: 'none',
                '&:hover': {
                  opacity: 1,
                  color: '#FF4E50'
                }
              }
            }}
          >
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/sitemap">Sitemap</Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
