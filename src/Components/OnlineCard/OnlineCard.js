// imports the React library and the OnlineCard.scss file
import React from 'react';
import './OnlineCard.scss';
// imports onlineDefaultImg from '../../Assets/person/DefaultProfile.jpg';
import onlineDefaultImg from '../../Assets/Logos/onlineDefaultImg.jpeg'
// imports the add image
import addImg from '../../Assets/person/plus.jpeg.jpeg'




// creates the OnlineCard component
export const OnlineCard = ({profile}) => {
  // returns the OnlineCard component
  return (
    <div className="onlineCard">
      <div className="onlineCardOverlay"></div>
      <img src={addImg} className="onlineProfile"></img> 
      <img src={profile.formFile || onlineDefaultImg} alt="user Online background" className="onlineBackground" />
      <span className="onlineUser">{profile.name}</span>
    </div>
  );
};

export default OnlineCard;
