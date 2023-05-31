import React from 'react';
import User from '../../Assets/person/user.jpg';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
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
              <VideoCameraFrontIcon
                className="shareIcon"
                style={{ fill: "#d2042d" }}
              />
              <span className="shareIconText">Live Video</span>
            </div>
            <div className="shareOption">
              <PermMediaIcon className="shareIcon" style={{ fill: "#7b8490" }} />
              <span className="shareIconText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon
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
