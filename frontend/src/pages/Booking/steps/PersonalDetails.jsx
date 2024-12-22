import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { useAuth } from '../../../context/AuthContext';
import { useBooking } from '../../../context/BookingContext';

const PersonalDetails = () => {
  const { user } = useAuth();
  const { activeBooking, updateBookingDetails } = useBooking();
  const [useProfileData, setUseProfileData] = useState(true);
  const [personalData, setPersonalData] = useState({
    firstName: activeBooking?.personalDetails?.firstName || user?.firstName || '',
    lastName: activeBooking?.personalDetails?.lastName || user?.lastName || '',
    email: activeBooking?.personalDetails?.email || user?.email || '',
    phone: activeBooking?.personalDetails?.phone || user?.phone || '',
    address: activeBooking?.personalDetails?.address || '',
    city: activeBooking?.personalDetails?.city || '',
    country: activeBooking?.personalDetails?.country || '',
    postalCode: activeBooking?.personalDetails?.postalCode || '',
  });

  useEffect(() => {
    if (useProfileData && user) {
      setPersonalData(prev => ({
        ...prev,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || '',
      }));
      updateBookingDetails({
        personalDetails: {
          ...prev,
          firstName: user.firstName || '',
          lastName: user.lastName || '',
          email: user.email || '',
          phone: user.phone || '',
        },
      });
    }
  }, [useProfileData, user]);

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setPersonalData(prev => ({
      ...prev,
      [field]: value,
    }));
    updateBookingDetails({
      personalDetails: {
        ...activeBooking.personalDetails,
        [field]: value,
      },
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>

      {user && (
        <FormControlLabel
          control={
            <Checkbox
              checked={useProfileData}
              onChange={(e) => setUseProfileData(e.target.checked)}
            />
          }
          label="Use my profile information"
          sx={{ mb: 3 }}
        />
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="First Name"
            value={personalData.firstName}
            onChange={handleChange('firstName')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Last Name"
            value={personalData.lastName}
            onChange={handleChange('lastName')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Email"
            type="email"
            value={personalData.email}
            onChange={handleChange('email')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Phone"
            value={personalData.phone}
            onChange={handleChange('phone')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Address"
            value={personalData.address}
            onChange={handleChange('address')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="City"
            value={personalData.city}
            onChange={handleChange('city')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Country"
            value={personalData.country}
            onChange={handleChange('country')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Postal Code"
            value={personalData.postalCode}
            onChange={handleChange('postalCode')}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalDetails;
