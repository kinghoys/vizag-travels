import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Switch,
  FormControlLabel,
  InputAdornment,
  LinearProgress,
  Alert,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';

// Mock campaign data
const mockCampaigns = [
  {
    id: 1,
    name: 'Summer Special',
    type: 'discount',
    status: 'active',
    startDate: '2024-01-01',
    endDate: '2024-02-28',
    discount: 20,
    target: 'all',
    channels: ['email', 'whatsapp', 'notification'],
    performance: {
      views: 1500,
      clicks: 450,
      conversions: 75,
    },
  },
  {
    id: 2,
    name: 'Early Bird Booking',
    type: 'early_bird',
    status: 'scheduled',
    startDate: '2024-03-01',
    endDate: '2024-04-30',
    discount: 15,
    target: 'new_users',
    channels: ['email', 'notification'],
    performance: {
      views: 0,
      clicks: 0,
      conversions: 0,
    },
  },
  {
    id: 3,
    name: 'Festival Package',
    type: 'special',
    status: 'ended',
    startDate: '2023-12-01',
    endDate: '2023-12-31',
    discount: 25,
    target: 'premium',
    channels: ['email', 'whatsapp', 'notification'],
    performance: {
      views: 2500,
      clicks: 800,
      conversions: 120,
    },
  },
];

const CampaignManager = () => {
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [campaignForm, setCampaignForm] = useState({
    name: '',
    type: 'discount',
    startDate: null,
    endDate: null,
    discount: 0,
    target: 'all',
    channels: [],
  });

  const handleCreateCampaign = () => {
    setSelectedCampaign(null);
    setCampaignForm({
      name: '',
      type: 'discount',
      startDate: null,
      endDate: null,
      discount: 0,
      target: 'all',
      channels: [],
    });
    setOpenDialog(true);
  };

  const handleEditCampaign = (campaign) => {
    setSelectedCampaign(campaign);
    setCampaignForm({
      name: campaign.name,
      type: campaign.type,
      startDate: new Date(campaign.startDate),
      endDate: new Date(campaign.endDate),
      discount: campaign.discount,
      target: campaign.target,
      channels: campaign.channels,
    });
    setOpenDialog(true);
  };

  const handleSaveCampaign = () => {
    // Implementation for saving campaign
    console.log('Saving campaign:', campaignForm);
    setOpenDialog(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'scheduled':
        return 'info';
      case 'ended':
        return 'error';
      default:
        return 'default';
    }
  };

  const getChannelIcon = (channel) => {
    switch (channel) {
      case 'email':
        return <EmailIcon />;
      case 'whatsapp':
        return <WhatsAppIcon />;
      case 'notification':
        return <NotificationsIcon />;
      default:
        return null;
    }
  };

  const renderCampaignStats = () => (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Active Campaigns
            </Typography>
            <Typography variant="h4">
              {campaigns.filter(c => c.status === 'active').length}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Currently running
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Conversions
            </Typography>
            <Typography variant="h4">
              {campaigns.reduce((sum, c) => sum + c.performance.conversions, 0)}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <TrendingUpIcon color="success" sx={{ mr: 1 }} />
              <Typography variant="body2" color="success.main">
                +12.5% vs last month
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Average Conversion Rate
            </Typography>
            <Typography variant="h4">15.8%</Typography>
            <LinearProgress
              variant="determinate"
              value={15.8}
              sx={{ mt: 1 }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Reach
            </Typography>
            <Typography variant="h4">
              {campaigns.reduce((sum, c) => sum + c.performance.views, 0)}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <PeopleIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                Unique visitors
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const renderCampaignTable = () => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Campaign Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Target</TableCell>
            <TableCell>Channels</TableCell>
            <TableCell>Performance</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell>{campaign.name}</TableCell>
              <TableCell>
                <Chip
                  label={campaign.type.replace('_', ' ')}
                  size="small"
                />
              </TableCell>
              <TableCell>
                <Chip
                  label={campaign.status}
                  color={getStatusColor(campaign.status)}
                  size="small"
                />
              </TableCell>
              <TableCell>
                {campaign.startDate} to {campaign.endDate}
              </TableCell>
              <TableCell>{campaign.target}</TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {campaign.channels.map((channel) => (
                    <IconButton key={channel} size="small">
                      {getChannelIcon(channel)}
                    </IconButton>
                  ))}
                </Box>
              </TableCell>
              <TableCell>
                <Box>
                  <Typography variant="body2">
                    Views: {campaign.performance.views}
                  </Typography>
                  <Typography variant="body2">
                    Clicks: {campaign.performance.clicks}
                  </Typography>
                  <Typography variant="body2">
                    Conversions: {campaign.performance.conversions}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <IconButton
                  size="small"
                  onClick={() => handleEditCampaign(campaign)}
                >
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
  );

  const renderCampaignDialog = () => (
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>
        {selectedCampaign ? 'Edit Campaign' : 'Create New Campaign'}
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Campaign Name"
              value={campaignForm.name}
              onChange={(e) =>
                setCampaignForm({ ...campaignForm, name: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Campaign Type</InputLabel>
              <Select
                value={campaignForm.type}
                label="Campaign Type"
                onChange={(e) =>
                  setCampaignForm({ ...campaignForm, type: e.target.value })
                }
              >
                <MenuItem value="discount">Discount</MenuItem>
                <MenuItem value="early_bird">Early Bird</MenuItem>
                <MenuItem value="special">Special Offer</MenuItem>
                <MenuItem value="seasonal">Seasonal</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Target Audience</InputLabel>
              <Select
                value={campaignForm.target}
                label="Target Audience"
                onChange={(e) =>
                  setCampaignForm({ ...campaignForm, target: e.target.value })
                }
              >
                <MenuItem value="all">All Users</MenuItem>
                <MenuItem value="new_users">New Users</MenuItem>
                <MenuItem value="premium">Premium Users</MenuItem>
                <MenuItem value="inactive">Inactive Users</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Start Date"
                value={campaignForm.startDate}
                onChange={(date) =>
                  setCampaignForm({ ...campaignForm, startDate: date })
                }
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="End Date"
                value={campaignForm.endDate}
                onChange={(date) =>
                  setCampaignForm({ ...campaignForm, endDate: date })
                }
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label="Discount Percentage"
              value={campaignForm.discount}
              onChange={(e) =>
                setCampaignForm({
                  ...campaignForm,
                  discount: parseInt(e.target.value, 10),
                })
              }
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Communication Channels
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={campaignForm.channels.includes('email')}
                  onChange={(e) => {
                    const channels = e.target.checked
                      ? [...campaignForm.channels, 'email']
                      : campaignForm.channels.filter((c) => c !== 'email');
                    setCampaignForm({ ...campaignForm, channels });
                  }}
                />
              }
              label="Email"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={campaignForm.channels.includes('whatsapp')}
                  onChange={(e) => {
                    const channels = e.target.checked
                      ? [...campaignForm.channels, 'whatsapp']
                      : campaignForm.channels.filter((c) => c !== 'whatsapp');
                    setCampaignForm({ ...campaignForm, channels });
                  }}
                />
              }
              label="WhatsApp"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={campaignForm.channels.includes('notification')}
                  onChange={(e) => {
                    const channels = e.target.checked
                      ? [...campaignForm.channels, 'notification']
                      : campaignForm.channels.filter((c) => c !== 'notification');
                    setCampaignForm({ ...campaignForm, channels });
                  }}
                />
              }
              label="Push Notification"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleSaveCampaign}
          sx={{
            backgroundColor: '#FF4E50',
            '&:hover': {
              backgroundColor: '#E63E40'
            }
          }}
        >
          {selectedCampaign ? 'Update Campaign' : 'Create Campaign'}
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5">Campaign Manager</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleCreateCampaign}
          sx={{
            backgroundColor: '#FF4E50',
            '&:hover': {
              backgroundColor: '#E63E40'
            }
          }}
        >
          Create Campaign
        </Button>
      </Box>

      {renderCampaignStats()}

      <Alert severity="info" sx={{ mb: 3 }}>
        Active campaigns are automatically monitored for performance metrics.
        You can adjust campaign parameters anytime during the campaign period.
      </Alert>

      {renderCampaignTable()}
      {renderCampaignDialog()}
    </Box>
  );
};

export default CampaignManager;
