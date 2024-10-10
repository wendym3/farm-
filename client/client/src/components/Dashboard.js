import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="logo">Kilimo</div>
                <ul className="nav-links">
                    <li><a href="#">All Farms</a></li>
                    <li><a href="#">Tasks</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <div className="header">
                    <h1>Dashboard</h1>
                    <div className="profile">
                        <span>Username</span>
                        <button className="logout-btn">Logout</button>
                    </div>
                </div>

                <div className="grid-container">
                    {/* Disease Analytics */}
                    <div className="card disease-analytics">
                        <h2>Disease Analytics</h2>
                        <p>High Risk | Medium Risk | Low Risk</p>
                        {/* Placeholder for chart */}
                        <div className="chart">Chart Placeholder</div>
                    </div>

                    {/* Weather Section */}
                    <div className="card weather">
                        <h2>Weather</h2>
                        <p>Today: 24°C | Partly Cloudy</p>
                        <p>7 Days Forecast</p>
                        {/* Placeholder for weather icons */}
                        <div className="weather-icons">Weather icons placeholder</div>
                    </div>

                    {/* Hardware Devices */}
                    <div className="card hardware-devices">
                        <h2>Hardware Devices</h2>
                        <ul>
                            <li>Pest Analytics: Active</li>
                            <li>Moisture Tester: Active</li>
                            <li>Temperature device: Inactive</li>
                        </ul>
                    </div>

                    {/* Crop Details */}
                    <div className="card crop-details">
                        <h2>Crop Details</h2>
                        <ul>
                            <li>crop 1</li>
                            <li>crop 2</li>
                            <li>crop 3</li>
                        </ul>
                    </div>

                    {/* Geofenced Area */}
                    <div className="card geofence-area">
                        <h2>Geofenced Area</h2>
                        {/* Placeholder for map */}
                        <div className="map">Map placeholder</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
