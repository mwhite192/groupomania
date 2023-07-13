// imports the React Library and the Login.scss file
import React from 'react';
import './Login.scss';
// imports the store 
import { store } from '../../App/store';
// imports the authenticate action
import { authenticate, setUserTime } from '../../App/Features/User/userSlice';
// imports login action
import { login } from '../../App/Features/Profile/profileSlice';
// imports useState and useNavigate hook
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// imports the company logo
import CompanyLogo from '../../Assets/Logos/logo 1.svg';


// creates the Login page
export const Login = () => {
  // creates a navigate variable and sets it to the useNavigate hook
  const navigate = useNavigate();


  // creates a handleClick function
  const handleClick = () => {
    // navigates user to register page
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
    // checks to see if email field matches the correct format
    if (!formData.email.match(/^[a-zA-Z0-9._%+]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/)) {
      document.getElementById('emailErrorMsg').innerHTML =
        'Email must be in the correct format';
        isValid = false;
    } else {
      document.getElementById('emailErrorMsg').innerHTML = '';
    }
    // checks to see if password field is empty
    if (formData.password === '') {
      document.getElementById('passwordErrorMsg').innerHTML =
        'Password cannot be empty';
        isValid = false;
    }
    return isValid;
  };

  // creates a handleSubmit function
  const handleSubmit = (event) => {
    // prevents default form submission
    event.preventDefault(); 
    // validates form data
    if (!validateForm()) {
      return;
    }
    // POST form data to backend
    fetch('/api/user/login', {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    // converts response to JSON
    .then((response) => {
      if (response.status === 401 || !response.ok) {
        throw new Error('sign in failed!');
      } 
      // returns response body as JSON
      return response.json();
    })
    // handles JSON response
    .then((data) => {
        // dispatches AUTHENTICATE action to update state
        store.dispatch(authenticate(data));
        // dispatches LOGIN action to update state
        store.dispatch(login(data));
        // dispatches SETUSERTIME action to update state
        store.dispatch(setUserTime(data.timestamp));
        // navigates user to home page
        navigate('/home'); 
    })
    // Catches errors
    .catch((error) => {
      console.error(error);
    });
  };


  // returns the Login page
  return (
    <div className='login'>
      <div className='login'>
        <div className='loginWrapper'>
          <div className='loginWrapperLeft'>
            <img src={CompanyLogo} alt='company logo' className='loginLogo' />
            <span className='loginLogoName'>Groupomania</span>
            <span className='loginDesc'>
              Connect and interact with colleagues to create a network of
              friends on Groupomania!
            </span>
          </div>
          <div className='loginWrapperRight'>
            <div className='loginBox'>
              <div className='loginBoxBottom'>
                <form className='loginForm' onSubmit={handleSubmit}>
                  <input
                    type='email'
                    placeholder='Email'
                    id='email'
                    className='loginInput'
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <span id='emailErrorMsg' className='loginErrorMsg'></span>
                  <input
                    type='password'
                    placeholder='Password'
                    id='password'
                    className='loginInput'
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <span id='passwordErrorMsg' className='loginErrorMsg'></span>

                  <button type='submit' className='loginButton'>
                    Log In
                  </button>
                  <button className='loginRegisterButton'  onClick={handleClick}>
                    Create Account
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



