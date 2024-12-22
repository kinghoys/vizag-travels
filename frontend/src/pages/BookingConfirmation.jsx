import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { format } from 'date-fns';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const BookingConfirmation = () => {
  const { activeBooking } = useBooking();
  const navigate = useNavigate();

  if (!activeBooking || activeBooking.status !== 'confirmed') {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error">
          No confirmed booking found. Please start a new booking.
        </Alert>
        <Button
          variant="contained"
          onClick={() => navigate('/packages')}
          sx={{ mt: 2 }}
        >
          View Packages
        </Button>
      </Container>
    );
  }

  const { packageDetails, travelDetails, personalDetails, bookingId } = activeBooking;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <CheckCircleOutlineIcon
            color="success"
            sx={{ fontSize: 64, mb: 2 }}
          />
          <Typography variant="h4" gutterBottom>
            Booking Confirmed!
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Your booking ID is: {bookingId}
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Package Details
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Package"
                secondary={packageDetails.name}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Destination"
                secondary={packageDetails.destination}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Travel Dates"
                secondary={`${format(new Date(travelDetails.startDate), 'MMM dd, yyyy')} - ${format(new Date(travelDetails.endDate), 'MMM dd, yyyy')}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Travelers"
                secondary={`${travelDetails.adults} Adults, ${travelDetails.children} Children`}
              />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Name"
                secondary={`${personalDetails.firstName} ${personalDetails.lastName}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Email"
                secondary={personalDetails.email}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Phone"
                secondary={personalDetails.phone}
              />
            </ListItem>
          </List>
        </Box>

        <Alert severity="info" sx={{ mb: 4 }}>
          A confirmation email has been sent to {personalDetails.email} with your booking details.
        </Alert>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="outlined"
            onClick={() => navigate('/my-bookings')}
          >
            View My Bookings
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate('/')}
          >
            Return to Home
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default BookingConfirmation;
