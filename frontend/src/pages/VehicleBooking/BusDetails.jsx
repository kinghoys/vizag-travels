import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Alert,
  Chip,
} from '@mui/material';
import { busPackages, commonExclusions, commonNotes } from '../../data/busPackages';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import TimerIcon from '@mui/icons-material/Timer';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InfoIcon from '@mui/icons-material/Info';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GroupIcon from '@mui/icons-material/Group';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`bus-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const BusDetails = ({ busType }) => {
  const [tabValue, setTabValue] = useState(0);
  const bus = busPackages[busType];

  if (!bus) return null;

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const renderPackages = () => (
    <Grid container spacing={3}>
      {bus.packages.map((pkg, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {pkg.name}
              </Typography>
              {pkg.description && (
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {pkg.description}
                </Typography>
              )}
              <Typography variant="h5" color="primary">
                ₹{pkg.cost.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  const renderCityRates = () => (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        City Tour Rates
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={`Base Package: ₹${bus.cityRates.baseCost} for ${bus.cityRates.minimumHours} hours / ${bus.cityRates.minimumKm} km`}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Extra Hour: ₹${bus.cityRates.extraHourCost}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Extra KM: ₹${bus.cityRates.extraKmCost}`} />
        </ListItem>
      </List>
    </Paper>
  );

  const renderOutstationRates = () => (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Outstation Rates
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={`Minimum ${bus.outstation.minimumKmPerDay} km per day`}
            secondary={`₹${bus.outstation.perKmCost} per km`}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Additional Charges"
            secondary={`Night Halt: ₹${bus.additionalCharges.nightHalt} | Driver Beta: ₹${bus.additionalCharges.driverBeta} per day`}
          />
        </ListItem>
      </List>
    </Paper>
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
          <Tab icon={<DirectionsBusIcon />} label="Tour Packages" />
          <Tab icon={<TimerIcon />} label="City Rates" />
          <Tab icon={<LocalOfferIcon />} label="Outstation" />
          <Tab icon={<InfoIcon />} label="Terms" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        {renderPackages()}
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        {renderCityRates()}
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        {renderOutstationRates()}
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Alert severity="info" sx={{ mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Vehicle Details
              </Typography>
              <Typography variant="body2">
                {bus.name} - {bus.capacity}
              </Typography>
              <Typography variant="body2">
                {bus.description}
              </Typography>
              <Typography variant="body2">
                Minimum Charge: ₹{bus.minCharge}
              </Typography>
              <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AcUnitIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body2">AC Vehicle</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <GroupIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body2">
                    {busType === 'bus24' ? '24 Seater' : '40 Seater'}
                  </Typography>
                </Box>
              </Box>
            </Alert>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Exclusions
              </Typography>
              <List>
                {commonExclusions.map((item, index) => (
                  <ListItem key={index}>
                    <Chip label={item} color="error" variant="outlined" />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Important Notes
              </Typography>
              <List>
                {commonNotes.map((note, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={note} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
    </Box>
  );
};

export default BusDetails;
