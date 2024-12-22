import React from 'react';

const BookingConfirmation = ({ booking }) => {
  // This is a template for the email that would be sent
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Confirmation - Vizag Travels Hub</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background-color: #FF4E50;
      color: white;
      padding: 20px;
      text-align: center;
    }
    .content {
      padding: 20px;
      background-color: #f9f9f9;
    }
    .booking-details {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      margin: 20px 0;
    }
    .footer {
      text-align: center;
      padding: 20px;
      font-size: 12px;
      color: #666;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #FF4E50;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      margin: 20px 0;
    }
    .total {
      font-size: 24px;
      color: #FF4E50;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Booking Confirmation</h1>
      <p>Thank you for choosing Vizag Travels Hub!</p>
    </div>
    
    <div class="content">
      <p>Dear ${booking.firstName},</p>
      
      <p>Your booking has been confirmed! Here are your booking details:</p>
      
      <div class="booking-details">
        <h2>Booking Reference: #${booking.reference}</h2>
        
        <h3>Personal Information</h3>
        <p>Name: ${booking.firstName} ${booking.lastName}</p>
        <p>Email: ${booking.email}</p>
        <p>Phone: ${booking.phone}</p>
        
        <h3>Travel Details</h3>
        <p>Travel Date: ${new Date(booking.travelDate).toLocaleDateString()}</p>
        <p>Number of Travelers: ${booking.adults} Adults, ${booking.children} Children</p>
        ${booking.specialRequests ? `<p>Special Requests: ${booking.specialRequests}</p>` : ''}
        
        <h3>Price Details</h3>
        <p>Base Price (${booking.adults} Adults): ₹${booking.adults * 33000}</p>
        ${booking.children > 0 ? `<p>Children (${booking.children}): ₹${booking.children * 16500}</p>` : ''}
        <p>Taxes & Fees (10%): ₹${(booking.adults * 33000 + booking.children * 16500) * 0.1}</p>
        <div class="total">
          Total Amount: ₹${(booking.adults * 33000 + booking.children * 16500) * 1.1}
        </div>
      </div>
      
      <h3>What's Next?</h3>
      <ol>
        <li>Save this email for your records</li>
        <li>Review your itinerary</li>
        <li>Pack your bags!</li>
      </ol>
      
      <center>
        <a href="#" class="button">View Booking Details</a>
      </center>
      
      <p>Need to make changes to your booking? Contact our support team:</p>
      <ul>
        <li>Email: support@vizagtravelshub.com</li>
        <li>Phone: +91 1234567890</li>
      </ul>
    </div>
    
    <div class="footer">
      <p>This is an automated email. Please do not reply to this message.</p>
      <p>© ${new Date().getFullYear()} Vizag Travels Hub. All rights reserved.</p>
      <p>
        <a href="#">Privacy Policy</a> | 
        <a href="#">Terms of Service</a> | 
        <a href="#">Contact Us</a>
      </p>
    </div>
  </div>
</body>
</html>
  `;
};

export default BookingConfirmation;
