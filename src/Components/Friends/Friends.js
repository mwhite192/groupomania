import React from "react";
import "./Friends.scss";

export const Friends = ({ user }) => {
  return (
    <div >
      <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className='sidebarFriendImg'/>
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
};

export default Friends;
