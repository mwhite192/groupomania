import React from 'react';
import CompanyLogo from '../../Assets/Logos/logo 1.svg';
import DefaultProfile from '../../Assets/person/DefaultProfile.jpg';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';
import './Register.scss';

export const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (event) => {
    // Prevent default form submission
    event.preventDefault(); 
    // Get the form data
    // const { username, email, password, confirmPassword } = formData;
    // Reset the form after submission
    setFormData({ username: '', email: '', password: '', confirmPassword: '' });
  };

  const handleChange = (event) => {
    // Update the form data
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerWrapperLeft">
          <img src={CompanyLogo} alt="company logo" className="registerLogo" />
          <span className="registerLogoName">Groupomania</span>
          <span className="registerDesc">
            Connect and interact with colleagues to create a network of
            friends on Groupomania!
          </span>
        </div>
        <div className="registerWrapperRight">
          <div className="registerBox">
            <div className="registerBoxTop">
              <img
                src={DefaultProfile}
                alt="default user"
                className="registerImg"
              />
              <div className="registerImgUpload">
                <label className='registerImgUploadLabel' htmlFor="file">
                    Upload Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  <input
                    type="file"
                    name="file"
                    id="file"
                    accept=".png,.jpeg,.jpg"
                    style={{ display: "none" }}
                  />
                </label>
              </div>
            </div>
            <div className="registerBoxBottom">
              <form action="" className="registerForm" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  className="registerInput"
                  required
                  value={formData.username}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="registerInput"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  className="registerInput"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  className="registerInput"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button type="submit" className="registerButton" >
                  Sign Up
                </button>
                <button className="loginRegisterButton">Log In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register
