// imports the React library and the Navbar.scss file
import React from 'react';
import './Navbar.scss';
// imports the store  
import { store } from '../../App/store';
// imports the getUser selector
import { getUser } from '../../App/Features/User/userSlice';
// imports link from react router
import { Link } from 'react-router-dom';
// imports the company logo and user image
import CompanyLogo from '../../Assets/Logos/icon-left-font-monochrome-white.svg';
// imports the icons from the material ui library
import { ChatBubble } from '@mui/icons-material';
import { AccountCircle } from '@mui/icons-material';
import { Notifications } from '@mui/icons-material';


// creates the Navbar component
export const Navbar = () => {
  // gets the user from the store
  const { formFile } = getUser(store.getState());
  // returns the Navbar component
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <Link to='/home'>
          <img src={CompanyLogo} alt="company logo" className="logo" />
        </Link>
      </div>
      <div className="navbarRight">
        <div className="navbarIcons">
          <Link to="/profile/update">
            <div className="navbarIconItem">
              <AccountCircle className="navbarIcon" />
            </div>
          </Link>
          <div className="navbarIconItem">
            <ChatBubble className="navbarIcon" />
          </div>
          <div className="navbarIconItem">
            <Notifications className="navbarIcon" />
          </div>
        </div>
        <Link to="/profile">
          <div className="navbarIconItem">
            <img src={formFile} alt="user" className="navbarImg" />
          </div>
        </Link>
      </div>
    </div>
  );
}


export default Navbar;
