import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Rating, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const destinations = [
  {
    name: 'Araku Valley',
    image: 'https://images.unsplash.com/photo-1519038685256-d9e498c4d0b1',
    rating: 4.8,
    reviews: 245,
    description: 'Experience the scenic beauty of Eastern Ghats with coffee plantations and tribal culture.',
    distance: '115 km from Vizag'
  },
  {
    name: 'RK Beach',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    rating: 4.5,
    reviews: 320,
    description: 'Iconic beach with submarine museum and stunning views of sunrise.',
    distance: 'In the heart of Vizag'
  },
  {
    name: 'Borra Caves',
    image: 'https://images.unsplash.com/photo-1499244571948-7ccddb3583f1',
    rating: 4.6,
    reviews: 180,
    description: 'One of the largest caves in India with stunning stalactite and stalagmite formations.',
    distance: '90 km from Vizag'
  },
  {
    name: 'Kailasagiri',
    image: 'https://images.unsplash.com/photo-1623492701902-47dc207df5cf',
    rating: 4.7,
    reviews: 275,
    description: 'Hilltop park offering panoramic views of the city and Bay of Bengal.',
    distance: '10 km from city center'
  },
  {
    name: 'Yarada Beach',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206',
    rating: 4.4,
    reviews: 150,
    description: 'Secluded beach surrounded by hills, perfect for a peaceful getaway.',
    distance: '15 km from Vizag'
  },
  {
    name: 'Simhachalam Temple',
    image: 'https://images.unsplash.com/photo-1609766418204-94aae0ecf4e5',
    rating: 4.9,
    reviews: 420,
    description: 'Ancient temple dedicated to Lord Narasimha with stunning architecture.',
    distance: '12 km from city center'
  }
];

const PopularDestinations = () => {
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      sx={{ py: 8, backgroundColor: '#f8fafc' }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: 1,
            fontWeight: 600,
          }}
        >
          Popular Destinations
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{
            textAlign: 'center',
            mb: 6,
            maxWidth: 600,
            mx: 'auto'
          }}
        >
          Discover the most visited places around Vizag
        </Typography>

        <Grid container spacing={3}>
          {destinations.map((destination, index) => (
            <Grid item xs={12} sm={6} md={4} key={destination.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={destination.image}
                    alt={destination.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {destination.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Rating value={destination.rating} precision={0.1} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                          ({destination.reviews} reviews)
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', mb: 2 }}>
                        <LocationOnIcon sx={{ fontSize: 16, mr: 0.5 }} />
                        <Typography variant="body2">{destination.distance}</Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {destination.description}
                      </Typography>
                    </Box>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        '&:hover': {
                          borderColor: theme.palette.primary.dark,
                          backgroundColor: 'rgba(255, 78, 80, 0.08)',
                        },
                      }}
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

export default PopularDestinations;
