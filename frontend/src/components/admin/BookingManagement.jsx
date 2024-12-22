import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';

// Mock data for charts
const bookingTrends = [
  { month: 'Jan', bookings: 65 },
  { month: 'Feb', bookings: 75 },
  { month: 'Mar', bookings: 85 },
  { month: 'Apr', bookings: 95 },
  { month: 'May', bookings: 120 },
  { month: 'Jun', bookings: 150 },
];

const packageDistribution = [
  { name: 'Beach Packages', value: 35 },
  { name: 'Adventure Tours', value: 25 },
  { name: 'Cultural Tours', value: 20 },
  { name: 'Luxury Stays', value: 20 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Mock bookings data
const mockBookings = [
  {
    id: 'BK001',
    customerName: 'John Doe',
    package: 'Magical Maldives',
    date: '2024-01-15',
    amount: 36300,
    status: 'confirmed',
    email: 'john@example.com',
    phone: '+91 9876543210',
    travelers: 2
  },
  {
    id: 'BK002',
    customerName: 'Jane Smith',
    package: 'Araku Valley Adventure',
    date: '2024-01-20',
    amount: 24500,
    status: 'pending',
    email: 'jane@example.com',
    phone: '+91 9876543211',
    travelers: 4
  },
  // Add more mock bookings as needed
];

const BookingManagement = () => {
  const [bookings, setBookings] = useState(mockBookings);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');

  const handleStatusChange = (bookingId, newStatus) => {
    setBookings(bookings.map(booking =>
      booking.id === bookingId ? { ...booking, status: newStatus } : booking
    ));
  };

  const handleOpenDialog = (booking) => {
    setSelectedBooking(booking);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedBooking(null);
  };

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

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = (
      booking.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.package.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const renderBookingDetails = (booking) => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle2" gutterBottom>Customer Details</Typography>
        <Typography>Name: {booking.customerName}</Typography>
        <Typography>Email: {booking.email}</Typography>
        <Typography>Phone: {booking.phone}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle2" gutterBottom>Booking Details</Typography>
        <Typography>Package: {booking.package}</Typography>
        <Typography>Date: {new Date(booking.date).toLocaleDateString()}</Typography>
        <Typography>Travelers: {booking.travelers}</Typography>
        <Typography>Amount: ₹{booking.amount.toLocaleString()}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle2" gutterBottom>Status</Typography>
        <FormControl fullWidth>
          <InputLabel>Booking Status</InputLabel>
          <Select
            value={booking.status}
            label="Booking Status"
            onChange={(e) => handleStatusChange(booking.id, e.target.value)}
          >
            <MenuItem value="confirmed">Confirmed</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="cancelled">Cancelled</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Booking Management
      </Typography>

      {/* Analytics Section */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Booking Trends
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={bookingTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="bookings" stroke="#FF4E50" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Package Distribution
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={packageDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {packageDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Filters and Search */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              placeholder="Search bookings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Status Filter</InputLabel>
              <Select
                value={statusFilter}
                label="Status Filter"
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <MenuItem value="all">All Bookings</MenuItem>
                <MenuItem value="confirmed">Confirmed</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="cancelled">Cancelled</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      {/* Bookings Table */}
      <TableContainer component={Paper}>
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
            {filteredBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.customerName}</TableCell>
                <TableCell>{booking.package}</TableCell>
                <TableCell>{new Date(booking.date).toLocaleDateString()}</TableCell>
                <TableCell>₹{booking.amount.toLocaleString()}</TableCell>
                <TableCell>
                  <Chip
                    label={booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    color={getStatusColor(booking.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={() => handleOpenDialog(booking)}
                    color="primary"
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => {/* Handle sending email */}}
                  >
                    <EmailIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this booking?')) {
                        setBookings(bookings.filter(b => b.id !== booking.id));
                      }
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Booking Details Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          Booking Details - {selectedBooking?.id}
        </DialogTitle>
        <DialogContent dividers>
          {selectedBooking && renderBookingDetails(selectedBooking)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
          <Button
            variant="contained"
            onClick={() => {/* Handle sending confirmation email */}}
            startIcon={<EmailIcon />}
            sx={{
              backgroundColor: '#FF4E50',
              '&:hover': {
                backgroundColor: '#E63E40'
              }
            }}
          >
            Send Email
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BookingManagement;
