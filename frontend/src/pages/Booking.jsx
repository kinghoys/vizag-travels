import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  CircularProgress,
  Alert,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { packages } from '../data/packages';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const steps = ['Personal Details', 'Trip Details', 'Confirmation'];

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: null,
    numberOfPeople: '',
    specialRequests: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const packageId = searchParams.get('package');
    if (packageId) {
      const pkg = packages.find(p => p.id === packageId);
      setSelectedPackage(pkg);
    }
  }, [location]);

  const validateStep = () => {
    const newErrors = {};
    
    if (activeStep === 0) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.phone) newErrors.phone = 'Phone is required';
      else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
    }
    
    if (activeStep === 1) {
      if (!formData.date) newErrors.date = 'Date is required';
      if (!formData.numberOfPeople) newErrors.numberOfPeople = 'Number of people is required';
      else if (formData.numberOfPeople < 1) newErrors.numberOfPeople = 'Must be at least 1 person';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (activeStep === steps.length - 1) {
        handleSubmit();
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSuccessDialogOpen(true);
  };

  const handleSuccessClose = () => {
    setSuccessDialogOpen(false);
    navigate('/packages');
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Grid>
          </Grid>
        );

      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Trip Date"
                  value={formData.date}
                  onChange={(newValue) => setFormData({ ...formData, date: newValue })}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      error={!!errors.date}
                      helperText={errors.date}
                    />
                  )}
                  minDate={dayjs()}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Number of People"
                type="number"
                value={formData.numberOfPeople}
                onChange={(e) => setFormData({ ...formData, numberOfPeople: e.target.value })}
                error={!!errors.numberOfPeople}
                helperText={errors.numberOfPeople}
                InputProps={{ inputProps: { min: 1 } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Special Requests"
                multiline
                rows={4}
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              />
            </Grid>
          </Grid>
        );

      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Booking Summary
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  Package: {selectedPackage?.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Name: {formData.name}</Typography>
                <Typography>Email: {formData.email}</Typography>
                <Typography>Phone: {formData.phone}</Typography>
                <Typography>
                  Date: {formData.date ? dayjs(formData.date).format('DD/MM/YYYY') : ''}
                </Typography>
                <Typography>Number of People: {formData.numberOfPeople}</Typography>
                {formData.specialRequests && (
                  <Typography>Special Requests: {formData.specialRequests}</Typography>
                )}
              </Grid>
            </Grid>
          </Box>
        );

      default:
        return null;
    }
  };

  if (!selectedPackage) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error">
          No package selected. Please select a package first.
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Book Your Trip
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" color="primary">
            {selectedPackage.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Duration: {selectedPackage.duration} | Price: ₹{selectedPackage.price}
          </Typography>
        </Box>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {renderStepContent(activeStep)}

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
          )}
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} />
            ) : activeStep === steps.length - 1 ? (
              'Confirm Booking'
            ) : (
              'Next'
            )}
          </Button>
        </Box>
      </Paper>

      {/* Success Dialog */}
      <Dialog
        open={successDialogOpen}
        onClose={handleSuccessClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="h5" align="center" color="primary">
            Booking Successful!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: 'center', py: 2 }}>
            <Typography variant="h6" gutterBottom>
              Thank you for booking with us!
            </Typography>
            <Typography color="text.secondary">
              We will contact you shortly with more details about your trip.
              Please check your email for confirmation.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSuccessClose} variant="contained" fullWidth>
            Back to Packages
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Booking;
