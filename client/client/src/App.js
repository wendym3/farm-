import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LoginSignUp from './components/LoginSignUp';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define Routes */}
        <Routes>
          <Route exact path="/" element={<Home />} /> {/* Home page with navigation links */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard without navigation links */}
          <Route path="/login" element={<LoginSignUp />} /> {/* Login/Signup page without navigation links */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
