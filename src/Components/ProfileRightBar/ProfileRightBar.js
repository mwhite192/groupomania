// imports the React library and the ProfileRightBar.scss file
import React from 'react';
import './ProfileRightBar.scss';
// imports the store 
import { store } from '../../App/store';
//imports the getUser, getToken, and deauthenticate actions
import { getUser,  getToken, deauthenticate } from '../../App/Features/User/userSlice';
// imports the getProfile selector and logout action
import { getProfile, logout } from '../../App/Features/Profile/profileSlice';
// imports the useNavigate hook 
import { useNavigate } from 'react-router-dom';


// creates the ProfileRightBar component
export const ProfileRightBar = () => {
  // creates the navigate hook and assigns it to the navigate function
   const navigate = useNavigate();
  // gets the token from the store
  const token = getToken(store.getState());
  // gets the users email from the store
  const { formGridEmail: email } = getUser(store.getState());
  // get the profile from the store
  const { formGridPhone,
    formGridEmail, 
    formGridPosition, 
    formGridWorkOffice, 
    formGridCity, 
    formGridState, 
    formGridZip} = getProfile(store.getState());
  
    
  // creates the handleClick function
  const handleClick = () => {
    // navigates user to edit profile page
    navigate('/profile/update');
  };


  // creates a handleDelete function
  const handleDelete = (e) => {
    // prevents page from reloading on submit
    e.preventDefault();
    // DELETES form data to backend
    fetch('/api/user/' + email, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      // converts response to JSON
      .then((response) => {
        // checks for errors
        if (response.status === 403 || !response.ok) {
          throw new Error('unable to delete profile!');
        }
        // returns response body as JSON
        return response.json();
      })
      // handles JSON response
      .then((data) => {
        // dispatches DEAUTHENTICATE action to store
        store.dispatch(deauthenticate());
        // dispatches LOGOUT action to store
        store.dispatch(logout());
        // deletes user from local storage
        localStorage.removeItem('persist:root');
        // Show alert message
        alert('Account deleted successfully!');
        // navigates user to login page
        navigate('/');
      })
      // catches errors
      .catch((error) => {
        console.error(error);
      });
  };

  
  
  // returns the ProfileRightBar component
  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <span className="profileRightBarTitle">{formGridPosition}</span>
      </div>
      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Email: </span>
          <span className="profileRightBarInfoValue">{email}</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Phone#: </span>
          <span className="profileRightBarInfoValue">{formGridPhone}</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Work Office: </span>
          <span className="profileRightBarInfoValue">{formGridWorkOffice}</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">City: </span>
          <span className="profileRightBarInfoValue">{formGridCity}</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">State: </span>
          <span className="profileRightBarInfoValue">{formGridState}</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Zip: </span>
          <span className="profileRightBarInfoValue">{formGridZip}</span>
        </div>
      </div>
      <div className="profileRightBarButtonOptions">
        <button className="profileRightBarUpdateButton" onClick={handleClick}>
          Update Profile
        </button>
        <button className="profileRightBarDeleteButton" onClick={handleDelete}>
          Delete Account
        </button>
      </div>
    </div>
  );
};


export default ProfileRightBar;
