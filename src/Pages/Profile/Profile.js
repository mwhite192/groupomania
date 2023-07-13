// imports the React library and the App.scss file
import React from 'react';
import './Profile.scss';
// imports the store
import { store } from '../../App/store';
// imports the getUser and getAuthenticated selectors
import { getUser, getAuthenticated } from '../../App/Features/User/userSlice';
// imports the useEffect hook
import { useEffect } from 'react';
// imports useNavigate hook
import { useNavigate } from 'react-router-dom';
// imports the react bootstrap components
import { Navbar } from '../../Components/Navbar/Navbar';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import { Feed } from '../../Components/Feed/Feed';
// imports the ProfileRightBar, User, and ProfileCover images
import { ProfileRightBar } from '../../Components/ProfileRightBar/ProfileRightBar'; 
import ProfileCover from '../../Assets/Person/profileCover.jpeg';


// creates the Profile page
export const Profile = () => {
  // creates a navigate variable and sets it to the useNavigate hook
  const navigate = useNavigate();
  // creates an authenticated variable and sets it to the getAuthenticated selector
  const authenticated = getAuthenticated(store.getState());
  // gets the user from the store
  const { name, formFile } = getUser(store.getState());


  // checks if the user is authenticated
  useEffect (() => {
    // if the user is not authenticated, navigate to the home page
    if (!authenticated) {
      navigate('/');
      // if the user is authenticated, do nothing
  }}, [authenticated]);
  

  // returns the profile page
  return (
    <div className='profile'>
      <Navbar />
      <div className='profileWrapper'>
        <Sidebar />
        <div className='profileRight'>
            <div className='profileRightTop'>
                <div className='profileCover'>
                    <img src={ProfileCover} alt='company logo' className='profileCoverImg' />
                    <img src={formFile} alt='user' className='profileUserImg' />
                </div>
                <div className='profileInfo'>
                    <h4 className='profileInfoName'>{name}</h4>
                    <span className='profileInfoDesc'>Hi Team!</span>
                </div>
            </div>
            <div className='profileRightBottom'>
                <Feed />
                <ProfileRightBar />
            </div>
        </div>
      </div>
    </div>
  )
};


export default Profile;
