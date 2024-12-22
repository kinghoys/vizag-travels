import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  Grid,
  Switch,
  FormControlLabel,
  Alert,
  CircularProgress,
  Divider
} from '@mui/material';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { user, updateProfile, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    preferences: user?.preferences || {
      theme: 'light',
      notifications: true,
      newsletter: true
    }
  });
  const [success, setSuccess] = useState(false);
  const [localError, setLocalError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePreferenceChange = (name) => (event) => {
    setFormData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [name]: event.target.checked
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setLocalError('');

    try {
      await updateProfile(formData);
      setSuccess(true);
    } catch (err) {
      setLocalError(err.message);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar
            src={user?.avatar}
            sx={{ width: 100, height: 100, mr: 3 }}
          />
          <Box>
            <Typography variant="h4" gutterBottom>
              Profile Settings
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Manage your account settings and preferences
            </Typography>
          </Box>
        </Box>

        {(error || localError) && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error || localError}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Profile updated successfully!
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>
                Preferences
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.preferences.notifications}
                    onChange={handlePreferenceChange('notifications')}
                  />
                }
                label="Email Notifications"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.preferences.newsletter}
                    onChange={handlePreferenceChange('newsletter')}
                  />
                }
                label="Subscribe to Newsletter"
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={loading}
                sx={{ mt: 2 }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Update Profile'
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Profile;
