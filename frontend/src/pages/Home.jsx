import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Stack, 
  Paper,
  TextField,
  Snackbar,
  Alert,
  IconButton,
  Chip,
  Divider,
  useTheme,
  useMediaQuery,
  Avatar,
  Rating
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';
import InstagramIcon from '@mui/icons-material/Instagram';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LandscapeIcon from '@mui/icons-material/Landscape';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { destinations } from '../data/destinations';
import { packages } from '../data/packages';

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const featuredDestinations = destinations.slice(0, 3);
  const popularPackages = packages.slice(0, 3);
  const [email, setEmail] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setSnackbarMessage('Please enter your email address');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setSnackbarMessage('Please enter a valid email address');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }
    setSnackbarMessage('Thank you for subscribing! You will receive our latest updates soon.');
    setSnackbarSeverity('success');
    setOpenSnackbar(true);
    setEmail('');
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    {
      icon: <BeachAccessIcon sx={{ fontSize: 40 }} />,
      title: 'Beach Activities',
      description: 'Enjoy pristine beaches and water sports'
    },
    {
      icon: <LandscapeIcon sx={{ fontSize: 40 }} />,
      title: 'Hill Stations',
      description: 'Explore scenic hill stations and viewpoints'
    },
    {
      icon: <LocalActivityIcon sx={{ fontSize: 40 }} />,
      title: 'Local Attractions',
      description: 'Visit famous landmarks and tourist spots'
    },
    {
      icon: <CameraAltIcon sx={{ fontSize: 40 }} />,
      title: 'Photography',
      description: 'Capture stunning moments and landscapes'
    },
    {
      icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
      title: 'Local Cuisine',
      description: 'Taste authentic local delicacies'
    },
    {
      icon: <HotelIcon sx={{ fontSize: 40 }} />,
      title: 'Comfortable Stays',
      description: 'Quality accommodations for your comfort'
    }
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      location: 'Hyderabad',
      comment: 'Amazing experience with Vizag Travels Hub! The team went above and beyond to make our trip memorable. The local insights and personalized attention made all the difference.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Priya Patel',
      location: 'Bangalore',
      comment: 'Perfect planning and execution! From beaches to hill stations, every destination was carefully chosen. The guides were knowledgeable and friendly.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      name: 'Arun Kumar',
      location: 'Chennai',
      comment: 'The customized package was exactly what we needed. Professional service, comfortable accommodations, and unforgettable experiences.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          height: '100vh',
          position: 'relative',
          backgroundImage: 'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
          },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ color: 'white', position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  mb: 1,
                  '& .highlight': {
                    color: theme.palette.primary.main,
                    display: 'block',
                    fontSize: { xs: '3rem', md: '5rem' },
                  }
                }}
              >
                Discover the Magic
                <br />
                of{' '}
                <span className="highlight">
                  Vizag
                </span>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h5"
                sx={{
                  maxWidth: 600,
                  mb: 4,
                  color: 'rgba(255, 255, 255, 0.9)',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                  lineHeight: 1.6,
                  fontWeight: 500,
                }}
              >
                Experience the perfect blend of pristine beaches,
                scenic hills, and rich cultural heritage in the Jewel
                of the East Coast.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={() => navigate('/packages')}
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Explore Packages
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/customize')}
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    backdropFilter: 'blur(4px)',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  Customize Trip
                </Button>
              </Stack>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container>
        <Box
          sx={{
            mt: -10,
            mb: 8,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Grid container spacing={3}>
            {features.map((feature, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    variants={itemAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        height: '100%',
                        textAlign: 'center',
                        borderRadius: 4,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: theme.shadows[8],
                        },
                        background: theme.palette.background.paper,
                      }}
                    >
                      {feature.icon}
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        {feature.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>

      {/* Popular Packages Section */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.primary.main }}>
        <Container>
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  letterSpacing: 2,
                }}
              >
                FEATURED TOURS
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                sx={{ 
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Popular Packages
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: 'auto' }}
              >
                Discover our most sought-after travel experiences, carefully curated for unforgettable adventures
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {popularPackages.map((pkg, index) => (
                <Grid item xs={12} md={4} key={pkg.id}>
                  <motion.div variants={itemAnimation}>
                    <Card
                      onClick={() => navigate(`/package/${pkg.id}`)}
                      sx={{
                        height: '100%',
                        cursor: 'pointer',
                        borderRadius: 4,
                        overflow: 'hidden',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: theme.shadows[8],
                          '& .MuiCardMedia-root': {
                            transform: 'scale(1.1)',
                          },
                        },
                      }}
                    >
                      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                        <CardMedia
                          component="img"
                          height="240"
                          image={
                            pkg.id === 'vizag-city-tour'
                              ? 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&q=80' // City view
                              : pkg.id === 'lambasingi-day-trip'
                              ? 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80' // Misty mountains
                              : pkg.id === 'vizag-araku-tourism'
                              ? 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80' // Mountain valley
                              : `/images/packages/${pkg.id}.jpg`
                          }
                          alt={pkg.name}
                          sx={{
                            transition: 'transform 0.3s ease-in-out',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            zIndex: 1,
                          }}
                        >
                          <Chip
                            label={`${pkg.duration} Days`}
                            color="primary"
                            size="small"
                            icon={<AccessTimeIcon />}
                            sx={{
                              backdropFilter: 'blur(10px)',
                              backgroundColor: 'rgba(255,255,255,0.9)',
                            }}
                          />
                        </Box>
                      </Box>
                      <CardContent sx={{ p: 3 }}>
                        <Stack spacing={2}>
                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{ fontWeight: 600 }}
                          >
                            {pkg.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <LocationOnIcon color="action" fontSize="small" />
                            <Typography variant="body2" color="text.secondary">
                              {typeof pkg.location === 'string' ? pkg.location : pkg.location.name}
                            </Typography>
                          </Box>
                          <Stack
                            direction="row"
                            spacing={2}
                            divider={<Divider orientation="vertical" flexItem />}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <GroupIcon color="action" fontSize="small" />
                              <Typography variant="body2" color="text.secondary">
                                {pkg.groupSize} People
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <DirectionsCarIcon color="action" fontSize="small" />
                              <Typography variant="body2" color="text.secondary">
                                Transport
                              </Typography>
                            </Box>
                          </Stack>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              mt: 2,
                            }}
                          >
                            <Box>
                              <Typography
                                variant="h6"
                                color="primary"
                                sx={{ fontWeight: 700 }}
                              >
                                ₹{pkg.price.toLocaleString()}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                per person
                              </Typography>
                            </Box>
                            <IconButton
                              color="primary"
                              sx={{
                                bgcolor: theme.palette.primary.main,
                                '&:hover': {
                                  bgcolor: theme.palette.primary.main,
                                },
                              }}
                            >
                              <ArrowForwardIcon />
                            </IconButton>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Featured Destinations Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  letterSpacing: 2,
                }}
              >
                EXPLORE VIZAG
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                sx={{ 
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Featured Destinations
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: 'auto' }}
              >
                Discover the most beautiful locations in Vizag, from serene beaches to historic landmarks
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {featuredDestinations.map((destination, index) => (
                <Grid item xs={12} md={4} key={destination.id}>
                  <motion.div variants={itemAnimation}>
                    <Card
                      onClick={() => navigate(`/destinations/${destination.id}`)}
                      sx={{
                        height: '100%',
                        borderRadius: 4,
                        overflow: 'hidden',
                        position: 'relative',
                        '&:hover': {
                          '& .MuiCardMedia-root': {
                            transform: 'scale(1.1)',
                          },
                          '& .overlay': {
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          },
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="400"
                        image={
                          destination.id === 'araku-valley'
                            ? 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80'
                            : destination.id === 'rk-beach'
                            ? 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&q=80'
                            : destination.id === 'borra-caves'
                            ? 'https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?auto=format&fit=crop&q=80'
                            : destination.id === 'kailasagiri'
                            ? 'https://images.unsplash.com/photo-1592852305099-820f94c57e38?auto=format&fit=crop&q=80' // Hilltop temple
                            : destination.id === 'yarada-beach'
                            ? 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&q=80' // Scenic beach
                            : 'https://images.unsplash.com/photo-1604873753438-d45f3384c49e?auto=format&fit=crop&q=80' // Temple architecture
                        }
                        alt={destination.name}
                        sx={{
                          transition: 'transform 0.3s ease-in-out',
                        }}
                      />
                      <Box
                        className="overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          transition: 'background-color 0.3s ease-in-out',
                        }}
                      />
                      <CardContent
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          color: 'white',
                          p: 3,
                        }}
                      >
                        <Typography
                          variant="h5"
                          component="h3"
                          gutterBottom
                          sx={{ fontWeight: 700 }}
                        >
                          {destination.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: 2,
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                            color: 'white',
                          }}
                        >
                          {destination.description}
                        </Typography>
                        <Button
                          component={Link}
                          to={`/destinations/${destination.id}`}
                          variant="contained"
                          color="primary"
                          endIcon={<ArrowForwardIcon />}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          sx={{
                            borderRadius: '50px',
                            px: 3,
                            py: 1,
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            color: 'primary.main',
                            '&:hover': {
                              backgroundColor: 'white',
                            },
                          }}
                        >
                          Explore
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container>
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              component="h2"
              align="center"
              sx={{ mb: 6, fontWeight: 700 }}
            >
              Why Choose Us
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  icon: '🏆',
                  title: 'Local Expertise',
                  description: 'Our team has deep knowledge of Vizag and its surroundings, ensuring authentic experiences.'
                },
                {
                  icon: '✨',
                  title: 'Customized Tours',
                  description: 'Tailor-made experiences to match your preferences, schedule, and interests.'
                },
                {
                  icon: '🌟',
                  title: '24/7 Support',
                  description: 'Round-the-clock assistance for a worry-free journey throughout your trip.'
                }
              ].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={itemAnimation}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        height: '100%',
                        textAlign: 'center',
                        borderRadius: 4,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                        },
                      }}
                    >
                      <Typography variant="h2" sx={{ mb: 2 }}>{item.icon}</Typography>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.100' }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              component="h2"
              align="center"
              sx={{ mb: 6, fontWeight: 700 }}
            >
              What Our Travelers Say
            </Typography>

            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      p: 3,
                      boxShadow: 3,
                      '&:hover': {
                        boxShadow: 6,
                        transform: 'translateY(-4px)',
                        transition: 'all 0.3s'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{ width: 56, height: 56, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.location}
                        </Typography>
                      </Box>
                    </Box>
                    <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        flex: 1,
                        fontStyle: 'italic',
                        '&::before': {
                          content: '"""',
                          fontSize: '1.5em',
                          color: theme.palette.primary.main
                        },
                        '&::after': {
                          content: '"""',
                          fontSize: '1.5em',
                          color: theme.palette.primary.main
                        }
                      }}
                    >
                      {testimonial.comment}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Popular Activities Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              component="h2"
              align="center"
              sx={{ mb: 6, fontWeight: 700 }}
            >
              Popular Activities
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  icon: '🏖️',
                  title: 'Beach Activities',
                  description: 'Enjoy water sports, sunbathing, and scenic walks along Vizag\'s beautiful beaches'
                },
                {
                  icon: '🏃',
                  title: 'Hill Trekking',
                  description: 'Explore scenic trails and viewpoints in the Eastern Ghats mountain ranges'
                },
                {
                  icon: '🏛️',
                  title: 'Cultural Tours',
                  description: 'Visit temples, museums, and local markets to experience the rich culture'
                },
                {
                  icon: '🍜',
                  title: 'Food Tours',
                  description: 'Taste local delicacies and authentic Andhra cuisine at the best spots'
                }
              ].map((activity, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={itemAnimation}>
                    <Card
                      sx={{
                        height: '100%',
                        borderRadius: 4,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                        },
                      }}
                    >
                      <CardContent sx={{ textAlign: 'center', p: 4 }}>
                        <Typography variant="h2" sx={{ mb: 2 }}>{activity.icon}</Typography>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                          {activity.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {activity.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Instagram Feed Section */}
      <Box sx={{ py: 8, backgroundColor: 'grey.100' }}>
        <Container>
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontWeight: 700, mb: 2 }}
              >
                Follow Us on Instagram
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: 'auto' }}
              >
                Stay updated with our latest adventures and travel stories
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {[
                {
                  category: 'vizag-beach-sunset',
                  link: 'https://www.instagram.com/vizagtourism/',
                  image: 'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?auto=format&fit=crop&q=80'
                },
                {
                  category: 'araku-valley-view',
                  link: 'https://www.instagram.com/vizagtourism/',
                  image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80'
                },
                {
                  category: 'vizag-food',
                  link: 'https://www.instagram.com/vizagtourism/',
                  image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80'
                },
                {
                  category: 'temple-architecture',
                  link: 'https://www.instagram.com/vizagtourism/',
                  image: 'https://images.unsplash.com/photo-1545893835-abaa50cbe628?auto=format&fit=crop&q=80'
                },
                {
                  category: 'beach-activities',
                  link: 'https://www.instagram.com/vizagtourism/',
                  image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&q=80'
                },
                {
                  category: 'local-culture',
                  link: 'https://www.instagram.com/vizagtourism/',
                  image: 'https://images.unsplash.com/photo-1604873753438-d45f3384c49e?auto=format&fit=crop&q=80'
                },
                {
                  category: 'night-city',
                  link: 'https://www.instagram.com/vizagtourism/',
                  image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&q=80'
                },
                {
                  category: 'nature-trek',
                  link: 'https://www.instagram.com/vizagtourism/',
                  image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80'
                }
              ].map((item, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <motion.div variants={itemAnimation}>
                    <Box
                      onClick={() => window.open(item.link, '_blank')}
                      sx={{
                        position: 'relative',
                        paddingTop: '100%',
                        backgroundColor: 'grey.300',
                        borderRadius: 2,
                        overflow: 'hidden',
                        cursor: 'pointer',
                        '&:hover': {
                          '& .overlay': {
                            opacity: 1
                          },
                          '& img': {
                            transform: 'scale(1.1)'
                          }
                        }
                      }}
                    >
                      <Box
                        component="img"
                        src={item.image}
                        alt={`Instagram - ${item.category}`}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease-in-out'
                        }}
                      />
                      <Box
                        className="overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.3s ease-in-out'
                        }}
                      >
                        <InstagramIcon sx={{ color: 'white', fontSize: 40 }} />
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Newsletter Section */}
      <Box sx={{ py: 8, backgroundColor: 'grey.100' }}>
        <Container maxWidth="md">
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Paper
              sx={{
                p: { xs: 4, md: 6 },
                textAlign: 'center',
                borderRadius: 4,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                color: 'white',
                boxShadow: theme.shadows[10]
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  color: 'white'
                }}
              >
                Get Travel Updates
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  color: 'white'
                }}
              >
                Subscribe to our newsletter for exclusive deals and travel tips
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubscribe}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  maxWidth: 600,
                  mx: 'auto'
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Enter your email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    bgcolor: 'white',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { border: 'none' }
                    }
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    bgcolor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: 'grey.100'
                    },
                    minWidth: { xs: '100%', sm: '150px' }
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Paper>
          </motion.div>
        </Container>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
          Ready to Start Your Journey?
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Let us help you plan your perfect Vizag adventure. Contact us now and get started!
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/contact"
          sx={{
            px: 6,
            py: 2,
            borderRadius: 50,
            fontSize: '1.1rem'
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
