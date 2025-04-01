<<<<<<< HEAD
import React from 'react';
import { useAuth } from '../Context/AuthContext';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
=======
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
>>>>>>> 31940284ab20cf342b8b66e583d2f41bf930d649

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Titolo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Social Helper</Link>
        </Typography>

        {/* Mostra Login o Profilo/Logout */}
        {user ? (
          <>
            <Button color="inherit" component={Link} to="/profile">
              Profilo ({user.username})
            </Button>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;