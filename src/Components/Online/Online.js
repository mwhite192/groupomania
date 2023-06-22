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


// creates the Online component
export const Online = () => {
  // gets the user from the store
  const { formFile, name } = getUser(store.getState());
  // returns the Online component
  return (
    <div className='online'>
      <div className="onlineCard">
        <span className="onlineProfile"></span> 
        <img src={formFile} alt="user Online background" className="onlineBackground" />
        <span className="onlineUser">{name}</span>
      </div>
      {Users.map((user) => (<OnlineCard key={user.id} user={user} />))}
    </div>
  )
}

export default Online;
