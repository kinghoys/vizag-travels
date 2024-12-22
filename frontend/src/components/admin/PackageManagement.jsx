import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Switch,
  FormControlLabel,
  InputAdornment,
  Chip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';

// Mock data
const mockPackages = [
  {
    id: 'PKG001',
    name: 'Magical Maldives',
    duration: '5 Days',
    price: 33000,
    category: 'International',
    active: true,
    bookings: 45
  },
  {
    id: 'PKG002',
    name: 'Araku Valley Adventure',
    duration: '3 Days',
    price: 12000,
    category: 'Domestic',
    active: true,
    bookings: 32
  },
  // Add more packages
];

const PackageManagement = () => {
  const [packages, setPackages] = useState(mockPackages);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    duration: '',
    price: '',
    category: '',
    description: '',
    active: true,
    inclusions: '',
    exclusions: '',
    itinerary: '',
    image: null
  });

  const handleOpenDialog = (pkg = null) => {
    if (pkg) {
      setSelectedPackage(pkg);
      setFormData({
        name: pkg.name,
        duration: pkg.duration,
        price: pkg.price,
        category: pkg.category,
        active: pkg.active,
        description: pkg.description || '',
        inclusions: pkg.inclusions || '',
        exclusions: pkg.exclusions || '',
        itinerary: pkg.itinerary || '',
        image: pkg.image || null
      });
    } else {
      setSelectedPackage(null);
      setFormData({
        name: '',
        duration: '',
        price: '',
        category: '',
        description: '',
        active: true,
        inclusions: '',
        exclusions: '',
        itinerary: '',
        image: null
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedPackage(null);
  };

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: field === 'active' ? event.target.checked : event.target.value
    });
  };

  const handleSubmit = () => {
    if (selectedPackage) {
      // Update existing package
      setPackages(packages.map(pkg => 
        pkg.id === selectedPackage.id ? { ...pkg, ...formData } : pkg
      ));
    } else {
      // Add new package
      setPackages([
        ...packages,
        {
          id: `PKG${String(packages.length + 1).padStart(3, '0')}`,
          ...formData,
          bookings: 0
        }
      ]);
    }
    handleCloseDialog();
  };

  const handleDelete = (id) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  return (
    <Box>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5">Package Management</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
          sx={{
            backgroundColor: '#FF4E50',
            '&:hover': {
              backgroundColor: '#E63E40'
            }
          }}
        >
          Add New Package
        </Button>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
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
          sx={{ mb: 3 }}
        />

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Package ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Bookings</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {packages.map((pkg) => (
                <TableRow key={pkg.id}>
                  <TableCell>{pkg.id}</TableCell>
                  <TableCell>{pkg.name}</TableCell>
                  <TableCell>{pkg.duration}</TableCell>
                  <TableCell>₹{pkg.price.toLocaleString()}</TableCell>
                  <TableCell>
                    <Chip
                      label={pkg.category}
                      color={pkg.category === 'International' ? 'primary' : 'success'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={pkg.active ? 'Active' : 'Inactive'}
                      color={pkg.active ? 'success' : 'default'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{pkg.bookings}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => handleOpenDialog(pkg)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => handleDelete(pkg.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Add/Edit Package Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedPackage ? 'Edit Package' : 'Add New Package'}
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Package Name"
                value={formData.name}
                onChange={handleInputChange('name')}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Duration"
                value={formData.duration}
                onChange={handleInputChange('duration')}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Price"
                type="number"
                value={formData.price}
                onChange={handleInputChange('price')}
                InputProps={{
                  startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Category"
                value={formData.category}
                onChange={handleInputChange('category')}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                multiline
                rows={4}
                value={formData.description}
                onChange={handleInputChange('description')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Inclusions"
                multiline
                rows={4}
                value={formData.inclusions}
                onChange={handleInputChange('inclusions')}
                placeholder="Enter each inclusion on a new line"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Exclusions"
                multiline
                rows={4}
                value={formData.exclusions}
                onChange={handleInputChange('exclusions')}
                placeholder="Enter each exclusion on a new line"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Itinerary"
                multiline
                rows={6}
                value={formData.itinerary}
                onChange={handleInputChange('itinerary')}
                placeholder="Enter detailed day-wise itinerary"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                startIcon={<ImageIcon />}
                component="label"
              >
                Upload Image
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => setFormData({
                    ...formData,
                    image: e.target.files[0]
                  })}
                />
              </Button>
              {formData.image && (
                <Typography variant="caption" sx={{ ml: 2 }}>
                  {typeof formData.image === 'string' ? formData.image : formData.image.name}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.active}
                    onChange={handleInputChange('active')}
                    color="primary"
                  />
                }
                label="Active Package"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              backgroundColor: '#FF4E50',
              '&:hover': {
                backgroundColor: '#E63E40'
              }
            }}
          >
            {selectedPackage ? 'Update Package' : 'Add Package'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PackageManagement;
