import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1>Consultant <br /> Customer</h1>
      <div className="half-circle-left"></div>
      <div className="half-circle-right"></div>
      <p>New staff, please sign up <Link to="/signup">here</Link></p>
    </div>
  );
};

export default WelcomePage;