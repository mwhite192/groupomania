// imports the React library and the ProfileRightBar.scss file
import React from 'react';
import './ProfileRightBar.scss';
// imports the useNavigate hook from the react-router-dom library
import { useNavigate } from 'react-router-dom';
// imports the Button component from the react-bootstrap library
import Button from 'react-bootstrap/Button';



// creates the ProfileRightBar component
export const ProfileRightBar = () => {
  // creates a navigate object
  const navigate = useNavigate();

  // populates the Profile page with registered user information
  // retrieves the user's profile
  const profileForm = () => {
    fetch('/api/profile/', {
    // gets form data from backend
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    // Convert response to JSON
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    // // Catch errors
    .catch((error) => {
      console.error(error);
    });
  };
  profileForm();


  // creates a handleClick function
  const handleClick = () => {
    // navigates user to edit profile page
    navigate('/editProfile');
  };

  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <span className="profileRightBarTitle">User Information</span>
      </div>
      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Email: </span>
          <span className="profileRightBarInfoValue">
            {profileForm.formGridEmail}
          </span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Username</span>
          <span className="profileRightBarInfoValue">amber_logan</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Position</span>
          <span className="profileRightBarInfoValue">
            Senior Sales Associate
          </span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Department: </span>
          <span className="profileRightBarInfoValue">Corporate Sales</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Phone#: </span>
          <span className="profileRightBarInfoValue">901-555-4841</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Address: </span>
          <span className="profileRightBarInfoValue">755 Crossover Lane</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">City: </span>
          <span className="profileRightBarInfoValue">Memphis</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">State: </span>
          <span className="profileRightBarInfoValue">TN</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Zip</span>
          <span className="profileRightBarInfoValue">38711</span>
        </div>
      </div>
      <Button variant='primary' className="profileEditButton" onClick={handleClick}>
          Edit Profile
      </Button>
    </div>
  );
};

export default ProfileRightBar;
