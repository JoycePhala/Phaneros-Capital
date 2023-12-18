import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Phaneros.png';
import './ClaimsPage.css';
import Image1 from './Front.PNG';
import Image2 from './Back.PNG';
import Image3 from './Side1.PNG';
import Image4 from './Side 2.PNG';

const ClaimsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(`Selected file: ${selectedFile.name}`);
  };

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className="claims-page">
      <div className="header">
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

      <h1>Claims</h1>
      <p> 360 degree images <br></br> Select each image to take a photo </p>
      <div className="image-container">
        <button onClick={handleImageClick} className="image-button">
          <img src={Image1} className="image" alt="Image 1" />
        </button>

        <button onClick={handleImageClick} className="image-button">
          <img src={Image2} className="image" alt="Image 2" />
        </button>
      </div>

      <div className="image-container">
        <button onClick={handleImageClick} className="image-button">
          <img src={Image3} className="image" alt="Image 3" />
        </button>

        <button onClick={handleImageClick} className="image-button">
          <img src={Image4} className="image" alt="Image 4" />
        </button>
      </div>

      <div className="button-container">
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>

      <div className="button-container">
        <button className="btn">Next</button>
      </div>
    </div>
    </div>
  );
};


export default ClaimsPage;
