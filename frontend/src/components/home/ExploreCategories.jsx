import React from 'react';
import { Container, Grid, Box, Typography, IconButton } from '@mui/material';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 1,
    title: 'Adventure',
    image: '/icons/adventure.svg',
    count: '10+ destinations'
  },
  {
    id: 2,
    title: 'Nature',
    image: '/icons/nature.svg',
    count: '15+ destinations'
  },
  {
    id: 3,
    title: 'Beach',
    image: '/icons/beach.svg',
    count: '8+ destinations'
  },
  {
    id: 4,
    title: 'Heritage',
    image: '/icons/heritage.svg',
    count: '5+ destinations'
  },
  {
    id: 5,
    title: 'Religious',
    image: '/icons/religious.svg',
    count: '12+ destinations'
  },
  {
    id: 6,
    title: 'Family',
    image: '/icons/family.svg',
    count: '20+ packages'
  },
  {
    id: 7,
    title: 'Weekend',
    image: '/icons/weekend.svg',
    count: '15+ packages'
  },
  {
    id: 8,
    title: 'Vehicle Rental',
    image: '/icons/vehicle.svg',
    count: 'Multiple options'
  }
];

const ExploreCategories = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 4 }}
        >
          Explore destinations by theme
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item xs={6} sm={4} md={3} key={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 120,
                      height: 120,
                      margin: '0 auto',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      mb: 2
                    }}
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      style={{ width: 60, height: 60 }}
                    />
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.count}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
            For best packages, call us at
          </Typography>
          <Typography
            variant="h5"
            component="a"
            href="tel:1800-123-5555"
            sx={{
              color: '#00897b',
              textDecoration: 'none',
              fontWeight: 'bold',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            1800-123-5555
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ExploreCategories;
