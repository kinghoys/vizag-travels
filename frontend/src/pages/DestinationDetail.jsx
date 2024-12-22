import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Rating,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Button,
  Tab,
  Tabs,
  ImageList,
  ImageListItem,
  Stack,
  useTheme,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttractionsIcon from '@mui/icons-material/Attractions';
import DirectionsIcon from '@mui/icons-material/Directions';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import HotelIcon from '@mui/icons-material/Hotel';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { destinations } from '../data/destinations';
import { packages } from '../data/packages';
import BookingDialog from '../components/BookingDialog';

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);
  const [openBooking, setOpenBooking] = useState(false);
  const destination = destinations.find(d => d.id === id);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!destination) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Destination Not Found
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          The destination you're looking for doesn't exist.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" component={Link} to="/destinations">
            View All Destinations
          </Button>
        </Box>
      </Container>
    );
  }

  // Find related packages that include this destination
  const relatedPackages = packages.filter(pkg => 
    pkg.name.toLowerCase().includes(destination.name.toLowerCase()) ||
    pkg.description.toLowerCase().includes(destination.name.toLowerCase()) ||
    (pkg.destinations && pkg.destinations.includes(destination.name))
  );

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
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
    visible: { opacity: 1, y: 0 }
  };

  const weatherSection = destination.weather && (
    <Box sx={{ my: 4 }}>
      <Typography variant="h6" gutterBottom>
        Weather Information
      </Typography>
      <Grid container spacing={3}>
        {destination.weather.summer && (
          <Grid item xs={12} sm={4}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <WbSunnyIcon color="warning" sx={{ mr: 1 }} />
                <Typography variant="subtitle1">Summer</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {destination.weather.summer}
              </Typography>
            </Paper>
          </Grid>
        )}
        {destination.weather.winter && (
          <Grid item xs={12} sm={4}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <AcUnitIcon color="info" sx={{ mr: 1 }} />
                <Typography variant="subtitle1">Winter</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {destination.weather.winter}
              </Typography>
            </Paper>
          </Grid>
        )}
        {destination.weather.monsoon && (
          <Grid item xs={12} sm={4}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <UmbrellaIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="subtitle1">Monsoon</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {destination.weather.monsoon}
              </Typography>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Box>
  );

  const relatedPackagesSection = relatedPackages.length > 0 && (
    <Box sx={{ my: 4 }}>
      <Typography variant="h6" gutterBottom>
        Related Packages
      </Typography>
      <Grid container spacing={3}>
        {relatedPackages.slice(0, 3).map((pkg, index) => (
          <Grid item xs={12} sm={6} md={4} key={pkg.id}>
            <Card 
              component={Link} 
              to={`/package/${pkg.id}`}
              sx={{ 
                height: '100%',
                textDecoration: 'none',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={pkg.image || `https://source.unsplash.com/random/?${pkg.name.toLowerCase()}`}
                alt={pkg.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h3">
                  {pkg.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {pkg.duration}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="h6" color="primary">
                    ₹{pkg.price?.toLocaleString()}
                  </Typography>
                  <Chip 
                    label="View Details" 
                    size="small" 
                    color="primary" 
                    variant="outlined"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {relatedPackages.length > 3 && (
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button
                variant="outlined"
                component={Link}
                to="/packages"
                state={{ destination: destination.name }}
              >
                View All {relatedPackages.length} Packages
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );

  const thingsToSeeSection = destination.thingsToSee && destination.thingsToSee.length > 0 && (
    <Grid container spacing={4}>
      {destination.thingsToSee.map((place, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <motion.div variants={itemAnimation}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {place.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {place.description}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Stack spacing={1}>
                  {place.timings && (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTimeIcon sx={{ fontSize: '1rem', color: 'primary.main', mr: 0.5 }} />
                      <Typography variant="body2" color="text.secondary">
                        {place.timings}
                      </Typography>
                    </Box>
                  )}
                  {place.entryFee && (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CurrencyRupeeIcon sx={{ fontSize: '1rem', color: 'primary.main', mr: 0.5 }} />
                      <Typography variant="body2" color="text.secondary">
                        {place.entryFee}
                      </Typography>
                    </Box>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );

  const howToReachSection = destination.howToReach && (
    <Grid container spacing={4}>
      <Grid item xs={12} md={8}>
        <motion.div variants={itemAnimation}>
          <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.default' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <DirectionsIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">Transportation Options</Typography>
            </Box>
            <Stack spacing={2}>
              {Object.entries(destination.howToReach).map(([mode, info], index) => (
                <Accordion key={index} elevation={0}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1">
                      By {mode.replace('by', '').trim()}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="text.secondary">
                      {info}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </Paper>
        </motion.div>
      </Grid>
    </Grid>
  );

  const handleBookNow = () => {
    setOpenBooking(true);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '300px', md: '500px' },
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={destination.images[0]}
          alt={destination.name}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <Container sx={{ pb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              component="h1"
              color="white"
              gutterBottom
              sx={{
                fontSize: { xs: '2rem', md: '3.5rem' },
                fontWeight: 700,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              {destination.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'white' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ mr: 0.5 }} />
                <Typography variant="h6">{destination.distance}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Rating value={destination.rating} precision={0.5} readOnly sx={{ color: 'white' }} />
                <Typography variant="h6" sx={{ ml: 1 }}>
                  ({destination.reviews} reviews)
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Content Section */}
      <Container sx={{ py: 6 }}>
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
        >
          {/* Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
            >
              <Tab label="Overview" />
              <Tab label="Gallery" />
              <Tab label="Activities" />
              <Tab label="Places to Visit" />
              <Tab label="How to Reach" />
              <Tab label="Stay & Tips" />
            </Tabs>
          </Box>

          {/* Overview Tab */}
          <Box role="tabpanel" hidden={tabValue !== 0}>
            {tabValue === 0 && (
              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  <motion.div variants={itemAnimation}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      About {destination.name}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      paragraph 
                      sx={{ 
                        color: 'text.secondary',
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {destination.detailedDescription || destination.description}
                    </Typography>

                    <Box sx={{ my: 4 }}>
                      <Typography variant="h6" gutterBottom>
                        Highlights
                      </Typography>
                      <Grid container spacing={1}>
                        {destination.highlights?.map((highlight, index) => (
                          <Grid item key={index}>
                            <Chip
                              label={highlight}
                              sx={{
                                bgcolor: 'primary.light',
                                color: 'white',
                                '&:hover': { bgcolor: 'primary.main' },
                              }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    {weatherSection}
                    {relatedPackagesSection}

                    <Box sx={{ my: 4 }}>
                      <Typography variant="h6" gutterBottom>
                        Quick Info
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <CalendarMonthIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="Best Time to Visit"
                            secondary={destination.bestTimeToVisit}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <LocationOnIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="Distance"
                            secondary={destination.distance}
                          />
                        </ListItem>
                      </List>
                    </Box>

                    <Box sx={{ my: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <TipsAndUpdatesIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="h6">Travel Tips</Typography>
                      </Box>
                      <List>
                        {destination.tips?.map((tip, index) => (
                          <ListItem key={index}>
                            <ListItemText
                              primary={tip}
                              sx={{
                                '& .MuiListItemText-primary': {
                                  fontSize: '0.9rem',
                                  color: 'text.secondary',
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <motion.div variants={itemAnimation}>
                    <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.default' }}>
                      <Typography variant="h6" gutterBottom>
                        Quick Info
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <CalendarMonthIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="Best Time to Visit"
                            secondary={destination.bestTimeToVisit}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <LocationOnIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="Distance"
                            secondary={destination.distance}
                          />
                        </ListItem>
                      </List>
                    </Paper>

                    <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.default', mt: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <TipsAndUpdatesIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="h6">Travel Tips</Typography>
                      </Box>
                      <List>
                        {destination.tips?.map((tip, index) => (
                          <ListItem key={index}>
                            <ListItemText
                              primary={tip}
                              sx={{
                                '& .MuiListItemText-primary': {
                                  fontSize: '0.9rem',
                                  color: 'text.secondary',
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Paper>
                  </motion.div>
                </Grid>
              </Grid>
            )}
          </Box>

          {/* Gallery Tab */}
          <Box role="tabpanel" hidden={tabValue !== 1}>
            {tabValue === 1 && (
              <motion.div variants={itemAnimation}>
                <ImageList
                  variant="quilted"
                  cols={isMobile ? 1 : 3}
                  gap={16}
                >
                  {destination.images?.map((image, index) => (
                    <ImageListItem 
                      key={index}
                      cols={index === 0 ? 2 : 1}
                      rows={index === 0 ? 2 : 1}
                    >
                      <img
                        src={image}
                        alt={`${destination.name} - Image ${index + 1}`}
                        loading="lazy"
                        style={{
                          borderRadius: '8px',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </motion.div>
            )}
          </Box>

          {/* Activities Tab */}
          <Box role="tabpanel" hidden={tabValue !== 2}>
            {tabValue === 2 && (
              <Grid container spacing={4}>
                {destination.activities?.map((activity, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <motion.div variants={itemAnimation}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="200"
                          image={activity.image}
                          alt={activity.name}
                        />
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            {activity.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" paragraph>
                            {activity.description}
                          </Typography>
                          <Stack spacing={2}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <AccessTimeIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
                                <Typography variant="body2" color="text.secondary">
                                  {activity.duration}
                                </Typography>
                              </Box>
                              <Typography variant="h6" color="primary.main">
                                {activity.price}
                              </Typography>
                            </Box>
                            <Divider />
                            <Box>
                              <Typography variant="subtitle2" gutterBottom>
                                Includes:
                              </Typography>
                              <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                {activity.includes?.map((item, idx) => (
                                  <Chip
                                    key={idx}
                                    label={item}
                                    size="small"
                                    variant="outlined"
                                    color="primary"
                                  />
                                ))}
                              </Stack>
                            </Box>
                          </Stack>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>

          {/* Places to Visit Tab */}
          <Box role="tabpanel" hidden={tabValue !== 3}>
            {tabValue === 3 && (
              thingsToSeeSection
            )}
          </Box>

          {/* How to Reach Tab */}
          <Box role="tabpanel" hidden={tabValue !== 4}>
            {tabValue === 4 && (
              howToReachSection
            )}
          </Box>

          {/* Stay & Tips Tab */}
          <Box role="tabpanel" hidden={tabValue !== 5}>
            {tabValue === 5 && (
              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  <motion.div variants={itemAnimation}>
                    <Typography variant="h6" gutterBottom>
                      Accommodation Options
                    </Typography>
                    <Grid container spacing={3}>
                      {destination.accommodation?.map((place, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                          <Card>
                            <CardContent>
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <HotelIcon color="primary" sx={{ mr: 1 }} />
                                <Typography variant="h6">
                                  {place.name}
                                </Typography>
                              </Box>
                              <Typography variant="subtitle2" color="primary.main" gutterBottom>
                                {place.type}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" gutterBottom>
                                Price Range: {place.priceRange}
                              </Typography>
                              <Divider sx={{ my: 2 }} />
                              <Typography variant="subtitle2" gutterBottom>
                                Amenities:
                              </Typography>
                              <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                {place.amenities?.map((amenity, idx) => (
                                  <Chip
                                    key={idx}
                                    label={amenity}
                                    size="small"
                                    variant="outlined"
                                  />
                                ))}
                              </Stack>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <motion.div variants={itemAnimation}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        bgcolor: 'primary.main',
                        color: 'white',
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="h6" gutterBottom>
                        Need Help Planning?
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 3 }}>
                        Contact us to plan your perfect trip to {destination.name}
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: 'white',
                          color: 'primary.main',
                          '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.9)',
                          },
                        }}
                        onClick={() => setContactOpen(true)}
                      >
                        Contact Us
                      </Button>
                    </Paper>
                  </motion.div>
                </Grid>
              </Grid>
            )}
          </Box>
        </motion.div>
      </Container>
      <Button
        variant="contained"
        size="large"
        onClick={handleBookNow}
        sx={{
          mt: 4,
          py: 2,
          px: 6,
          borderRadius: 2,
        }}
      >
        Book Now
      </Button>
      <BookingDialog
        open={openBooking}
        onClose={() => setOpenBooking(false)}
        packageData={{
          id: destination?.id,
          name: destination?.name,
          price: destination?.price,
          // other relevant destination details
        }}
      />
    </Box>
  );
};

export default DestinationDetail;
