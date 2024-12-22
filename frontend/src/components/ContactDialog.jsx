import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Box,
  Divider,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';

const contactInfo = {
  phones: [
    { number: '+91 9876543210', label: 'Main Office' },
    { number: '+91 9876543211', label: 'Customer Support' },
  ],
  emails: [
    { address: 'info@vizagtravelshub.com', label: 'General Inquiries' },
    { address: 'bookings@vizagtravelshub.com', label: 'Bookings' },
    { address: 'support@vizagtravelshub.com', label: 'Support' },
  ],
  whatsapp: '+91 9876543210',
  address: '123 Beach Road, Visakhapatnam, Andhra Pradesh, India - 530017',
};

const ContactDialog = ({ open, onClose }) => {
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          backgroundImage: 'linear-gradient(to bottom right, #ffffff, #f5f5f5)',
        }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
        color: 'white'
      }}>
        <Typography variant="h6">Contact Us</Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ py: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Phone Numbers
          </Typography>
          <List dense>
            {contactInfo.phones.map((phone, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <PhoneIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={phone.number}
                  secondary={phone.label}
                  primaryTypographyProps={{
                    component: 'a',
                    href: `tel:${phone.number.replace(/\s/g, '')}`,
                    sx: { textDecoration: 'none', color: 'inherit' }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Email Addresses
          </Typography>
          <List dense>
            {contactInfo.emails.map((email, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <EmailIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={email.address}
                  secondary={email.label}
                  primaryTypographyProps={{
                    component: 'a',
                    href: `mailto:${email.address}`,
                    sx: { textDecoration: 'none', color: 'inherit' }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            WhatsApp
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <WhatsAppIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={contactInfo.whatsapp}
                primaryTypographyProps={{
                  component: 'a',
                  href: `https://wa.me/${contactInfo.whatsapp.replace(/\s/g, '')}`,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  sx: { textDecoration: 'none', color: 'inherit' }
                }}
              />
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Office Address
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={contactInfo.address} />
            </ListItem>
          </List>
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={onClose} variant="outlined" fullWidth>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;
