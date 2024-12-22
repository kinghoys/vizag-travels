import React from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Paper,
  useTheme,
  alpha,
} from '@mui/material';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HotelIcon from '@mui/icons-material/Hotel';
import FlagIcon from '@mui/icons-material/Flag';

const BookingTracker = ({ status }) => {
  const theme = useTheme();

  const steps = [
    {
      label: 'Booking Confirmed',
      description: 'Your booking has been confirmed',
      icon: ConfirmationNumberIcon,
    },
    {
      label: 'Preparation',
      description: 'Travel arrangements in progress',
      icon: DirectionsCarIcon,
    },
    {
      label: 'Ready',
      description: 'All set for your journey',
      icon: CheckCircleIcon,
    },
    {
      label: 'Trip Started',
      description: 'Your journey has begun',
      icon: FlagIcon,
    },
  ];

  // Map booking status to step number
  const statusToStep = {
    'confirmed': 0,
    'preparing': 1,
    'ready': 2,
    'started': 3,
    'completed': 4,
  };

  const activeStep = statusToStep[status.toLowerCase()] || 0;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        bgcolor: alpha(theme.palette.primary.main, 0.03),
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        Booking Status
      </Typography>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          '& .MuiStepLabel-label': {
            mt: 1,
            fontSize: '0.875rem',
          },
          '& .MuiStepLabel-iconContainer': {
            '& .MuiSvgIcon-root': {
              fontSize: 28,
            },
          },
          '& .MuiStepIcon-root': {
            color: alpha(theme.palette.primary.main, 0.3),
            '&.Mui-active': {
              color: theme.palette.primary.main,
            },
            '&.Mui-completed': {
              color: theme.palette.success.main,
            },
          },
        }}
      >
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          return (
            <Step key={step.label}>
              <StepLabel
                StepIconComponent={() => (
                  <StepIcon
                    sx={{
                      color: index <= activeStep 
                        ? theme.palette.primary.main 
                        : alpha(theme.palette.primary.main, 0.3),
                      fontSize: '1.5rem',
                    }}
                  />
                )}
              >
                <Typography variant="body2" fontWeight={index === activeStep ? 'bold' : 'normal'}>
                  {step.label}
                </Typography>
                <Typography 
                  variant="caption" 
                  color="text.secondary"
                  sx={{ 
                    display: 'block',
                    fontSize: '0.75rem',
                  }}
                >
                  {step.description}
                </Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Paper>
  );
};

export default BookingTracker;
