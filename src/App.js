import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './LoginSignup';
import Home from './home';
import './LoginSignup.css';
import './home.css'; // Import Home.css if you have specific styles for Home.js
import RetailerDashboard from './RetailerDashboard';
import { auth } from './firebase';

const App = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserId(user.uid); // Set userId if logged in
      } else {
        setUserId(null); // Clear userId if logged out
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/RetailerDashboard" element={<RetailerDashboard />} /> {/* New route for AddProduct */}
      </Routes>
    </Router>

  );

//   return (
//     <div className="App">
//       {userId ? <RetailerDashboard userId={userId} /> : <p>Please log in.</p>}
//     </div>
//   );
};

export default App;
