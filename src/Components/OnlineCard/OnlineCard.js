// imports the React library and the OnlineCard.scss file
import React from 'react';
import './OnlineCard.scss';
// imports online default image
import onlineDefaultImg from '../../Assets/Logos/onlineDefaultImg.jpeg'
// imports the add image
import addImg from '../../Assets/Person/upload.png'


// creates the OnlineCard component
export const OnlineCard = ({profile}) => {
  // returns the OnlineCard component
  return (
    <div className="onlineCard">
      <div className="onlineCardOverlay"></div>
      <img src={addImg} alt='plus sign with blue background' className="onlineProfile"></img> 
      <img src={profile.formFile || onlineDefaultImg} alt="user Online background" className="onlineBackground" />
      <span className="onlineUser">{profile.name}</span>
    </div>
  );
};


export default OnlineCard;
