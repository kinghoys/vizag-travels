import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import DownloadIcon from '@mui/icons-material/Download';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import InfoIcon from '@mui/icons-material/Info';

// Mock data
const revenueData = [
  { month: 'Jan', revenue: 150000, bookings: 45, avgBookingValue: 3333 },
  { month: 'Feb', revenue: 180000, bookings: 52, avgBookingValue: 3461 },
  { month: 'Mar', revenue: 220000, bookings: 65, avgBookingValue: 3384 },
  { month: 'Apr', revenue: 240000, bookings: 70, avgBookingValue: 3428 },
  { month: 'May', revenue: 280000, bookings: 85, avgBookingValue: 3294 },
  { month: 'Jun', revenue: 320000, bookings: 95, avgBookingValue: 3368 },
];

const packagePerformance = [
  { name: 'Araku Valley', bookings: 45, revenue: 125000, satisfaction: 4.5 },
  { name: 'Beach Paradise', bookings: 38, revenue: 95000, satisfaction: 4.3 },
  { name: 'City Tour', bookings: 32, revenue: 64000, satisfaction: 4.2 },
  { name: 'Heritage Walk', bookings: 28, revenue: 56000, satisfaction: 4.4 },
  { name: 'Adventure Trek', bookings: 25, revenue: 75000, satisfaction: 4.6 },
];

const customerSegments = [
  { name: 'Families', value: 40 },
  { name: 'Couples', value: 30 },
  { name: 'Solo Travelers', value: 15 },
  { name: 'Business', value: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('6months');
  const [reportType, setReportType] = useState('revenue');

  const downloadReport = () => {
    // Implementation for downloading reports
    console.log('Downloading report:', reportType);
  };

  const calculateGrowth = (current, previous) => {
    const growth = ((current - previous) / previous) * 100;
    return growth.toFixed(1);
  };

  const renderRevenueMetrics = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Revenue
            </Typography>
            <Typography variant="h4">
              ₹{(320000).toLocaleString()}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <TrendingUpIcon color="success" />
              <Typography variant="body2" color="success.main" sx={{ ml: 1 }}>
                +15.3% vs last month
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Bookings
            </Typography>
            <Typography variant="h4">95</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <TrendingUpIcon color="success" />
              <Typography variant="body2" color="success.main" sx={{ ml: 1 }}>
                +11.8% vs last month
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Average Booking Value
            </Typography>
            <Typography variant="h4">₹3,368</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <TrendingDownIcon color="error" />
              <Typography variant="body2" color="error.main" sx={{ ml: 1 }}>
                -2.1% vs last month
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const renderRevenueChart = () => (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6">Revenue Trends</Typography>
        <Button
          variant="outlined"
          startIcon={<DownloadIcon />}
          onClick={downloadReport}
        >
          Download Report
        </Button>
      </Box>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <RechartsTooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#FF4E50"
            fill="#FF4E50"
            fillOpacity={0.3}
            name="Revenue (₹)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  );

  const renderPackagePerformance = () => (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Package Performance
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Package Name</TableCell>
              <TableCell align="right">Bookings</TableCell>
              <TableCell align="right">Revenue</TableCell>
              <TableCell align="right">Satisfaction</TableCell>
              <TableCell align="right">Growth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {packagePerformance.map((pkg) => (
              <TableRow key={pkg.name}>
                <TableCell>{pkg.name}</TableCell>
                <TableCell align="right">{pkg.bookings}</TableCell>
                <TableCell align="right">₹{pkg.revenue.toLocaleString()}</TableCell>
                <TableCell align="right">
                  {pkg.satisfaction}
                  <Tooltip title="Based on customer reviews">
                    <IconButton size="small">
                      <InfoIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell align="right">
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    {Math.random() > 0.5 ? (
                      <TrendingUpIcon color="success" sx={{ mr: 1 }} />
                    ) : (
                      <TrendingDownIcon color="error" sx={{ mr: 1 }} />
                    )}
                    {(Math.random() * 20).toFixed(1)}%
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );

  const renderCustomerSegments = () => (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Customer Segments
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={customerSegments}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {customerSegments.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <RechartsTooltip />
            </PieChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ mt: 2 }}>
            {customerSegments.map((segment, index) => (
              <Box
                key={segment.name}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: 1,
                    bgcolor: COLORS[index % COLORS.length],
                    mr: 2,
                  }}
                />
                <Typography variant="body1">
                  {segment.name}: {segment.value}%
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );

  return (
    <Box>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5">Analytics Dashboard</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl size="small">
            <InputLabel>Time Range</InputLabel>
            <Select
              value={timeRange}
              label="Time Range"
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <MenuItem value="7days">Last 7 Days</MenuItem>
              <MenuItem value="30days">Last 30 Days</MenuItem>
              <MenuItem value="6months">Last 6 Months</MenuItem>
              <MenuItem value="1year">Last Year</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small">
            <InputLabel>Report Type</InputLabel>
            <Select
              value={reportType}
              label="Report Type"
              onChange={(e) => setReportType(e.target.value)}
            >
              <MenuItem value="revenue">Revenue</MenuItem>
              <MenuItem value="bookings">Bookings</MenuItem>
              <MenuItem value="packages">Packages</MenuItem>
              <MenuItem value="customers">Customers</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={downloadReport}
            sx={{
              backgroundColor: '#FF4E50',
              '&:hover': {
                backgroundColor: '#E63E40'
              }
            }}
          >
            Download Report
          </Button>
        </Box>
      </Box>

      {renderRevenueMetrics()}
      {renderRevenueChart()}
      {renderPackagePerformance()}
      {renderCustomerSegments()}
    </Box>
  );
};

export default Analytics;
