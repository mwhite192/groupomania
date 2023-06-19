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
  const formValues = {  file: '', fullName: '', registerEmail: '', registerPassword: '' };
  const [formData, setFormData] = useState(formValues);
  // creates imgSrc and setImgSrc variables
  const [img, setImg] = useState(null);
  
  // creates a handleChange function
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // handles form validation
  // const validateForm = () => {
  //   let isValid = true;
  //   // checks if email matches the correct format
  //   if (formData.registerEmail.match(/([A-Za-z0-9]+(_[A-Za-z0-9]+)+)!/)) {
  //     document.getElementById('emailErrorMsg').innerHTML =
  //       'Email must be in the correct format';
  //     isValid = false;
  //   } else {
  //     document.getElementById('emailErrorMsg').innerHTML = '';
  //   }
  //   // checks if password is at least 8 characters
  //   if (formData.registerPassword.length < 8) {
  //     document.getElementById('passwordErrorMsg').innerHTML =
  //       'Password must be at least 8 characters';
  //     isValid = false;
  //   }
  //   // checks if password contains special characters
  //   if (!formData.registerPassword.match(/([A-Za-z0-9]+(_[A-Za-z0-9]+)+)!/)) {
  //     document.getElementById('passwordErrorMsg').innerHTML =
  //       'Password cannot contain special characters';
  //     isValid = false;
  //   } else {
  //     document.getElementById('passwordErrorMsg').innerHTML = '';
  //   }
  //   // checks if image is in the correct format
  //   if (!formData.file) {
  //     document.getElementById('uploadImageErrorMsg').innerHTML =
  //       'Image must be in the correct format';
  //     isValid = false;
  //   }
  //   return isValid;
  // };


  // creates a handleSubmit function
  const handleSubmit = (event) => {
    // Prevent default form submission
    event.preventDefault(); 
    // // checks if form is valid
    // if (!validateForm()) {
    //   return;
    // }
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
                src={img ? URL.createObjectURL(img) : DefaultProfile}
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
                      accept=".png,.jpeg,.jpg"
                      style={{ display: "none" }}
                      onChange={(e) => setImg(e.target.files[0])}
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
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <p id="fullNameErrorMsg" className='registerErrorMsg'></p>
                <input
                  type="email"
                  placeholder="Email"
                  id="registerEmail"
                  className="registerInput"
                  required
                  value={formData.registerEmail}
                  onChange={handleChange}
                />
                <p id="emailErrorMsg" className='registerErrorMsg'></p>
                <input
                  type="password"
                  placeholder="Password"
                  id="registerPassword"
                  className="registerInput"
                  required
                  value={formData.registerPassword}
                  onChange={handleChange}
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




