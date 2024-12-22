import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Badge,
  Tabs,
  Tab,
  Chip,
  Divider,
  Button,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookingIcon from '@mui/icons-material/BookOnline';
import UserIcon from '@mui/icons-material/Person';
import SystemIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';

// Mock notifications data
const mockNotifications = [
  {
    id: 1,
    type: 'booking',
    title: 'New Booking Request',
    message: 'John Doe has made a new booking for Araku Valley Package',
    timestamp: '2024-01-19T10:30:00',
    read: false,
    priority: 'high'
  },
  {
    id: 2,
    type: 'user',
    title: 'New User Registration',
    message: 'Jane Smith has created a new account',
    timestamp: '2024-01-19T09:15:00',
    read: true,
    priority: 'medium'
  },
  {
    id: 3,
    type: 'system',
    title: 'System Update',
    message: 'System maintenance scheduled for tonight at 2 AM',
    timestamp: '2024-01-19T08:00:00',
    read: false,
    priority: 'low'
  },
  // Add more notifications as needed
];

const NotificationCenter = () => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const [currentTab, setCurrentTab] = useState(0);
  const unreadCount = notifications.filter(n => !n.read).length;

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'booking':
        return <BookingIcon color="primary" />;
      case 'user':
        return <UserIcon color="success" />;
      case 'system':
        return <SystemIcon color="warning" />;
      default:
        return <InfoIcon />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'info';
      default:
        return 'default';
    }
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const filterNotifications = () => {
    switch (currentTab) {
      case 0: // All
        return notifications;
      case 1: // Unread
        return notifications.filter(n => !n.read);
      case 2: // Bookings
        return notifications.filter(n => n.type === 'booking');
      case 3: // System
        return notifications.filter(n => n.type === 'system');
      default:
        return notifications;
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <>
      <IconButton color="inherit" onClick={() => setOpen(true)}>
        <Badge badgeContent={unreadCount} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: { xs: '100%', sm: 400 } }
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">
              Notifications
              {unreadCount > 0 && (
                <Chip
                  size="small"
                  label={`${unreadCount} new`}
                  color="error"
                  sx={{ ml: 1 }}
                />
              )}
            </Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
            <Tabs value={currentTab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
              <Tab label="All" />
              <Tab label="Unread" />
              <Tab label="Bookings" />
              <Tab label="System" />
            </Tabs>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Button size="small" onClick={markAllAsRead}>
              Mark all as read
            </Button>
            <Button size="small" color="error" onClick={clearAll}>
              Clear all
            </Button>
          </Box>

          <List>
            {filterNotifications().map((notification) => (
              <React.Fragment key={notification.id}>
                <ListItem
                  alignItems="flex-start"
                  sx={{
                    bgcolor: notification.read ? 'transparent' : 'action.hover',
                    borderRadius: 1,
                  }}
                >
                  <ListItemIcon>
                    {getNotificationIcon(notification.type)}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="subtitle2">
                          {notification.title}
                        </Typography>
                        <Chip
                          size="small"
                          label={notification.priority}
                          color={getPriorityColor(notification.priority)}
                        />
                      </Box>
                    }
                    secondary={
                      <>
                        <Typography variant="body2" color="text.primary">
                          {notification.message}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {formatTimestamp(notification.timestamp)}
                        </Typography>
                      </>
                    }
                  />
                  {!notification.read && (
                    <IconButton
                      size="small"
                      onClick={() => markAsRead(notification.id)}
                      sx={{ ml: 1 }}
                    >
                      <CheckCircleIcon color="success" />
                    </IconButton>
                  )}
                </ListItem>
                <Divider component="li" />
              </React.Fragment>
            ))}
            {filterNotifications().length === 0 && (
              <ListItem>
                <ListItemText
                  primary={
                    <Typography align="center" color="text.secondary">
                      No notifications to display
                    </Typography>
                  }
                />
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NotificationCenter;
