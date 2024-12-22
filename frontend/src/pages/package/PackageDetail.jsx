import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  Grid,
  Paper,
  Divider,
  useTheme,
  alpha,
  ListItemIcon
} from '@mui/material';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';
import FlagIcon from '@mui/icons-material/Flag';
import PersonIcon from '@mui/icons-material/Person';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { packages } from '../../data/packages';
import BookingDialog from '../../components/BookingDialog';

const PackageDetail = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();
  const { setActiveBooking } = useBooking();
  const [openBooking, setOpenBooking] = React.useState(false);
  const [expandedDay, setExpandedDay] = React.useState(1);

  const packageData = packages.find(p => p.id === id);
  if (!packageData) return null;

  const handleBookNow = () => {
    setOpenBooking(true);
  };

  const toggleDay = (dayNumber) => {
    setExpandedDay(expandedDay === dayNumber ? null : dayNumber);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section with Main Image */}
        <Paper 
          component={motion.div}
          variants={itemVariants}
          sx={{ 
            bgcolor: 'grey.900',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${packageData.images.main})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            p: { xs: 3, md: 6 },
            mb: 4,
            borderRadius: 2,
            position: 'relative',
            overflow: 'hidden',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 60%)',
            }
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h3" gutterBottom sx={{ 
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
              {packageData.name}
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 4, 
              color: 'grey.100',
              '& > *': {
                flex: '1 1 auto',
                minWidth: { xs: '100%', sm: 'auto' }
              }
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccessTimeIcon />
                <Typography>{packageData.duration}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <GroupIcon />
                <Typography>{packageData.groupSize}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <DirectionsCarIcon />
                <Typography>{packageData.transportation}</Typography>
              </Box>
            </Box>
          </Box>
        </Paper>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {/* Image Gallery */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ 
                  color: theme.palette.primary.main,
                  fontWeight: 'bold',
                  mb: 3
                }}>
                  Gallery
                </Typography>
                <Grid container spacing={2}>
                  {packageData.images.gallery.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Paper 
                        elevation={0}
                        sx={{ 
                          borderRadius: 2,
                          overflow: 'hidden',
                          height: '100%',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: `0 8px 20px ${alpha(theme.palette.grey[900], 0.15)}`
                          }
                        }}
                      >
                        <Box sx={{ position: 'relative' }}>
                          <img 
                            src={image.url} 
                            alt={image.title}
                            style={{
                              width: '100%',
                              height: '200px',
                              objectFit: 'cover'
                            }}
                          />
                          <Box sx={{ 
                            p: 2,
                            bgcolor: 'white'
                          }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                              {image.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {image.description}
                            </Typography>
                          </Box>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>

            {/* About Section */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ 
                  color: theme.palette.primary.main,
                  fontWeight: 'bold'
                }}>
                  About This Package
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {packageData.description}
                </Typography>
              </Box>
            </motion.div>

            {/* Package Highlights */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ 
                  color: theme.palette.primary.main,
                  fontWeight: 'bold'
                }}>
                  Package Highlights
                </Typography>
                <Grid container spacing={2}>
                  {packageData.highlights.map((highlight, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1,
                        p: 1.5,
                        bgcolor: alpha(theme.palette.primary.main, 0.04),
                        borderRadius: 1,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: alpha(theme.palette.primary.main, 0.08),
                          transform: 'translateX(8px)'
                        }
                      }}>
                        <CheckCircleIcon sx={{ color: theme.palette.primary.main }} fontSize="small" />
                        <Typography>{highlight}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>

            {/* What's Included Section */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ 
                  color: theme.palette.primary.main,
                  fontWeight: 'bold'
                }}>
                  What's Included
                </Typography>
                <Grid container spacing={2}>
                  {[
                    { icon: <RestaurantIcon />, title: 'Meals' },
                    { icon: <HotelIcon />, title: 'Accommodation' },
                    { icon: <DirectionsCarIcon />, title: 'Transportation' },
                    { icon: <FlagIcon />, title: 'Sightseeing' },
                    { icon: <PersonIcon />, title: 'Guide' },
                    { icon: <CameraAltIcon />, title: 'Activities' }
                  ].map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Paper 
                        elevation={0} 
                        sx={{ 
                          p: 2, 
                          border: '1px solid',
                          borderColor: 'grey.200',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: theme.palette.primary.main,
                            bgcolor: alpha(theme.palette.primary.main, 0.02),
                            transform: 'translateY(-4px)'
                          }
                        }}
                      >
                        <Box sx={{ 
                          color: 'white',
                          bgcolor: theme.palette.primary.main,
                          p: 1,
                          borderRadius: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                            {item.title}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <CheckCircleIcon sx={{ color: 'success.main' }} fontSize="small" />
                            <Typography color="text.secondary">Included</Typography>
                          </Box>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>

            {/* Additional Information */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ 
                  color: theme.palette.primary.main,
                  fontWeight: 'bold'
                }}>
                  Additional Information
                </Typography>
                <Grid container spacing={3}>
                  {/* Best Time to Visit */}
                  <Grid item xs={12} sm={6}>
                    <Paper sx={{ 
                      p: 2,
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'grey.200',
                      borderRadius: 2
                    }}>
                      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'medium' }}>
                        Best Time to Visit
                      </Typography>
                      <Typography color="text.secondary">
                        {packageData.additionalInfo.bestTimeToVisit}
                      </Typography>
                    </Paper>
                  </Grid>

                  {/* Difficulty */}
                  <Grid item xs={12} sm={6}>
                    <Paper sx={{ 
                      p: 2,
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'grey.200',
                      borderRadius: 2
                    }}>
                      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'medium' }}>
                        Difficulty Level
                      </Typography>
                      <Typography color="text.secondary">
                        {packageData.additionalInfo.difficulty}
                      </Typography>
                    </Paper>
                  </Grid>

                  {/* Things to Carry */}
                  <Grid item xs={12}>
                    <Paper sx={{ 
                      p: 2,
                      border: '1px solid',
                      borderColor: 'grey.200',
                      borderRadius: 2
                    }}>
                      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'medium' }}>
                        Things to Carry
                      </Typography>
                      <Grid container spacing={2}>
                        {packageData.additionalInfo.thingsToCarry.map((item, index) => (
                          <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box sx={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: 1,
                              color: 'text.secondary'
                            }}>
                              <CheckCircleIcon fontSize="small" color="primary" />
                              <Typography>{item}</Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Paper>
                  </Grid>

                  {/* Package Highlights */}
                  {packageData.additionalInfo.highlights && (
                    <Grid item xs={12}>
                      <Paper sx={{ 
                        p: 2,
                        border: '1px solid',
                        borderColor: 'grey.200',
                        borderRadius: 2
                      }}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'medium' }}>
                          Package Highlights
                        </Typography>
                        <Grid container spacing={3}>
                          {Object.entries(packageData.additionalInfo.highlights).map(([category, items]) => (
                            <Grid item xs={12} sm={4} key={category}>
                              <Typography variant="subtitle2" color="primary" gutterBottom sx={{ 
                                textTransform: 'capitalize',
                                fontWeight: 'medium'
                              }}>
                                {category}
                              </Typography>
                              <List dense disablePadding>
                                {items.map((item, index) => (
                                  <ListItem key={index} sx={{ py: 0.5 }}>
                                    <ListItemIcon sx={{ minWidth: 32 }}>
                                      <FiberManualRecordIcon sx={{ fontSize: 8, color: 'primary.main' }} />
                                    </ListItemIcon>
                                    <ListItemText 
                                      primary={item} 
                                      primaryTypographyProps={{ 
                                        variant: 'body2',
                                        color: 'text.secondary'
                                      }} 
                                    />
                                  </ListItem>
                                ))}
                              </List>
                            </Grid>
                          ))}
                        </Grid>
                      </Paper>
                    </Grid>
                  )}
                </Grid>
              </Box>
            </motion.div>

            {/* Itinerary */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ 
                  color: theme.palette.primary.main,
                  fontWeight: 'bold'
                }}>
                  Itinerary
                </Typography>
                {packageData.itinerary.map((day) => (
                  <Paper 
                    key={day.day}
                    sx={{ 
                      mb: 2, 
                      overflow: 'hidden',
                      border: '1px solid',
                      borderColor: expandedDay === day.day ? theme.palette.primary.main : 'grey.200',
                      borderRadius: 2,
                      boxShadow: expandedDay === day.day ? `0 4px 20px ${alpha(theme.palette.primary.main, 0.15)}` : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Button
                      fullWidth
                      onClick={() => toggleDay(day.day)}
                      sx={{
                        justifyContent: 'space-between',
                        p: 2,
                        color: expandedDay === day.day ? theme.palette.primary.main : 'text.primary',
                        bgcolor: expandedDay === day.day ? alpha(theme.palette.primary.main, 0.04) : 'transparent',
                        '&:hover': {
                          bgcolor: expandedDay === day.day 
                            ? alpha(theme.palette.primary.main, 0.08)
                            : 'grey.50'
                        }
                      }}
                    >
                      <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                        Day {day.day}: {day.title}
                      </Typography>
                      {expandedDay === day.day ? 
                        <KeyboardArrowUpIcon /> : 
                        <KeyboardArrowDownIcon />
                      }
                    </Button>
                    <motion.div
                      initial={false}
                      animate={{ height: expandedDay === day.day ? 'auto' : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <Box sx={{ p: 2, pt: 0 }}>
                        <List>
                          {day.activities.map((activity, index) => (
                            <ListItem key={index} sx={{ 
                              py: 0.5,
                              pl: 2,
                              position: 'relative',
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: '50%',
                                width: 4,
                                height: 4,
                                borderRadius: '50%',
                                bgcolor: theme.palette.primary.main,
                                transform: 'translateY(-50%)'
                              }
                            }}>
                              <Typography variant="body2">
                                {activity}
                              </Typography>
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </motion.div>
                  </Paper>
                ))}
              </Box>
            </motion.div>

            {/* Location Section */}
            {packageData.location && (
              <motion.div variants={itemVariants}>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" gutterBottom sx={{ 
                    color: theme.palette.primary.main,
                    fontWeight: 'bold'
                  }}>
                    Location
                  </Typography>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      borderRadius: 2,
                      overflow: 'hidden',
                      border: '1px solid',
                      borderColor: 'grey.200'
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      {packageData.location.mapImage && (
                        <img 
                          src={packageData.location.mapImage} 
                          alt={`Map of ${packageData.location.name}`}
                          style={{
                            width: '100%',
                            height: '300px',
                            objectFit: 'cover'
                          }}
                        />
                      )}
                      {packageData.location.coordinates && (
                        <Button
                          variant="contained"
                          startIcon={<MapIcon />}
                          component="a"
                          href={`https://www.google.com/maps/search/?api=1&query=${packageData.location.coordinates.lat},${packageData.location.coordinates.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ 
                            position: 'absolute',
                            bottom: 16,
                            right: 16,
                            bgcolor: 'white',
                            color: 'primary.main',
                            '&:hover': {
                              bgcolor: 'grey.100'
                            }
                          }}
                        >
                          View on Google Maps
                        </Button>
                      )}
                    </Box>
                    <Box sx={{ p: 3 }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" gutterBottom>
                          {packageData.location.name}
                        </Typography>
                        {packageData.location.coordinates && (
                          <Typography color="text.secondary">
                            Coordinates: {packageData.location.coordinates.lat}, {packageData.location.coordinates.lng}
                          </Typography>
                        )}
                      </Box>
                      {packageData.location.landmarks && packageData.location.landmarks.length > 0 && (
                        <>
                          <Divider sx={{ my: 2 }} />
                          <Typography variant="h6" gutterBottom>
                            Key Landmarks
                          </Typography>
                          <Grid container spacing={2}>
                            {packageData.location.landmarks.map((landmark, index) => (
                              <Grid item xs={12} sm={6} key={index}>
                                <Box sx={{ 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  gap: 1,
                                  p: 1,
                                  borderRadius: 1,
                                  bgcolor: alpha(theme.palette.primary.main, 0.04),
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                                    transform: 'translateX(8px)'
                                  }
                                }}>
                                  <LocationOnIcon fontSize="small" color="primary" />
                                  <Typography>{landmark}</Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </>
                      )}
                    </Box>
                  </Paper>
                </Box>
              </motion.div>
            )}
          </Grid>

          {/* Right Sidebar */}
          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Paper sx={{ 
                p: 3, 
                position: 'sticky', 
                top: 24,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'grey.200',
                bgcolor: 'white',
                boxShadow: `0 4px 20px ${alpha(theme.palette.grey[900], 0.08)}`
              }}>
                <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
                  ₹{packageData.price.toLocaleString()}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  per person
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Duration
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    {packageData.duration}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Group Size
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    {packageData.groupSize}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Transportation
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    {packageData.transportation}
                  </Typography>
                </Box>

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

                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/contact')}
                  sx={{ 
                    py: 2,
                    px: 6,
                    borderRadius: 2,
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    '&:hover': {
                      borderColor: theme.palette.primary.dark,
                      bgcolor: alpha(theme.palette.primary.main, 0.04)
                    }
                  }}
                >
                  Contact Us
                </Button>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
      <BookingDialog
        open={openBooking}
        onClose={() => setOpenBooking(false)}
        packageData={packageData}
      />
    </Container>
  );
};

export default PackageDetail;
