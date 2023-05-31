import React from 'react';
import { StoryCard } from '../StoryCard/StoryCard';
import { Users } from '../../data';
import User from '../../Assets/person/user.jpg';
import Upload from '../../Assets/person/upload.png';
import './Stories.scss';

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

export default Stories
