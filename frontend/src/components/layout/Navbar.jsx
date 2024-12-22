import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import LuggageIcon from '@mui/icons-material/Luggage';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const mainMenuItems = [
  {
    label: 'Packages',
    path: '/packages',
    icon: LuggageIcon,
  },
  {
    label: 'Taxi Services',
    path: '/taxi-services',
    icon: LocalTaxiIcon,
  },
  {
    label: 'Vehicle Booking',
    path: '/book-vehicle',
    icon: DirectionsCarIcon,
  },
  {
    label: 'Destinations',
    path: '/destinations',
    icon: LocationOnIcon,
  },
];

const secondaryMenuItems = [
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Vizag Travels Hub
      </Typography>
      <List>
        {mainMenuItems.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={item.path}
                sx={{
                  textAlign: 'left',
                  color: 'inherit',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                  },
                }}
              >
                <Icon sx={{ mr: 1 }} />
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
        {secondaryMenuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              sx={{
                textAlign: 'left',
                color: 'inherit',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', color: 'text.primary' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for larger screens */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Vizag Travels Hub
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          {/* Logo for mobile screens */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Vizag Travels Hub
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {mainMenuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.label}
                  component={RouterLink}
                  to={item.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    mx: 1,
                    color: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                    },
                  }}
                >
                  <Icon sx={{ mr: 0.5 }} />
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Secondary menu items */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {secondaryMenuItems.map((item) => (
              <Button
                key={item.label}
                component={RouterLink}
                to={item.path}
                onClick={handleCloseNavMenu}
                sx={{
                  mx: 1,
                  color: 'inherit',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
