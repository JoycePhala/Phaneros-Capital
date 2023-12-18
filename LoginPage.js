import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Phaneros.png';


const LoginPage = () => {
 

  return (
    <div className="login-page">
      <img src={logo} className="App-logo" alt="logo" />
      <form>
        <div className="input-box">
          <input type="text" id="username" placeholder="Username" required /><br />
          <input type="password" id="password" placeholder="Password" required />
        </div>
        <Link to="/home">
  <button type="button">Sign In</button>
</Link>
      </form>
      <Link to="/forgot-password">
      <p>Forgot Password?</p>
    </Link>
      <div className="signup-link-box">
        <span>Don't have an account? </span>
        <Link to="/signup">Create New Account</Link>
      </div>
    </div>
  );
};

export default LoginPage;
