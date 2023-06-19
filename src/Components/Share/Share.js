// imports the React library and the Share.scss file
import React from 'react';
import './Share.scss';
// imports store
import { store } from '../../App/store';
//imports getUser selector
import { getUser } from '../../App/Features/profileSlice';
// imports the icons from the material ui library
import { VideoCameraFront } from '@mui/icons-material';
import { PermMedia } from '@mui/icons-material';
import { EmojiEmotions } from '@mui/icons-material';



// creates the Share component
export const Share = () => {
  const { formFile } = getUser(store.getState());
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={formFile} alt="user profile" className="shareProfileImg" />
          <input
            type="text"
            className="shareInput"
            placeholder="what's on your mind ?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
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
        </div>
      </div>
    </div>
  );
};

export default Share;
