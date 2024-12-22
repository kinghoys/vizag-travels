import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import ExploreIcon from '@mui/icons-material/Explore';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const features = [
  {
    icon: <ExploreIcon sx={{ fontSize: 40 }} />,
    title: 'Explore Destinations',
    description: 'Discover the hidden gems and popular attractions of Vizag.',
  },
  {
    icon: <DirectionsBusIcon sx={{ fontSize: 40 }} />,
    title: 'Guided Tours',
    description: 'Expert guides to enhance your travel experience.',
  },
  {
    icon: <AttachMoneyIcon sx={{ fontSize: 40 }} />,
    title: 'Best Prices',
    description: 'Competitive prices and exclusive package deals.',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your travel needs.',
  },
];

const WhyChooseUs = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            fontWeight: 700,
            color: 'text.primary'
          }}
        >
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
