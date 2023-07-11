// imports the React library and the Sidebar.scss file
import React from 'react';
import './Sidebar.scss';
// imports the store
import { store } from '../../App/store';
// imports the logout action
import { logout } from '../../App/Features/Profile/profileSlice';
// imports the useNavigate hook 
import { useNavigate } from 'react-router-dom';
// imports the MenuLink and Friends components
import { MenuLink } from '../MenuLink/MenuLink';
import { Friends } from '../Friends/Friends';
// imports the icons from the material ui library
import { Info } from '@mui/icons-material';
import { Help } from '@mui/icons-material';
import { RssFeed } from '@mui/icons-material';
import { Chat } from '@mui/icons-material';
import { VideoLibrary } from '@mui/icons-material';
import { Groups } from '@mui/icons-material';
import { Brightness4 } from '@mui/icons-material';
import { ExitToApp } from '@mui/icons-material';
import { Users } from '../../data';


// creates the Sidebar component
export const Sidebar = () => {
  // creates a navigate variable and sets it to the useNavigate hook
  const navigate = useNavigate();

  // creates a handleClick function
  const handleClick = () => {
    // dispatches the LOGOUT action
    store.dispatch(logout());
    // navigates user to login profile page
    navigate('/');
  };

  // creates a handleFeed function
  const handleFeed = () => {
    // navigates user to home page
    navigate('/home');
  };

  // returns the Sidebar component
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <button className='sidebarWrapperIcon' onClick={handleFeed}><MenuLink icon={<RssFeed />} text="Feed" /></button>
        <button className="sidebarWrapperIcon"><MenuLink icon={<Chat />} text="Chats" /></button>
        <button className="sidebarWrapperIcon"><MenuLink icon={<VideoLibrary />} text="Videos" /></button>
        <button className="sidebarWrapperIcon"><MenuLink icon={<Groups />} text="Friends" /></button>
        <button className="sidebarWrapperIcon"><MenuLink icon={<Brightness4 />} text="Theme" /></button>
        <button className="sidebarWrapperIcon"><MenuLink icon={<Info />} text="About" /></button>
        <button className="sidebarWrapperIcon"><MenuLink icon={<Help />} text="Help" /></button>
        <button className="sidebarWrapperIcon" onClick={handleClick}><MenuLink icon={<ExitToApp />} text="Logout" /></button>

        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <Friends key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
