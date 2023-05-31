import React from 'react';
import { Stories } from '../Stories/Stories';
import { Post } from '../Post/Post';
import './PostFeed.scss';

export const PostFeed = () => {
  return (
    <div className='postFeed'>
      <div className="feedWrapper">
        <Stories />
        <Post />
      </div>
    </div>
  )
}

export default PostFeed
