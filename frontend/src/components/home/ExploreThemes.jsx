import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LandscapeIcon from '@mui/icons-material/Landscape';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

const themes = [
  {
    title: 'Beach Adventures',
    description: 'Experience the pristine beaches of Vizag',
    icon: BeachAccessIcon,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  },
  {
    title: 'Hill Stations',
    description: 'Explore the scenic beauty of Araku Valley',
    icon: LandscapeIcon,
    image: 'https://images.unsplash.com/photo-1519038685256-d9e498c4d0b1',
  },
  {
    title: 'Heritage & Culture',
    description: 'Visit ancient temples and historic sites',
    icon: TempleBuddhistIcon,
    image: 'https://images.unsplash.com/photo-1609766418204-94aae0ecf4e5',
  },
  {
    title: 'Water Sports',
    description: 'Thrilling water activities and boat rides',
    icon: DirectionsBoatIcon,
    image: 'https://images.unsplash.com/photo-1530053969600-caed2596d242',
  },
  {
    title: 'Food Tours',
    description: 'Taste the authentic flavors of Andhra',
    icon: RestaurantIcon,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445',
  },
  {
    title: 'Adventure Activities',
    description: 'Experience exciting outdoor adventures',
    icon: LocalActivityIcon,
    image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833',
  },
];

const ExploreThemes = () => {
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      sx={{ py: 8 }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 600,
          }}
        >
          Explore by Theme
        </Typography>

        <Grid container spacing={3}>
          {themes.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
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
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      color: 'white',
                      zIndex: 1,
                    }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(4px)',
                        mb: 1,
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        },
                      }}
                    >
                      <item.icon sx={{ color: 'white', fontSize: 32 }} />
                    </IconButton>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExploreThemes;
