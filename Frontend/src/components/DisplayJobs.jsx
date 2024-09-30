import React, { useState, useEffect } from 'react';
import { 
  Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  CircularProgress, Alert, useTheme, Chip
} from '@mui/material';
import { Work, Error } from '@mui/icons-material';
import axios from 'axios';

const DisplayJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3001/jobvolcanos');
        setJobs(response.data.items || []);
        setError(null);
      } catch (err) {
        setError('Failed to fetch jobs: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
    const interval = setInterval(fetchJobs, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Failed':
        return theme.palette.error.main;
      case 'Pending':
        return theme.palette.warning.main;
      case 'Running':
        return theme.palette.success.main;
      case 'Completed':
        return theme.palette.info.main;
      default:
        return theme.palette.grey[500];
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" icon={<Error />}>
        {error}
      </Alert>
    );
  }

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        <Work sx={{ mr: 1, verticalAlign: 'middle' }} />
        Volcano Jobs
      </Typography>
      {jobs.length === 0 ? (
        <Typography variant="body1">No Volcano Jobs found.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Namespace</TableCell>
                <TableCell>Creation Time</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map((job, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { bgcolor: 'action.hover' } }}>
                  <TableCell>{job.metadata.name}</TableCell>
                  <TableCell>{job.metadata.namespace}</TableCell>
                  <TableCell>{new Date(job.metadata.creationTimestamp).toLocaleString()}</TableCell>
                  <TableCell>
                    <Chip
                      label={job.status ? job.status.state.phase : 'Unknown'}
                      sx={{
                        bgcolor: getStatusColor(job.status ? job.status.state.phase : 'Unknown'),
                        color: 'common.white',
                        borderRadius: 0, // 这里将圆角设置为0，创建方形外观
                        padding: '2px 4px', // 可以调整内边距以获得合适的大小
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default DisplayJobs;