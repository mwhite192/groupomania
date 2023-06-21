// imports the React library and the Friends.scss file
import React from "react";
import "./Friends.scss";

// creates the Friends component
export const Friends = ({ user }) => {
  // returns the Friends component
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
