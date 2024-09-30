import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  CssBaseline,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QueueIcon from '@mui/icons-material/Queue';
import AppsIcon from '@mui/icons-material/Apps';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import AssessmentIcon from '@mui/icons-material/Assessment';

const drawerWidth = 240;

const Root = styled('div')({
  display: 'flex',
});

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
  },
}));

const MainContent = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.grey[100],
}));

const ContentHeader = styled(AppBar)(({ theme }) => ({
  position: 'static',
  backgroundColor: theme.palette.common.white,
  color: theme.palette.text.primary,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

function Dashboard() {
  const [currentPage, setCurrentPage] = useState('Status');

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Queues', icon: <QueueIcon /> },
    { text: 'Applications', icon: <AppsIcon /> },
    { text: 'Nodes', icon: <DeviceHubIcon /> },
    { text: 'Status', icon: <AssessmentIcon /> },
  ];

  const handleMenuClick = (text) => {
    setCurrentPage(text);
  };

  return (
    <Root>
      <CssBaseline />
      <StyledDrawer variant="permanent">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Volcano
          </Typography>
        </Toolbar>
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              onClick={() => handleMenuClick(item.text)}
              selected={currentPage === item.text}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
      <MainContent>
        <ContentHeader>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              {currentPage}
            </Typography>
          </Toolbar>
        </ContentHeader>
        <Box mt={3}>
          {/* SPA content goes here */}
          {currentPage === 'Status' && (
            <Box>

              {/* Add your health check table or component here */}
            </Box>
          )}
        </Box>
      </MainContent>
    </Root>
  );
}

export default Dashboard;