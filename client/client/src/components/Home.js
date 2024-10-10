import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css'; // CSS for styling

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page when the button is clicked
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to the Farm Management System</h1>
        <p>Manage your farm operations efficiently. Track planting, harvesting, inventory, and more!</p>
        
        {/* Navigation Links inside the same card */}
        <div className="nav-links">
          <ul>

            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>

          </ul>
        </div>
        
        <button className="login-btn" onClick={handleLoginClick}>
          Go to Login / Signup
        </button>
      </div>
    </div>
  );
};

export default Home;
