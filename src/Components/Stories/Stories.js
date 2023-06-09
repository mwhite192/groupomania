// imports the React library and the Stories.scss file
import React from 'react';
import './Stories.scss';
// imports the StoryCard component
import { StoryCard } from '../StoryCard/StoryCard';
import { Users } from '../../data';
import Upload from '../../Assets/person/upload.png';
import User from '../../Assets/person/user.jpg';


// creates the Stories component
export const Stories = () => {
  return (
    <div className='stories'>
      <div className="storyCard">
        <div className="storyCardOverlay"></div>
        <img src={User} alt="user profile" className="storyProfile" />
        <img src={User} alt="user story background" className="storyBackground" />
        <img src={Upload} alt="plus sign" className='storyAdd' />
        <span className="storyUser">Amber</span>
      </div>
      {Users.map((user) => (<StoryCard key={user.id} user={user} />))}
    </div>
  )
}

export default Stories;
