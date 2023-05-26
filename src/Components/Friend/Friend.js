import React from 'react';
import './Friend.scss';

export const Friend = ({ user }) => {
  return (
    <div className='friendList'>
        <li className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">
                {user.username}
            </span>
        </li>
    </div>
  )
}

export default Friend
