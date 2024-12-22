import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Alert,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { addDays } from 'date-fns';

const BookingForm = ({ open, onClose, packageDetails }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    date: null,
    specialRequests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', { ...formData, packageId: packageDetails.id });
    setSubmitted(true);
    
    // Reset form after 2 seconds and close dialog
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: 1,
        date: null,
        specialRequests: '',
      });
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Book {packageDetails?.name}
        <Typography variant="subtitle2" color="text.secondary">
          ₹{packageDetails?.price?.toLocaleString()} per person
        </Typography>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          {submitted ? (
            <Alert severity="success" sx={{ mb: 2 }}>
              Booking submitted successfully! We'll contact you soon.
            </Alert>
          ) : (
            <Stack spacing={3}>
              <TextField
                label="Full Name"
                required
                value={formData.name}
                onChange={handleChange('name')}
              />
              <TextField
                label="Email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange('email')}
              />
              <TextField
                label="Phone"
                required
                value={formData.phone}
                onChange={handleChange('phone')}
              />
              <FormControl>
                <InputLabel>Number of Guests</InputLabel>
                <Select
                  value={formData.guests}
                  label="Number of Guests"
                  onChange={handleChange('guests')}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <DatePicker
                label="Travel Date"
                value={formData.date}
                onChange={handleDateChange}
                minDate={addDays(new Date(), 1)}
                required
              />
              <TextField
                label="Special Requests"
                multiline
                rows={3}
                value={formData.specialRequests}
                onChange={handleChange('specialRequests')}
              />
            </Stack>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button 
            type="submit" 
            variant="contained" 
            disabled={submitted || !formData.name || !formData.email || !formData.phone || !formData.date}
          >
            Book Now
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BookingForm;
