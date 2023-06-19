import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Registerform.css';

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    // Redirect to the home page after successful registration
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;

