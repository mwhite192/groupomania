// imports the React Library and the Login.scss file
import React from 'react';
import './Login.scss';
// imports useState and useNavigate hook
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// imports the company logo
import CompanyLogo from '../../Assets/Logos/logo 1.svg';


// creates the Login page
export const Login = () => {
  // creates a navigate object
  const navigate = useNavigate();
  // creates a handleClick function
  const handleClick = () => {
    navigate('/register');
  };

  // creates a form data object
  const formValues = {  email: '', password: '' };
  const [formData, setFormData] = useState(formValues);
  
  // creates a handleChange function
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // handles form validation
  const validateForm = () => {
    let isValid = true;
    // checks if email is empty
    if (formData.email === '') {
      document.getElementById('emailErrorMsg').innerHTML =
        'Email cannot be empty';
      isValid = false;
    }
    if (formData.email.match(/([A-Za-z0-9]+(_[A-Za-z0-9]+)+)!/)) {
      document.getElementById('emailErrorMsg').innerHTML =
        'Email must be in the correct format';
      isValid = false;
    } else {
      document.getElementById('emailErrorMsg').innerHTML = '';
    }
    // checks if password is empty
    if (formData.password === '') {
      document.getElementById('passwordErrorMsg').innerHTML =
        'Password cannot be empty';
      isValid = false;
    } else {
      document.getElementById('passwordErrorMsg').innerHTML = '';
    }
    return isValid;
  };

  const handleSubmit = (event) => {
    // Prevent default form submission
    event.preventDefault(); 
    // Validate form data
    if (!validateForm()) {
      return;
    }
    // Send form data to backend
    fetch('/api/user/login', {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    // Convert response to JSON
    .then((response) => response.json())
    .then((data) => {
      // // checks if login is successful
      // const loginSuccessful = formData.password === data.token;
      // if (loginSuccessful) {
      //   // navigates user to home page
      //   navigate('/home');
      // }
      console.log(data);
    })
    // Catch errors
    .catch((error) => {
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
                  <p id="emailErrorMsg" className='loginErrorMsg'></p>
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="loginInput"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <p id="passwordErrorMsg" className='loginErrorMsg'></p>
                  <button type="submit" className="loginButton">
                    Sign In
                  </button>
                  <button className="loginRegisterButton"  onClick={handleClick}>
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



