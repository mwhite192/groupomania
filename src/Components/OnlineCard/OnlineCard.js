// imports the React library and the OnlineCard.scss file
import React from 'react';
import './OnlineCard.scss';
// imports the DefaultProfilePicture
import DefaultProfilePicture from '../../Assets/person/DefaultProfile.jpg';


// creates the OnlineCard component
export const OnlineCard = ({user}) => {
  // returns the OnlineCard component
  return (
    <div className="onlineCard">
      <div className="onlineCardOverlay"></div>
      <span className="onlineProfile"></span> 
      <img src={DefaultProfilePicture} alt="user Online background" className="onlineBackground" />
      <span className="onlineUser"></span>
    </div>
  );
};

export default OnlineCard;
