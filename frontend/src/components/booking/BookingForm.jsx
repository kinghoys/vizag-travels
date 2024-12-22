import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Alert,
  Divider,
  InputAdornment,
  Card,
  CardContent
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GroupIcon from '@mui/icons-material/Group';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const steps = ['Personal Details', 'Travel Details', 'Review', 'Payment'];

const BookingForm = ({ packageDetails }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelDate: '',
    adults: 2,
    children: 0,
    specialRequests: '',
    paymentMethod: 'card'
  });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 0: // Personal Details
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email) {
          newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
          newErrors.email = 'Invalid email format';
        }
        if (!formData.phone) {
          newErrors.phone = 'Phone number is required';
        } else if (!validatePhone(formData.phone)) {
          newErrors.phone = 'Invalid phone number (10 digits required)';
        }
        break;

      case 1: // Travel Details
        if (!formData.travelDate) newErrors.travelDate = 'Travel date is required';
        if (formData.adults < 1) newErrors.adults = 'At least 1 adult is required';
        if (formData.children < 0) newErrors.children = 'Cannot be negative';
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: undefined
      });
    }
  };

  const renderPersonalDetails = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="First Name"
          value={formData.firstName}
          onChange={handleInputChange('firstName')}
          error={!!errors.firstName}
          helperText={errors.firstName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Last Name"
          value={formData.lastName}
          onChange={handleInputChange('lastName')}
          error={!!errors.lastName}
          helperText={errors.lastName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange('email')}
          error={!!errors.email}
          helperText={errors.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Phone Number"
          value={formData.phone}
          onChange={handleInputChange('phone')}
          error={!!errors.phone}
          helperText={errors.phone}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
          required
        />
      </Grid>
    </Grid>
  );

  const renderTravelDetails = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Travel Date"
          type="date"
          value={formData.travelDate}
          onChange={handleInputChange('travelDate')}
          error={!!errors.travelDate}
          helperText={errors.travelDate}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: new Date().toISOString().split('T')[0]
          }}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Number of Adults"
          type="number"
          value={formData.adults}
          onChange={handleInputChange('adults')}
          error={!!errors.adults}
          helperText={errors.adults}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GroupIcon />
              </InputAdornment>
            ),
            inputProps: { min: 1 }
          }}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Number of Children"
          type="number"
          value={formData.children}
          onChange={handleInputChange('children')}
          error={!!errors.children}
          helperText={errors.children}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GroupIcon />
              </InputAdornment>
            ),
            inputProps: { min: 0 }
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Special Requests"
          multiline
          rows={4}
          value={formData.specialRequests}
          onChange={handleInputChange('specialRequests')}
        />
      </Grid>
    </Grid>
  );

  const renderReview = () => (
    <Box>
      <Alert severity="info" sx={{ mb: 3 }}>
        Please review your booking details before proceeding to payment
      </Alert>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography>
                  <strong>Name:</strong> {formData.firstName} {formData.lastName}
                </Typography>
                <Typography>
                  <strong>Email:</strong> {formData.email}
                </Typography>
                <Typography>
                  <strong>Phone:</strong> {formData.phone}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Travel Details
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography>
                  <strong>Travel Date:</strong> {new Date(formData.travelDate).toLocaleDateString()}
                </Typography>
                <Typography>
                  <strong>Travelers:</strong> {formData.adults} Adults, {formData.children} Children
                </Typography>
                {formData.specialRequests && (
                  <Typography>
                    <strong>Special Requests:</strong> {formData.specialRequests}
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Price Details
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>Base Price ({formData.adults} Adults)</Typography>
                  <Typography>₹{formData.adults * 33000}</Typography>
                </Box>
                {formData.children > 0 && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>Children ({formData.children})</Typography>
                    <Typography>₹{formData.children * 16500}</Typography>
                  </Box>
                )}
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>Taxes & Fees (10%)</Typography>
                  <Typography>
                    ₹{(formData.adults * 33000 + formData.children * 16500) * 0.1}
                  </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h6">Total Amount</Typography>
                  <Typography variant="h6">
                    ₹{(formData.adults * 33000 + formData.children * 16500) * 1.1}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderPayment = () => (
    <Box>
      <FormControl component="fieldset">
        <FormLabel component="legend">Payment Method</FormLabel>
        <RadioGroup
          value={formData.paymentMethod}
          onChange={handleInputChange('paymentMethod')}
        >
          <FormControlLabel
            value="card"
            control={<Radio />}
            label="Credit/Debit Card"
          />
          <FormControlLabel
            value="upi"
            control={<Radio />}
            label="UPI Payment"
          />
          <FormControlLabel
            value="netbanking"
            control={<Radio />}
            label="Net Banking"
          />
        </RadioGroup>
      </FormControl>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Total Amount to Pay
        </Typography>
        <Typography variant="h4" color="primary" gutterBottom>
          ₹{(formData.adults * 33000 + formData.children * 16500) * 1.1}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          By proceeding with the payment, you agree to our terms and conditions
        </Typography>
      </Box>
    </Box>
  );

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return renderPersonalDetails();
      case 1:
        return renderTravelDetails();
      case 2:
        return renderReview();
      case 3:
        return renderPayment();
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Book Your Package
        </Typography>
        
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? (
          <Box sx={{ textAlign: 'center' }}>
            <CheckCircleOutlineIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
            <Alert severity="success" sx={{ mb: 3 }}>
              Booking Confirmed! Your booking reference is #VT12345
            </Alert>
            <Typography paragraph>
              Thank you for booking with Vizag Travels Hub. You will receive a confirmation
              email shortly with your booking details.
            </Typography>
            <Button
              variant="contained"
              onClick={() => setActiveStep(0)}
              sx={{
                backgroundColor: '#FF4E50',
                '&:hover': {
                  backgroundColor: '#E63E40'
                }
              }}
            >
              Book Another Package
            </Button>
          </Box>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{
                  backgroundColor: '#FF4E50',
                  '&:hover': {
                    backgroundColor: '#E63E40'
                  }
                }}
              >
                {activeStep === steps.length - 1 ? 'Confirm Booking' : 'Next'}
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default BookingForm;
