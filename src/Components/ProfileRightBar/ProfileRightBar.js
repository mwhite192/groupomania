import React from 'react';
import Friend from '../../Assets/person/friend1.jpg';
import Friend2 from '../../Assets/person/friend2.jpg';
import Friend3 from '../../Assets/person/friend3.jpg';
import './ProfileRightBar.scss';

export const ProfileRightBar = () => {
  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <span className="profileRightBarTitle">User Information</span>
        <span className="profileEditButton">Edit Profile</span>
      </div>
      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Phone Ext: </span>
          <span className="profileRightBarInfoValue">4951</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Department: </span>
          <span className="profileRightBarInfoValue">Corporate Sales</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Home Office: </span>
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
          <span className="profileRightBarInfoKey">Email: </span>
          <span className="profileRightBarInfoValue">
            amber.logan@groupomania.com
          </span>
        </div>
      </div>
      <span className="profileRightBarTitle">Top Friends</span>
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

export default ProfileRightBar
