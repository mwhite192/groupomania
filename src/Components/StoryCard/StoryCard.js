// imports the React library and the StoryCard.scss file
import React from 'react';
import './StoryCard.scss';


// creates the StoryCard component
export const StoryCard = ({user}) => {
  return (
    <div className="storyCard">
      <div className="storyCardOverlay"></div>
      <img src={user.profilePicture} alt="user profile" className="storyProfile" />
      <img src={user.profilePicture} alt="user story background" className="storyBackground" />
      <span className="storyUser">{user.username}</span>
    </div>
  );
};

export default StoryCard;
