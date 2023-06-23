// imports the React library and the OnlineCard.scss file
import React from 'react';
import './OnlineCard.scss';
// import onlineDefaultImg from '../../Assets/person/DefaultProfile.jpg';
import onlineDefaultImg from '../../Assets/Logos/onlineDefaultImg.jpeg'




// creates the OnlineCard component
export const OnlineCard = ({user}) => {
  // returns the OnlineCard component
  return (
    <div className="onlineCard">
      <span className="onlineProfile"></span> 
      <img src={onlineDefaultImg} alt="user Online background" className="onlineBackground" />
      <span className="onlineUser"></span>
    </div>
  );
};

export default OnlineCard;
