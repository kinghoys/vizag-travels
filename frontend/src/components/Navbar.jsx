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
  Avatar,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../context/AuthContext';

const pages = [
  { name: 'Packages', path: '/packages' },
  { name: 'Taxi', path: '/taxi-services' },
  { name: 'Vehicle', path: '/vehicle-booking' },
  { name: 'Hotel', path: '/hotel-booking' },
  { name: 'Activities', path: '/activities' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    logout();
  };

  const userMenuItems = [
    { name: 'Profile', path: '/profile', action: () => navigate('/profile') },
    { name: 'My Bookings', path: '/my-bookings', action: () => navigate('/my-bookings') },
    { name: 'Settings', path: '/settings', action: () => navigate('/settings') },
    { name: 'Logout', action: handleLogout },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <DirectionsCarIcon sx={{ color: '#ff4d4d', mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 4,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: '#ff4d4d',
                textDecoration: 'none',
              }}
            >
              VIZAG TRAVELS
            </Typography>
          </Box>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: '#ff4d4d' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                  selected={location.pathname === page.path}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
              {!isAuthenticated && (
                <>
                  <Divider />
                  <MenuItem onClick={() => navigate('/auth/login')}>
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => navigate('/auth/signup')}>
                    <Typography textAlign="center">Sign Up</Typography>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', flexGrow: 1 }}>
            <DirectionsCarIcon sx={{ color: '#ff4d4d', mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: '#ff4d4d',
                textDecoration: 'none',
              }}
            >
              VIZAG
            </Typography>
          </Box>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Box sx={{ display: 'flex' }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    px: 1.5,
                    color: location.pathname === page.path ? '#ff4d4d' : 'text.primary',
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: location.pathname === page.path ? 700 : 500,
                    '&:hover': {
                      color: '#ff4d4d',
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            {/* Auth buttons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {isAuthenticated ? (
                <>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {user?.profileImage ? (
                      <Avatar alt={user.firstName} src={user.profileImage} />
                    ) : (
                      <Avatar sx={{ bgcolor: '#ff4d4d' }}>
                        {user?.firstName?.[0]?.toUpperCase() || <AccountCircleIcon />}
                      </Avatar>
                    )}
                  </IconButton>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {userMenuItems.map((item) => (
                      <MenuItem key={item.name} onClick={item.action}>
                        <Typography textAlign="center">{item.name}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <>
                  <Button
                    component={Link}
                    to="/auth/login"
                    variant="outlined"
                    sx={{
                      color: '#ff4d4d',
                      borderColor: '#ff4d4d',
                      '&:hover': {
                        borderColor: '#ff4d4d',
                        backgroundColor: 'rgba(255, 77, 77, 0.04)',
                      },
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    component={Link}
                    to="/auth/signup"
                    variant="contained"
                    sx={{
                      backgroundColor: '#ff4d4d',
                      '&:hover': {
                        backgroundColor: '#ff3333',
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
