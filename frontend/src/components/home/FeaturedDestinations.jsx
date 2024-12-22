import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { destinations } from '../../data/destinations';

const FeaturedDestinations = () => {
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
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
          Featured Destinations
        </Typography>
        <Grid container spacing={4}>
          {featuredDestinations.map((destination, index) => (
            <Grid item xs={12} md={4} key={destination.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={destination.images[0]}
                    alt={destination.name}
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
                      {destination.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {destination.shortDescription}
                    </Typography>
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

export default FeaturedDestinations;
