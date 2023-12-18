import React from 'react';

const ResetPasswordPage = () => {
  const handleResetPassword = (event) => {

  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        
        <input type="password" required placeholder="Enter your new password" />
        <input type="password" required placeholder="Confirm new password" />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
