import React from 'react';
import { Users } from '../../data';
import { IconButton } from '@mui/material';
import { ChatBubbleOutline, MoreVert, ShareOutlined, ThumbDown, ThumbDownAltOutlined, ThumbUp, ThumbUpAltOutlined } from '@mui/icons-material';
import './Post.scss';

export const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt="user profile"
            />
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
          <img className="postImg" src={post.photo} alt="post" />
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
              {post.comment} &#x2022; comments &#x2022; share{" "}
            </span>
          </div>
        </div>
        <hr className="postFooterHr" />
        <div className="postFooter">
          <div className="postFooterBottomItem">
            <ThumbUpAltOutlined className="postFooterIcon" />
            <span className="postFooterIconText">Like</span>
          </div>
          <div className="postFooterBottomItem">
            <ThumbDownAltOutlined className="postFooterIcon" />
            <span className="postFooterIconText">Dislike</span>
          </div>
          <div className="postFooterBottomItem">
            <ChatBubbleOutline className="postFooterIcon" />
            <span className="postFooterIconText">Comment</span>
          </div>
          <div className="postFooterBottomItem">
            <ShareOutlined className="postFooterIcon" />
            <span className="postFooterIconText">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post
