// imports the React library and the App.scss file
import React from 'react';
import './Feed.scss';
// imports the store
import { store } from '../../App/store';

// imports the getUser selector
import { getUser, setUserTime } from '../../App/Features/User/userSlice';
// imports the createPost and getArrayOfPost action
import { createPost, getSortedArrayOfPosts } from '../../App/Features/Post/postSlice';
// imports useEffect hook
import { useEffect } from 'react';
// imports the Online, Share, and Post components
import { Online } from '../Online/Online';
import { Share } from '../Share/Share';
import { Post } from '../Post/Post';


// creates the Feed component
export const Feed = () => {
  // creates the Posts variable and sets it to the getArrayOfPosts selector
  const Posts = getSortedArrayOfPosts(store.getState());
  // gets the user from the store
  const { token, userId } = getUser(store.getState());
  

  // creates the useEffect hook to fetch all posts
  useEffect(() => {
    fetch('http://localhost:3000/api/posts/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
         Authorization: 'Bearer ' + token,
      },
    })
      // converts the response to json
      .then((res) => res.json())
      .then((data) => {
        // checks if data is an array
        if (Array.isArray(data)) {
            // loops through the data array
            data.forEach((element) => {
            // dispatches createPost action
            store.dispatch(createPost(element));
          });
        }
      });
  }, [token]);


  // creates the useEffect hook to fetch user times
  useEffect(() => {
    fetch('http://localhost:3000/api/user/updateTime', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
         Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({ userId }),
    })
      // converts the response to json
      .then((res) => res.json())
      // sets the user time
      .then((data) => {
        // checks if data has a timestamp
        if (data.timestamp) {
          // sets the timeout to 2 seconds
          setTimeout(() => {
            // dispatches setUserTime action
            store.dispatch(setUserTime(data.timestamp));
          }, 2000);
        }
      });
  }, []);


  // returns the Feed component
  return (
    <div className='feed'>
      <div className='feedWrapper'>
      <h4 className='onlineHeader'>Groupomania Team Members</h4>
        <Online />
        <Share />
        {Posts.filter((p) => typeof p._id !== 'undefined').map((post) => {
          return <Post key={post._id} post={post} likes={post.userLiked} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
