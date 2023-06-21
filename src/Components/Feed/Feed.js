// imports the React library and the App.scss file
import React from 'react';
import './Feed.scss';
// imports the Online, Share, and Post components
import { Online } from '../Online/Online';
import { Share } from '../Share/Share';
import { Post } from '../Post/Post';
import { Posts } from '../../data';

// creates the Feed component
export const Feed = () => {
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
