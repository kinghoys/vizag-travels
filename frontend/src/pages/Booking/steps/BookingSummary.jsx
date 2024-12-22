import React from 'react';
import {
  Grid,
  Typography,
  Box,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useBooking } from '../../../context/BookingContext';
import { format } from 'date-fns';

const BookingSummary = () => {
  const { activeBooking } = useBooking();
  const { packageDetails, travelDetails, personalDetails, paymentDetails } = activeBooking;

  const calculateTotalPrice = () => {
    const basePrice = packageDetails.price || 0;
    const adults = travelDetails?.adults || 1;
    const children = travelDetails?.children || 0;
    const childPrice = basePrice * 0.5; // 50% of adult price for children
    return (basePrice * adults) + (childPrice * children);
  };

  const formatDate = (date) => {
    return date ? format(new Date(date), 'MMM dd, yyyy') : 'Not specified';
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Booking Summary
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Package Details
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Package Name"
                  secondary={packageDetails.name}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Duration"
                  secondary={packageDetails.duration}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Destination"
                  secondary={packageDetails.destination}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Travel Details
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Start Date"
                  secondary={formatDate(travelDetails?.startDate)}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="End Date"
                  secondary={formatDate(travelDetails?.endDate)}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Travelers"
                  secondary={`${travelDetails?.adults || 1} Adults, ${travelDetails?.children || 0} Children`}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Personal Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Name"
                      secondary={`${personalDetails?.firstName} ${personalDetails?.lastName}`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Email"
                      secondary={personalDetails?.email}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={6}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Phone"
                      secondary={personalDetails?.phone}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Address"
                      secondary={`${personalDetails?.address}, ${personalDetails?.city}, ${personalDetails?.country}`}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Payment Summary
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Payment Method"
                  secondary={paymentDetails?.method === 'card' ? 'Credit/Debit Card' : 
                           paymentDetails?.method === 'upi' ? 'UPI' : 'Net Banking'}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Base Price"
                  secondary={`₹${packageDetails.price}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Total Travelers"
                  secondary={`${travelDetails?.adults || 1} Adults, ${travelDetails?.children || 0} Children`}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <Typography variant="h6">
                  Total Amount: ₹{calculateTotalPrice()}
                </Typography>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingSummary;
