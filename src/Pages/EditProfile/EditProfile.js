import React from 'react';
import User from '../../Assets/person/user.jpg';
import ProfileCover from '../../Assets/person/profileCover.jpeg';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import './EditProfile.scss';

export const EditProfile = () => {
  return (
    <div className="editProfile">
      <Navbar />
      <div className="editProfileWrapper">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={ProfileCover}
                alt="company logo"
                className="profileCoverImg"
              />
              <img src={User} alt="user" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Amber Logan</h4>
              <span className="profileInfoDesc">Hi Team!</span>
            </div>
          </div>
          <div className="editProfileRightBottom">
            <div className="editProfileRightBottomTop">
                <span className='editProfileRightBottomTopTitle'>Edit User Profile</span>
            </div>
            <div className="editProfileRightBottomBottom">Bottom</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile
