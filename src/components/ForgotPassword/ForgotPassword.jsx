// src/components/ForgotPassword/ForgotPassword.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    // Add reset logic here (for demo, just navigate back to login)
    if (email) {
      navigate('/login');
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='forgot'>Reset Password</button>
      </form>
      <div className='log'>
        <Link to="/Login">Login Here</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
