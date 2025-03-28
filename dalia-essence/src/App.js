import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './Components/PostList';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Navbar from './Components/navbar';
import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 3 }}>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;