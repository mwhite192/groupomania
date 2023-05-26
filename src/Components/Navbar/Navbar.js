import React from 'react';
import './Navbar.scss';
import CompanyLogo from '../../Assets/Logos/icon-left-font-monochrome-white.svg';
import UserImage from '../../Assets/Person/user.jpg';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <img src={CompanyLogo} alt="company logo" className="logo" />
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">Homepage</span>
          <span className="navbarLink">Timeline</span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <AccountCircleIcon className="navbarIcon" />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <ChatBubbleIcon className="navbarIcon" />
            <span className="navbarIconBadge">10</span>
          </div>
          <div className="navbarIconItem">
            <NotificationsIcon className="navbarIcon" />
            <span className="navbarIconBadge">4</span>
          </div>
        </div>
        <img src={UserImage} alt="african american older male" className="navbarImg" />
      </div>
    </div>
  );
}

export default Navbar
