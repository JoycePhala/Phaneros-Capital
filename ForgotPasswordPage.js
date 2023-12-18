import React from 'react';

const ForgotPasswordPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', e.target.email.value);
  };

  return (
    <div className="forgot-password-page">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
