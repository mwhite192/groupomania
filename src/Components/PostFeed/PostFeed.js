import React from 'react';
import { Stories } from '../Stories/Stories';
import './PostFeed.scss';

export const PostFeed = () => {
  return (
    <div className='postFeed'>
      <div className="feedWrapper">
        <Stories />
      </div>
    </div>
  )
}

export default PostFeed
