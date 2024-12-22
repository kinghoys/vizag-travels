import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Slider,
  IconButton
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';

const categoryData = {
  weekend: {
    title: 'Weekend Getaways',
    description: 'Perfect short trips to nearby destinations like Araku Valley and Lambasingi',
    image: '/images/weekend-banner.jpg',
    highlights: [
      'Quick escapes from city life',
      'Perfect for 2-3 days trips',
      'Nearby scenic locations',
      'Ideal for short breaks'
    ]
  },
  group: {
    title: 'Group Tours',
    description: 'Specially designed packages for larger groups, corporate outings, and family reunions',
    image: '/images/group-banner.jpg',
    highlights: [
      'Corporate team outings',
      'Family gatherings',
      'School/College trips',
      'Customizable group activities'
    ]
  },
  beach: {
    title: 'Beach Packages',
    description: 'Explore Vizag\'s beautiful beaches and coastal attractions',
    image: '/images/beach-banner.jpg',
    highlights: [
      'Scenic coastal views',
      'Water sports activities',
      'Beach camping options',
      'Sunset boat rides'
    ]
  },
  hillstation: {
    title: 'Hill Station Tours',
    description: 'Discover the beauty of Araku Valley, Lambasingi, and Eastern Ghats',
    image: '/images/hillstation-banner.jpg',
    highlights: [
      'Coffee plantations',
      'Tribal village visits',
      'Mountain trekking',
      'Cool climate getaways'
    ]
  },
  adventure: {
    title: 'Adventure Tours',
    description: 'Exciting activities like trekking, water sports, and outdoor adventures',
    image: '/images/adventure-banner.jpg',
    highlights: [
      'Trekking expeditions',
      'Water sports',
      'Rock climbing',
      'Cave exploration'
    ]
  }
};

const packages = [
  {
    id: 1,
    title: 'Magical Maldives',
    price: '33,000',
    duration: '5 Days / 4 Nights',
    location: 'Maldives',
    image: '/images/maldives.jpg',
    rating: 4.8,
    reviews: 245,
    categories: ['beach']
  },
  // Add more package data here
];

const PackageCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [filterDrawer, setFilterDrawer] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [duration, setDuration] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  const categoryInfo = categoryData[category] || {
    title: 'Travel Packages',
    description: 'Explore our curated collection of travel packages'
  };

  // Filter packages by category
  const filteredPackages = packages.filter(pkg => 
    pkg.categories && pkg.categories.includes(category)
  );

  // Sort packages
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortBy) {
      case 'priceAsc':
        return a.price - b.price;
      case 'priceDesc':
        return b.price - a.price;
      case 'duration':
        return a.duration.localeCompare(b.duration);
      default: // popularity
        return b.reviews - a.reviews;
    }
  });

  return (
    <Box sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 4, md: 6 } }}>
      {/* Hero Banner */}
      <Box
        sx={{
          height: { xs: '200px', md: '300px' },
          position: 'relative',
          backgroundImage: `url(${categoryInfo.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mb: 4,
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)'
          }
        }}
      >
        <Container sx={{ position: 'relative', color: 'white' }}>
          <Typography variant="h3" sx={{ fontWeight: 600, mb: 1 }}>
            {categoryInfo.title}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
            {categoryInfo.description}
          </Typography>
          {categoryInfo.highlights && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {categoryInfo.highlights.map((highlight, index) => (
                <Chip
                  key={index}
                  label={highlight}
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    }
                  }}
                />
              ))}
            </Box>
          )}
        </Container>
      </Box>

      <Container>
        {/* Filters and Sort */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                placeholder="Search packages..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort By"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <MenuItem value="popularity">Popularity</MenuItem>
                  <MenuItem value="priceAsc">Price: Low to High</MenuItem>
                  <MenuItem value="priceDesc">Price: High to Low</MenuItem>
                  <MenuItem value="duration">Duration</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<FilterListIcon />}
                onClick={() => setFilterDrawer(true)}
              >
                Filters
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Package Grid */}
        <Grid container spacing={3}>
          {sortedPackages.map((pkg) => (
            <Grid item xs={12} sm={6} md={4} key={pkg.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    cursor: 'pointer'
                  }
                }}
                onClick={() => navigate(`/packages/${pkg.id}`)}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    position: 'relative'
                  }}
                  image={pkg.image}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      left: 16,
                      display: 'flex',
                      gap: 1
                    }}
                  >
                    <Chip
                      icon={<CurrencyRupeeIcon />}
                      label={`From ₹${pkg.price}`}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 600
                      }}
                    />
                  </Box>
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 600 }}
                  >
                    {pkg.title}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                    >
                      <AccessTimeIcon sx={{ fontSize: 16 }} />
                      {pkg.duration}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                    >
                      <LocationOnIcon sx={{ fontSize: 16 }} />
                      {pkg.location}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: '#FF4E50',
                      '&:hover': {
                        backgroundColor: '#E63E40'
                      }
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Filter Drawer */}
      <Drawer
        anchor="right"
        open={filterDrawer}
        onClose={() => setFilterDrawer(false)}
      >
        <Box sx={{ width: 300, p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h6">Filters</Typography>
            <IconButton onClick={() => setFilterDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography variant="subtitle2" gutterBottom>
            Price Range
          </Typography>
          <Slider
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            valueLabelDisplay="auto"
            min={0}
            max={100000}
            sx={{ mb: 4 }}
          />

          <Typography variant="subtitle2" gutterBottom>
            Duration
          </Typography>
          <List>
            {['2-3 Days', '4-5 Days', '6-7 Days', '8+ Days'].map((item) => (
              <ListItem key={item} dense>
                <Checkbox
                  edge="start"
                  checked={duration === item}
                  onChange={() => setDuration(item)}
                />
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: '#FF4E50',
              '&:hover': {
                backgroundColor: '#E63E40'
              }
            }}
            onClick={() => setFilterDrawer(false)}
          >
            Apply Filters
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default PackageCategory;
