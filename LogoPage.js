import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './Phaneros.png';
import './App.css';

const LogoPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
     
      navigate('/login');
    }, 5000);

  
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="logo-page">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default LogoPage;
