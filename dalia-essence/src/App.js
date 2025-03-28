import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './Components/PostList';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './Components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <PostList />
    </div>
  );
}

export default App;