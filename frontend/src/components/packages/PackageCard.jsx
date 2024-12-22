import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Rating,
  Stack,
  styled,
  Button,
  Chip,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  transition: 'transform 0.2s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));

const PackageCard = ({ pkg }) => {
  const navigate = useNavigate();

  const handleViewDetails = (e) => {
    e.stopPropagation();
    navigate(`/package/${pkg.id}`);
  };

  const handleBookNow = (e) => {
    e.stopPropagation();
    // Add booking logic here
  };

  return (
    <StyledCard 
      onClick={() => navigate(`/package/${pkg.id}`)}
      role="button"
      aria-label={`View details for ${pkg.name}`}
    >
      <CardMedia
        component="img"
        height="200"
        image={pkg.images?.[0] || "https://source.unsplash.com/random/?travel"}
        alt={pkg.name}
      />

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {pkg.name}
        </Typography>
        
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
          <Rating value={pkg.rating} precision={0.5} size="small" readOnly />
          <Typography variant="body2" color="text.secondary">
            ({pkg.reviews} reviews)
          </Typography>
        </Stack>

        <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {pkg.tags?.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{ 
                bgcolor: 'error.50',
                color: 'error.main',
                '&:hover': { bgcolor: 'error.100' }
              }}
            />
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <AccessTimeIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
          <Typography variant="body2" color="text.secondary">
            {pkg.duration}
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
            ₹{pkg.price.toLocaleString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            per person
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
          <Button 
            variant="outlined" 
            fullWidth
            onClick={handleViewDetails}
          >
            View Details
          </Button>
          <Button 
            variant="contained" 
            fullWidth
            onClick={handleBookNow}
            sx={{ 
              bgcolor: 'error.main',
              '&:hover': { bgcolor: 'error.dark' }
            }}
          >
            Book Now
          </Button>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

export default PackageCard;
