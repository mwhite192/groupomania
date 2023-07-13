// imports the React library and the ProfileRightBar.scss file
import React from 'react';
import './ProfileRightBar.scss';
// imports the store 
import { store } from '../../App/store';
//imports the getUser selector
import { getUser } from '../../App/Features/User/userSlice';
// imports the getProfile selector
import { getProfile } from '../../App/Features/Profile/profileSlice';
// imports the useNavigate hook 
import { useNavigate } from 'react-router-dom';
// imports the Button component 
import { Button } from 'react-bootstrap';


// creates the ProfileRightBar component
export const ProfileRightBar = () => {
  // creates the navigate hook and assigns it to the navigate function
   const navigate = useNavigate();
  // gets the users email from the store
  const { formGridEmail } = getUser(store.getState());
  // get the profile from the store
  const { formGridPhone, 
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
  
  
  // returns the ProfileRightBar component
  return (
    <div className='profileRightBar'>
      <div className='profileRightBarHeading'>
        <span className='profileRightBarTitle'>{formGridPosition}</span>
      </div>
      <div className='profileRightBarInfo'>
        <div className='profileRightBarInfoItem'>
          <span className='profileRightBarInfoKey'>Email: </span>
          <span className='profileRightBarInfoValue'>{formGridEmail}</span>
        </div>
        <div className='profileRightBarInfoItem'>
          <span className='profileRightBarInfoKey'>Phone#: </span>
          <span className='profileRightBarInfoValue'>{formGridPhone}</span>
        </div>
        <div className='profileRightBarInfoItem'>
          <span className='profileRightBarInfoKey'>Work Office: </span>
          <span className='profileRightBarInfoValue'>{formGridWorkOffice}</span>
        </div>
        <div className='profileRightBarInfoItem'>
          <span className='profileRightBarInfoKey'>City: </span>
          <span className='profileRightBarInfoValue'>{formGridCity}</span>
        </div>
        <div className='profileRightBarInfoItem'>
          <span className='profileRightBarInfoKey'>State: </span>
          <span className='profileRightBarInfoValue'>{formGridState}</span>
        </div>
        <div className='profileRightBarInfoItem'>
          <span className='profileRightBarInfoKey'>Zip: </span>
          <span className='profileRightBarInfoValue'>{formGridZip}</span>
        </div>
      </div>
      <Button variant='primary' onClick={handleClick}>
        Update Account
      </Button>
    </div>
  );
};


export default ProfileRightBar;
