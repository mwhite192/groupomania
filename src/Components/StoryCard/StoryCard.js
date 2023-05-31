import React from 'react';
import Upload from '../../Assets/person/upload.png';
import './StoryCard.scss';

export const StoryCard = ({user}) => {
  return (
    <div className="storyCard">
      <div className="storyCardOverlay"></div>
      <img src={user.profilePicture} alt="user profile" className="storyProfile" />
      <img src={user.profilePicture} alt="user story background" className="storyBackground" />
      <img src={Upload} alt="plus sign" className="storyAdd" />
      <span className="storyUser">{user.username}</span>
    </div>
  );
};

export default StoryCard;
