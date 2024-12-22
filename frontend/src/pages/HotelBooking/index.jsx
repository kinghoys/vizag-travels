import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import HotelIcon from '@mui/icons-material/Hotel';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import CampaignIcon from '@mui/icons-material/Campaign';

const hotels = [
  {
    id: 1,
    name: 'Araku Rajadhani Grand Hotel',
    location: 'Araku',
    rating: 4.0,
    basePrice: 2600,
    rooms: [
      {
        type: 'Ac Deluxe Room',
        capacity: '2 Adults + 2 Kids',
        extraPerson: 700,
        price: 3500,
        hasAC: true
      },
      {
        type: 'Non Ac Deluxe Room',
        capacity: '2 Adults + 2 Kids',
        extraPerson: 500,
        price: 2500,
        hasAC: false
      },
      {
        type: 'Ac Suite Room',
        capacity: '2 Adults + 2 Kids',
        extraPerson: 800,
        price: 4500,
        hasAC: true
      }
    ],
    terms: [
      'Check in Time 10 Am',
      'Check out Time 9 Am'
    ]
  },
  {
    id: 2,
    name: 'Vizag Sea Esta Hotel',
    location: 'Vizag',
    rating: 4.2,
    basePrice: 2500,
    rooms: [
      {
        type: 'Ac Deluxe Room',
        capacity: '2 Adults + 2 Kids',
        extraPerson: 700,
        price: 3500,
        hasAC: true
      },
      {
        type: 'Non Ac Deluxe Room',
        capacity: '2 Adults + 2 Kids',
        extraPerson: 500,
        price: 2500,
        hasAC: false
      },
      {
        type: 'Ac Suite Room',
        capacity: '2 Adults + 2 Kids',
        extraPerson: 800,
        price: 4500,
        hasAC: true
      }
    ],
    terms: [
      'Check in Time 10 Am',
      'Check out Time 9 Am'
    ]
  },
  {
    id: 3,
    name: 'Lambasinghi Jam Jam Resort',
    location: 'Lammasinghi',
    rating: 4.0,
    basePrice: 1200,
    rooms: [
      {
        type: 'Camping',
        capacity: '1 Person',
        price: 1200,
        description: 'Including Fire Camp & Breakfast',
        isCamping: true
      }
    ],
    terms: [
      'Check in Time 10 Am',
      'Check out Time 9 Am',
      'No Hot Water',
      'Fire Camp Included',
      'Breakfast Included'
    ]
  }
];

const HotelBooking = () => {
  const handleBookNow = (hotel, room) => {
    // Here you can implement the booking logic or navigation
    console.log('Booking:', { hotel: hotel.name, room: room.type });
    window.location.href = `mailto:booking@vizagtravels.com?subject=Hotel Booking Request - ${hotel.name}&body=I would like to book ${room.type} at ${hotel.name}.`;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Hotel Booking
      </Typography>

      <Grid container spacing={3}>
        {hotels.map((hotel) => (
          <Grid item xs={12} key={hotel.id}>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {hotel.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="subtitle1" color="text.secondary">
                      {hotel.location}
                    </Typography>
                    <Box sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
                      <Typography variant="subtitle1" color="primary">
                        {hotel.rating} ★
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Room Types */}
                <Grid container spacing={2}>
                  {hotel.rooms.map((room) => (
                    <Grid item xs={12} key={room.type}>
                      <Box sx={{ 
                        p: 2, 
                        border: '1px solid', 
                        borderColor: 'divider',
                        borderRadius: 1,
                        '&:hover': {
                          boxShadow: 1,
                          borderColor: 'primary.main'
                        }
                      }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                          <Typography variant="h6">
                            {room.type}
                          </Typography>
                          <Typography variant="h6" color="primary">
                            ₹{room.price}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, flexWrap: 'wrap', gap: 1 }}>
                          <Chip
                            icon={<HotelIcon />}
                            label={room.capacity}
                            size="small"
                            variant="outlined"
                          />
                          {room.hasAC && (
                            <Chip
                              icon={<AcUnitIcon />}
                              label="AC"
                              size="small"
                              variant="outlined"
                              color="primary"
                            />
                          )}
                          {room.isCamping && (
                            <>
                              <Chip
                                icon={<CampaignIcon />}
                                label="Fire Camp"
                                size="small"
                                variant="outlined"
                                color="primary"
                              />
                              <Chip
                                icon={<LocalCafeIcon />}
                                label="Breakfast"
                                size="small"
                                variant="outlined"
                                color="primary"
                              />
                            </>
                          )}
                        </Box>
                        {room.extraPerson && (
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            Extra Person: ₹{room.extraPerson}
                          </Typography>
                        )}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                          <Button 
                            variant="contained" 
                            onClick={() => handleBookNow(hotel, room)}
                            sx={{ minWidth: 120 }}
                          >
                            Book Now
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Divider sx={{ my: 2 }} />

                {/* Terms and Conditions */}
                <Box>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Terms and Conditions:
                  </Typography>
                  <List dense>
                    {hotel.terms.map((term, index) => (
                      <ListItem key={index} sx={{ py: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={term} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HotelBooking;
