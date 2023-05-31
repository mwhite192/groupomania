import React from 'react';
import { Stories } from '../Stories/Stories';
import { Share } from '../Share/Share';
import './PostFeed.scss';

export const PostFeed = () => {
  return (
    <div className='postFeed'>
      <div className="feedWrapper">
        <Stories />
        <Share />
      </div>
    </div>
  )
}

export default PostFeed
