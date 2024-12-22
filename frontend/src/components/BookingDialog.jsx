import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  Typography,
  Box,
  Alert,
  IconButton,
  useTheme,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Avatar,
  Fade,
  Divider,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { motion } from 'framer-motion';

const BookingDialog = ({ open, onClose, packageData }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { confirmBooking } = useBooking();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: null,
    numberOfPeople: '',
    specialRequests: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState(null);

  const steps = ['Personal Information', 'Travel Details'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      travelDate: date
    }));
  };

  const validateStep1 = () => {
    return formData.name && formData.email && formData.phone;
  };

  const validateStep2 = () => {
    return formData.travelDate && formData.numberOfPeople;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async () => {
    try {
      const bookingData = {
        bookingId: Math.random().toString(36).substr(2, 9),
        status: 'confirmed',
        packageDetails: packageData,
        personalDetails: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        travelDetails: {
          date: formData.travelDate,
          numberOfPeople: formData.numberOfPeople,
          specialRequests: formData.specialRequests,
        },
      };

      await confirmBooking(bookingData);
      setShowConfirmation(true);
    } catch (err) {
      setError('Failed to confirm booking. Please try again.');
    }
  };

  const handleCloseConfirmation = () => {
    onClose();
    setShowConfirmation(false);
    setStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      travelDate: null,
      numberOfPeople: '',
      specialRequests: '',
    });
    navigate('/my-bookings');
  };

  const MotionBox = motion(Box);

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          overflow: 'hidden',
        }
      }}
    >
      {!showConfirmation && (
        <Box sx={{ 
          bgcolor: 'primary.main', 
          color: 'white',
          py: 3,
          px: 4,
          position: 'relative'
        }}>
          <IconButton 
            onClick={onClose} 
            size="small"
            sx={{ 
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white'
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            {packageData?.name || 'Package Booking'}
          </Typography>
          <Stepper 
            activeStep={step - 1} 
            sx={{ 
              mt: 2,
              '& .MuiStepLabel-label': {
                color: 'white',
                opacity: 0.7,
                '&.Mui-active': {
                  opacity: 1,
                }
              },
              '& .MuiStepIcon-root': {
                color: 'rgba(255,255,255,0.5)',
                '&.Mui-active': {
                  color: 'white',
                },
                '&.Mui-completed': {
                  color: 'white',
                }
              }
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      )}

      <DialogContent sx={{ p: showConfirmation ? 0 : 4 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {showConfirmation ? (
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Paper
              elevation={0}
              sx={{
                textAlign: 'center',
                py: 6,
                px: 4,
                background: `linear-gradient(to bottom right, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                color: 'white',
                borderRadius: 0,
              }}
            >
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: 'white',
                  color: 'primary.main',
                  margin: '0 auto',
                  mb: 3,
                }}
              >
                <CheckCircleIcon sx={{ fontSize: 40 }} />
              </Avatar>
              <Typography variant="h4" gutterBottom fontWeight="bold">
                Booking Confirmed!
              </Typography>
              <Typography variant="subtitle1" sx={{ opacity: 0.9, mb: 3 }}>
                Thank you for choosing us for your journey.
              </Typography>
            </Paper>
            <Box sx={{ p: 4 }}>
              <Alert 
                severity="success" 
                sx={{ 
                  mb: 3,
                  '& .MuiAlert-message': {
                    width: '100%'
                  }
                }}
              >
                <Typography variant="subtitle2" gutterBottom>
                  Booking Reference: #{Math.random().toString(36).substr(2, 8).toUpperCase()}
                </Typography>
                <Typography variant="body2">
                  A confirmation email has been sent to {formData.email}
                </Typography>
              </Alert>
              <Typography variant="body1" color="text.secondary" paragraph>
                We will contact you shortly to confirm your booking details and provide additional information about your trip.
              </Typography>
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                  Need immediate assistance?
                </Typography>
                <Typography variant="body2" color="primary" fontWeight="medium">
                  Call us at: +91 1234567890
                </Typography>
              </Box>
            </Box>
          </MotionBox>
        ) : (
          <Fade in={true}>
            <Stack spacing={3}>
              {step === 1 ? (
                <MotionBox
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar sx={{ bgcolor: 'primary.light', mr: 2 }}>
                      <PersonIcon />
                    </Avatar>
                    <Typography variant="h6">
                      Personal Information
                    </Typography>
                  </Box>
                  <Stack spacing={3}>
                    <TextField
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      fullWidth
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      fullWidth
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                    <TextField
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      fullWidth
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                  </Stack>
                </MotionBox>
              ) : (
                <MotionBox
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar sx={{ bgcolor: 'primary.light', mr: 2 }}>
                      <EventIcon />
                    </Avatar>
                    <Typography variant="h6">
                      Travel Details
                    </Typography>
                  </Box>
                  <Stack spacing={3}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Travel Date"
                        value={formData.travelDate}
                        onChange={handleDateChange}
                        renderInput={(params) => 
                          <TextField 
                            {...params} 
                            fullWidth 
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                              }
                            }}
                          />
                        }
                        minDate={new Date()}
                      />
                    </LocalizationProvider>
                    <TextField
                      label="Number of People"
                      name="numberOfPeople"
                      value={formData.numberOfPeople}
                      onChange={handleInputChange}
                      fullWidth
                      required
                      select
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <MenuItem key={num} value={num}>
                          {num} {num === 1 ? 'Person' : 'People'}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      label="Special Requests (Optional)"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      fullWidth
                      multiline
                      rows={3}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                  </Stack>
                </MotionBox>
              )}
            </Stack>
          </Fade>
        )}
      </DialogContent>

      {!showConfirmation && (
        <DialogActions 
          sx={{ 
            px: 4, 
            pb: 4,
            pt: 2,
          }}
        >
          {step === 2 && (
            <Button 
              onClick={handleBack}
              sx={{ 
                mr: 1,
                borderRadius: 2,
                px: 3,
              }}
            >
              Back
            </Button>
          )}
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={step === 1 ? !validateStep1() : !validateStep2()}
            fullWidth={step === 1}
            sx={{ 
              borderRadius: 2,
              py: 1.5,
              boxShadow: theme.shadows[4],
              '&:hover': {
                boxShadow: theme.shadows[8],
              },
            }}
          >
            {step === 1 ? 'Next' : 'Confirm Booking'}
          </Button>
        </DialogActions>
      )}

      {showConfirmation && (
        <DialogActions sx={{ p: 4, pt: 0 }}>
          <Button
            variant="contained"
            onClick={handleCloseConfirmation}
            fullWidth
            sx={{ 
              borderRadius: 2,
              py: 1.5,
              boxShadow: theme.shadows[4],
              '&:hover': {
                boxShadow: theme.shadows[8],
              },
            }}
          >
            Done
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default BookingDialog;
