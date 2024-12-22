import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tab,
  Tabs,
  InputAdornment,
  Avatar,
  Switch,
  FormControlLabel,
  Divider,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ImageIcon from '@mui/icons-material/Image';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArticleIcon from '@mui/icons-material/Article';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import CategoryIcon from '@mui/icons-material/Category';

// Mock content data
const mockContent = [
  {
    id: 1,
    title: 'Top 10 Places to Visit in Vizag',
    type: 'blog',
    category: 'travel_guide',
    status: 'published',
    author: 'John Doe',
    publishDate: '2024-01-19',
    views: 1250,
    likes: 45,
    comments: 12,
    featured: true,
  },
  {
    id: 2,
    title: 'Best Time to Visit Araku Valley',
    type: 'article',
    category: 'tips',
    status: 'draft',
    author: 'Jane Smith',
    publishDate: null,
    views: 0,
    likes: 0,
    comments: 0,
    featured: false,
  },
  {
    id: 3,
    title: 'Local Cuisine Guide',
    type: 'blog',
    category: 'food',
    status: 'published',
    author: 'Mike Johnson',
    publishDate: '2024-01-18',
    views: 850,
    likes: 32,
    comments: 8,
    featured: true,
  },
];

const ContentManager = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [contentForm, setContentForm] = useState({
    title: '',
    type: 'blog',
    category: '',
    content: '',
    featured: false,
    tags: [],
  });

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleCreateContent = () => {
    setSelectedContent(null);
    setContentForm({
      title: '',
      type: 'blog',
      category: '',
      content: '',
      featured: false,
      tags: [],
    });
    setOpenDialog(true);
  };

  const handleEditContent = (content) => {
    setSelectedContent(content);
    setContentForm({
      title: content.title,
      type: content.type,
      category: content.category,
      content: 'Sample content...',
      featured: content.featured,
      tags: [],
    });
    setOpenDialog(true);
  };

  const handleSaveContent = () => {
    // Implementation for saving content
    console.log('Saving content:', contentForm);
    setOpenDialog(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'success';
      case 'draft':
        return 'warning';
      default:
        return 'default';
    }
  };

  const renderContentStats = () => (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Content
            </Typography>
            <Typography variant="h4">24</Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              <Chip label="15 Published" size="small" color="success" />
              <Chip label="9 Drafts" size="small" color="warning" />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Views
            </Typography>
            <Typography variant="h4">12.5K</Typography>
            <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
              +22% vs last month
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Engagement Rate
            </Typography>
            <Typography variant="h4">8.2%</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Based on likes & comments
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Media Library
            </Typography>
            <Typography variant="h4">156</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Images & attachments
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const renderContentList = () => (
    <Paper sx={{ mt: 3 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab label="All Content" />
          <Tab label="Blog Posts" />
          <Tab label="Articles" />
          <Tab label="Media" />
        </Tabs>
      </Box>

      <Box sx={{ p: 2 }}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search content..."
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
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleCreateContent}
              sx={{
                backgroundColor: '#FF4E50',
                '&:hover': {
                  backgroundColor: '#E63E40'
                }
              }}
            >
              Create Content
            </Button>
          </Grid>
        </Grid>

        <List>
          {mockContent.map((content) => (
            <ListItem
              key={content.id}
              sx={{
                mb: 2,
                bgcolor: 'background.paper',
                borderRadius: 1,
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="subtitle1">{content.title}</Typography>
                    {content.featured && (
                      <Chip label="Featured" size="small" color="primary" />
                    )}
                  </Box>
                }
                secondary={
                  <Box sx={{ mt: 1 }}>
                    <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                      <Chip
                        size="small"
                        label={content.type}
                        icon={<ArticleIcon />}
                      />
                      <Chip
                        size="small"
                        label={content.category}
                        icon={<CategoryIcon />}
                      />
                      <Chip
                        size="small"
                        label={content.status}
                        color={getStatusColor(content.status)}
                      />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        By {content.author}
                      </Typography>
                      {content.publishDate && (
                        <Typography variant="body2" color="text.secondary">
                          Published on {content.publishDate}
                        </Typography>
                      )}
                      <Typography variant="body2" color="text.secondary">
                        {content.views} views
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {content.likes} likes
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {content.comments} comments
                      </Typography>
                    </Box>
                  </Box>
                }
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  onClick={() => handleEditContent(content)}
                  sx={{ mr: 1 }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" sx={{ mr: 1 }}>
                  <VisibilityIcon />
                </IconButton>
                <IconButton edge="end" color="error">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );

  const renderContentDialog = () => (
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>
        {selectedContent ? 'Edit Content' : 'Create New Content'}
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              value={contentForm.title}
              onChange={(e) =>
                setContentForm({ ...contentForm, title: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Content Type</InputLabel>
              <Select
                value={contentForm.type}
                label="Content Type"
                onChange={(e) =>
                  setContentForm({ ...contentForm, type: e.target.value })
                }
              >
                <MenuItem value="blog">Blog Post</MenuItem>
                <MenuItem value="article">Article</MenuItem>
                <MenuItem value="guide">Travel Guide</MenuItem>
                <MenuItem value="news">News</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={contentForm.category}
                label="Category"
                onChange={(e) =>
                  setContentForm({ ...contentForm, category: e.target.value })
                }
              >
                <MenuItem value="travel_guide">Travel Guide</MenuItem>
                <MenuItem value="tips">Tips & Tricks</MenuItem>
                <MenuItem value="food">Food & Cuisine</MenuItem>
                <MenuItem value="culture">Culture & Heritage</MenuItem>
                <MenuItem value="adventure">Adventure</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={10}
              label="Content"
              value={contentForm.content}
              onChange={(e) =>
                setContentForm({ ...contentForm, content: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="outlined"
                startIcon={<ImageIcon />}
              >
                Add Images
              </Button>
              <Button
                variant="outlined"
                startIcon={<AttachFileIcon />}
              >
                Add Attachments
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={contentForm.featured}
                  onChange={(e) =>
                    setContentForm({
                      ...contentForm,
                      featured: e.target.checked,
                    })
                  }
                />
              }
              label="Feature this content"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleSaveContent}
          sx={{
            backgroundColor: '#FF4E50',
            '&:hover': {
              backgroundColor: '#E63E40'
            }
          }}
        >
          {selectedContent ? 'Update Content' : 'Publish Content'}
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Content Manager
      </Typography>

      {renderContentStats()}
      {renderContentList()}
      {renderContentDialog()}
    </Box>
  );
};

export default ContentManager;
