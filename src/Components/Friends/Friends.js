// imports the React library and the Friends.scss file
import React from 'react';
import './Friends.scss';
// imports default profile image
import DefaultOnlineProfileImage from '../../Assets/Person/DefaultOnlineImage.jpeg'


// creates the Friends component
export const Friends = ({ user }) => {
  // returns the Friends component
  return (
    <div >
      <li className='sidebarFriend'>
        <img src={user.formFile || DefaultOnlineProfileImage} alt='user profile' className='sidebarFriendImg'/>
        <span className='sidebarFriendName'>{user.name}</span>
      </li>
    </div>
  );
};

export default Friends;
