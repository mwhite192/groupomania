import React from 'react';
import './Navbar.scss';
import CompanyLogo from '../../Assets/Logos/icon-left-font-monochrome-white.svg';
import UserImage from '../../Assets/person/user.jpg';
import { Search } from '@mui/icons-material';
import { ChatBubble } from '@mui/icons-material';
import { AccountCircle } from '@mui/icons-material';
import { Notifications } from '@mui/icons-material';

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <img src={CompanyLogo} alt="company logo" className="logo" />
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
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
            <AccountCircle className="navbarIcon" />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <ChatBubble className="navbarIcon" />
            <span className="navbarIconBadge">10</span>
          </div>
          <div className="navbarIconItem">
            <Notifications className="navbarIcon" />
            <span className="navbarIconBadge">4</span>
          </div>
        </div>
        <img src={UserImage} alt="african american older male" className="navbarImg" />
      </div>
    </div>
  );
}

export default Navbar
