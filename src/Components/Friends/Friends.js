// imports the React library and the Friends.scss file
import React from "react";
import "./Friends.scss";
// imports DefaultOnlineProfileImage.jpeg
import DefaultOnlineProfileImage from '../../Assets/person/DefaultOnlineImage.jpeg'


// creates the Friends component
export const Friends = ({ user }) => {
  // returns the Friends component
  return (
    <div >
      <li className="sidebarFriend">
        <img src={DefaultOnlineProfileImage} alt="" className='sidebarFriendImg'/>
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
};

export default Friends;
