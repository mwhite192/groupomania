// imports the React library and the Register.scss file
import React from 'react';
import './Register.scss';
// imports the useState and useNavigate hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// imports the DriveFolderUploadOutlined icon, company logo, and default profile image
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import CompanyLogo from '../../Assets/Logos/logo 1.svg';
import DefaultProfile from '../../Assets/person/DefaultProfile.jpg';


// creates the Register page
export const Register = () => {
  // creates a navigate object
  const navigate = useNavigate();
  // creates a form data object
  const formValues = {  file: '', username: '', registerEmail: '', registerPassword: '' };
  const [formData, setFormData] = useState(formValues);
  
  // creates a handleChange function
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // creates a handleSubmit function
  const handleSubmit = (event) => {
    // Prevent default form submission
    event.preventDefault(); 
    // navigates user back to login page
    navigate('/');
    // Send form data to backend
    fetch('/api/user/signup', {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    // Convert response to JSON
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    // Catch errors
    .catch((error) => {
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
                    <DriveFolderUploadOutlined className="icon" />
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
                  value={formData.registerEmail}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="registerPassword"
                  className="registerInput"
                  required
                  value={formData.registerPassword}
                  onChange={handleChange}
                />
                <button type="submit" className="registerButton">
                  Sign Up
                </button>
                {/* <button className="loginRegisterButton">
                  Log into Account
                </button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;




