// imports the React library and the App.scss file
import React from 'react';
import './Feed.scss';
// // imports the store
// import { store } from '../../App/store';
// // imports the getPosts selector
// import { getPost } from '../../App/Features/Post/postSlice';
// imports the Online, Share, and Post components
import { Online } from '../Online/Online';
import { Share } from '../Share/Share';
import { Post } from '../Post/Post';
import { Posts } from '../../data';

// creates the Feed component
export const Feed = () => {
  // // creates a posts variable sets it to the getPosts selector
  // const Posts = getPost(store.getState());
  
  // returns the Feed component
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Online />
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Feed;
