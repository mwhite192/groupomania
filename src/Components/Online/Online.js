// imports the React library and the Stories.scss file
import React from 'react';
import './Online.scss';
// imports the OnlineCard component
import { OnlineCard } from '../OnlineCard/OnlineCard';
import { Users } from '../../data';
import User from '../../Assets/person/user.jpg';


// creates the Stories component
export const Online = () => {
  return (
    <div className='online'>
      <div className="OnlineCard">
        <div className="OnlineCardOverlay"></div>
        <span className="OnlineProfile"></span> 
        <img src={User} alt="user Online background" className="OnlineBackground" />
        <span className="OnlineUser">Amber</span>
      </div>
      {Users.map((user) => (<OnlineCard key={user.id} user={user} />))}
    </div>
  )
}

export default Online;
