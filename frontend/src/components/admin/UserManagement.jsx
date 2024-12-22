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
  Avatar,
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
  Card,
  CardContent,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

// Mock data for user statistics
const userStats = {
  totalUsers: 256,
  activeUsers: 230,
  newUsersThisMonth: 45,
  premiumUsers: 78
};

const userActivityData = [
  { month: 'Jan', signups: 25, bookings: 35 },
  { month: 'Feb', signups: 30, bookings: 40 },
  { month: 'Mar', signups: 35, bookings: 45 },
  { month: 'Apr', signups: 40, bookings: 50 },
  { month: 'May', signups: 45, bookings: 55 },
  { month: 'Jun', signups: 50, bookings: 60 },
];

// Mock users data
const mockUsers = [
  {
    id: 'USR001',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
    joinDate: '2023-12-01',
    status: 'active',
    role: 'user',
    totalBookings: 5,
    lastActive: '2024-01-15'
  },
  {
    id: 'USR002',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+91 9876543211',
    joinDate: '2023-12-15',
    status: 'active',
    role: 'admin',
    totalBookings: 3,
    lastActive: '2024-01-14'
  },
  // Add more mock users
];

const UserManagement = () => {
  const [users, setUsers] = useState(mockUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const handleOpenDialog = (user = null) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedUser(null);
  };

  const handleStatusChange = (userId, newStatus) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, status: newStatus } : user
    ));
  };

  const handleRoleChange = (userId, newRole) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, role: newRole } : user
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'inactive':
        return 'warning';
      case 'blocked':
        return 'error';
      default:
        return 'default';
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = (
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const renderUserForm = () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Full Name"
          defaultValue={selectedUser?.name || ''}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          defaultValue={selectedUser?.email || ''}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Phone"
          defaultValue={selectedUser?.phone || ''}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel>Role</InputLabel>
          <Select
            value={selectedUser?.role || 'user'}
            label="Role"
            onChange={(e) => selectedUser && handleRoleChange(selectedUser.id, e.target.value)}
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="manager">Manager</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            value={selectedUser?.status || 'active'}
            label="Status"
            onChange={(e) => selectedUser && handleStatusChange(selectedUser.id, e.target.value)}
          >
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
            <MenuItem value="blocked">Blocked</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        User Management
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <GroupIcon sx={{ fontSize: 40, mr: 1, color: '#FF4E50' }} />
                <Typography variant="h6">Total Users</Typography>
              </Box>
              <Typography variant="h4">{userStats.totalUsers}</Typography>
              <Typography variant="body2" color="text.secondary">
                {userStats.activeUsers} active users
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUpIcon sx={{ fontSize: 40, mr: 1, color: '#4CAF50' }} />
                <Typography variant="h6">New Users</Typography>
              </Box>
              <Typography variant="h4">{userStats.newUsersThisMonth}</Typography>
              <Typography variant="body2" color="text.secondary">
                this month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SupervisorAccountIcon sx={{ fontSize: 40, mr: 1, color: '#2196F3' }} />
                <Typography variant="h6">Premium Users</Typography>
              </Box>
              <Typography variant="h4">{userStats.premiumUsers}</Typography>
              <Typography variant="body2" color="text.secondary">
                active subscriptions
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* User Activity Chart */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          User Activity
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={userActivityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="signups" fill="#FF4E50" name="New Signups" />
            <Bar dataKey="bookings" fill="#2196F3" name="Bookings" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      {/* Filters and Search */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              placeholder="Search users..."
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
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel>Role Filter</InputLabel>
              <Select
                value={roleFilter}
                label="Role Filter"
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <MenuItem value="all">All Roles</MenuItem>
                <MenuItem value="user">Users</MenuItem>
                <MenuItem value="admin">Admins</MenuItem>
                <MenuItem value="manager">Managers</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel>Status Filter</InputLabel>
              <Select
                value={statusFilter}
                label="Status Filter"
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <MenuItem value="all">All Status</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
                <MenuItem value="blocked">Blocked</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<PersonAddIcon />}
              onClick={() => handleOpenDialog()}
              sx={{
                backgroundColor: '#FF4E50',
                '&:hover': {
                  backgroundColor: '#E63E40'
                }
              }}
            >
              Add User
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Users Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Join Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ mr: 1, bgcolor: '#FF4E50' }}>
                      {user.name.charAt(0)}
                    </Avatar>
                    {user.name}
                  </Box>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Chip
                    label={user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    color={user.role === 'admin' ? 'primary' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    color={getStatusColor(user.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>{new Date(user.joinDate).toLocaleDateString()}</TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => handleOpenDialog(user)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this user?')) {
                        setUsers(users.filter(u => u.id !== user.id));
                      }
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color={user.status === 'blocked' ? 'success' : 'error'}
                    onClick={() => handleStatusChange(
                      user.id,
                      user.status === 'blocked' ? 'active' : 'blocked'
                    )}
                  >
                    {user.status === 'blocked' ? <CheckCircleIcon /> : <BlockIcon />}
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit User Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedUser ? 'Edit User' : 'Add New User'}
        </DialogTitle>
        <DialogContent dividers>
          {renderUserForm()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button
            variant="contained"
            onClick={() => {
              // Handle save
              handleCloseDialog();
            }}
            sx={{
              backgroundColor: '#FF4E50',
              '&:hover': {
                backgroundColor: '#E63E40'
              }
            }}
          >
            {selectedUser ? 'Update User' : 'Add User'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserManagement;
