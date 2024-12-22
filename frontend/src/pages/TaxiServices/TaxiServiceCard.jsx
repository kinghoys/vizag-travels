import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const TaxiServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/taxi-services/${service.id}`);
  };

  // Get the lowest and highest priced vehicles
  const priceRange = service.vehicles.reduce((range, vehicle) => {
    const basePrice = vehicle.basePrice;
    return {
      min: Math.min(range.min, basePrice),
      max: Math.max(range.max, basePrice),
    };
  }, { min: Infinity, max: -Infinity });

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: (theme) => theme.shadows[4],
          transition: 'all 0.3s ease-in-out',
        },
      }}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        height="200"
        image={service.images[0]}
        alt={service.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography gutterBottom variant="h6" component="h2">
          {service.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          {service.description}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mb: 2 }} flexWrap="wrap">
          {service.vehicles.slice(0, 3).map((vehicle) => (
            <Chip
              key={vehicle.type}
              icon={<DirectionsCarIcon />}
              label={vehicle.type}
              size="small"
              variant="outlined"
              sx={{ mb: 1 }}
            />
          ))}
          {service.vehicles.length > 3 && (
            <Chip
              label={`+${service.vehicles.length - 3} more`}
              size="small"
              variant="outlined"
              sx={{ mb: 1 }}
            />
          )}
        </Stack>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Price Range:
          </Typography>
          <Typography variant="h6" color="primary">
            ₹{priceRange.min} - ₹{priceRange.max}
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          {service.inclusions.slice(0, 2).map((item) => (
            <Chip
              key={item}
              icon={<CheckCircleIcon />}
              label={item}
              size="small"
              color="success"
              variant="outlined"
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TaxiServiceCard;
