import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AuthModal = ({ open, onClose }) => {
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for auth logic
    console.log('Auth data:', formData);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="auth-modal-title"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 400 },
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <IconButton
          sx={{ position: 'absolute', right: 8, top: 8 }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h5" component="h2" align="center" gutterBottom>
          Welcome to Vizag Travels Hub
        </Typography>

        <Tabs value={tab} onChange={handleTabChange} centered sx={{ mb: 3 }}>
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>

        <form onSubmit={handleSubmit}>
          {tab === 1 && (
            <TextField
              fullWidth
              label="Full Name"
              value={formData.name}
              onChange={handleInputChange('name')}
              margin="normal"
              required={tab === 1}
            />
          )}
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleInputChange('email')}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleInputChange('password')}
            margin="normal"
            required
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#FF4E50',
              '&:hover': {
                backgroundColor: '#E63E40'
              }
            }}
          >
            {tab === 0 ? 'Login' : 'Sign Up'}
          </Button>
        </form>

        {tab === 0 && (
          <Typography
            variant="body2"
            align="center"
            sx={{ cursor: 'pointer', color: 'primary.main' }}
            onClick={() => setTab(1)}
          >
            Don't have an account? Sign up
          </Typography>
        )}
        {tab === 1 && (
          <Typography
            variant="body2"
            align="center"
            sx={{ cursor: 'pointer', color: 'primary.main' }}
            onClick={() => setTab(0)}
          >
            Already have an account? Login
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default AuthModal;
