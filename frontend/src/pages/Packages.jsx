import React, { useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Fab,
  Snackbar,
  Alert,
  Stack,
  useTheme,
  Paper,
  Rating,
  IconButton,
  Tooltip,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import GroupIcon from '@mui/icons-material/Group';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InfoIcon from '@mui/icons-material/Info';
import FilterSort from '../components/FilterSort';
import { motion } from 'framer-motion';
import { packages } from '../data/packages';
import { usePackages } from '../context/PackageContext';
import ContactDialog from '../components/ContactDialog';

const getPackageImage = (packageId) => {
  // First try to get a direct match
  const directMap = {
    'vizag-city-tour': '/images/packages/city-tour.jpg',
    'araku-valley-day-trip': '/images/packages/araku-valley.jpg',
    'temple-tour': '/images/packages/temple-tour.jpg',
    'beach-tour': '/images/packages/beach-tour.jpg'
  };

  if (directMap[packageId]) {
    return directMap[packageId];
  }

  // Then try to match based on keywords
  if (packageId.includes('araku')) {
    return '/images/packages/araku-valley.jpg';
  }
  if (packageId.includes('temple')) {
    return '/images/packages/temple-tour.jpg';
  }
  if (packageId.includes('beach') || packageId.includes('city')) {
    return '/images/packages/city-tour.jpg';
  }

  // Default fallback
  return '/images/packages/placeholder.jpg';
};

const PackageCard = ({ pkg }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [contactOpen, setContactOpen] = useState(false);
  const { toggleCompare, isCompared } = usePackages();
  const [imageError, setImageError] = useState(false);
  
  const handleCardClick = () => {
    navigate(`/package/${pkg.id}`);
  };

  const handleBookNow = (e) => {
    e.stopPropagation();
    window.open(`/booking?package=${pkg.id}`, '_blank');
  };

  const handleCompareClick = (e) => {
    e.stopPropagation();
    toggleCompare(pkg.id);
  };

  const handleContactClick = (e) => {
    e.stopPropagation();
    setContactOpen(true);
  };

  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
        style={{ height: '100%' }}
      >
        <Card 
          onClick={handleCardClick}
          sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              boxShadow: theme.shadows[10],
              transform: 'translateY(-4px)',
            },
            position: 'relative',
            overflow: 'visible'
          }}
        >
          {pkg.isPopular && (
            <Chip
              label="Popular"
              color="primary"
              size="small"
              sx={{
                position: 'absolute',
                top: -10,
                right: 10,
                zIndex: 1,
                fontWeight: 'bold'
              }}
            />
          )}
          <Box sx={{ position: 'relative', paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
            <CardMedia
              component="img"
              image={imageError ? '/images/packages/placeholder.jpg' : getPackageImage(pkg.id)}
              alt={pkg.name}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                backgroundColor: 'grey.100',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  pointerEvents: 'none'
                }
              }}
              onError={handleImageError}
            />
          </Box>
          <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ 
                fontWeight: 600,
                mb: 2,
                height: '64px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical'
              }}
            >
              {pkg.name}
            </Typography>
            
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessTimeIcon sx={{ mr: 0.5, color: 'primary.main', fontSize: '1.2rem' }} />
                <Typography variant="body2" color="text.secondary">
                  {pkg.duration}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <GroupIcon sx={{ mr: 0.5, color: 'primary.main', fontSize: '1.2rem' }} />
                <Typography variant="body2" color="text.secondary">
                  {pkg.groupSize}
                </Typography>
              </Box>
              {pkg.transportation && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <DirectionsCarIcon sx={{ mr: 0.5, color: 'primary.main', fontSize: '1.2rem' }} />
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '80px'
                    }}
                  >
                    {pkg.transportation}
                  </Typography>
                </Box>
              )}
            </Stack>

            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ 
                mb: 2,
                height: '40px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical'
              }}
            >
              {pkg.description}
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="primary" gutterBottom>
                Highlights:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, minHeight: '60px' }}>
                {pkg.highlights?.slice(0, 3).map((highlight, index) => (
                  <Chip
                    key={index}
                    label={highlight}
                    size="small"
                    variant="outlined"
                    sx={{ 
                      fontSize: '0.75rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      maxWidth: '100%',
                      '& .MuiChip-label': {
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }
                    }}
                  />
                ))}
                {pkg.highlights?.length > 3 && (
                  <Tooltip title={pkg.highlights.slice(3).join(', ')}>
                    <Chip
                      label={`+${pkg.highlights.length - 3} more`}
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: '0.75rem' }}
                    />
                  </Tooltip>
                )}
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 'auto' }}>
              <LocalOfferIcon sx={{ mr: 1, color: 'primary.main', fontSize: '1.2rem' }} />
              <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                ₹{pkg.price?.toLocaleString()}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                per person
              </Typography>
            </Box>

            <Stack direction="row" spacing={1}>
              <Button 
                variant="contained" 
                size="small" 
                onClick={handleBookNow}
                sx={{ 
                  flex: 1,
                  background: theme.palette.primary.main,
                  '&:hover': {
                    background: theme.palette.primary.dark,
                  }
                }}
              >
                Book Now
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={handleContactClick}
                sx={{ flex: 1 }}
              >
                Contact Us
              </Button>
              <IconButton
                color={isCompared(pkg.id) ? "secondary" : "default"}
                onClick={handleCompareClick}
                size="small"
                sx={{ 
                  border: `1px solid ${isCompared(pkg.id) ? theme.palette.secondary.main : theme.palette.grey[300]}`,
                  backgroundColor: isCompared(pkg.id) ? theme.palette.secondary.light : 'transparent'
                }}
              >
                <CompareArrowsIcon fontSize="small" />
              </IconButton>
            </Stack>
          </CardContent>
        </Card>
      </motion.div>
      <ContactDialog 
        open={contactOpen} 
        onClose={() => setContactOpen(false)} 
      />
    </>
  );
};

const Packages = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState('recommended');
  const [activeFilters, setActiveFilters] = useState([]);
  const { comparePackages, clearCompare } = usePackages();

  const filters = [
    '1 Day',
    '2 Days',
    '3 Days',
    '4+ Days',
    'Adventure',
    'Heritage',
    'Nature',
    'Beach',
    'Tribal',
    'Waterfalls'
  ];

  const sortOptions = [
    { value: 'recommended', label: 'Recommended' },
    { value: 'price_low', label: 'Price: Low to High' },
    { value: 'price_high', label: 'Price: High to Low' },
    { value: 'duration_low', label: 'Duration: Short to Long' },
    { value: 'duration_high', label: 'Duration: Long to Short' },
  ];

  const filteredAndSortedPackages = useMemo(() => {
    let filtered = [...packages];

    // Filter by destination if provided
    if (location.state?.destination) {
      filtered = filtered.filter(pkg => 
        pkg.name.toLowerCase().includes(location.state.destination.toLowerCase()) ||
        pkg.description.toLowerCase().includes(location.state.destination.toLowerCase())
      );
    }

    // Apply search
    if (searchText) {
      const searchTerms = searchText.toLowerCase().split(' ');
      filtered = filtered.filter(pkg => 
        searchTerms.every(term =>
          pkg.name.toLowerCase().includes(term) ||
          pkg.description.toLowerCase().includes(term) ||
          pkg.highlights?.some(h => h.toLowerCase().includes(term))
        )
      );
    }

    // Apply filters
    if (activeFilters.length > 0) {
      filtered = filtered.filter(pkg => 
        activeFilters.some(filter => {
          switch(filter) {
            case '1 Day':
              return pkg.duration.includes('1 Day') || pkg.duration.includes('Full Day');
            case '2 Days':
              return pkg.duration.includes('2 Days');
            case '3 Days':
              return pkg.duration.includes('3 Days');
            case '4+ Days':
              return parseInt(pkg.duration) >= 4;
            default:
              return pkg.highlights?.some(h => h.toLowerCase().includes(filter.toLowerCase())) ||
                     pkg.description.toLowerCase().includes(filter.toLowerCase());
          }
        })
      );
    }

    // Apply sorting
    switch(sortOption) {
      case 'price_low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price_high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'duration_low':
        filtered.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
        break;
      case 'duration_high':
        filtered.sort((a, b) => parseInt(b.duration) - parseInt(a.duration));
        break;
      default:
        // Keep default order for recommended
        break;
    }

    return filtered;
  }, [packages, searchText, sortOption, activeFilters, location.state?.destination]);

  const handleCompareClick = () => {
    navigate('/compare-packages');
  };

  return (
    <Box sx={{ py: 4, minHeight: '100vh', backgroundColor: 'grey.50' }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Tour Packages
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Explore our carefully curated packages for the perfect Vizag experience
          </Typography>
        </Box>

        <FilterSort
          searchText={searchText}
          onSearchChange={setSearchText}
          sortOption={sortOption}
          onSortChange={setSortOption}
          sortOptions={sortOptions}
          filters={filters}
          activeFilters={activeFilters}
          onFilterChange={setActiveFilters}
        />

        {comparePackages.length > 0 && (
          <Paper 
            elevation={3}
            sx={{ 
              p: 2, 
              mb: 3, 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.primary.contrastText
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CompareArrowsIcon sx={{ mr: 1 }} />
              <Typography variant="body1">
                {comparePackages.length} {comparePackages.length === 1 ? 'package' : 'packages'} selected for comparison
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCompareClick}
              sx={{ 
                backgroundColor: 'white',
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.grey[100]
                }
              }}
            >
              Compare Now
            </Button>
          </Paper>
        )}

        <Grid container spacing={3}>
          {filteredAndSortedPackages.map((pkg) => (
            <Grid item xs={12} sm={6} md={4} key={pkg.id}>
              <PackageCard pkg={pkg} />
            </Grid>
          ))}
        </Grid>

        {filteredAndSortedPackages.length === 0 && (
          <Box 
            sx={{ 
              textAlign: 'center', 
              py: 8,
              px: 2,
              backgroundColor: 'white',
              borderRadius: 2,
              mt: 4
            }}
          >
            <Typography variant="h6" gutterBottom>
              No packages found matching your criteria
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try adjusting your filters or search terms
            </Typography>
          </Box>
        )}
      </Container>

      {/* Floating Compare Button */}
      {comparePackages.length > 0 && (
        <Fab
          color="primary"
          variant="extended"
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000,
            boxShadow: 4,
          }}
          onClick={handleCompareClick}
        >
          <CompareArrowsIcon sx={{ mr: 1 }} />
          Compare ({comparePackages.length})
        </Fab>
      )}

      {/* Clear Compare Button */}
      {comparePackages.length > 0 && (
        <Fab
          color="secondary"
          size="small"
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 200,
            zIndex: 1000,
            boxShadow: 4,
          }}
          onClick={clearCompare}
        >
          Clear
        </Fab>
      )}
    </Box>
  );
};

export default Packages;
