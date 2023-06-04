import React from 'react';
import ProfileCover from '../../Assets/person/profileCover.jpeg';
import User from '../../Assets/person/user.jpg';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import { Feed } from '../../Components/Feed/Feed';
import { ProfileRightBar } from '../../Components/ProfileRightBar/ProfileRightBar';
import './Profile.scss';

export const Profile = () => {
  return (
    <div className='profile'>
      <Navbar />
      <div className="profileWrapper">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src={ProfileCover} alt="company logo" className="profileCoverImg" />
                    <img src={User} alt="user" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Amber Logan</h4>
                    <span className="profileInfoDesc">Hi Team!</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <ProfileRightBar />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
