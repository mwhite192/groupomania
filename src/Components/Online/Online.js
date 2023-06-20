// imports the React library and the Stories.scss file
import React from 'react';
import './Online.scss';
// imports the store
import { store } from '../../App/store';
// imports the getUsers selector
import { getUser } from '../../App/Features/User/userSlice';
// imports the OnlineCard component
import { OnlineCard } from '../OnlineCard/OnlineCard';
import { Users } from '../../data';


// creates the Stories component
export const Online = () => {
  const { formFile } = getUser(store.getState());
  return (
    <div className='online'>
      <div className="OnlineCard">
        <div className="OnlineCardOverlay"></div>
        <span className="OnlineProfile"></span> 
        <img src={formFile} alt="user Online background" className="OnlineBackground" />
        <span className="OnlineUser">Amber</span>
      </div>
      {Users.map((user) => (<OnlineCard key={user.id} user={user} />))}
    </div>
  )
}

export default Online;
