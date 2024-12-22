import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  Rating,
  Stack,
  Divider,
} from '@mui/material';
import { usePackages } from '../context/PackageContext';
import { packages } from '../data/packages';
import { useNavigate } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const ComparePackages = () => {
  const { comparePackages, toggleCompare } = usePackages();
  const navigate = useNavigate();
  
  const selectedPackages = packages.filter(pkg => comparePackages.includes(pkg.id));

  if (selectedPackages.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>No Packages Selected for Comparison</Typography>
          <Typography color="text.secondary" paragraph>
            Select packages to compare by clicking the compare button on package cards.
          </Typography>
          <Button variant="contained" onClick={() => navigate('/packages')}>
            Browse Packages
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Compare Packages</Typography>
      <Grid container spacing={3}>
        {selectedPackages.map(pkg => (
          <Grid item xs={12} md={4} key={pkg.id}>
            <Paper sx={{ height: '100%', p: 3 }}>
              <Box
                component="img"
                src={pkg.images[0]}
                alt={pkg.name}
                sx={{
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                  borderRadius: 1,
                  mb: 2,
                }}
              />
              
              <Typography variant="h6" gutterBottom>{pkg.name}</Typography>
              
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <Rating value={pkg.rating} precision={0.5} size="small" readOnly />
                <Typography variant="body2" color="text.secondary">
                  ({pkg.reviews} reviews)
                </Typography>
              </Stack>

              <Typography variant="h5" color="primary" gutterBottom>
                ₹{pkg.price.toLocaleString()}
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccessTimeIcon color="action" />
                  <Typography>{pkg.duration}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <GroupIcon color="action" />
                  <Typography>{pkg.capacity}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <DirectionsCarIcon color="action" />
                  <Typography>{pkg.vehicle}</Typography>
                </Box>
              </Stack>

              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle1" gutterBottom>Highlights:</Typography>
              <ul style={{ paddingLeft: 20 }}>
                {pkg.highlights?.slice(0, 4).map((highlight, index) => (
                  <li key={index}>
                    <Typography variant="body2" color="text.secondary">
                      {highlight}
                    </Typography>
                  </li>
                ))}
              </ul>

              <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => toggleCompare(pkg.id)}
                >
                  Remove
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => navigate(`/package/${pkg.id}`)}
                >
                  View Details
                </Button>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ComparePackages;
