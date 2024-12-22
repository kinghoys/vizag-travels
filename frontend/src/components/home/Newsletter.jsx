import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Alert, Snackbar } from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    setShowSuccess(true);
    setEmail('');
  };

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: '#F8FAFC',
        backgroundImage: 'linear-gradient(135deg, #FF4E50 0%, #E63E40 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 2
              }}
            >
              Get Travel Updates
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 4,
                opacity: 0.9
              }}
            >
              Subscribe to our newsletter for exclusive deals, travel tips, and latest updates about Vizag tourism
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                gap: 2,
                maxWidth: 500,
                mx: 'auto',
                flexDirection: { xs: 'column', sm: 'row' }
              }}
            >
              <TextField
                fullWidth
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                type="email"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  }
                }}
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  px: 4,
                  py: { xs: 1.5, sm: 'auto' },
                  backgroundColor: '#2C3E50',
                  '&:hover': {
                    backgroundColor: '#1a252f'
                  },
                  whiteSpace: 'nowrap'
                }}
              >
                Subscribe
              </Button>
            </Box>

            <Typography
              variant="body2"
              sx={{
                mt: 2,
                opacity: 0.8
              }}
            >
              We respect your privacy. Unsubscribe at any time.
            </Typography>
          </Box>
        </motion.div>
      </Container>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Thank you for subscribing! We'll keep you updated.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Newsletter;
