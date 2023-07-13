// imports the React library and the Stories.scss file
import React from 'react';
import './Online.scss';
// imports the store
import { store } from '../../App/store';
// imports the getUsers selector
import { getUser } from '../../App/Features/User/userSlice';
// imports useState hook
import { useState, useEffect } from 'react';
// imports the OnlineCard component
import { OnlineCard } from '../OnlineCard/OnlineCard';


// creates the Online component
export const Online = () => {
  // gets the user from the store
  const { formFile, name, token, userId } = getUser(store.getState());
  // creates the users variable and sets it to the getUsers selector
  const [profiles, setProfiles] = useState([]);


  // creates the useEffect hook to fetch all users
  useEffect(() => {
    fetch('http://localhost:3000/api/user/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
         Authorization: 'Bearer ' + token,
      }
    })
    // converts the response to json
    .then(response => response.json())
      // sets the profiles variable to the data
      .then(data => {
        setProfiles(data);
      })
      // logs an error if there is one
      .catch(error => console.error('Error fetching users:', error));
  }, [token]);


  // returns the Online component
  return (
    <div className='online'>
      <div className='onlineCard'>
        <div className='onlineProfileOverlay'></div> 
        <img src={formFile} alt='user online background' className='onlineBackground' />
        <span className='onlineUser'>{name}</span>
      </div>
      {profiles.filter((p) => p.userId !== userId).map((profile) => (<OnlineCard key={profile._id} profile={profile} />))}
    </div>
  )
}


export default Online;
