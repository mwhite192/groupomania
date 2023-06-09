// imports the React library and the App.scss file
import React from 'react';
import './Feed.scss';
// imports the Stories, Share, and Post components
import { Stories } from '../Stories/Stories';
import { Share } from '../Share/Share';
import { Post } from '../Post/Post';
import { Posts } from '../../data';


// creates the Feed component
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

export default Feed;
