// imports the React library and the Navbar.scss file
import React from 'react';
import './Navbar.scss';
// imports the useNavigate hook from the react-router-dom library
import { useNavigate } from 'react-router-dom';
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
  // creates a navigate object
  const navigate = useNavigate();

  // creates a handleClick function
  const handleClick = () => {
    // navigates user to profile page
    navigate('/profile');
  };
  

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
        <div className="navbarIconItem">
          <button className="navbarProfileIcon" onClick={handleClick}>
            <img
              src={UserImage}
              alt="user"
              className="navbarImg"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
