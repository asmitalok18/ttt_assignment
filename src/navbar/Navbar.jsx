// Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file to style the navigation bar

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="https://tse1.mm.bing.net/th?id=OIP.uoFcRiBEDeiR-KLSVj-6bAHaHa&pid=Api&P=0&h=180" alt="TTT Logo" className="logo" />
        <span className="logo-text">STORIES</span>
      </div>
      <div className="button-container">
        <button className="courses-button">Courses</button>
      </div>
    </div>
  );
};

export default Navbar;
