import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const BookingContext = createContext();

export const useBooking = () => {
  return useContext(BookingContext);
};

export const BookingProvider = ({ children }) => {
  const [activeBooking, setActiveBooking] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const startBooking = (packageData) => {
    setActiveBooking({
      packageDetails: packageData,
      userId: user?.id || null,
      status: 'pending',
      createdAt: new Date().toISOString(),
    });
  };

  const updateBookingDetails = (details) => {
    setActiveBooking(prev => ({
      ...prev,
      ...details,
    }));
  };

  const confirmBooking = async (bookingData) => {
    try {
      setLoading(true);
      setError(null);

      // Store booking in localStorage for persistence
      const bookingId = Math.random().toString(36).substr(2, 9);
      const finalBookingData = {
        ...bookingData,
        id: bookingId,
        createdAt: new Date().toISOString(),
      };

      // Get existing bookings or initialize empty array
      const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      existingBookings.push(finalBookingData);
      localStorage.setItem('bookings', JSON.stringify(existingBookings));

      setActiveBooking(finalBookingData);
      setLoading(false);
      return finalBookingData;
    } catch (err) {
      setError('Failed to confirm booking. Please try again.');
      setLoading(false);
      throw err;
    }
  };

  const getBookings = () => {
    return JSON.parse(localStorage.getItem('bookings') || '[]');
  };

  const value = {
    activeBooking,
    setActiveBooking,
    bookingStep,
    setBookingStep,
    loading,
    error,
    startBooking,
    updateBookingDetails,
    confirmBooking,
    getBookings,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
