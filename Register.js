import React, { useState } from 'react';

const Register = ({ history }) => {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send registration data to the server
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      // Registration successful, redirect to login
      history.push('/login');
    } else {
      // Handle registration error
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} required />
        <br />
        <label>Password:</label>
        <input type="password" name="password" value={user.password} onChange={handleChange} required />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
