// imports the React library and the Post.scss file
import React from 'react';
import './Post.scss';
// imports ReactTimeAgo library
import ReactTimeAgo from 'react-time-ago';
// imports the DeletePost component
import DeletePost from '../DeletePost/DeletePost';
// imports the UpdatePostForm component
import UpdatePostForm from '../UpdatePostForm/UpdatePostForm';
// imports the ThumbUpAltOutlined icon from the material ui library
import { ThumbUpAltOutlined } from '@mui/icons-material';
// imports DefaultOnlineProfileImage.jpeg
import DefaultOnlineProfileImage from '../../Assets/person/DefaultOnlineImage.jpeg';


// creates the Post component
export const Post = ({ post }) => {
  // creates the variables from the post object
  const {
    _id,
    username,
    profilePicture,
    timestamp,
    image,
    message,
    comments,
    likes,
  } = post;
  
  // creates the date variable from timestamp
  const date = timestamp;


  // returns the Post component
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={profilePicture ? profilePicture : DefaultOnlineProfileImage}
              alt="user profile"
            />
            <span className="postUsername">{username}</span>
            {/* <div className="postTime">
              <ReactTimeAgo
                date={Date.parse(date)}
                className="postDate"
                locale="en-US"
              />
            </div> */}
          </div>
          <div className="postTopRight">
            <div className="postDelete">
              <DeletePost postId={_id} />
              <span className="postTopDeleteText">Delete</span>
            </div>
            <div className="postEdit">
              <UpdatePostForm postId={_id} />
              <span className="postTopDeleteText">Edit</span>
            </div>
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
            <span className="postLikeCounter">{likes} &#x2022; likes</span>
          </div>
        </div>
        <div className="postContent">
          <span className="postName">{username}</span>
          <span className="postText">{message}</span>
          <span className="postCommentText">{comments} &#x2022; comments</span>
        </div>
        <div className="postComment">
          <img
            className="postCommentImg"
            src={profilePicture ? profilePicture : DefaultOnlineProfileImage}
            alt="user profile"
          />
          <span className="postAddComment">Add a comment...</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
