import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper,
  Tabs,
  Tab,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Chip,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import CheckIcon from '@mui/icons-material/Check';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GroupIcon from '@mui/icons-material/Group';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import { motion } from 'framer-motion';
import CarDetails from './CarDetails';
import TempoDetails from './TempoDetails';
import BusDetails from './BusDetails';
import PriceCalculator from './PriceCalculator';
import VehicleComparison from './VehicleComparison';

const vehicleCategories = [
  {
    id: 'cars',
    title: 'Car Booking',
    description: 'Comfortable cars for small groups. Perfect for 4-7 passengers.',
    icon: DirectionsCarIcon,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80',
    vehicles: [
      {
        type: 'swift',
        name: 'Swift Dzire',
        description: '4+1 Seater AC Sedan',
        basePrice: 2400,
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80'
      },
      {
        type: 'etios',
        name: 'Toyota Etios',
        description: '4+1 Seater AC Sedan',
        basePrice: 2400,
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80'
      },
      {
        type: 'innova',
        name: 'Toyota Innova',
        description: '7+1 Seater AC SUV',
        basePrice: 4500,
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 'tempo',
    title: 'Tempo Booking',
    description: 'Spacious tempo travelers for medium-sized groups. Ideal for 12-17 passengers.',
    icon: AirportShuttleIcon,
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80',
    vehicles: [
      {
        type: 'tempo12',
        name: '12 Seater Tempo Traveller',
        description: '12+1 Seater Non-AC',
        basePrice: 5200,
        image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80'
      },
      {
        type: 'tempo17',
        name: '17 Seater AC Tempo Traveller',
        description: '17+1 Seater with AC',
        basePrice: 5999,
        image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 'bus',
    title: 'Bus Booking',
    description: 'Large AC buses for big groups and events. Suitable for 24-40 passengers.',
    icon: DirectionsBusIcon,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80',
    vehicles: [
      {
        type: 'bus24',
        name: '24 Seater AC Bus',
        description: '24+1 Seater Luxury AC Bus',
        basePrice: 8000,
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80'
      },
      {
        type: 'bus40',
        name: '40 Seater AC Bus',
        description: '40+1 Seater Luxury AC Bus',
        basePrice: 11000,
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80'
      }
    ]
  }
];

const BookingForm = ({ vehicle, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupLocation: '',
    dropLocation: '',
    journeyDate: dayjs(),
    returnDate: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', {
      ...formData,
      journeyDate: formData.journeyDate?.format('YYYY-MM-DD HH:mm'),
      returnDate: formData.returnDate?.format('YYYY-MM-DD HH:mm'),
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Pickup Location"
            required
            value={formData.pickupLocation}
            onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Drop Location"
            required
            value={formData.dropLocation}
            onChange={(e) => setFormData({ ...formData, dropLocation: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Journey Date & Time"
              value={formData.journeyDate}
              onChange={(newValue) => setFormData({ ...formData, journeyDate: newValue })}
              minDateTime={dayjs()}
              slotProps={{
                textField: {
                  fullWidth: true,
                  required: true
                }
              }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Return Date & Time (Optional)"
              value={formData.returnDate}
              onChange={(newValue) => setFormData({ ...formData, returnDate: newValue })}
              minDateTime={formData.journeyDate || dayjs()}
              slotProps={{
                textField: {
                  fullWidth: true
                }
              }}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={onClose} sx={{ mr: 1 }}>Cancel</Button>
        <Button type="submit" variant="contained" color="primary">Book Now</Button>
      </Box>
    </form>
  );
};

const VehicleBooking = () => {
  const [selectedCategory, setSelectedCategory] = useState(vehicleCategories[0]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(vehicleCategories[newValue]);
    setSelectedVehicle(null);
  };

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleBookNow = () => {
    setBookingDialogOpen(true);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Vehicle Booking
      </Typography>

      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={vehicleCategories.indexOf(selectedCategory)}
          onChange={handleCategoryChange}
          variant="fullWidth"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          {vehicleCategories.map((category) => (
            <Tab
              key={category.id}
              icon={<category.icon />}
              label={category.title}
              sx={{ py: 2 }}
            />
          ))}
        </Tabs>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Select Vehicle
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {selectedCategory.vehicles.map((vehicle) => (
              <Card
                key={vehicle.type}
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                sx={{
                  cursor: 'pointer',
                  border: selectedVehicle?.type === vehicle.type ? 2 : 0,
                  borderColor: 'primary.main',
                  position: 'relative',
                  overflow: 'visible'
                }}
                onClick={() => handleVehicleSelect(vehicle)}
              >
                {selectedVehicle?.type === vehicle.type && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -10,
                      right: -10,
                      bgcolor: 'primary.main',
                      color: 'white',
                      borderRadius: '50%',
                      width: 24,
                      height: 24,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 1
                    }}
                  >
                    <CheckIcon fontSize="small" />
                  </Box>
                )}
                <CardMedia
                  component="img"
                  height="140"
                  image={vehicle.image}
                  alt={vehicle.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {vehicle.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {vehicle.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    {selectedCategory.id === 'cars' && <DirectionsCarIcon color="primary" />}
                    {selectedCategory.id === 'tempo' && <AirportShuttleIcon color="primary" />}
                    {selectedCategory.id === 'bus' && <DirectionsBusIcon color="primary" />}
                    <Typography variant="h6" color="primary">
                      From ₹{vehicle.basePrice}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {(selectedCategory.id === 'cars' || selectedCategory.id === 'bus' || vehicle.type === 'tempo17') && (
                      <Chip icon={<AcUnitIcon />} label="AC" size="small" color="primary" variant="outlined" />
                    )}
                    <Chip icon={<GroupIcon />} label={vehicle.description.split(' ')[0]} size="small" color="primary" variant="outlined" />
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
          
          {selectedVehicle && (
            <PriceCalculator
              vehicle={selectedVehicle}
              category={selectedCategory.id}
            />
          )}
        </Grid>

        <Grid item xs={12} md={8}>
          {selectedVehicle ? (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6">
                  {selectedVehicle.name} Details
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleBookNow}
                  startIcon={<BookOnlineIcon />}
                >
                  Book Now
                </Button>
              </Box>
              {selectedCategory.id === 'cars' && <CarDetails carType={selectedVehicle.type} />}
              {selectedCategory.id === 'tempo' && <TempoDetails tempoType={selectedVehicle.type} />}
              {selectedCategory.id === 'bus' && <BusDetails busType={selectedVehicle.type} />}
              
              <VehicleComparison
                vehicles={selectedCategory.vehicles}
                category={selectedCategory.id}
              />
            </>
          ) : (
            <Alert severity="info">
              Please select a vehicle to view details and pricing
            </Alert>
          )}
        </Grid>
      </Grid>

      <Dialog
        open={bookingDialogOpen}
        onClose={() => setBookingDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Book {selectedVehicle?.name}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <BookingForm
              vehicle={selectedVehicle}
              onClose={() => setBookingDialogOpen(false)}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default VehicleBooking;
