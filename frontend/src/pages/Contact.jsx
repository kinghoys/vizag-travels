import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Stack,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setSnackbar({
      open: true,
      message: 'Thank you for your message! We will get back to you soon.',
      severity: 'success',
    });

    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Visit Us',
      details: ['123 Beach Road', 'Visakhapatnam, Andhra Pradesh', 'India - 530003'],
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Call Us',
      details: ['+91 123-456-7890', '+91 098-765-4321'],
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email Us',
      details: ['info@vizagtravelshub.com', 'support@vizagtravelshub.com'],
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      title: 'Working Hours',
      details: ['Monday - Saturday: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 4:00 PM'],
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          mb: 8,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              component="h1"
              align="center"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                opacity: 0.9,
                lineHeight: 1.6,
              }}
            >
              We'd love to hear from you. Get in touch with us for any queries or assistance.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Contact Info Cards */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  component={Paper}
                  elevation={2}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>{info.icon}</Box>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 600, mb: 2 }}>
                      {info.title}
                    </Typography>
                    <Stack spacing={1}>
                      {info.details.map((detail, idx) => (
                        <Typography key={idx} variant="body2" color="text.secondary">
                          {detail}
                        </Typography>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form Section */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box
                component="img"
                src="https://source.unsplash.com/random/800x600/?customer-service"
                alt="Contact Us"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card component={Paper} elevation={2} sx={{ p: 3 }}>
                <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 600 }}>
                  Send us a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                          mt: 2,
                          height: 48,
                          borderRadius: 2,
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Box sx={{ mt: 8 }}>
          <Card component={Paper} elevation={2}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d83.05344415!3d17.6868159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1639983607135!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Vizag Travels Hub Location"
            />
          </Card>
        </Box>
      </Container>

      {/* Snackbar for form submission feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
