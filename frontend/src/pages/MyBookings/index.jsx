import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Chip,
  Button,
  Stack,
  Divider,
  useTheme,
  Tab,
  Tabs,
  alpha,
  IconButton,
  Tooltip,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';
import { format } from 'date-fns';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import BookingTracker from '../../components/BookingTracker';
import InfoIcon from '@mui/icons-material/Info';
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';

const MyBookings = () => {
  const theme = useTheme();
  const { getBookings } = useBooking();
  const [tabValue, setTabValue] = useState(0);
  const bookings = getBookings();

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const filteredBookings = bookings.filter(booking => {
    if (tabValue === 0) return true; // All bookings
    if (tabValue === 1) return ['confirmed', 'preparing', 'ready'].includes(booking.status.toLowerCase()); // Upcoming
    if (tabValue === 2) return ['started', 'completed'].includes(booking.status.toLowerCase()); // Past
  });

  if (bookings.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            sx={{
              textAlign: 'center',
              py: 8,
              px: 4,
              bgcolor: 'background.paper',
              borderRadius: 3,
              boxShadow: theme.shadows[2],
            }}
          >
            <Box
              component="img"
              src="/images/no-bookings.svg"
              alt="No bookings"
              sx={{ width: '200px', mb: 4 }}
            />
            <Typography variant="h5" gutterBottom color="text.secondary">
              No Bookings Found
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              You haven't made any bookings yet. Start planning your next adventure!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="/"
              size="large"
              sx={{
                mt: 2,
                borderRadius: 2,
                textTransform: 'none',
                px: 4,
                py: 1.5,
              }}
            >
              Explore Packages
            </Button>
          </Paper>
        </motion.div>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
      >
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            My Bookings
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            View and manage your travel bookings
          </Typography>

          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{
              mb: 4,
              '& .MuiTab-root': {
                textTransform: 'none',
                minWidth: 100,
              },
            }}
          >
            <Tab 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>All Bookings</Typography>
                  <Chip 
                    label={bookings.length} 
                    size="small" 
                    sx={{ ml: 1, height: 20 }} 
                  />
                </Box>
              }
            />
            <Tab 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>Upcoming</Typography>
                  <Chip 
                    label={bookings.filter(b => ['confirmed', 'preparing', 'ready'].includes(b.status.toLowerCase())).length} 
                    size="small" 
                    sx={{ ml: 1, height: 20 }} 
                  />
                </Box>
              }
            />
            <Tab 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>Past</Typography>
                  <Chip 
                    label={bookings.filter(b => ['started', 'completed'].includes(b.status.toLowerCase())).length} 
                    size="small" 
                    sx={{ ml: 1, height: 20 }} 
                  />
                </Box>
              }
            />
          </Tabs>
        </Box>

        <AnimatePresence mode="wait">
          <Grid container spacing={3}>
            {filteredBookings.map((booking, index) => (
              <Grid item xs={12} key={booking.bookingId}>
                <motion.div 
                  variants={itemAnimation}
                  layout
                >
                  <Paper
                    elevation={2}
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    <Box sx={{ p: 3 }}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                          <Box
                            component="img"
                            src={booking.packageDetails?.image || "/images/placeholder.jpg"}
                            alt={booking.packageDetails?.name}
                            sx={{
                              width: '100%',
                              height: 250,
                              objectFit: 'cover',
                              borderRadius: 2,
                            }}
                          />
                          <Stack 
                            direction="row" 
                            spacing={1} 
                            sx={{ 
                              mt: 2,
                              justifyContent: 'center'
                            }}
                          >
                            <Tooltip title="Download Itinerary">
                              <IconButton 
                                size="small"
                                sx={{ 
                                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                                  '&:hover': {
                                    bgcolor: alpha(theme.palette.primary.main, 0.2),
                                  }
                                }}
                              >
                                <DownloadIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Share Booking">
                              <IconButton 
                                size="small"
                                sx={{ 
                                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                                  '&:hover': {
                                    bgcolor: alpha(theme.palette.primary.main, 0.2),
                                  }
                                }}
                              >
                                <ShareIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Booking Details">
                              <IconButton 
                                size="small"
                                sx={{ 
                                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                                  '&:hover': {
                                    bgcolor: alpha(theme.palette.primary.main, 0.2),
                                  }
                                }}
                              >
                                <InfoIcon />
                              </IconButton>
                            </Tooltip>
                          </Stack>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <Box sx={{ height: '100%' }}>
                            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                              <Box>
                                <Typography variant="h5" gutterBottom fontWeight="bold">
                                  {booking.packageDetails?.name}
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                  <Chip
                                    label={booking.status.toUpperCase()}
                                    color={
                                      booking.status === 'confirmed' ? 'info' :
                                      booking.status === 'preparing' ? 'warning' :
                                      booking.status === 'ready' ? 'success' :
                                      booking.status === 'started' ? 'primary' :
                                      'default'
                                    }
                                    size="small"
                                  />
                                  <Chip
                                    label={`Booking ID: ${booking.bookingId}`}
                                    variant="outlined"
                                    size="small"
                                    icon={<ConfirmationNumberIcon />}
                                  />
                                </Stack>
                              </Box>
                            </Box>

                            <BookingTracker status={booking.status} />

                            <Box sx={{ mt: 3 }}>
                              <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                  <Paper
                                    elevation={0}
                                    sx={{
                                      p: 2,
                                      bgcolor: alpha(theme.palette.primary.main, 0.03),
                                      borderRadius: 2,
                                    }}
                                  >
                                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                      Personal Details
                                    </Typography>
                                    <Stack spacing={1}>
                                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <PersonIcon color="action" />
                                        <Typography variant="body2">
                                          {booking.personalDetails.name}
                                        </Typography>
                                      </Box>
                                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <EmailIcon color="action" />
                                        <Typography variant="body2">
                                          {booking.personalDetails.email}
                                        </Typography>
                                      </Box>
                                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <PhoneIcon color="action" />
                                        <Typography variant="body2">
                                          {booking.personalDetails.phone}
                                        </Typography>
                                      </Box>
                                    </Stack>
                                  </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                  <Paper
                                    elevation={0}
                                    sx={{
                                      p: 2,
                                      bgcolor: alpha(theme.palette.primary.main, 0.03),
                                      borderRadius: 2,
                                    }}
                                  >
                                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                      Travel Details
                                    </Typography>
                                    <Stack spacing={1}>
                                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <EventIcon color="action" />
                                        <Typography variant="body2">
                                          {format(new Date(booking.travelDetails.date), 'MMM dd, yyyy')}
                                        </Typography>
                                      </Box>
                                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <GroupIcon color="action" />
                                        <Typography variant="body2">
                                          {booking.travelDetails.numberOfPeople} {booking.travelDetails.numberOfPeople === 1 ? 'Person' : 'People'}
                                        </Typography>
                                      </Box>
                                    </Stack>
                                  </Paper>
                                </Grid>
                              </Grid>

                              {booking.travelDetails.specialRequests && (
                                <Paper
                                  elevation={0}
                                  sx={{
                                    p: 2,
                                    mt: 2,
                                    bgcolor: alpha(theme.palette.primary.main, 0.03),
                                    borderRadius: 2,
                                  }}
                                >
                                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                    Special Requests
                                  </Typography>
                                  <Typography variant="body2">
                                    {booking.travelDetails.specialRequests}
                                  </Typography>
                                </Paper>
                              )}
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};

export default MyBookings;
