import React from 'react';
import CompanyLogo from '../../Assets/Logos/logo 1.svg';
import './Login.scss';
// import { useState } from 'react';

export const Login = ({setShowRegister, setCurrentPage}) => {

  // const [ showRegister, setShowRegister ] = useState(false);
  // const handleRegisterClick = () => {
  //   setShowRegister(!showRegister);
  // };

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
                <form className="loginForm" >
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="loginInput"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="loginInput"
                    required
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
