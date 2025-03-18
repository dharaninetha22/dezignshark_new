import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 4,
      }}
    >
      <Typography variant="h1" color="primary" gutterBottom>
        Oops! 404
      </Typography>
      <Typography variant="h4" color="textSecondary" gutterBottom>
        Page not found
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link} // If using React Router, replace Link with the appropriate routing component
        to="/"
        sx={{ marginTop: 2 }}
      >
        Go to Home
      </Button>
    </Box>
  );
}

export default NotFound;
