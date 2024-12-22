import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box, useScrollTrigger, CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CustomizeTrip from './pages/CustomizeTrip';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminDashboard from './pages/admin/AdminDashboard';
import Profile from './pages/Profile';
import MyBookings from './pages/MyBookings';
import Settings from './pages/Settings';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import PackagesPage from './pages/Packages';
import PackageDetail from './pages/package/PackageDetail';
import ComparePackages from './pages/ComparePackages';
import TaxiServices from './pages/TaxiServices';
import TaxiServiceDetail from './pages/TaxiServices/TaxiServiceDetail';
import VehicleBooking from './pages/VehicleBooking';
import HotelBooking from './pages/HotelBooking';
import Activities from './pages/Activities';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { PackageProvider } from './context/PackageContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/BookingConfirmation';

// Temporary auth check - replace with actual auth logic later
// const isAuthenticated = true;
// const isAdmin = true;

function ProtectedRoute({ children, adminOnly = false }) {
  const { isAuthenticated, user } = useAuth();
  const isAdmin = user?.role === 'admin';

  if (!isAuthenticated || (adminOnly && !isAdmin)) {
    return <Navigate to="/auth/login" />;
  }
  return children;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF4E50',
      light: '#FF7676',
      dark: '#E63E40',
      contrastText: '#fff'
    },
    secondary: {
      main: '#00B0B9',
      light: '#33C1C9',
      dark: '#007B82',
      contrastText: '#fff'
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#2C3E50',
      secondary: '#607D8B'
    },
    action: {
      hover: 'rgba(255, 78, 80, 0.08)',
      selected: 'rgba(255, 78, 80, 0.14)'
    }
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600
    },
    h2: {
      fontWeight: 600
    },
    h3: {
      fontWeight: 600
    },
    h4: {
      fontWeight: 500
    },
    button: {
      textTransform: 'none',
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          padding: '8px 24px'
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#E63E40'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
          '@media (min-width: 600px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
          maxWidth: '1280px !important', // Reduced from default 1536px
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          marginLeft: '-8px',
          marginRight: '-8px',
          width: 'calc(100% + 16px)',
          '@media (min-width: 600px)': {
            marginLeft: '-12px',
            marginRight: '-12px',
            width: 'calc(100% + 24px)',
          },
        },
        item: {
          paddingLeft: '8px',
          paddingRight: '8px',
          '@media (min-width: 600px)': {
            paddingLeft: '12px',
            paddingRight: '12px',
          },
        },
      },
    },
  }
})

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'Taxi Services', path: '/taxi-services' },
    { name: 'Vehicle Booking', path: '/vehicle-booking' },
    { name: 'Hotel Booking', path: '/hotel-booking' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <Router>
          <AuthProvider>
            <PackageProvider>
              <BookingProvider>
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                  <Navbar 
                    pages={pages}
                    sx={{
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                      backdropFilter: isScrolled ? 'blur(8px)' : 'none',
                      boxShadow: isScrolled ? 1 : 0,
                      transition: 'all 0.3s ease-in-out',
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }} 
                  />
                  <Box
                    component="main"
                    sx={{
                      flexGrow: 1,
                      pt: { xs: '64px', sm: '70px' }, 
                      minHeight: 'calc(100vh - 64px - 300px)',
                    }}
                  >
                    <Container maxWidth={false} disableGutters>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/customize-trip" element={<CustomizeTrip />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/destinations" element={<Destinations />} />
                        <Route path="/destinations/:id" element={<DestinationDetail />} />
                        <Route path="/packages" element={<PackagesPage />} />
                        <Route path="/package/:id" element={<PackageDetail />} />
                        <Route path="/compare-packages" element={<ComparePackages />} />
                        <Route path="/taxi-services" element={<TaxiServices />} />
                        <Route path="/taxi-services/:id" element={<TaxiServiceDetail />} />
                        <Route path="/vehicle-booking" element={<VehicleBooking />} />
                        <Route path="/hotel-booking" element={<HotelBooking />} />
                        <Route path="/activities" element={<Activities />} />

                        {/* Auth Routes */}
                        <Route path="/auth/login" element={<Login />} />
                        <Route path="/auth/signup" element={<Signup />} />

                        {/* Protected Routes */}
                        <Route
                          path="/profile"
                          element={
                            <ProtectedRoute>
                              <Profile />
                            </ProtectedRoute>
                          }
                        />
                        <Route
                          path="/my-bookings"
                          element={
                            <ProtectedRoute>
                              <MyBookings />
                            </ProtectedRoute>
                          }
                        />
                        <Route
                          path="/settings"
                          element={
                            <ProtectedRoute>
                              <Settings />
                            </ProtectedRoute>
                          }
                        />
                        <Route
                          path="/admin/*"
                          element={
                            <ProtectedRoute adminOnly>
                              <AdminDashboard />
                            </ProtectedRoute>
                          }
                        />

                        {/* Booking Routes */}
                        <Route
                          path="/booking"
                          element={
                            <ProtectedRoute>
                              <Booking />
                            </ProtectedRoute>
                          }
                        />
                        <Route
                          path="/booking/confirmation"
                          element={
                            <ProtectedRoute>
                              <BookingConfirmation />
                            </ProtectedRoute>
                          }
                        />
                      </Routes>
                    </Container>
                  </Box>
                  <Footer />
                </Box>
              </BookingProvider>
            </PackageProvider>
          </AuthProvider>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
