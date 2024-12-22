import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  FormControlLabel,
  Switch,
  Grid,
  Divider,
  Alert,
} from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';

const PriceCalculator = ({ vehicle, category }) => {
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [isOutstation, setIsOutstation] = useState(false);
  const [needsNightHalt, setNeedsNightHalt] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = () => {
    if (!vehicle || !distance || !duration) return 0;

    let price = vehicle.basePrice;
    const dist = parseFloat(distance);
    const dur = parseFloat(duration);

    if (isOutstation) {
      // Outstation rates
      const ratePerKm = category === 'cars' ? 15 : category === 'tempo' ? 25 : 42;
      price += dist * ratePerKm;
      
      // Night halt charges if needed
      if (needsNightHalt) {
        const nightHaltCharge = category === 'cars' ? 1000 : category === 'tempo' ? 2000 : 3000;
        price += nightHaltCharge;
      }
    } else {
      // Local package
      const extraKmRate = category === 'cars' ? 12 : category === 'tempo' ? 25 : 42;
      const extraHourRate = category === 'cars' ? 300 : category === 'tempo' ? 500 : 800;
      
      // Calculate extra kms (if any)
      const baseKms = 80;
      if (dist > baseKms) {
        price += (dist - baseKms) * extraKmRate;
      }
      
      // Calculate extra hours (if any)
      const baseHours = 10;
      if (dur > baseHours) {
        price += (dur - baseHours) * extraHourRate;
      }
    }

    return Math.round(price);
  };

  useEffect(() => {
    const newPrice = calculatePrice();
    setTotalPrice(newPrice);
  }, [distance, duration, isOutstation, needsNightHalt]);

  return (
    <Paper sx={{ p: 3, mt: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <CalculateIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6">Price Calculator</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Distance (km)"
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Duration (hours)"
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Switch
                checked={isOutstation}
                onChange={(e) => setIsOutstation(e.target.checked)}
              />
            }
            label="Outstation Trip"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Switch
                checked={needsNightHalt}
                onChange={(e) => setNeedsNightHalt(e.target.checked)}
                disabled={!isOutstation}
              />
            }
            label="Night Halt Required"
          />
        </Grid>
      </Grid>
      
      <Divider sx={{ my: 3 }} />
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" color="primary" align="center">
            Estimated Price: ₹{totalPrice.toLocaleString()}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Alert severity="info" sx={{ mt: 2 }}>
            Note: This is an estimated price. Final price may vary based on actual journey details,
            tolls, parking charges, and other applicable fees.
          </Alert>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PriceCalculator;
