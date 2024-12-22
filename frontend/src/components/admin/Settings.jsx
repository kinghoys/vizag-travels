import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Divider,
  Card,
  CardContent,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputAdornment,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import EmailIcon from '@mui/icons-material/Email';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BackupIcon from '@mui/icons-material/Backup';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Settings = () => {
  const [settings, setSettings] = useState({
    siteName: 'Vizag Travels Hub',
    siteEmail: 'contact@vizagtravelshub.com',
    enableBookingNotifications: true,
    enableUserRegistration: true,
    enableAutoConfirmation: false,
    maintenanceMode: false,
    paymentGateway: 'stripe',
    currency: 'INR',
    backupFrequency: 'daily',
    maxFileSize: 5,
  });

  const [emailSettings, setEmailSettings] = useState({
    smtpHost: 'smtp.example.com',
    smtpPort: '587',
    smtpUser: 'notifications@vizagtravelshub.com',
    smtpPassword: '********',
    enableSSL: true,
  });

  const [openEmailDialog, setOpenEmailDialog] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSettingChange = (setting) => (event) => {
    setSettings({
      ...settings,
      [setting]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  };

  const handleEmailSettingChange = (setting) => (event) => {
    setEmailSettings({
      ...emailSettings,
      [setting]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  };

  const handleSaveSettings = () => {
    // Save settings to backend
    console.log('Settings saved:', settings);
    // Show success message
  };

  const renderGeneralSettings = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          General Settings
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Site Name"
              value={settings.siteName}
              onChange={handleSettingChange('siteName')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Site Email"
              type="email"
              value={settings.siteEmail}
              onChange={handleSettingChange('siteEmail')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Currency"
              value={settings.currency}
              onChange={handleSettingChange('currency')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Max File Size (MB)"
              type="number"
              value={settings.maxFileSize}
              onChange={handleSettingChange('maxFileSize')}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderFeatureToggles = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Feature Toggles
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText
              primary="Booking Notifications"
              secondary="Send email notifications for new bookings"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                checked={settings.enableBookingNotifications}
                onChange={handleSettingChange('enableBookingNotifications')}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SecurityIcon />
            </ListItemIcon>
            <ListItemText
              primary="User Registration"
              secondary="Allow new user registrations"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                checked={settings.enableUserRegistration}
                onChange={handleSettingChange('enableUserRegistration')}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText
              primary="Auto Confirmation"
              secondary="Automatically confirm bookings after payment"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                checked={settings.enableAutoConfirmation}
                onChange={handleSettingChange('enableAutoConfirmation')}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BackupIcon />
            </ListItemIcon>
            <ListItemText
              primary="Maintenance Mode"
              secondary="Put the website in maintenance mode"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                checked={settings.maintenanceMode}
                onChange={handleSettingChange('maintenanceMode')}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );

  const renderEmailSettings = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">
            Email Settings
          </Typography>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={() => setOpenEmailDialog(true)}
          >
            Configure SMTP
          </Button>
        </Box>
        <List>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText
              primary="SMTP Configuration"
              secondary={`${emailSettings.smtpHost}:${emailSettings.smtpPort}`}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        System Settings
      </Typography>

      <Alert severity="info" sx={{ mb: 3 }}>
        These settings affect how the system operates. Please be careful when making changes.
      </Alert>

      {renderGeneralSettings()}
      {renderFeatureToggles()}
      {renderEmailSettings()}

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          onClick={handleSaveSettings}
          sx={{
            backgroundColor: '#FF4E50',
            '&:hover': {
              backgroundColor: '#E63E40'
            }
          }}
        >
          Save Settings
        </Button>
      </Box>

      {/* Email Settings Dialog */}
      <Dialog open={openEmailDialog} onClose={() => setOpenEmailDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Configure SMTP Settings</DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="SMTP Host"
                value={emailSettings.smtpHost}
                onChange={handleEmailSettingChange('smtpHost')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="SMTP Port"
                value={emailSettings.smtpPort}
                onChange={handleEmailSettingChange('smtpPort')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="SMTP Username"
                value={emailSettings.smtpUser}
                onChange={handleEmailSettingChange('smtpUser')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="SMTP Password"
                type={showPassword ? 'text' : 'password'}
                value={emailSettings.smtpPassword}
                onChange={handleEmailSettingChange('smtpPassword')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={emailSettings.enableSSL}
                    onChange={handleEmailSettingChange('enableSSL')}
                  />
                }
                label="Enable SSL/TLS"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEmailDialog(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={() => {
              // Save email settings
              setOpenEmailDialog(false);
            }}
            sx={{
              backgroundColor: '#FF4E50',
              '&:hover': {
                backgroundColor: '#E63E40'
              }
            }}
          >
            Save SMTP Settings
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Settings;
