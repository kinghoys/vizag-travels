import React, { useState } from 'react';
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
  IconButton,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import BookingForm from './BookingForm';
import { usePackages } from '../context/PackageContext';

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
  const [bookingOpen, setBookingOpen] = useState(false);
  const { toggleLike, toggleCompare, isLiked, isCompared } = usePackages();

  const handleClick = () => {
    navigate(`/package/${pkg.id}`);
  };

  const handleBookNow = (e) => {
    e.stopPropagation();
    setBookingOpen(true);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    toggleLike(pkg.id);
  };

  const handleCompare = (e) => {
    e.stopPropagation();
    toggleCompare(pkg.id);
  };

  return (
    <>
      <StyledCard>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="200"
            image={pkg.images?.[0] || "https://source.unsplash.com/random/?travel"}
            alt={pkg.name}
            onClick={handleClick}
          />
          <IconButton
            onClick={handleLike}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              bgcolor: 'rgba(255,255,255,0.8)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
            }}
          >
            {isLiked(pkg.id) ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </Box>

        <CardContent onClick={handleClick}>
          <Typography variant="h6" gutterBottom>
            {pkg.name}
          </Typography>
          
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
            <Rating value={pkg.rating} precision={0.5} size="small" readOnly />
            <Typography variant="body2" color="text.secondary">
              ({pkg.reviews} reviews)
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccessTimeIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
              <Typography variant="body2" color="text.secondary">
                {pkg.duration}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <GroupIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
              <Typography variant="body2" color="text.secondary">
                {pkg.capacity}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <DirectionsCarIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
              <Typography variant="body2" color="text.secondary">
                {pkg.vehicle}
              </Typography>
            </Box>
          </Stack>

          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {pkg.tags?.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                variant="outlined"
                color="primary"
              />
            ))}
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
              onClick={handleCompare}
              color={isCompared(pkg.id) ? "secondary" : "primary"}
              startIcon={<CompareArrowsIcon />}
            >
              {isCompared(pkg.id) ? 'Remove' : 'Compare'}
            </Button>
            <Button 
              variant="contained" 
              fullWidth
              onClick={handleBookNow}
              color="primary"
            >
              Book Now
            </Button>
          </Stack>
        </CardContent>
      </StyledCard>
      <BookingForm 
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        packageDetails={pkg}
      />
    </>
  );
};

export default PackageCard;
