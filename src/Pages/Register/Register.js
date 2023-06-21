// imports the React library and the Register.scss file
import React from 'react';
import './Register.scss';
// imports the useNavigate hook
import { useNavigate } from 'react-router-dom';
// imports the useState hook
import { useState } from 'react';
// imports the DriveFolderUploadOutlined icon, company logo, and default profile image
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import CompanyLogo from '../../Assets/Logos/logo 1.svg';
import DefaultProfile from '../../Assets/person/DefaultProfile.jpg';


// creates the Register page
export const Register = () => {
  // creates a navigate variable and sets it to the useNavigate hook
  const navigate = useNavigate();
  
  // sets the initial state of the form data
  const [fullName, setFullName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [file, setFile] = useState(null);
  // creates a form data object and appends the form data to it
  const formData = new FormData();
  formData.append('fullName', fullName);
  formData.append('registerEmail', registerEmail);
  formData.append('registerPassword', registerPassword);
  formData.append('file', file);

  // creates a handleSubmit function
  const handleSubmit = (event) => {
    // prevents default form submission
    event.preventDefault(); 
    // navigates user to login page
    navigate('/');
    // POST form data to backend
    fetch('/api/user/signup', {
      method: 'POST',
      body: formData,
    })
    // convert response to JSON
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    // catches errors
    .catch((error) => {
      console.error(error);
    });
  };
  
  // returns the Register page
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
                src={file ? URL.createObjectURL(file):DefaultProfile}
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
                    Upload Image:
                    <DriveFolderUploadOutlined className="icon" />
                    <input
                      type="file"
                      name="file"
                      id="file"
                      required
                      accept=".png,.jpeg,.jpg"
                      style={{ display: "none" }}
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </label>
                  <p id="uploadImageErrorMsg" className='registerErrorMsg'></p>
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  id="fullName"
                  className="registerInput"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <p id="fullNameErrorMsg" className='registerErrorMsg'></p>
                <input
                  type="email"
                  placeholder="Email"
                  id="registerEmail"
                  className="registerInput"
                  required
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
                <p id="emailErrorMsg" className='registerErrorMsg'></p>
                <input
                  type="password"
                  placeholder="Password"
                  id="registerPassword"
                  className="registerInput"
                  required
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <p id="passwordErrorMsg" className='registerErrorMsg'></p>
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




