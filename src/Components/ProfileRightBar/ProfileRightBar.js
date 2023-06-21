// imports the React library and the ProfileRightBar.scss file
import React from 'react';
import './ProfileRightBar.scss';
// imports redux store
import { store } from '../../App/store';
//imports the getUser selector
import { getUser } from '../../App/Features/User/userSlice';
// imports the getProfile selector
import { getProfile } from '../../App/Features/Profile/profileSlice';
// imports the Navigate hook from the react-router-dom library
import { useNavigate } from 'react-router-dom';
// imports the Button component from the react-bootstrap library
import { Button } from 'react-bootstrap';


// creates the ProfileRightBar component
export const ProfileRightBar = () => {
  // gets the user's email from the store
  const { formGridEmail } = getUser(store.getState());
  // get the profile from the store
  const { formGridPhone, 
    formGridPosition, 
    formGridWorkOffice, 
    formGridCity, 
    formGridState, 
    formGridZip} = getProfile(store.getState());
  
 // creates the navigate hook
  const navigate = useNavigate();
  // creates the handleClick function
  const handleClick = () => {
    // navigates to the edit profile page
    navigate('/update');
  };
  
  // returns the ProfileRightBar component
  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <span className="profileRightBarTitle">Employee Profile</span>
      </div>
      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Title: </span>
          <span className="profileRightBarInfoValue">{formGridPosition}</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Email: </span>
          <span className="profileRightBarInfoValue">{formGridEmail}</span>
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
          <span className="profileRightBarInfoKey">Zip</span>
          <span className="profileRightBarInfoValue">{formGridZip}</span>
        </div>
      </div>
      <Button variant="primary" onClick={handleClick}>
        Edit Profile
      </Button>
    </div>
  );
};

export default ProfileRightBar;
