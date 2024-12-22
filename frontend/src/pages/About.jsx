import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Divider,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import ExploreIcon from '@mui/icons-material/Explore';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

const About = () => {
  const stats = [
    { icon: <GroupsIcon sx={{ fontSize: 40 }} />, number: '10,000+', label: 'Happy Travelers' },
    { icon: <LocalActivityIcon sx={{ fontSize: 40 }} />, number: '500+', label: 'Tours Completed' },
    { icon: <ExploreIcon sx={{ fontSize: 40 }} />, number: '50+', label: 'Destinations' },
    { icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />, number: '15+', label: 'Years Experience' },
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      image: 'https://source.unsplash.com/random/200x200/?portrait,man,1',
      description: 'With over 20 years in the travel industry, John leads our vision for sustainable tourism.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      image: 'https://source.unsplash.com/random/200x200/?portrait,woman,1',
      description: 'Sarah ensures smooth execution of all our tours and maintains our high service standards.',
    },
    {
      name: 'Michael Chen',
      role: 'Lead Tour Guide',
      image: 'https://source.unsplash.com/random/200x200/?portrait,man,2',
      description: 'An expert in local history and culture, Michael makes every tour an enriching experience.',
    },
    {
      name: 'Priya Patel',
      role: 'Customer Relations Manager',
      image: 'https://source.unsplash.com/random/200x200/?portrait,woman,2',
      description: 'Priya is dedicated to ensuring every traveler has an exceptional experience with us.',
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
              About Vizag Travels Hub
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
              Your trusted partner in exploring the beautiful city of Vizag and its surroundings since 2008.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
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
                    p: 3,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{stat.icon}</Box>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 700, mb: 1 }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Our Story Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" align="center" sx={{ mb: 4, fontWeight: 600 }}>
            Our Story
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  component="img"
                  src="https://source.unsplash.com/random/800x600/?vizag,beach"
                  alt="Vizag Beach"
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
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  Founded in 2008, Vizag Travels Hub began with a simple mission: to share the beauty and culture of Vizag with the world. What started as a small local tour operator has grown into one of the region's most trusted travel companies.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  Our deep connection with the local community and extensive knowledge of the region allows us to create unique, authentic experiences for our travelers. We take pride in our commitment to sustainable tourism and supporting local communities.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  Today, we continue to innovate and expand our services while maintaining the personal touch and attention to detail that has been our hallmark since day one.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        {/* Team Section */}
        <Box>
          <Typography variant="h3" component="h2" align="center" sx={{ mb: 4, fontWeight: 600 }}>
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            {team.map((member, index) => (
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
                      <Avatar
                        src={member.image}
                        alt={member.name}
                        sx={{
                          width: 120,
                          height: 120,
                          mx: 'auto',
                          mb: 2,
                          border: '4px solid',
                          borderColor: 'primary.main',
                        }}
                      />
                      <Typography variant="h6" component="div" sx={{ fontWeight: 600, mb: 1 }}>
                        {member.name}
                      </Typography>
                      <Typography variant="subtitle1" color="primary.main" sx={{ mb: 2 }}>
                        {member.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
