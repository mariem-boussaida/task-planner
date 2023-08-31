import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import './SignUp.css'; // Import your custom CSS file for styling

function SignUp() {
  const [successMessage, setSuccessMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/register', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response.data);
      setSuccessMessage('Registration successful!');

    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
      <div className="signUp-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h3 className="form-title">Sign Up</h3>
            <div className="form-group">
              <label htmlFor="fname">First Name</label>
              <input
                  type="text"
                  id="fname"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input
                  type="text"
                  id="lname"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <p className="mt-2">Already have an account? <Link to="/">Login here.</Link></p>
          </form>
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
      </div>
  );
}

export default SignUp;
