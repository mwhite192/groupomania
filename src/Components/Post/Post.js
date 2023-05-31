import React from 'react';
import User from '../../Assets/person/user.jpg';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import './Post.scss';

export const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <img src={User} alt="user profile" className="postProfileImg" />
          <input
            type="text"
            className="postInput"
            placeholder="what's on your mind ?"
          />
        </div>
        <hr className="postHr" />
        <div className="postBottom">
          <div className="postOptions">
            <div className="postOption">
              <VideoCameraFrontIcon
                className="postIcon"
                style={{ fill: "#d2042d" }}
              />
              <span className="postIconText">Live Video</span>
            </div>
            <div className="postOption">
              <PermMediaIcon className="postIcon" style={{ fill: "#7b8490" }} />
              <span className="postIconText">Photo/Video</span>
            </div>
            <div className="postOption">
              <EmojiEmotionsIcon
                className="postIcon"
                style={{ fill: "#ffd500" }}
              />
              <span className="postIconText">Feelings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post
