import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Chip,
  Tab,
  Tabs,
  Rating,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import LandscapeIcon from '@mui/icons-material/Landscape';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import PetsIcon from '@mui/icons-material/Pets';
import PoolIcon from '@mui/icons-material/Pool';
import ForestIcon from '@mui/icons-material/Forest';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import HikingIcon from '@mui/icons-material/Hiking';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const activities = {
  'Adventure Sports': [
    {
      id: 1,
      name: 'Parasailing at Rushikonda Beach',
      description: 'Experience the thrill of parasailing with stunning views of the coastline.',
      image: 'https://images.unsplash.com/photo-1600165642284-8840c2287c4e?auto=format&fit=crop&q=80',
      price: '1500 per person',
      duration: '15-20 minutes',
      location: 'Rushikonda Beach',
      rating: 4.5,
      category: 'Adventure Sports',
      bookingUrl: 'mailto:booking@vizagtravels.com?subject=Activity Booking - Parasailing'
    },
    {
      id: 2,
      name: 'Scuba Diving',
      description: 'Discover the underwater world with professional diving instructors.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
      price: '3500 per person',
      duration: '2-3 hours',
      location: 'Rushikonda Beach',
      rating: 4.7,
      category: 'Adventure Sports',
      bookingUrl: 'mailto:booking@vizagtravels.com?subject=Activity Booking - Scuba Diving'
    },
    {
      id: 3,
      name: 'Rock Climbing',
      description: 'Challenge yourself with guided rock climbing sessions.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
      price: '1000 per person',
      duration: '2 hours',
      location: 'Kambalakonda',
      rating: 4.3,
      category: 'Adventure Sports',
      bookingUrl: 'mailto:booking@vizagtravels.com?subject=Activity Booking - Rock Climbing'
    }
  ],
  'Beach Activities': [
    {
      id: 4,
      name: 'Sunset Boat Ride',
      description: 'Enjoy a peaceful boat ride while watching the beautiful sunset.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
      price: '800 per person',
      duration: '1 hour',
      location: 'RK Beach',
      rating: 4.3,
      category: 'Beach Activities',
      bookingUrl: 'mailto:booking@vizagtravels.com?subject=Activity Booking - Sunset Boat Ride'
    },
    {
      id: 5,
      name: 'Beach Sports',
      description: 'Enjoy volleyball, cricket, and other beach sports with equipment rental.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
      price: '500 per hour',
      duration: 'Flexible',
      location: 'RK Beach',
      rating: 4.2,
      category: 'Beach Activities',
      bookingUrl: 'mailto:booking@vizagtravels.com?subject=Activity Booking - Beach Sports'
    },
    {
      id: 6,
      name: 'Beach Photography',
      description: 'Professional photography session at scenic beach locations.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
      price: '2500 per session',
      duration: '1 hour',
      location: 'Various Beaches',
      rating: 4.4,
      category: 'Beach Activities',
      bookingUrl: 'mailto:booking@vizagtravels.com?subject=Activity Booking - Beach Photography'
    }
  ],
  'Nature & Wildlife': [
    {
      id: 7,
      name: 'Indira Gandhi Zoological Park',
      description: 'Visit one of the largest zoos in India with various species of animals and birds.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
      price: 'Adults: ₹100, Children: ₹50',
      duration: '3-4 hours',
      location: 'Visakhapatnam',
      rating: 4.6,
      category: 'Nature & Wildlife',
      highlights: [
        'White Tiger Enclosure',
        'Lion Safari',
        'Butterfly Park',
        'Nocturnal Animal House',
        'Bird Aviary'
      ],
      timings: '9:00 AM to 5:00 PM (Closed on Mondays)',
      bookingUrl: 'mailto:booking@vizagtravels.com?subject=Activity Booking - Zoo Visit'
    },
    {
      id: 8,
      name: 'Kambalakonda Wildlife Sanctuary',
      description: 'Explore the rich biodiversity with trekking and nature walks.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
      price: 'Entry: ₹50, Guided Tour: ₹500',
      duration: '2-3 hours',
      location: 'Visakhapatnam',
      rating: 4.4,
      category: 'Nature & Wildlife',
      bookingUrl: 'mailto:booking@vizagtravels.com?subject=Activity Booking - Wildlife Sanctuary'
    }
  ],
  'Cultural Experiences': [
    {
      id: 9,
      name: 'Tribal Museum Visit',
      description: 'Learn about the rich tribal culture and heritage of Andhra Pradesh.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
      price: '₹100 per person',
      duration: '1-2 hours',
      location: 'Araku Valley',
      rating: 4.3,
      category: 'Cultural Experiences',
      bookingUrl: 'mailto:booking@vizagtravels.com?subject=Activity Booking - Tribal Museum'
    },
    {
      id: 10,
      name: 'Traditional Dance Performance',
      description: 'Watch traditional dance performances by local artists.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
      price: '₹300 per person',
      duration: '2 hours',
      location: 'Various Venues',
      rating: 4.5,
      category: 'Cultural Experiences',
      bookingUrl: 'mailto:booking@vizagtravels.com?subject=Activity Booking - Dance Performance'
    }
  ],
  'Water Parks': [
    {
      id: 11,
      name: 'VMRDA INS Kursura Submarine Museum',
      description: 'Experience life inside a real submarine turned into a museum.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
      price: '₹200 per person',
      duration: '1 hour',
      location: 'Beach Road',
      rating: 4.7,
      category: 'Water Parks',
      bookingUrl: 'mailto:booking@vizagtravels.com?subject=Activity Booking - Submarine Museum'
    }
  ],
  'Shopping': [
    {
      id: 12,
      name: 'Lepakshi Handicrafts Emporium',
      description: 'Shop for traditional handicrafts and artifacts.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
      price: 'Free entry',
      duration: 'Flexible',
      location: 'Siripuram',
      rating: 4.2,
      category: 'Shopping',
      bookingUrl: 'mailto:booking@vizagtravels.com?subject=Activity Booking - Shopping Tour'
    },
    {
      id: 13,
      name: 'CMR Shopping Mall',
      description: 'Modern shopping complex with international brands.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
      price: 'Free entry',
      duration: 'Flexible',
      location: 'Maddilapalem',
      rating: 4.4,
      category: 'Shopping',
      bookingUrl: 'mailto:booking@vizagtravels.com?subject=Activity Booking - Shopping Tour'
    }
  ],
  'Food Tours': [
    {
      id: 14,
      name: 'Street Food Tour',
      description: 'Explore the best street food spots in Vizag.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
      price: '₹1000 per person',
      duration: '3 hours',
      location: 'Various Locations',
      rating: 4.6,
      category: 'Food Tours',
      bookingUrl: 'mailto:booking@vizagtravels.com?subject=Activity Booking - Food Tour'
    },
    {
      id: 15,
      name: 'Seafood Dining Experience',
      description: 'Enjoy fresh seafood at top restaurants.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
      price: '₹1500 per person',
      duration: '2 hours',
      location: 'Beach Road',
      rating: 4.8,
      category: 'Food Tours',
      bookingUrl: 'mailto:booking@vizagtravels.com?subject=Activity Booking - Seafood Dining'
    }
  ],
  'City Tours': [
    {
      id: 16,
      name: 'Heritage Walk',
      description: 'Guided tour of historical landmarks in Vizag.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
      price: '₹500 per person',
      duration: '3 hours',
      location: 'Various Locations',
      rating: 4.5,
      category: 'City Tours',
      bookingUrl: 'mailto:booking@vizagtravels.com?subject=Activity Booking - Heritage Walk'
    },
    {
      id: 17,
      name: 'Night City Tour',
      description: 'Experience the city lights and nightlife of Vizag.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80',
      price: '₹800 per person',
      duration: '2 hours',
      location: 'City Wide',
      rating: 4.3,
      category: 'City Tours',
      bookingUrl: 'mailto:booking@vizagtravels.com?subject=Activity Booking - Night Tour'
    }
  ]
};

const categoryIcons = {
  'All Activities': <LocalActivityIcon />,
  'Adventure Sports': <SportsKabaddiIcon />,
  'Beach Activities': <BeachAccessIcon />,
  'Nature & Wildlife': <PetsIcon />,
  'Cultural Experiences': <LandscapeIcon />,
  'Water Parks': <PoolIcon />,
  'Shopping': <ShoppingCartIcon />,
  'Food Tours': <RestaurantIcon />,
  'City Tours': <DirectionsCarIcon />
};

const ActivityCard = ({ activity }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card 
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          cursor: 'pointer',
          '&:hover': {
            boxShadow: 6,
            transform: 'scale(1.02)',
            transition: 'transform 0.2s ease-in-out'
          }
        }}
        onClick={() => setOpen(true)}
      >
        <CardMedia
          component="img"
          height="200"
          image={activity.image}
          alt={activity.name}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {activity.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Rating value={activity.rating} precision={0.1} readOnly size="small" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              ({activity.rating})
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="body2" color="text.secondary">
              {activity.location}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <AccessTimeIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="body2" color="text.secondary">
              {activity.duration}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <AttachMoneyIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="body2" color="text.secondary">
              {activity.price}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" paragraph>
            {activity.description}
          </Typography>
          <Box sx={{ mt: 'auto', pt: 2 }}>
            <Button variant="outlined" onClick={() => setOpen(true)} sx={{ mr: 1 }}>
              View Details
            </Button>
            <Button 
              variant="contained" 
              href={activity.bookingUrl}
            >
              Book Now
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
        <DialogTitle>{activity.name}</DialogTitle>
        <DialogContent>
          <Box sx={{ p: 2 }}>
            <CardMedia
              component="img"
              height="300"
              image={activity.image}
              alt={activity.name}
              sx={{ borderRadius: 1, mb: 2 }}
            />
            <Typography variant="body1" paragraph>
              {activity.description}
            </Typography>
            {activity.highlights && (
              <>
                <Typography variant="h6" gutterBottom>
                  Highlights
                </Typography>
                <ul>
                  {activity.highlights.map((highlight, index) => (
                    <li key={index}>
                      <Typography variant="body1">{highlight}</Typography>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {activity.timings && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Timings
                </Typography>
                <Typography variant="body1">{activity.timings}</Typography>
              </Box>
            )}
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>
                Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body1">
                      Location: {activity.location}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <AccessTimeIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body1">
                      Duration: {activity.duration}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <AttachMoneyIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body1">
                      Price: {activity.price}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button 
            variant="contained" 
            href={activity.bookingUrl}
          >
            Book Now
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Activities');

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const getActivitiesByCategory = () => {
    if (selectedCategory === 'All Activities') {
      return Object.values(activities).flat();
    }
    return activities[selectedCategory] || [];
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Activities in Vizag
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
        Discover exciting activities and attractions in and around Visakhapatnam
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {categoryIcons['All Activities']}
                <Box sx={{ ml: 1 }}>All Activities</Box>
              </Box>
            }
            value="All Activities"
          />
          {Object.keys(activities).map((category) => (
            <Tab
              key={category}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {categoryIcons[category]}
                  <Box sx={{ ml: 1 }}>{category}</Box>
                </Box>
              }
              value={category}
            />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {getActivitiesByCategory().map((activity) => (
          <Grid item key={activity.id} xs={12} sm={6} md={4}>
            <ActivityCard activity={activity} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Activities;
