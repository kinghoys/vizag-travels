import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardMedia, CardContent, Rating, Stack, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { destinations } from '../../data/destinations';
import { packages } from '../../data/packages';

const Home = () => {
  const navigate = useNavigate();
  const featuredDestinations = destinations.slice(0, 3);
  const popularPackages = packages.slice(0, 3);

  const containerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4.5rem' },
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              mb: 3,
            }}
          >
            Discover the Beauty of Vizag
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              fontWeight: 400,
              mb: 6,
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            Experience the perfect blend of beaches, hills, and culture
          </Typography>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/packages"
              sx={{
                bgcolor: 'error.main',
                color: 'white',
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                '&:hover': {
                  bgcolor: 'error.dark',
                },
              }}
            >
              Explore Packages
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'white',
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Customize Trip
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Popular Packages Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 600,
                color: '#2A4365',
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -16,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  backgroundColor: 'error.main',
                  borderRadius: '2px',
                }
              }}
            >
              Popular Packages
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {popularPackages.map((pkg) => (
              <Grid item xs={12} md={4} key={pkg.id}>
                <Card
                  onClick={() => navigate(`/package/${pkg.id}`)}
                  sx={{
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={pkg.images[0]}
                    alt={pkg.name}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'rgba(255,255,255,0.9)',
                      borderRadius: '20px',
                      px: 2,
                      py: 0.5,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    <Rating value={pkg.rating} precision={0.5} size="small" readOnly />
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'error.main',
                        fontWeight: 500,
                      }}
                    >
                      ({pkg.reviews})
                    </Typography>
                  </Box>
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      {pkg.name}
                    </Typography>
                    <Stack spacing={2}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          {pkg.duration}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <Box>
                          <Typography variant="h6" color="primary" fontWeight="bold">
                            ₹{pkg.price.toLocaleString()}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            per person
                          </Typography>
                        </Box>
                        <Button
                          variant="outlined"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/package/${pkg.id}`);
                          }}
                        >
                          View Details
                        </Button>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Destinations Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 600,
                color: '#2A4365',
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -16,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  backgroundColor: 'error.main',
                  borderRadius: '2px',
                }
              }}
            >
              Featured Destinations
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {featuredDestinations.map((destination) => (
              <Grid item xs={12} md={4} key={destination.id}>
                <Card
                  sx={{
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                  onClick={() => navigate(`/destinations/${destination.id}`)}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={destination.images[0]}
                    alt={destination.name}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'rgba(255,255,255,0.9)',
                      borderRadius: '20px',
                      px: 2,
                      py: 0.5,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    <Rating value={destination.rating} precision={0.5} size="small" readOnly />
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'error.main',
                        fontWeight: 500,
                      }}
                    >
                      ({destination.reviews})
                    </Typography>
                  </Box>
                  <CardContent sx={{ bgcolor: 'white' }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      {destination.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocationOnIcon sx={{ color: 'text.secondary', fontSize: '1.2rem' }} />
                      <Typography variant="body2" color="text.secondary">
                        {destination.distance}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
