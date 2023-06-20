// imports the React library and the ProfileRightBar.scss file
import React from 'react';
import './ProfileRightBar.scss';
// imports redux store
import { store } from '../../App/store';
// imports getUser selector
import { getUser } from '../../App/Features/profileSlice';
// imports the link hook from the react-router-dom library
import { Link } from 'react-router-dom';
// imports the Button component from the react-bootstrap library


// creates the ProfileRightBar component
export const ProfileRightBar = () => {
  const { formGridEmail, _id } = getUser(store.getState());
  
 
  // // creates a handleClick function
  // const handleClick = () => {
  //   const profileUrl = `/update/${_id}`;
  //   // navigates user to edit profile page
  //   navigate({profileUrl});
  // };

  // // post form data to backend
  // let updatedProfile = fetch('/api/profile/edit', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  // .then((response) => response.json())
  // .then((data) => {
  //   updatedProfile = data;
  //   console.log(data);
  // })
  // .catch((error) => {
  //   console.error(error);
  // });
  
  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <span className="profileRightBarTitle">User Information</span>
      </div>
      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Email: </span>
          <span className="profileRightBarInfoValue">{formGridEmail}</span>
        </div>
        {/* <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Position: </span>
          <span className="profileRightBarInfoValue">
           test
          </span>
        </div> */}
        {/* <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Department: </span>
          <span className="profileRightBarInfoValue">Corporate Sales</span>
        </div> */}
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Phone#: </span>
          <span className="profileRightBarInfoValue"></span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Work Office: </span>
          <span className="profileRightBarInfoValue"></span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">City: </span>
          <span className="profileRightBarInfoValue"></span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">State: </span>
          <span className="profileRightBarInfoValue"></span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Zip</span>
          <span className="profileRightBarInfoValue"></span>
        </div>
      </div>
      <Link to={`/update/${_id}`} className="profileEditButton">
        <span className="profileEditButton">Edit Profile</span>
      </Link>
    </div>
  );
};

export default ProfileRightBar;
