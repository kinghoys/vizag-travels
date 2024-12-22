import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Stack,
  Button,
  Divider,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import { taxiServices } from '../../data/taxiServices';

const TaxiServiceDetail = () => {
  const { id } = useParams();
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [isAc, setIsAc] = useState(true);
  const [bookingDate, setBookingDate] = useState(null);
  const [pickupTime, setPickupTime] = useState(null);

  const service = taxiServices.find(s => s.id === id);

  if (!service) {
    return (
      <Container>
        <Typography>Service not found</Typography>
      </Container>
    );
  }

  const handleBookNow = (vehicle) => {
    setSelectedVehicle(vehicle);
    setBookingOpen(true);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Left Column - Service Details */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            {service.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            {service.description}
          </Typography>

          {/* Vehicle Options Table */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Vehicle Options
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Vehicle Type</TableCell>
                      <TableCell align="right">Base Price</TableCell>
                      <TableCell align="right">Per KM</TableCell>
                      <TableCell align="right">Extra Hour</TableCell>
                      <TableCell align="right">Capacity</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {service.vehicles.map((vehicle) => (
                      <TableRow key={vehicle.type} hover>
                        <TableCell>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <DirectionsCarIcon fontSize="small" />
                            {vehicle.type}
                            {vehicle.ac === true && (
                              <AcUnitIcon color="primary" fontSize="small" />
                            )}
                            {vehicle.ac === 'optional' && (
                              <Chip size="small" label="AC/Non-AC" variant="outlined" />
                            )}
                          </Stack>
                        </TableCell>
                        <TableCell align="right">₹{vehicle.basePrice}</TableCell>
                        <TableCell align="right">
                          {typeof vehicle.pricePerKm === 'object'
                            ? `AC: ₹${vehicle.pricePerKm.ac} | Non-AC: ₹${vehicle.pricePerKm.nonAc}`
                            : `₹${vehicle.pricePerKm}`}
                        </TableCell>
                        <TableCell align="right">
                          {vehicle.extraHourRate ? `₹${vehicle.extraHourRate}` : 'N/A'}
                        </TableCell>
                        <TableCell align="right">{vehicle.capacity}</TableCell>
                        <TableCell align="right">
                          <Button
                            variant="contained"
                            size="small"
                            onClick={() => handleBookNow(vehicle)}
                          >
                            Book Now
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>

          {/* Terms and Conditions */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Terms and Conditions
              </Typography>
              <Grid container spacing={2}>
                {service.terms.map((term, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <InfoIcon color="primary" fontSize="small" />
                      <Typography variant="body2">{term}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column - Inclusions, Exclusions, Features */}
        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Inclusions
              </Typography>
              <Stack spacing={1}>
                {service.inclusions.map((item) => (
                  <Chip
                    key={item}
                    icon={<CheckCircleIcon />}
                    label={item}
                    color="success"
                    variant="outlined"
                    sx={{ justifyContent: 'flex-start' }}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>

          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Exclusions
              </Typography>
              <Stack spacing={1}>
                {service.exclusions.map((item) => (
                  <Chip
                    key={item}
                    icon={<CancelIcon />}
                    label={item}
                    color="error"
                    variant="outlined"
                    sx={{ justifyContent: 'flex-start' }}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Features
              </Typography>
              <Stack spacing={1}>
                {service.features.map((feature) => (
                  <Chip
                    key={feature}
                    icon={<CheckCircleIcon />}
                    label={feature}
                    color="primary"
                    variant="outlined"
                    sx={{ justifyContent: 'flex-start' }}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Booking Dialog */}
      <Dialog open={bookingOpen} onClose={() => setBookingOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Book {selectedVehicle?.type}</DialogTitle>
        <DialogContent>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Base Price: ₹{selectedVehicle?.basePrice}
                {typeof selectedVehicle?.pricePerKm === 'object'
                  ? ` + ₹${isAc ? selectedVehicle.pricePerKm.ac : selectedVehicle.pricePerKm.nonAc}/km`
                  : ` + ₹${selectedVehicle?.pricePerKm}/km`}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date of Journey"
                  value={bookingDate}
                  onChange={setBookingDate}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  label="Pickup Time"
                  value={pickupTime}
                  onChange={setPickupTime}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Pickup Location"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Drop Location"
                variant="outlined"
              />
            </Grid>

            {selectedVehicle?.ac === 'optional' && (
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={isAc}
                      onChange={(e) => setIsAc(e.target.checked)}
                    />
                  }
                  label="AC Vehicle"
                />
              </Grid>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setBookingOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setBookingOpen(false)}>
            Confirm Booking
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default TaxiServiceDetail;
