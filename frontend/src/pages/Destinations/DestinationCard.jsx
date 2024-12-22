import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Rating,
  Button,
  Stack,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTimeOutlined';
import { useNavigate } from 'react-router-dom';
import ContactDialog from '../../components/ContactDialog';

const DestinationCard = ({ destination }) => {
  const navigate = useNavigate();
  const [contactOpen, setContactOpen] = useState(false);

  const handleViewPackages = (e) => {
    e.stopPropagation();
    navigate('/packages', { state: { destination: destination.name } });
  };

  const handleCardClick = () => {
    navigate(`/destinations/${destination.id}`);
  };

  const handleContactClick = (e) => {
    e.stopPropagation();
    setContactOpen(true);
  };

  return (
    <>
      <Card 
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          cursor: 'pointer',
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: 6,
          }
        }}
        onClick={handleCardClick}
      >
        <CardMedia
          component="img"
          height="200"
          image={destination.images?.[0] || `https://source.unsplash.com/random/?${destination.name.toLowerCase()}`}
          alt={destination.name}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {destination.name}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOnIcon sx={{ mr: 1, color: 'primary.main', fontSize: '1rem' }} />
            <Typography variant="body2" color="text.secondary">
              {destination.distance}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <AccessTimeIcon sx={{ mr: 1, color: 'primary.main', fontSize: '1rem' }} />
            <Typography variant="body2" color="text.secondary">
              Best Time: {destination.bestTimeToVisit}
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary" paragraph>
            {destination.description}
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Stack direction="row" spacing={1} alignItems="center" mb={1}>
              <Rating value={destination.rating} precision={0.1} size="small" readOnly />
              <Typography variant="body2" color="text.secondary">
                ({destination.reviews} reviews)
              </Typography>
            </Stack>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {destination.highlights?.slice(0, 3).map((highlight, index) => (
                <Chip
                  key={index}
                  label={highlight}
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: '0.75rem' }}
                />
              ))}
            </Box>
          </Box>

          <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
            <Button 
              variant="contained" 
              onClick={handleViewPackages}
              sx={{ flex: 1 }}
            >
              View Packages
            </Button>
            <Button
              variant="outlined"
              onClick={handleContactClick}
              sx={{ flex: 1 }}
            >
              Contact Us
            </Button>
          </Stack>
        </CardContent>
      </Card>
      <ContactDialog 
        open={contactOpen} 
        onClose={() => setContactOpen(false)} 
      />
    </>
  );
};

export default DestinationCard;
