  // src/components/LoginLink/LoginLink.jsx
  import React from 'react';
  import { Link } from 'react-router-dom';
  import './LoginLink.css';

  const LoginLink = () => {
    return (
      <div className="login-link-container">
        <Link to="/login">
          <button className='logbutton'>Login</button>
        </Link>
      </div>
    );
  };

  export default LoginLink;
