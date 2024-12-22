import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography,
  Grid,
  Paper,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Rating,
  Chip,
  IconButton,
  Tooltip,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FilterListIcon from '@mui/icons-material/FilterList';
import { packages } from '../../data/packages';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const PackagesPage = () => {
  const navigate = useNavigate();
  const { startBooking } = useBooking();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recommended');
  const [priceRange, setPriceRange] = useState('all');

  const handleBookNow = (packageData) => {
    startBooking(packageData);
  };

  const handleViewDetails = (packageId) => {
    navigate(`/package/${packageId}`);
  };

  const filteredPackages = packages.filter(pkg => 
    pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pkg.destination.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort packages
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  // Filter by price range
  const finalPackages = sortedPackages.filter(pkg => {
    switch (priceRange) {
      case 'under-5000':
        return pkg.price < 5000;
      case '5000-10000':
        return pkg.price >= 5000 && pkg.price <= 10000;
      case 'above-10000':
        return pkg.price > 10000;
      default:
        return true;
    }
  });

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 8 }}>
        {/* Header Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              color: 'text.primary',
              mb: 2
            }}
          >
            Explore Our Travel Packages
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ mb: 4 }}
          >
            Discover the best of Vizag and surrounding areas with our curated travel packages
          </Typography>
        </Box>

        {/* Search and Filter Section */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Search packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortBy}
                label="Sort By"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <MenuItem value="recommended">Recommended</MenuItem>
                <MenuItem value="price-low">Price: Low to High</MenuItem>
                <MenuItem value="price-high">Price: High to Low</MenuItem>
                <MenuItem value="rating">Rating</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Price Range</InputLabel>
              <Select
                value={priceRange}
                label="Price Range"
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <MenuItem value="all">All Prices</MenuItem>
                <MenuItem value="under-5000">Under ₹5,000</MenuItem>
                <MenuItem value="5000-10000">₹5,000 - ₹10,000</MenuItem>
                <MenuItem value="above-10000">Above ₹10,000</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Package Cards */}
        <Grid container spacing={3}>
          {finalPackages.map((pkg) => (
            <Grid item xs={12} sm={6} md={4} key={pkg.id}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={pkg.image}
                  alt={pkg.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200?text=Package+Image';
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {pkg.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Rating value={pkg.rating} precision={0.5} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      ({pkg.reviews} reviews)
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {pkg.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {pkg.highlights.map((highlight, index) => (
                      <Chip key={index} label={highlight} size="small" />
                    ))}
                  </Box>
                  <Typography variant="h6" color="primary">
                    ₹{pkg.price.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {pkg.duration}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                  <Box>
                    <Tooltip title="Add to Wishlist">
                      <IconButton>
                        <FavoriteIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Share">
                      <IconButton>
                        <ShareIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Box>
                    <Button 
                      size="small" 
                      onClick={() => handleViewDetails(pkg.id)}
                      sx={{ mr: 1 }}
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="contained" 
                      size="small"
                      onClick={() => handleBookNow(pkg)}
                    >
                      Book Now
                    </Button>
                  </Box>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {/* No Results Message */}
        {finalPackages.length === 0 && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No packages found matching your criteria
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default PackagesPage;
