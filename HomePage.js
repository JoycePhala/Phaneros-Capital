import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './Phaneros.png';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home-page">
      
      <div className="header">
      <img src={logo} className="logo" alt="logo" />
     
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        
      </div>

     
      {isMenuOpen && (
        <div className="menu">
          <Link to="/home">
            <i className="fas fa-home"></i> Home
          </Link>
          <Link to="/pay">
            <i className="fas fa-money-bill-wave"></i> Pay
          </Link>
          <Link to="/claims">
            <i className="fas fa-file-invoice"></i> Claim
          </Link>
          <Link to="/manage">
            <i className="fas fa-cogs"></i> Manage
          </Link>
          <Link to="/notification">
            <i className="fas fa-bell"></i> Notification
            </Link>
            <Link to="/user">
            <i className="fas fa-user"></i> Profile
            </Link>
        </div>
      )}

     
      <div className="main-content">
        <h1>Welcome to Phaneros <br></br>Car Insurance Claim</h1>
        <Link to="/policy" className="content-link">
          <i className="fas fa-file-alt"></i> Policy
        </Link>
        <Link to="/documents" className="content-link">
          <i className="fas fa-file"></i> Documents
        </Link>
        <Link to="/claims" className="content-link">
          <i className="fas fa-hand-holding-usd"></i> Claims
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
