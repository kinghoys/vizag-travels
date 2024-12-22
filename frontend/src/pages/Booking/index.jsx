import React, { useEffect } from 'react';
import {
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Box,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';
import { useBooking } from '../../context/BookingContext';
import { useNavigate } from 'react-router-dom';
import TravelDetails from './steps/TravelDetails';
import PersonalDetails from './steps/PersonalDetails';
import PaymentDetails from './steps/PaymentDetails';
import BookingSummary from './steps/BookingSummary';

const steps = ['Travel Details', 'Personal Details', 'Payment', 'Summary'];

const Booking = () => {
  const {
    activeBooking,
    bookingStep,
    setBookingStep,
    loading,
    error,
    confirmBooking,
  } = useBooking();
  const navigate = useNavigate();

  useEffect(() => {
    if (!activeBooking) {
      navigate('/');
    }
  }, [activeBooking, navigate]);

  const handleNext = () => {
    if (bookingStep === steps.length) {
      confirmBooking();
    } else {
      setBookingStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setBookingStep(prev => prev - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 1:
        return <TravelDetails />;
      case 2:
        return <PersonalDetails />;
      case 3:
        return <PaymentDetails />;
      case 4:
        return <BookingSummary />;
      default:
        return 'Unknown step';
    }
  };

  if (!activeBooking) {
    return null;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Book Your Trip
        </Typography>

        <Stepper activeStep={bookingStep - 1} sx={{ py: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {error && (
          <Alert severity="error" sx={{ mt: 3 }}>
            {error}
          </Alert>
        )}

        <Box sx={{ mt: 4 }}>
          {getStepContent(bookingStep)}

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
            {bookingStep !== 1 && (
              <Button
                onClick={handleBack}
                sx={{ mr: 1 }}
                disabled={loading}
              >
                Back
              </Button>
            )}
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : bookingStep === steps.length ? (
                'Confirm Booking'
              ) : (
                'Next'
              )}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Booking;
