import React from 'react';
import User from '../../Assets/person/user.jpg';
import { VideoCameraFront } from '@mui/icons-material';
import { PermMedia } from '@mui/icons-material';
import { EmojiEmotions } from '@mui/icons-material';
import './Share.scss';

export const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={User} alt="user profile" className="shareProfileImg" />
          <input
            type="text"
            className="shareInput"
            placeholder="what's on your mind ?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <VideoCameraFront
                className="shareIcon"
                style={{ fill: "#d2042d" }}
              />
              <span className="shareIconText">Live Video</span>
            </div>
            <div className="shareOption">
              <PermMedia className="shareIcon" style={{ fill: "#7b8490" }} />
              <span className="shareIconText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions
                className="shareIcon"
                style={{ fill: "#ffd500" }}
              />
              <span className="shareIconText">Feelings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share
