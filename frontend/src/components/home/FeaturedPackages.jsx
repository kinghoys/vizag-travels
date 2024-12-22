import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const packages = [
  {
    id: 1,
    title: 'Araku Valley Adventure',
    image: '/images/araku-valley.jpg',
    duration: '2 Days',
    price: '₹4,999',
    description: 'Experience the scenic beauty of Araku Valley with our all-inclusive package.'
  },
  {
    id: 2,
    title: 'Lambasingi Weekend Gateway',
    image: '/images/lambasingi.jpg',
    duration: '2 Days',
    price: '₹5,499',
    description: 'Visit the Kashmir of Andhra Pradesh and enjoy the cool climate.'
  },
  {
    id: 3,
    title: 'Vizag City Tour',
    image: '/images/vizag-city.jpg',
    duration: '1 Day',
    price: '₹1,999',
    description: 'Explore the best attractions in Visakhapatnam in one day.'
  }
];

const FeaturedPackages = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'white' }}>
      <Container>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Featured Packages
        </Typography>
        <Grid container spacing={4}>
          {packages.map((pkg, index) => (
            <Grid item xs={12} md={4} key={pkg.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={pkg.image}
                    alt={pkg.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {pkg.title}
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                      {pkg.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                      <Typography variant="h6" color="primary">
                        {pkg.price}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {pkg.duration}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Book Now
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

export default FeaturedPackages;
