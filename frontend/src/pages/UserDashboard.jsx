import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  IconButton,
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupIcon from '@mui/icons-material/Group';
import ReceiptIcon from '@mui/icons-material/Receipt';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import PersonIcon from '@mui/icons-material/Person';

// Mock data for demonstration
const mockBookings = [
  {
    id: 'BK001',
    packageName: 'Magical Maldives',
    status: 'upcoming',
    date: '2024-01-15',
    duration: '5 Days',
    travelers: 2,
    amount: 36300,
    location: 'Maldives'
  },
  {
    id: 'BK002',
    packageName: 'Araku Valley Adventure',
    status: 'completed',
    date: '2023-12-01',
    duration: '3 Days',
    travelers: 4,
    amount: 24500,
    location: 'Araku Valley'
  }
];

const UserDashboard = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'primary';
      case 'completed':
        return 'success';
      case 'cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  const renderBookingCard = (booking) => (
    <Card sx={{ mb: 2 }} key={booking.id}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h6" component="div">
            {booking.packageName}
          </Typography>
          <Chip
            label={booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            color={getStatusColor(booking.status)}
            size="small"
          />
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Travel Date"
                  secondary={new Date(booking.date).toLocaleDateString()}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Destination"
                  secondary={booking.location}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Travelers"
                  secondary={`${booking.travelers} Person(s)`}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ReceiptIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Amount"
                  secondary={`₹${booking.amount}`}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
        <Button
          startIcon={<DownloadIcon />}
          size="small"
        >
          Download Invoice
        </Button>
        {booking.status === 'upcoming' && (
          <>
            <Button
              startIcon={<EditIcon />}
              size="small"
              color="primary"
            >
              Modify
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              size="small"
              color="error"
            >
              Cancel
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );

  const renderProfile = () => (
    <Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar sx={{ width: 80, height: 80, mr: 2, bgcolor: '#FF4E50' }}>
            <PersonIcon sx={{ fontSize: 40 }} />
          </Avatar>
          <Box>
            <Typography variant="h5">John Doe</Typography>
            <Typography color="text.secondary">john.doe@example.com</Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" gutterBottom>
              Phone Number
            </Typography>
            <Typography>+91 9876543210</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" gutterBottom>
              Location
            </Typography>
            <Typography>Visakhapatnam, India</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              sx={{ mt: 2 }}
            >
              Edit Profile
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Travel Preferences
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              Preferred Destinations
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <Chip label="Beach" />
              <Chip label="Mountains" />
              <Chip label="Historical Places" />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              Travel Style
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <Chip label="Adventure" />
              <Chip label="Luxury" />
              <Chip label="Cultural" />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: '#f8fafc' }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          My Dashboard
        </Typography>

        <Paper sx={{ mb: 3 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="My Bookings" />
            <Tab label="Profile" />
          </Tabs>
        </Paper>

        {tabValue === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Upcoming & Recent Bookings
              </Typography>
              {mockBookings.map(renderBookingCard)}
            </Grid>
          </Grid>
        )}

        {tabValue === 1 && renderProfile()}
      </Container>
    </Box>
  );
};

export default UserDashboard;
