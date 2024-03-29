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
import DefaultProfile from '../../Assets/Person/DefaultProfile.jpg';


// creates the Register page
export const Register = () => {
  // creates a navigate variable and sets it to the useNavigate hook
  const navigate = useNavigate();

  
  // sets the initial state of the form data
  const [name, setName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [file, setFile] = useState('');
  // creates a form data object and appends the form data to it
  const formData = new FormData();
  formData.append('name', name);
  formData.append('registerEmail', registerEmail);
  formData.append('registerPassword', registerPassword);
  formData.append('file', file);


  // creates a handleSubmit function
  const handleSubmit = (event) => {
    // prevents default form submission
    event.preventDefault();
    // POST form data to backend
    fetch("/api/user/signup", {
      method: "POST",
      body: formData,
    })
      // convert response to JSON
      .then((response) => response.json())
      .then((data) => {
        // handle success
        console.log('Success:', data);
        // Show alert message
        alert('Account created successfully!'); 
        // navigates user to login page
        navigate('/'); 
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
  };

  
  // returns the Register page
  return (
    <div className='register'>
      <div className='registerWrapper'>
        <div className='registerWrapperLeft'>
          <img src={CompanyLogo} alt='company logo' className='registerLogo' />
          <span className='registerLogoName'>Groupomania</span>
          <span className='registerDesc'>
            Connect and interact with colleagues to create a network of friends
            on Groupomania!
          </span>
        </div>
        <div className='registerWrapperRight'>
          <div className='registerBox'>
            <div className='registerBoxTop'>
              <img
                src={file ? URL.createObjectURL(file):DefaultProfile}
                alt='default user'
                className='registerImg'
              />
            </div>
            <div className='registerBoxBottom'>
              <form
                className='registerForm'
                onSubmit={handleSubmit}
              >
                <div className='registerImgUpload'>
                  <label className='registerImgUploadLabel' htmlFor='file'>
                    Upload Image:
                    <DriveFolderUploadOutlined className='icon' />
                    <input
                      type='file'
                      name='file'
                      id='file'
                      required
                      accept='.png,.jpeg,.jpg'
                      style={{ display: 'none' }}
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </label>
                </div>
                <input
                  type='text'
                  placeholder='Name'
                  id='name'
                  className='registerInput'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type='email'
                  placeholder='Email'
                  id='registerEmail'
                  className='registerInput'
                  required
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
                <input
                  type='password'
                  placeholder='Password'
                  id='registerPassword'
                  className='registerInput'
                  required
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <button type='submit' className='registerButton'>
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


export default Register;




