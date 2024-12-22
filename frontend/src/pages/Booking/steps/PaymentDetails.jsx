import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Typography,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Alert,
} from '@mui/material';
import { useBooking } from '../../../context/BookingContext';

const PaymentDetails = () => {
  const { activeBooking, updateBookingDetails } = useBooking();
  const [paymentData, setPaymentData] = useState({
    method: activeBooking?.paymentDetails?.method || 'card',
    cardNumber: activeBooking?.paymentDetails?.cardNumber || '',
    cardName: activeBooking?.paymentDetails?.cardName || '',
    expiryDate: activeBooking?.paymentDetails?.expiryDate || '',
    cvv: activeBooking?.paymentDetails?.cvv || '',
  });

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setPaymentData(prev => ({
      ...prev,
      [field]: value,
    }));
    updateBookingDetails({
      paymentDetails: {
        ...activeBooking.paymentDetails,
        [field]: value,
      },
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Payment Details
      </Typography>

      <Alert severity="info" sx={{ mb: 3 }}>
        This is a demo application. Please do not enter real payment information.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Payment Method</FormLabel>
            <RadioGroup
              row
              value={paymentData.method}
              onChange={handleChange('method')}
            >
              <FormControlLabel
                value="card"
                control={<Radio />}
                label="Credit/Debit Card"
              />
              <FormControlLabel
                value="upi"
                control={<Radio />}
                label="UPI"
              />
              <FormControlLabel
                value="netbanking"
                control={<Radio />}
                label="Net Banking"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        {paymentData.method === 'card' && (
          <>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Card Number"
                value={paymentData.cardNumber}
                onChange={handleChange('cardNumber')}
                inputProps={{ maxLength: 16 }}
                placeholder="1234 5678 9012 3456"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Name on Card"
                value={paymentData.cardName}
                onChange={handleChange('cardName')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Expiry Date"
                value={paymentData.expiryDate}
                onChange={handleChange('expiryDate')}
                placeholder="MM/YY"
                inputProps={{ maxLength: 5 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="CVV"
                value={paymentData.cvv}
                onChange={handleChange('cvv')}
                type="password"
                inputProps={{ maxLength: 3 }}
              />
            </Grid>
          </>
        )}

        {paymentData.method === 'upi' && (
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="UPI ID"
              placeholder="username@upi"
              value={paymentData.upiId}
              onChange={handleChange('upiId')}
            />
          </Grid>
        )}

        {paymentData.method === 'netbanking' && (
          <Grid item xs={12}>
            <Alert severity="info">
              You will be redirected to your bank's website to complete the payment.
            </Alert>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default PaymentDetails;
