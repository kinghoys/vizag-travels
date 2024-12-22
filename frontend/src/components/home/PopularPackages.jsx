import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { packages } from '../../data/packages';

const PopularPackages = () => {
  const popularPackages = packages.slice(0, 3);

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            fontWeight: 700,
            color: 'text.primary'
          }}
        >
          Popular Packages
        </Typography>
        <Grid container spacing={4}>
          {popularPackages.map((pkg, index) => (
            <Grid item xs={12} md={4} key={pkg.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={pkg.images[0]}
                    alt={pkg.name}
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {pkg.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {pkg.shortDescription}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </Typography>
                    <Button
                      component={Link}
                      to={`/packages/${pkg.id}`}
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PopularPackages;
