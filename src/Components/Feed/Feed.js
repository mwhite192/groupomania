import React from 'react';
import { Stories } from '../Stories/Stories';
import { Share } from '../Share/Share';
import './Feed.scss';

export const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Stories />
        <Share />
      </div>
    </div>
  )
}

export default Feed
