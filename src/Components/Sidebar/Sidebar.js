// imports the React library and the Sidebar.scss file
import React from 'react';
import './Sidebar.scss';
// imports the store
import { store } from '../../App/store';
// imports the logout action
import { logout } from '../../App/Features/Profile/profileSlice';
// imports the getUsers selector
import { getUser } from '../../App/Features/User/userSlice';
// imports useEffect hook
import { useEffect, useState } from 'react';
// imports the useNavigate hook 
import { useNavigate } from 'react-router-dom';
// imports the MenuLink and Friends components
import { MenuLink } from '../MenuLink/MenuLink';
import { Friends } from '../Friends/Friends';
// imports the icons from the material ui library
import { Help } from '@mui/icons-material';
import { RssFeed } from '@mui/icons-material';
import { Chat } from '@mui/icons-material';
import { VideoLibrary } from '@mui/icons-material';
import { Groups } from '@mui/icons-material';
import { ExitToApp } from '@mui/icons-material';



// creates the Sidebar component
export const Sidebar = () => {
  // creates a navigate variable and sets it to the useNavigate hook
  const navigate = useNavigate();
  // creates the users variable and sets it to the getUsers selector
  const [users, setUsers] = useState([]);
  // gets the user from the store
  const { token, userId } = getUser(store.getState());

  // created the useEffect hook to fetch all users
  useEffect(() => {
    fetch('http://localhost:3000/api/user/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
         Authorization: 'Bearer ' + token,
      },
    })
    // converts the response to json
    .then(response => response.json())
      // sets the profiles variable to the data
      .then(data => {
        setUsers(data);
      })
      // logs an error if there is one
      .catch(error => console.error('Error fetching users:', error));
  }, [token]);


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


  // creates a handleHelp function
  const handleHelp = () => {
    // displays an alert message to the user
    alert('Please reach out to Stephanie McCullough for issues and/or assistance via stephanie.mccullough@gm.com');
  };


  // returns the Sidebar component
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <button className="sidebarWrapperIcon" onClick={handleFeed}>
          <MenuLink icon={<RssFeed />} text="Feed" />
        </button>
        <button className="sidebarWrapperIcon" style={{ opacity: 0.6 }}>
          <MenuLink icon={<Chat />} text="Chats" />
        </button>
        <button className="sidebarWrapperIcon" style={{ opacity: 0.6 }}>
          <MenuLink icon={<VideoLibrary />} text="Videos" />
        </button>
        <button className="sidebarWrapperIcon" style={{ opacity: 0.6 }}>
          <MenuLink icon={<Groups />} text="Friends" />
        </button>
        <button className="sidebarWrapperIcon" onClick={handleHelp}>
          <MenuLink icon={<Help />} text="Help" />
        </button>
        <button className="sidebarWrapperIcon" onClick={handleClick}>
          <MenuLink icon={<ExitToApp />} text="Logout" />
        </button>

        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
          {users.length > 0 &&
            users
              .filter((u) => u.userId !== userId)
              .map((user) => <Friends key={user.userId} user={user} />)}
        </ul>
      </div>
    </div>
  );
}


export default Sidebar;
