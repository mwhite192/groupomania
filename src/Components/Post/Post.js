// imports the React library and the Post.scss file
import React from 'react';
import './Post.scss';
// imports the store
//import { store } from '../../App/store';
// imports the getPosts selector
//import { getPosts } from '../../App/Features/Post/postSlice';
// imports the icons from the material ui library
import { IconButton } from '@mui/material';
import { ChatBubbleOutline, MoreVert, ThumbDown, ThumbDownAltOutlined, ThumbUp, ThumbUpAltOutlined } from '@mui/icons-material';
import { Users } from '../../data';
// imports DefaultOnlineProfileImage.jpeg
import DefaultOnlineProfileImage from '../../Assets/person/DefaultOnlineImage.jpeg'
// imports Business.jpeg
import Business from '../../Assets/person/Business.jpeg';



// creates the Post component
export const Post = ({ post }) => {
  // returns the Post component
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={DefaultOnlineProfileImage} alt="user profile" />
            <span className="postUsername">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <IconButton>
              <MoreVert className="postVertButton" />
            </IconButton>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.body}</span>
          <div className="postCenterImg">
            <img className="postImg" src={Business} alt="post" />
          </div>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUp className="postLikeButton" />
            <span className="postLikeCounter">{post.like}</span>
            <ThumbDown className="postDislikeButton" />
            <span className="postDislikeCounter">0</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              {post.comment} &#x2022; comments
            </span>
          </div>
        </div>
        <hr className="postFooterHr" />
        <div className="postFooter">
          <button className="postFooterBottomItem">
            <ThumbUpAltOutlined className="postFooterIcon" />
            <span className="postFooterIconText">Like</span>
          </button>
          <button className="postFooterBottomItem">
            <ThumbDownAltOutlined className="postFooterIcon" />
            <span className="postFooterIconText">Dislike</span>
          </button>
          <button className="postFooterBottomItem">
            <ChatBubbleOutline className="postFooterIcon" />
            <span className="postFooterIconText">Comment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
