import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        pt: { xs: 8, md: 12 },
        pb: { xs: 4, md: 6 },
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1623492701902-47dc207df5cf?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ maxWidth: 600 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              color: '#FFFFFF',
              mb: 2,
            }}
          >
            Discover the Beauty of Vizag
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#FFFFFF',
              mb: 4,
            }}
          >
            Experience unforgettable adventures in the City of Destiny
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={{ 
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Explore Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
