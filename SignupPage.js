import React from 'react';
import logo from './Phaneros.png';
import './SignupPage.css'; 

const SignupPage = () => {
  return (
    <div className="signup-page">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Sign Up</h1>
      <form>
        <div className="input-box">
          <table>

            <tbody>
              <tr>
                <td>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" placeholder="Name" required />
                </td>
                <td>
                  <label htmlFor="surname">Surname:</label>
                  <input type="text" id="surname" placeholder="Surname" required />
                </td>
                <td>
                  <label htmlFor="middleName">Middle Name (Optional):</label>
                  <input type="text" id="middleName" placeholder="Middle Name (Optional)" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="idNumber">ID Number:</label>
                  <input type="text" id="idNumber" placeholder="ID Number" required />
                </td>
                <td>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" placeholder="Email" required />
                </td>
                <td>
                  <label htmlFor="phone">Phone Number:</label>
                  <input type="tel" id="phone" placeholder="Phone Number" required />
                </td>
              </tr>
              <tr>
              <td colSpan="3">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Password" required />
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" placeholder="Confirm Password" required />
              </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignupPage;
