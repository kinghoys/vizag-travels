import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import PaymentIcon from '@mui/icons-material/Payment';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const steps = [
  {
    icon: SearchIcon,
    title: 'Search & Browse',
    description: 'Browse through our curated collection of travel packages and destinations.'
  },
  {
    icon: CompareArrowsIcon,
    title: 'Compare & Choose',
    description: 'Compare different packages, read reviews, and select the perfect one for you.'
  },
  {
    icon: PaymentIcon,
    title: 'Book & Pay',
    description: 'Secure your booking with easy payment options and instant confirmation.'
  },
  {
    icon: FlightTakeoffIcon,
    title: 'Travel & Enjoy',
    description: 'Pack your bags and get ready for an amazing travel experience.'
  }
];

const HowItWorks = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: '#f8fafc',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.4,
          background: 'radial-gradient(circle at 20% 20%, rgba(255, 78, 80, 0.05) 0%, transparent 50%)',
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            How It Works
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Planning your trip is easy with our simple 4-step process
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={step.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    textAlign: 'center',
                    backgroundColor: 'transparent',
                    position: 'relative',
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 78, 80, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        position: 'relative',
                      }}
                    >
                      <step.icon
                        sx={{
                          fontSize: 36,
                          color: theme.palette.primary.main
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          position: 'absolute',
                          top: -8,
                          right: -8,
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          backgroundColor: theme.palette.primary.main,
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 600
                        }}
                      >
                        {index + 1}
                      </Typography>
                    </Box>
                  </motion.div>

                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {step.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
