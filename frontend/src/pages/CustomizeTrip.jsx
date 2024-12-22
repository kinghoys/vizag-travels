import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Chip,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
  Card,
  CardContent,
  Alert,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import HikingIcon from '@mui/icons-material/Hiking';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

const destinations = [
  'Araku Valley',
  'Borra Caves',
  'RK Beach',
  'Kailasagiri',
  'Rushikonda Beach',
  'Simhachalam Temple',
  'Submarine Museum',
  'Yarada Beach',
  "Dolphin's Nose",
  'Katiki Waterfalls'
];

const activities = [
  { name: 'Beach Activities', icon: <BeachAccessIcon /> },
  { name: 'Trekking', icon: <HikingIcon /> },
  { name: 'Temple Visits', icon: <TempleBuddhistIcon /> },
  { name: 'Food Tours', icon: <RestaurantIcon /> },
  { name: 'Adventure Sports', icon: <LocalActivityIcon /> }
];

const steps = ['Trip Preferences', 'Activities & Interests', 'Contact Details'];

const CustomizeTrip = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    startDate: null,
    duration: 3,
    budget: [5000, 50000],
    selectedDestinations: [],
    selectedActivities: [],
    accommodationType: '',
    name: '',
    email: '',
    phone: '',
    additionalNotes: ''
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    setActiveStep(steps.length);
  };

  const renderTripPreferences = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Start Date"
            value={formData.startDate}
            onChange={(newValue) => setFormData({ ...formData, startDate: newValue })}
            renderInput={(params) => <TextField {...params} fullWidth required />}
            minDate={new Date()}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Duration (days)"
          type="number"
          value={formData.duration}
          onChange={handleInputChange('duration')}
          InputProps={{ inputProps: { min: 1, max: 30 } }}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <Typography gutterBottom>Budget Range (₹)</Typography>
        <Slider
          value={formData.budget}
          onChange={(event, newValue) => setFormData({ ...formData, budget: newValue })}
          valueLabelDisplay="auto"
          min={5000}
          max={50000}
          step={1000}
          marks={[
            { value: 5000, label: '₹5,000' },
            { value: 50000, label: '₹50,000' }
          ]}
        />
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          multiple
          options={destinations}
          value={formData.selectedDestinations}
          onChange={(event, newValue) => setFormData({ ...formData, selectedDestinations: newValue })}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Preferred Destinations"
              placeholder="Select destinations"
            />
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                label={option}
                {...getTagProps({ index })}
                sx={{ m: 0.5 }}
              />
            ))
          }
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Accommodation Type</InputLabel>
          <Select
            value={formData.accommodationType}
            onChange={handleInputChange('accommodationType')}
            label="Accommodation Type"
          >
            <MenuItem value="budget">Budget Hotels</MenuItem>
            <MenuItem value="comfort">Comfort Hotels</MenuItem>
            <MenuItem value="luxury">Luxury Resorts</MenuItem>
            <MenuItem value="homestay">Homestays</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );

  const renderActivitiesInterests = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Select Activities & Interests
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
          {activities.map((activity) => (
            <Chip
              key={activity.name}
              icon={activity.icon}
              label={activity.name}
              onClick={() => {
                const newActivities = formData.selectedActivities.includes(activity.name)
                  ? formData.selectedActivities.filter(a => a !== activity.name)
                  : [...formData.selectedActivities, activity.name];
                setFormData({ ...formData, selectedActivities: newActivities });
              }}
              color={formData.selectedActivities.includes(activity.name) ? "primary" : "default"}
              sx={{ m: 0.5 }}
            />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Additional Preferences or Requirements"
          value={formData.additionalNotes}
          onChange={handleInputChange('additionalNotes')}
          placeholder="Tell us about any specific preferences, dietary requirements, or special requests..."
        />
      </Grid>
    </Grid>
  );

  const renderContactDetails = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Full Name"
          value={formData.name}
          onChange={handleInputChange('name')}
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
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Phone Number"
          value={formData.phone}
          onChange={handleInputChange('phone')}
          required
        />
      </Grid>
    </Grid>
  );

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return renderTripPreferences();
      case 1:
        return renderActivitiesInterests();
      case 2:
        return renderContactDetails();
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="md">
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Customize Your Perfect Trip
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
            Tell us your preferences and we'll create a personalized travel package just for you
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
              <Alert severity="success" sx={{ mb: 3 }}>
                Thank you for submitting your trip preferences!
              </Alert>
              <Typography paragraph>
                Our travel experts will review your requirements and get back to you within 24 hours
                with a customized travel package.
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
                Customize Another Trip
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
                  onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                  sx={{
                    backgroundColor: '#FF4E50',
                    '&:hover': {
                      backgroundColor: '#E63E40'
                    }
                  }}
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </Box>
            </>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default CustomizeTrip;
