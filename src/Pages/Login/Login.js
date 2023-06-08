import React from 'react';
import { useState } from 'react';
import CompanyLogo from '../../Assets/Logos/logo 1.svg';
import './Login.scss';

export const Login = ({setShowRegister, setCurrentPage}) => {
  const formValues = {  email: '', password: '' };
  const [formData, setFormData] = useState(formValues);
  
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (event) => {
    // Prevent default form submission
    event.preventDefault(); 
    // Send form data to backend
    fetch('/api/user/login', {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error(error);
    });
  };

  return (
    <div className="login">
      <div className="login">
        <div className="loginWrapper">
          <div className="loginWrapperLeft">
            <img src={CompanyLogo} alt="company logo" className="loginLogo" />
            <span className="loginLogoName">Groupomania</span>
            <span className="loginDesc">
              Connect and interact with colleagues to create a network of
              friends on Groupomania!
            </span>
          </div>
          <div className="loginWrapperRight">
            <div className="loginBox">
              <div className="loginBoxBottom">
                <form className="loginForm" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="loginInput"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="loginInput"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />

                  <button type="submit" className="loginButton">
                    Sign In
                  </button>
                  <button className="loginRegisterButton" onClick={() => {setShowRegister(true); setCurrentPage('register')}}>
                    Create a New Account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
