import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  LinearProgress,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import BackupIcon from '@mui/icons-material/Backup';
import RestoreIcon from '@mui/icons-material/Restore';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const DataManagement = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDataTypes, setSelectedDataTypes] = useState({
    bookings: true,
    users: true,
    packages: true,
    settings: false,
  });
  const [exportProgress, setExportProgress] = useState(0);
  const [exportStatus, setExportStatus] = useState(null);

  const dataTypes = [
    { id: 'bookings', name: 'Bookings', count: 156 },
    { id: 'users', name: 'Users', count: 256 },
    { id: 'packages', name: 'Travel Packages', count: 24 },
    { id: 'settings', name: 'System Settings', count: null },
  ];

  // Mock backup history
  const backupHistory = [
    {
      id: 1,
      date: '2024-01-19 10:00 AM',
      size: '2.5 MB',
      type: 'Auto',
      status: 'success'
    },
    {
      id: 2,
      date: '2024-01-18 10:00 AM',
      size: '2.4 MB',
      type: 'Manual',
      status: 'success'
    },
    {
      id: 3,
      date: '2024-01-17 10:00 AM',
      size: '2.3 MB',
      type: 'Auto',
      status: 'error'
    },
  ];

  const handleExport = () => {
    setOpenDialog(true);
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle file import
      console.log('Importing file:', file.name);
    }
  };

  const startExport = () => {
    setExportProgress(0);
    setExportStatus('progress');

    // Simulate export progress
    const interval = setInterval(() => {
      setExportProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setExportStatus('success');
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleCheckboxChange = (dataType) => {
    setSelectedDataTypes({
      ...selectedDataTypes,
      [dataType]: !selectedDataTypes[dataType],
    });
  };

  const renderExportDialog = () => (
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Export Data</DialogTitle>
      <DialogContent>
        <Typography gutterBottom>
          Select the data you want to export:
        </Typography>
        <List>
          {dataTypes.map((type) => (
            <ListItem key={type.id}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedDataTypes[type.id]}
                    onChange={() => handleCheckboxChange(type.id)}
                  />
                }
                label={
                  <Box>
                    <Typography variant="subtitle1">{type.name}</Typography>
                    {type.count && (
                      <Typography variant="caption" color="text.secondary">
                        {type.count} records
                      </Typography>
                    )}
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>

        {exportStatus === 'progress' && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" gutterBottom>
              Exporting data... {exportProgress}%
            </Typography>
            <LinearProgress variant="determinate" value={exportProgress} />
          </Box>
        )}

        {exportStatus === 'success' && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Export completed successfully!
          </Alert>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
        <Button
          variant="contained"
          onClick={startExport}
          disabled={exportStatus === 'progress'}
          startIcon={<DownloadIcon />}
          sx={{
            backgroundColor: '#FF4E50',
            '&:hover': {
              backgroundColor: '#E63E40'
            }
          }}
        >
          Export
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Data Management
      </Typography>

      <Grid container spacing={3}>
        {/* Quick Actions */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  onClick={handleExport}
                >
                  Export Data
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  fullWidth
                  variant="outlined"
                  component="label"
                  startIcon={<UploadIcon />}
                >
                  Import Data
                  <input
                    type="file"
                    hidden
                    accept=".json,.csv"
                    onChange={handleImport}
                  />
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<BackupIcon />}
                >
                  Create Backup
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<RestoreIcon />}
                >
                  Restore Backup
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Backup History */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Backup History
              </Typography>
              <List>
                {backupHistory.map((backup) => (
                  <ListItem key={backup.id}>
                    <ListItemIcon>
                      {backup.status === 'success' ? (
                        <CheckCircleIcon color="success" />
                      ) : (
                        <ErrorIcon color="error" />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={`Backup ${backup.id}`}
                      secondary={
                        <>
                          {backup.date} • {backup.size} • {backup.type}
                        </>
                      }
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="download"
                        sx={{ mr: 1 }}
                      >
                        <FileDownloadIcon />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {renderExportDialog()}
    </Box>
  );
};

export default DataManagement;
