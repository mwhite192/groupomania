// imports the React library and the ProfileRightBar.scss file
import React from 'react';
import './ProfileRightBar.scss';
// imports the useNavigate hook from the react-router-dom library
import { useNavigate } from 'react-router-dom';
import Friend from '../../Assets/person/friend1.jpg';
import Friend2 from '../../Assets/person/friend2.jpg';
import Friend3 from '../../Assets/person/friend3.jpg';


// creates the ProfileRightBar component
export const ProfileRightBar = () => {
  // creates a navigate object
  const navigate = useNavigate();

  // creates a handleClick function
  const handleClick = () => {
    // navigates user to edit profile page
    navigate('/editProfile');
  };

  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <span className="profileRightBarTitle">User Information</span>
        <button className="profileEditButton" onClick={handleClick}>Edit Profile</button>
      </div>
      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Email: </span>
          <span className="profileRightBarInfoValue">
            amber.logan@groupomania.com
          </span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Username</span>
          <span className="profileRightBarInfoValue">amber_logan</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Position</span>
          <span className="profileRightBarInfoValue">Senior Sales Associate</span>
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

      <span className="profileRightBarFollowingTitle">Top Friends</span>
      <div className="profileRightBarFollowings">
        <div className="profileRightBarFollowing">
          <img src={Friend} alt="" className="profileRightBarFollowingImg" />
          <span className="profileRightBarFollowingName">Janet</span>
        </div>
        <div className="profileRightBarFollowing">
          <img src={Friend2} alt="" className="profileRightBarFollowingImg" />
          <span className="profileRightBarFollowingName">Isabella</span>
        </div>
        <div className="profileRightBarFollowing">
          <img src={Friend3} alt="" className="profileRightBarFollowingImg" />
          <span className="profileRightBarFollowingName">Beverly</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileRightBar;
