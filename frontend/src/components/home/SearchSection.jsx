import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  InputAdornment,
  Autocomplete,
  Typography,
  useTheme,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupIcon from '@mui/icons-material/Group';
import { motion } from 'framer-motion';

const destinations = [
  'Araku Valley',
  'Borra Caves',
  'RK Beach',
  'Kailasagiri',
  'Rushikonda Beach',
  'Yarada Beach',
  "Dolphin's Nose", 
  'Simhachalam Temple',
  'INS Kurusura Submarine Museum',
  'Visakha Museum'
];

const SearchSection = () => {
  const theme = useTheme();
  const [destination, setDestination] = useState(null);
  const [checkIn, setCheckIn] = useState(null);
  const [guests, setGuests] = useState('');

  const handleSearch = () => {
    // Implement search functionality
    console.log({ destination, checkIn, guests });
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      sx={{
        mt: -10,
        mb: 8,
        position: 'relative',
        zIndex: 2
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Find Your Perfect Trip
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Autocomplete
                value={destination}
                onChange={(event, newValue) => setDestination(newValue)}
                options={destinations}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Where do you want to go?"
                    fullWidth
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon color="primary" />
                        </InputAdornment>
                      )
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="When?"
                  value={checkIn}
                  onChange={(newValue) => setCheckIn(newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                  minDate={new Date()}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                label="Number of Guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GroupIcon color="primary" />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={handleSearch}
                sx={{
                  height: '56px',
                  backgroundColor: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  }
                }}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Grid>
          </Grid>
          
          {/* Quick Links */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Popular Searches:
            </Typography>
            {['Araku Valley Tour', 'Beach Hopping', 'City Heritage Walk', 'Temple Tour'].map((item) => (
              <Button
                key={item}
                variant="text"
                size="small"
                sx={{
                  mr: 1,
                  mb: 1,
                  color: theme.palette.text.secondary,
                  '&:hover': {
                    color: theme.palette.primary.main,
                  }
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SearchSection;
