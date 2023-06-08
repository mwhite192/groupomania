import React from 'react';
import CompanyLogo from '../../Assets/Logos/logo 1.svg';
import DefaultProfile from '../../Assets/person/DefaultProfile.jpg';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';
import './Register.scss';

export const Register = ({setShowRegister, setCurrentPage}) => {
  const formValues = {  file: '', username: '', registerEmail: '', registerPassword: '' };
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
    fetch('/api/user/signup', {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setShowRegister(false); setCurrentPage('login');
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error(error);
    });
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerWrapperLeft">
          <img src={CompanyLogo} alt="company logo" className="registerLogo" />
          <span className="registerLogoName">Groupomania</span>
          <span className="registerDesc">
            Connect and interact with colleagues to create a network of friends
            on Groupomania!
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
            </div>
            <div className="registerBoxBottom">
              <form
                className="registerForm"
                onSubmit={handleSubmit}
              >
                <div className="registerImgUpload">
                  <label className="registerImgUploadLabel" htmlFor="file">
                    Upload Image:{" "}
                    <DriveFolderUploadOutlinedIcon className="icon" />
                    <input
                      type="file"
                      name="file"
                      id="file"
                      onChange={handleChange}
                      accept=".png,.jpeg,.jpg"
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
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
                  id="registerEmail"
                  className="registerInput"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="registerPassword"
                  className="registerInput"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <button type="submit" className="registerButton">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register



