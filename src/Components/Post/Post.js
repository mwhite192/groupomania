// imports the React library and the Post.scss file
import React from 'react';
import './Post.scss';
// imports the store
import { store } from '../../App/store';
// imports the getUser selector
import { getUser } from '../../App/Features/User/userSlice';
// imports the getPosts selector
import { getPost } from '../../App/Features/Post/postSlice';
// imports the react-time-ago library
import ReactTimeAgo from 'react-time-ago';
// imports the icons from the material ui library
import { IconButton } from '@mui/material';
import { MoreVert, ThumbUpAltOutlined } from '@mui/icons-material';
import { Users } from '../../data';
// imports DefaultOnlineProfileImage.jpeg
import DefaultOnlineProfileImage from '../../Assets/person/DefaultOnlineImage.jpeg'
// imports Business.jpeg
import Business from '../../Assets/person/Business.jpeg';



// creates the Post component
export const Post = ({ post }) => {
  // creates the timestamp variable from post in the store
  const { timestamp, image, message } = getPost(store.getState());
  // creates the date variable from timestamp
  const date = timestamp;
  // creates the name variable from user in the store
  const { name, file } = getUser(store.getState());


  // returns the Post component
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={file ? file : DefaultOnlineProfileImage}
              alt="user profile"
            />
            <span className="postUsername">{name}</span>
            <div className="postTime">
              <ReactTimeAgo
                date={Date.parse(date)}
                className="postDate"
                locale="en-US"
              />
            </div>
          </div>
          <div className="postTopRight">
            <IconButton>
              <MoreVert className="postVertButton" />
            </IconButton>
          </div>
        </div>
        <div className="postCenter">
          <div className="postCenterImg">
            <img src={image} alt="post" className="postImg" />
          </div>
          <div className="postFooter">
            <button className="postFooterBottomItem">
              <ThumbUpAltOutlined className="postFooterIcon" />
            </button>
            <span className="postLikeCounter">{post.like} &#x2022; likes</span>
          </div>
        </div>
        <div className="postContent">
          <span className="postName">{name}</span>
          <span className="postText">{message}</span>
          <span className="postCommentText">
            {post.comment} &#x2022; comments
          </span>
        </div>
        <div className="postComment">
          <img
            className="postCommentImg"
            src={file ? file : DefaultOnlineProfileImage}
            alt="user profile"
          />
          <span className="postAddComment">Add a comment...</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
