import React from 'react';
import { Container, Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';

const drawerWidth = 240;

const UploadDocLandingPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Header
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Container>
          <Typography paragraph>
            Content goes here.
          </Typography>
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0, p: 2, backgroundColor: 'background.paper', textAlign: 'center' }}
      >
        <Typography variant="body2">
          Footer content
        </Typography>
      </Box>
    </Box>
  );
}

export default UploadDocLandingPage;
