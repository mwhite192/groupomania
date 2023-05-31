import React from 'react';
import { Stories } from '../Stories/Stories';
import { Share } from '../Share/Share';
import { Post } from '../Post/Post';
import { Posts } from '../../data';
import './Feed.scss';

export const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Stories />
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Feed
