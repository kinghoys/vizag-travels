import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import TaxiServiceCard from './TaxiServiceCard';
import { taxiServices } from '../../data/taxiServices';

const TaxiServices = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = taxiServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Taxi Services
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Reliable and comfortable taxi services for all your travel needs
        </Typography>
      </Box>

      {/* Search Bar */}
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search taxi services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            maxWidth: 600,
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
            },
          }}
        />
      </Box>

      {/* Taxi Services Grid */}
      <Grid container spacing={3}>
        {filteredServices.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <TaxiServiceCard service={service} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TaxiServices;
