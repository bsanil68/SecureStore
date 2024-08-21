import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Logout } from '@mui/icons-material';

const Header = () => {
  const handleLogout = () => {
    // Handle logout logic here, e.g., clearing authentication tokens, redirecting to login page, etc.
    console.log('Logout clicked');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo */}
        <Box
          component="img"
          src="/path-to-your-logo.png" // Replace with the path to your logo
          alt="Logo"
          sx={{ height: 40, marginRight: 2 }}
        />
        
        {/* Heading Text */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        ✌𝓢𝓮𝓬𝓾𝓻𝓮𝓢𝓽𝓸𝓻𝓮✌
        </Typography>

        {/* Logout Button */}
        <Button 
          color="inherit" 
          startIcon={<Logout />} 
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
