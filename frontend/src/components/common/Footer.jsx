import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Vizag Travels Hub
            </Typography>
            <Typography variant="body2">
              Your trusted travel partner in Vizag. We provide the best travel experiences and packages
              for all your needs.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              to="/destinations"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Destinations
            </Link>
            <Link
              component={RouterLink}
              to="/packages"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Packages
            </Link>
            <Link
              component={RouterLink}
              to="/about"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              About Us
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              color="inherit"
              display="block"
            >
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2" paragraph>
              Address: 123 Travel Street, Vizag, Andhra Pradesh, India
            </Typography>
            <Typography variant="body2" paragraph>
              Email: info@vizagtravels.com
            </Typography>
            <Typography variant="body2" paragraph>
              Phone: +91 1234567890
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Vizag Travels Hub. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
