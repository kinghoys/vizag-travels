import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useBooking } from '../../../context/BookingContext';

const TravelDetails = () => {
  const { activeBooking, updateBookingDetails } = useBooking();
  const [travelData, setTravelData] = useState({
    startDate: activeBooking?.travelDetails?.startDate || null,
    endDate: activeBooking?.travelDetails?.endDate || null,
    adults: activeBooking?.travelDetails?.adults || 1,
    children: activeBooking?.travelDetails?.children || 0,
    specialRequests: activeBooking?.travelDetails?.specialRequests || '',
  });

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setTravelData(prev => ({
      ...prev,
      [field]: value,
    }));
    updateBookingDetails({
      travelDetails: {
        ...activeBooking.travelDetails,
        [field]: value,
      },
    });
  };

  const handleDateChange = (field) => (date) => {
    setTravelData(prev => ({
      ...prev,
      [field]: date,
    }));
    updateBookingDetails({
      travelDetails: {
        ...activeBooking.travelDetails,
        [field]: date,
      },
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Travel Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <DatePicker
            label="Start Date"
            value={travelData.startDate}
            onChange={handleDateChange('startDate')}
            renderInput={(params) => <TextField {...params} fullWidth />}
            minDate={new Date()}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DatePicker
            label="End Date"
            value={travelData.endDate}
            onChange={handleDateChange('endDate')}
            renderInput={(params) => <TextField {...params} fullWidth />}
            minDate={travelData.startDate || new Date()}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Adults</InputLabel>
            <Select
              value={travelData.adults}
              label="Adults"
              onChange={handleChange('adults')}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Children</InputLabel>
            <Select
              value={travelData.children}
              label="Children"
              onChange={handleChange('children')}
            >
              {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Special Requests"
            multiline
            rows={4}
            value={travelData.specialRequests}
            onChange={handleChange('specialRequests')}
            placeholder="Any special requirements or preferences..."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TravelDetails;
