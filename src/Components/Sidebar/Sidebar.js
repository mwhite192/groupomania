import React from 'react';
import Button from 'react-bootstrap/Button';
import { MenuLink } from '../MenuLink/MenuLink';
import { Friends } from '../Friends/Friends';
import { Users } from '../../data';
import { Settings } from '@mui/icons-material';
import { Info } from '@mui/icons-material';
import { Help } from '@mui/icons-material';
import { RssFeed } from '@mui/icons-material';
import { Chat } from '@mui/icons-material';
import { VideoLibrary } from '@mui/icons-material';
import { Groups } from '@mui/icons-material';
import { Newspaper } from '@mui/icons-material';
import { Event } from '@mui/icons-material';
import { Brightness4 } from '@mui/icons-material';
import { ExitToApp } from '@mui/icons-material';
import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <button className='sidebarWrapperIcon'><MenuLink icon={<RssFeed />} text="Feed" /></button>
        <button className="sidebarWrapperIcon"><MenuLink icon={<Chat />} text="Chats" /></button>
        <button className="sidebarWrapperIcon"><MenuLink icon={<VideoLibrary />} text="Videos" /></button>
        <button className="sidebarWrapperIcon"><MenuLink icon={<Groups />} text="Friends" /></button>
        <button className="sidebarWrapperIcon"><MenuLink icon={<Brightness4 />} text="Theme" /></button>
        <button className="sidebarWrapperIcon"><MenuLink icon={<Info />} text="About" /></button>
        <button className="sidebarWrapperIcon"><MenuLink icon={<Help />} text="Help" /></button>
        <button className="sidebarWrapperIcon"><MenuLink icon={<ExitToApp />} text="Logout" /></button>
        <button className="sidebarWrapperIcon"><MenuLink icon={<Newspaper />} text="NewsLetter" /></button>
        <button className="sidebarWrapperIcon"><MenuLink icon={<Event />} text="Events" /></button>
        <button className="sidebarWrapperIcon"><MenuLink icon={<Settings />} text="Settings" /></button>

        <Button variant="primary" size="sm" className="sidebarButton">
          Show More
        </Button>
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

export default Sidebar
