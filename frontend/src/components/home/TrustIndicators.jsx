import React from 'react';
import { Container, Grid, Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const indicators = [
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
    title: 'Licensed & Certified',
    description: 'Government approved travel operator with all necessary certifications'
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    title: '10,000+ Happy Travelers',
    description: 'Successfully served thousands of travelers across India'
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
    title: 'Local Expertise',
    description: 'Deep knowledge of Vizag and surrounding attractions'
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your travel needs'
  }
];

const TrustIndicators = () => {
  return (
    <Box 
      sx={{ 
        py: 6,
        backgroundColor: '#fff',
        borderTop: '1px solid rgba(0,0,0,0.05)',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              color: '#2C3E50',
              fontWeight: 600,
              mb: 2
            }}
          >
            Why Choose Us
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Your trusted partner for exploring the best of Vizag
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {indicators.map((indicator, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
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
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 78, 80, 0.1)',
                      color: '#FF4E50',
                      mb: 2
                    }}
                  >
                    {indicator.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: '#2C3E50',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    {indicator.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {indicator.description}
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

export default TrustIndicators;
