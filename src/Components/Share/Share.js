// imports the React library and the Share.scss file
import React from 'react';
import './Share.scss';
// imports the store
import { store } from '../../App/store';
//imports getUser selector
import { getUser } from '../../App/Features/User/userSlice';
// imports PostForm component
import { PostForm } from '../PostForm/PostForm';
// import homeIcon 
import HomeIcon from '../../Assets/Logos/homeIcon.svg';


// creates the Share component
export const Share = () => {
  // gets the user from the store
  const { name } = getUser(store.getState());
  // returns the Share component
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <div className="shareTopHomeIconContainer">
            <img
              src={HomeIcon}
              alt="user profile"
              className="shareHomeIcon"
            />
          </div>
          <div className="shareTopHomeIconInfo">
            <span className="shareProfileHeader">
             {name}
            </span>
            <span className="shareProfilePostForm">
              <PostForm />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
