import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  IconButton,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  TextField,
  InputAdornment,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import LuggageIcon from '@mui/icons-material/Luggage';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PendingIcon from '@mui/icons-material/Pending';
import BackupIcon from '@mui/icons-material/Backup';
import BarChartIcon from '@mui/icons-material/BarChart';
import FeedbackIcon from '@mui/icons-material/Feedback';
import CampaignIcon from '@mui/icons-material/Campaign';
import ArticleIcon from '@mui/icons-material/Article';

import PackageManagement from '../../components/admin/PackageManagement';
import BookingManagement from '../../components/admin/BookingManagement';
import UserManagement from '../../components/admin/UserManagement';
import Settings from '../../components/admin/Settings';
import DataManagement from '../../components/admin/DataManagement';
import NotificationCenter from '../../components/common/NotificationCenter';
import Analytics from '../../components/admin/Analytics';
import FeedbackManagement from '../../components/admin/FeedbackManagement';
import CampaignManager from '../../components/admin/CampaignManager';
import ContentManager from '../../components/admin/ContentManager';

// Mock data
const mockStats = {
  totalBookings: 156,
  newUsers: 45,
  revenue: 450000,
  activePackages: 24
};

const mockBookings = [
  {
    id: 'BK001',
    customerName: 'John Doe',
    package: 'Magical Maldives',
    date: '2024-01-15',
    amount: 36300,
    status: 'confirmed'
  },
  {
    id: 'BK002',
    customerName: 'Jane Smith',
    package: 'Araku Valley Adventure',
    date: '2024-01-20',
    amount: 24500,
    status: 'pending'
  },
  // Add more mock bookings
];

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircleIcon />;
      case 'pending':
        return <PendingIcon />;
      case 'cancelled':
        return <CancelIcon />;
      default:
        return null;
    }
  };

  const renderDashboard = () => (
    <Box>
      <Grid container spacing={3}>
        {/* Stats Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#FF4E50', color: 'white' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <BookOnlineIcon sx={{ fontSize: 40, mr: 1 }} />
                <Typography variant="h6">Total Bookings</Typography>
              </Box>
              <Typography variant="h4">{mockStats.totalBookings}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                +12% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#2196F3', color: 'white' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PersonAddIcon sx={{ fontSize: 40, mr: 1 }} />
                <Typography variant="h6">New Users</Typography>
              </Box>
              <Typography variant="h4">{mockStats.newUsers}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                +5% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#4CAF50', color: 'white' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AttachMoneyIcon sx={{ fontSize: 40, mr: 1 }} />
                <Typography variant="h6">Revenue</Typography>
              </Box>
              <Typography variant="h4">₹{mockStats.revenue.toLocaleString()}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                +8% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: '#FF9800', color: 'white' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LuggageIcon sx={{ fontSize: 40, mr: 1 }} />
                <Typography variant="h6">Active Packages</Typography>
              </Box>
              <Typography variant="h4">{mockStats.activePackages}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                +2 new packages
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Bookings */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6">Recent Bookings</Typography>
              <TextField
                size="small"
                placeholder="Search bookings..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Booking ID</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>Package</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>{booking.id}</TableCell>
                      <TableCell>{booking.customerName}</TableCell>
                      <TableCell>{booking.package}</TableCell>
                      <TableCell>{new Date(booking.date).toLocaleDateString()}</TableCell>
                      <TableCell>₹{booking.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <Chip
                          icon={getStatusIcon(booking.status)}
                          label={booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          color={getStatusColor(booking.status)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton size="small" color="primary">
                          <EditIcon />
                        </IconButton>
                        <IconButton size="small" color="error">
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Revenue Chart */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Revenue Overview
            </Typography>
            {/* Add chart component here */}
            <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography color="text.secondary">Revenue Chart Placeholder</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Popular Packages */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Popular Packages
            </Typography>
            <List>
              {['Magical Maldives', 'Araku Valley Adventure', 'Beach Paradise'].map((pkg, index) => (
                <ListItem
                  key={pkg}
                  secondaryAction={
                    <Typography color="primary" variant="subtitle2">
                      {30 - index * 5} bookings
                    </Typography>
                  }
                >
                  <ListItemIcon>
                    <Avatar sx={{ bgcolor: '#FF4E50' }}>{index + 1}</Avatar>
                  </ListItemIcon>
                  <ListItemText primary={pkg} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f8fafc' }}>
      {/* Sidebar */}
      <Paper
        sx={{
          width: 240,
          p: 2,
          display: { xs: 'none', sm: 'block' },
          position: 'fixed',
          height: '100vh',
          overflowY: 'auto'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
          <Typography variant="h6" sx={{ color: '#FF4E50' }}>
            Admin Panel
          </Typography>
          <NotificationCenter />
        </Box>
        <List>
          <ListItemButton
            selected={selectedSection === 'dashboard'}
            onClick={() => setSelectedSection('dashboard')}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton
            selected={selectedSection === 'analytics'}
            onClick={() => setSelectedSection('analytics')}
          >
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Analytics" />
          </ListItemButton>
          <ListItemButton
            selected={selectedSection === 'bookings'}
            onClick={() => setSelectedSection('bookings')}
          >
            <ListItemIcon>
              <BookOnlineIcon />
            </ListItemIcon>
            <ListItemText primary="Bookings" />
          </ListItemButton>
          <ListItemButton
            selected={selectedSection === 'packages'}
            onClick={() => setSelectedSection('packages')}
          >
            <ListItemIcon>
              <LuggageIcon />
            </ListItemIcon>
            <ListItemText primary="Packages" />
          </ListItemButton>
          <ListItemButton
            selected={selectedSection === 'users'}
            onClick={() => setSelectedSection('users')}
          >
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
          <ListItemButton
            selected={selectedSection === 'feedback'}
            onClick={() => setSelectedSection('feedback')}
          >
            <ListItemIcon>
              <FeedbackIcon />
            </ListItemIcon>
            <ListItemText primary="Feedback" />
          </ListItemButton>
          <ListItemButton
            selected={selectedSection === 'campaigns'}
            onClick={() => setSelectedSection('campaigns')}
          >
            <ListItemIcon>
              <CampaignIcon />
            </ListItemIcon>
            <ListItemText primary="Campaigns" />
          </ListItemButton>
          <ListItemButton
            selected={selectedSection === 'content'}
            onClick={() => setSelectedSection('content')}
          >
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Content" />
          </ListItemButton>
          <ListItemButton
            selected={selectedSection === 'data'}
            onClick={() => setSelectedSection('data')}
          >
            <ListItemIcon>
              <BackupIcon />
            </ListItemIcon>
            <ListItemText primary="Data Management" />
          </ListItemButton>
          <Divider sx={{ my: 2 }} />
          <ListItemButton
            selected={selectedSection === 'settings'}
            onClick={() => setSelectedSection('settings')}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Paper>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: { sm: '240px' },
          width: { sm: `calc(100% - 240px)` }
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 4 }}>
          {selectedSection === 'dashboard' && renderDashboard()}
          {selectedSection === 'analytics' && <Analytics />}
          {selectedSection === 'packages' && <PackageManagement />}
          {selectedSection === 'bookings' && <BookingManagement />}
          {selectedSection === 'users' && <UserManagement />}
          {selectedSection === 'feedback' && <FeedbackManagement />}
          {selectedSection === 'campaigns' && <CampaignManager />}
          {selectedSection === 'content' && <ContentManager />}
          {selectedSection === 'data' && <DataManagement />}
          {selectedSection === 'settings' && <Settings />}
        </Container>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
