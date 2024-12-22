import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import DestinationCard from './DestinationCard';
import FilterSort from '../../components/FilterSort';
import { destinations } from '../../data/destinations';

const filters = ['Nature', 'Beach', 'Heritage', 'Adventure', 'Culture', 'Wildlife'];
const sortOptions = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'distance_low', label: 'Distance: Near to Far' },
  { value: 'distance_high', label: 'Distance: Far to Near' },
  { value: 'rating_high', label: 'Rating: High to Low' },
];

const Destinations = () => {
  const theme = useTheme();
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState('recommended');
  const [activeFilters, setActiveFilters] = useState([]);

  const filteredAndSortedDestinations = useMemo(() => {
    let filtered = [...destinations];

    // Apply search
    if (searchText) {
      filtered = filtered.filter(dest => 
        dest.name.toLowerCase().includes(searchText.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchText.toLowerCase()) ||
        dest.highlights.some(h => h.toLowerCase().includes(searchText.toLowerCase()))
      );
    }

    // Apply filters
    if (activeFilters.length > 0) {
      filtered = filtered.filter(dest => 
        activeFilters.some(filter => 
          dest.highlights.some(h => h.toLowerCase().includes(filter.toLowerCase()))
        )
      );
    }

    // Apply sorting
    switch (sortOption) {
      case 'distance_low':
        filtered.sort((a, b) => parseInt(a.distance) - parseInt(b.distance));
        break;
      case 'distance_high':
        filtered.sort((a, b) => parseInt(b.distance) - parseInt(a.distance));
        break;
      case 'rating_high':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Keep original order for recommended
        break;
    }

    return filtered;
  }, [searchText, sortOption, activeFilters]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Popular Destinations
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
        Explore the most beautiful places around Visakhapatnam
      </Typography>

      <FilterSort
        searchText={searchText}
        setSearchText={setSearchText}
        sortOption={sortOption}
        setSortOption={setSortOption}
        filters={filters}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
        sortOptions={sortOptions}
        placeholder="Search destinations..."
      />
      
      <Grid container spacing={4}>
        {filteredAndSortedDestinations.map((destination) => (
          <Grid item key={destination.id} xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <DestinationCard destination={destination} />
            </motion.div>
          </Grid>
        ))}
        {filteredAndSortedDestinations.length === 0 && (
          <Box sx={{ width: '100%', textAlign: 'center', py: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No destinations found matching your criteria
            </Typography>
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default Destinations;
