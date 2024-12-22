import React from 'react';
import { Container, Grid, Box, Typography, Card, CardContent, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Hyderabad',
    rating: 5,
    comment: 'Amazing experience at Araku Valley! The tour was well-organized, and our guide was very knowledgeable. Will definitely book again!',
    avatar: '/images/avatars/avatar1.jpg',
    package: 'Araku Valley Weekend Getaway'
  },
  {
    id: 2,
    name: 'Rahul Verma',
    location: 'Bangalore',
    rating: 5,
    comment: 'The Borra Caves tour was fantastic. Everything was taken care of, from transportation to meals. Highly recommended!',
    avatar: '/images/avatars/avatar2.jpg',
    package: 'Borra Caves Adventure'
  },
  {
    id: 3,
    name: 'Anjali Reddy',
    location: 'Chennai',
    rating: 5,
    comment: 'Perfect beach holiday! RK Beach was beautiful, and the water sports activities were so much fun. Great service from the team!',
    avatar: '/images/avatars/avatar3.jpg',
    package: 'Vizag Beach Tour'
  }
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#F8FAFC' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ color: '#2C3E50', fontWeight: 600 }}
          >
            What Our Travelers Say
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Real experiences shared by our happy travelers
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    overflow: 'visible',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}
                >
                  <CardContent sx={{ pt: 6, px: 4 }}>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -20,
                        left: 20,
                        backgroundColor: '#FF4E50',
                        borderRadius: '50%',
                        width: 40,
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <FormatQuoteIcon sx={{ color: 'white' }} />
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        color: '#2C3E50',
                        fontStyle: 'italic',
                        minHeight: 80
                      }}
                    >
                      "{testimonial.comment}"
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Rating value={testimonial.rating} readOnly size="small" />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Avatar
                        src={testimonial.avatar}
                        sx={{ width: 48, height: 48, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#2C3E50' }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.location}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        mt: 2,
                        py: 1,
                        px: 2,
                        backgroundColor: '#F1F5F9',
                        borderRadius: 1,
                        display: 'inline-block',
                        color: '#64748B'
                      }}
                    >
                      {testimonial.package}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box 
          sx={{ 
            mt: 6, 
            textAlign: 'center',
            p: 3,
            backgroundColor: '#fff',
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: '#2C3E50' }}>
            Ready to Start Your Journey?
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Contact our travel experts to plan your perfect trip
          </Typography>
          <Typography
            variant="h5"
            component="a"
            href="tel:1800-123-5555"
            sx={{
              color: '#FF4E50',
              textDecoration: 'none',
              fontWeight: 600,
              display: 'block',
              mt: 2,
              '&:hover': {
                color: '#E63E40'
              }
            }}
          >
            1800-123-5555
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
