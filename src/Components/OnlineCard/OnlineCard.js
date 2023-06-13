// imports the React library and the OnlineCard.scss file
import React from 'react';
import './OnlineCard.scss';


// creates the OnlineCard component
export const OnlineCard = ({user}) => {
  return (
    <div className="OnlineCard">
      <div className="OnlineCardOverlay"></div>
      <span className="OnlineProfile"></span> 
      <img src={user.profilePicture} alt="user Online background" className="OnlineBackground" />
      <span className="OnlineUser">{user.username}</span>
    </div>
  );
};

export default OnlineCard;
