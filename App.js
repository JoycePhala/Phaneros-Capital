import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogoPage from './LogoPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ForgotPasswordPage from './ForgotPasswordPage'; 
import ResetPasswordPage from './ResetPasswordPage';
import HomePage from './HomePage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ClaimsPage from './ClaimsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} /> 
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/home" element={<HomePage />} />
         {/* <Route path="/pay" element={<PayPage />} /> */}
         <Route path="/claims" element={<ClaimsPage />} />
        {/* <Route path="/manage" element={<ManagePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
