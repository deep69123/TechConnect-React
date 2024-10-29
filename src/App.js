import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './LoginSignup';
import Home from './home';
import Admin from './admin'; // Import the AddProduct component
import './LoginSignup.css';
import './home.css'; // Import Home.css if you have specific styles for Home.js

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} /> {/* New route for AddProduct */}
      </Routes>
    </Router>
  );
};

export default App;
