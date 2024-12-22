import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PackagesGrid from '../packages/PackagesGrid';

const BestSellingPackages = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Best Selling Packages
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Discover our most popular travel experiences
        </Typography>
      </Box>

      <PackagesGrid limit={3} />

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button
          component={Link}
          to="/packages"
          variant="contained"
          color="primary"
          size="large"
        >
          View All Packages
        </Button>
      </Box>
    </Container>
  );
};

export default BestSellingPackages;
