// imports the React library and the Share.scss file
import React from 'react';
import './Share.scss';
// imports the store
import { store } from '../../App/store';
//imports getUser selector
import { getUser } from '../../App/Features/User/userSlice';
// imports PostForm component
import { PostForm } from '../PostForm/PostForm';
// imports the icons from the material ui library
import { VideoCameraFront } from '@mui/icons-material';
import { PermMedia } from '@mui/icons-material';
import { EmojiEmotions } from '@mui/icons-material';


// creates the Share component
export const Share = () => {
  // gets the user from the store
  const { formFile, name } = getUser(store.getState());
  // returns the Share component
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={formFile} alt="user profile" className="shareProfileImg" />
          <span className="shareProfileHeader">What's on your mind {name}</span>
          <span className="shareProfilePostForm"><PostForm /></span>
        </div>
        <hr className="shareHr" />
        {/* <div className="shareBottom"> 
          <div className="shareOptions">
            <button className="shareOption">
              <VideoCameraFront
                className="shareIcon"
                style={{ fill: "#d2042d" }}
              />
              <span className="shareIconText">Live Video</span>
            </button>
            <button className="shareOption">
              <PermMedia className="shareIcon" style={{ fill: "#7b8490" }} />
              <span className="shareIconText">Photo/Video</span>
            </button>
            <button className="shareOption">
              <EmojiEmotions
                className="shareIcon"
                style={{ fill: "#ffd500" }}
              />
              <span className="shareIconText">Feelings</span>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Share;
