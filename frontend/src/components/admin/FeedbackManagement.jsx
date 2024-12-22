import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Rating,
  Chip,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tab,
  Tabs,
  LinearProgress,
  Tooltip,
  Badge,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FlagIcon from '@mui/icons-material/Flag';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyIcon from '@mui/icons-material/Reply';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

// Mock feedback data
const mockFeedback = [
  {
    id: 1,
    user: 'John Doe',
    package: 'Araku Valley Tour',
    rating: 5,
    comment: 'Amazing experience! The tour guide was very knowledgeable and friendly.',
    date: '2024-01-19',
    status: 'new',
    type: 'review',
    helpful: 12,
    response: '',
  },
  {
    id: 2,
    user: 'Jane Smith',
    package: 'Beach Paradise',
    rating: 4,
    comment: 'Great trip overall, but the hotel could have been better.',
    date: '2024-01-18',
    status: 'responded',
    type: 'review',
    helpful: 8,
    response: 'Thank you for your feedback. We are working on improving our hotel partnerships.',
  },
  {
    id: 3,
    user: 'Mike Johnson',
    package: 'City Tour',
    rating: 2,
    comment: 'The tour was rushed and we missed several promised stops.',
    date: '2024-01-17',
    status: 'flagged',
    type: 'complaint',
    helpful: 5,
    response: '',
  },
];

const FeedbackManagement = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [responseText, setResponseText] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleMenuClick = (event, feedback) => {
    setAnchorEl(event.currentTarget);
    setSelectedFeedback(feedback);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleResponse = () => {
    setOpenDialog(true);
    handleMenuClose();
  };

  const handleSendResponse = () => {
    // Implementation for sending response
    console.log('Sending response:', responseText);
    setOpenDialog(false);
    setResponseText('');
  };

  const getSentimentIcon = (rating) => {
    switch (rating) {
      case 1:
        return <SentimentVeryDissatisfiedIcon color="error" />;
      case 2:
        return <SentimentDissatisfiedIcon color="error" />;
      case 3:
        return <SentimentSatisfiedIcon color="warning" />;
      case 4:
        return <SentimentSatisfiedAltIcon color="success" />;
      case 5:
        return <SentimentVerySatisfiedIcon color="success" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new':
        return 'primary';
      case 'responded':
        return 'success';
      case 'flagged':
        return 'error';
      default:
        return 'default';
    }
  };

  const renderFeedbackStats = () => (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Average Rating
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h4" component="div" sx={{ mr: 1 }}>
                4.2
              </Typography>
              <Rating value={4.2} precision={0.1} readOnly size="small" />
            </Box>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Based on 150 reviews
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Response Rate
            </Typography>
            <Typography variant="h4" component="div">
              85%
            </Typography>
            <LinearProgress
              variant="determinate"
              value={85}
              sx={{ mt: 1, mb: 1 }}
            />
            <Typography variant="body2" color="success.main">
              Above target (80%)
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              New Feedback
            </Typography>
            <Typography variant="h4" component="div">
              12
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Last 24 hours
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Pending Responses
            </Typography>
            <Typography variant="h4" component="div" color="error">
              5
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Requires attention
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const renderFeedbackList = () => (
    <Paper sx={{ mt: 3 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab label="All Feedback" />
          <Tab
            label={
              <Badge badgeContent={5} color="error">
                Pending
              </Badge>
            }
          />
          <Tab label="Responded" />
          <Tab
            label={
              <Badge badgeContent={2} color="error">
                Flagged
              </Badge>
            }
          />
        </Tabs>
      </Box>

      <Box sx={{ p: 2 }}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search feedback..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              InputProps={{
                startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              startIcon={<FilterListIcon />}
              sx={{ mr: 1 }}
            >
              Filter
            </Button>
          </Grid>
        </Grid>

        <List>
          {mockFeedback.map((feedback) => (
            <ListItem
              key={feedback.id}
              alignItems="flex-start"
              sx={{
                mb: 2,
                bgcolor: 'background.paper',
                borderRadius: 1,
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              <ListItemAvatar>
                <Avatar>{feedback.user[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="subtitle1">{feedback.user}</Typography>
                    <Chip
                      size="small"
                      label={feedback.status}
                      color={getStatusColor(feedback.status)}
                    />
                    <Chip
                      size="small"
                      label={feedback.type}
                      variant="outlined"
                    />
                  </Box>
                }
                secondary={
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      <Rating value={feedback.rating} readOnly size="small" />
                      {getSentimentIcon(feedback.rating)}
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ ml: 1 }}
                      >
                        {feedback.package}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      sx={{ mt: 1 }}
                    >
                      {feedback.comment}
                    </Typography>
                    {feedback.response && (
                      <Box sx={{ mt: 1, ml: 2, borderLeft: 2, borderColor: 'primary.main', pl: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          Response: {feedback.response}
                        </Typography>
                      </Box>
                    )}
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, gap: 2 }}>
                      <Typography variant="caption" color="text.secondary">
                        {feedback.date}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ThumbUpIcon fontSize="small" sx={{ mr: 0.5 }} />
                        <Typography variant="caption">
                          {feedback.helpful}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                }
              />
              <IconButton
                edge="end"
                onClick={(e) => handleMenuClick(e, feedback)}
              >
                <MoreVertIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleResponse}>
          <ReplyIcon sx={{ mr: 1 }} /> Respond
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <FlagIcon sx={{ mr: 1 }} /> Flag
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <DeleteIcon sx={{ mr: 1 }} /> Delete
        </MenuItem>
      </Menu>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Respond to Feedback</DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2">Original Feedback:</Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedFeedback?.comment}
            </Typography>
          </Box>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Your Response"
            value={responseText}
            onChange={(e) => setResponseText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleSendResponse}
            sx={{
              backgroundColor: '#FF4E50',
              '&:hover': {
                backgroundColor: '#E63E40'
              }
            }}
          >
            Send Response
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Feedback Management
      </Typography>

      {renderFeedbackStats()}
      {renderFeedbackList()}
    </Box>
  );
};

export default FeedbackManagement;
