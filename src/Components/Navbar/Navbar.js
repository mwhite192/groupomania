// imports the React library and the Navbar.scss file
import React from 'react';
import './Navbar.scss';
// imports link from react router
import { Link } from 'react-router-dom';
// imports the store  
import { store } from '../../App/store';
// imports the getUser selector
import { getUser } from '../../App/Features/profileSlice';
// imports the company logo and user image
import CompanyLogo from '../../Assets/Logos/icon-left-font-monochrome-white.svg';
import UserImage from '../../Assets/person/user.jpg';
// imports the icons from the material ui library
import { Search } from '@mui/icons-material';
import { ChatBubble } from '@mui/icons-material';
import { AccountCircle } from '@mui/icons-material';
import { Notifications } from '@mui/icons-material';



// creates the Navbar component
export const Navbar = () => {
  const { formFile } = getUser(store.getState());
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
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <AccountCircle className="navbarIcon" />
          </div>
          <div className="navbarIconItem">
            <ChatBubble className="navbarIcon" />
          </div>
          <div className="navbarIconItem">
            <Notifications className="navbarIcon" />
          </div>
        </div>
        <Link to='/profile'>
          <div className="navbarIconItem">
            <img src={formFile} alt="user" className="navbarImg" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
