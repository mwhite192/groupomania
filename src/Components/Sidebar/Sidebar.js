import React from 'react';
import Button from 'react-bootstrap/Button';
import './Sidebar.scss';
import { MenuLink } from '../MenuLink/MenuLink';
import { Friend } from '../Friend/Friend';
import { Users } from '../../data';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupsIcon from '@mui/icons-material/Groups';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EventIcon from '@mui/icons-material/Event';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <MenuLink icon={<RssFeedIcon />} text='Feed' />
        <MenuLink icon={<ChatIcon />} text='Chats' />
        <MenuLink icon={<VideoLibraryIcon />} text='Videos' />
        <MenuLink icon={<GroupsIcon />} text='Friends' />
        <MenuLink icon={<NewspaperIcon />} text='NewsLetter' />
        <MenuLink icon={<EventIcon />} text='Events' />
        <MenuLink icon={<Brightness4Icon />} text='Theme' />
        <MenuLink icon={<ExitToAppIcon />} text='Logout' />

        <Button variant='primary' size='sm' className='sidebarButton'>Show More</Button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <Friend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
