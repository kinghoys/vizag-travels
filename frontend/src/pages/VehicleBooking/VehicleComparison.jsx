import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GroupIcon from '@mui/icons-material/Group';

const VehicleComparison = ({ vehicles, category }) => {
  const getFeatures = (vehicle) => {
    const baseFeatures = {
      'AC': category === 'cars' || (category === 'tempo' && vehicle.type === 'tempo17') || category === 'bus',
      'Music System': true,
      'Comfortable Seating': true,
      'Luggage Space': category === 'cars' ? 'Medium' : 'Large',
      'USB Charging': true,
      'Water Bottle': true,
      'First Aid Kit': true,
      'GPS Tracking': true,
    };

    // Add category-specific features
    if (category === 'cars') {
      return {
        ...baseFeatures,
        'Push-back Seats': vehicle.type === 'innova',
        'Arm Rest': true,
        'Entertainment System': vehicle.type === 'innova',
      };
    } else if (category === 'tempo') {
      return {
        ...baseFeatures,
        'Push-back Seats': true,
        'LCD Screen': vehicle.type === 'tempo17',
        'Extra Legroom': true,
        'Emergency Exit': true,
      };
    } else if (category === 'bus') {
      return {
        ...baseFeatures,
        'Push-back Seats': true,
        'LCD Screen': true,
        'Extra Legroom': true,
        'Emergency Exit': true,
        'Mic System': true,
        'Refrigerator': vehicle.type === 'bus40',
      };
    }
    return baseFeatures;
  };

  const renderFeatureValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <CheckCircleIcon color="success" />
      ) : (
        <CancelIcon color="error" />
      );
    }
    return value;
  };

  return (
    <Paper sx={{ p: 3, mt: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <CompareArrowsIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6">Vehicle Comparison</Typography>
      </Box>
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Features</strong></TableCell>
              {vehicles.map((vehicle) => (
                <TableCell key={vehicle.type} align="center">
                  <Typography variant="subtitle1" gutterBottom>
                    <strong>{vehicle.name}</strong>
                  </Typography>
                  <Chip
                    label={`₹${vehicle.basePrice}`}
                    color="primary"
                    size="small"
                  />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><strong>Seating Capacity</strong></TableCell>
              {vehicles.map((vehicle) => (
                <TableCell key={vehicle.type} align="center">
                  {vehicle.description.split(' ')[0]}
                </TableCell>
              ))}
            </TableRow>
            {Object.entries(getFeatures(vehicles[0])).map(([feature]) => (
              <TableRow key={feature}>
                <TableCell><strong>{feature}</strong></TableCell>
                {vehicles.map((vehicle) => (
                  <TableCell key={vehicle.type} align="center">
                    {renderFeatureValue(getFeatures(vehicle)[feature])}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default VehicleComparison;
