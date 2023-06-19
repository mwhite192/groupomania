// imports the React library and the App.scss file
import React from 'react';
import './Profile.scss';
// imports the store
import { store } from '../../App/store';
import { getUser } from '../../App/Features/profileSlice';
// imports the react bootstrap components
import { Navbar } from '../../Components/Navbar/Navbar';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import { Feed } from '../../Components/Feed/Feed';
// imports the ProfileRightBar, User, and ProfileCover images
import { ProfileRightBar } from '../../Components/ProfileRightBar/ProfileRightBar';
import User from '../../Assets/person/user.jpg';
import ProfileCover from '../../Assets/person/profileCover.jpeg';


// creates the Profile page
export const Profile = () => {
  const { name } = getUser(store.getState());
  // returns the profile page
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
                    <h4 className="profileInfoName">{name}</h4>
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

export default Profile;
