// imports the React library and the Post.scss file
import React from 'react';
import './Post.scss';
// imports the store
import { store } from '../../App/store';
// imports the getUser selector
import { getUser } from '../../App/Features/User/userSlice';
// imports the deletePost action
import { deletePost } from '../../App/Features/Post/postSlice';
// imports the useNavigate hook
import { useNavigate } from 'react-router-dom';
// imports the useState hook
import { useState } from "react";
// imports ReactTimeAgo library
import ReactTimeAgo from 'react-time-ago';
// imports react bootstrap components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// imports the icons from the material ui library
import { IconButton } from '@mui/material';
import { ThumbUpAltOutlined, Delete } from '@mui/icons-material';
// imports DefaultOnlineProfileImage.jpeg
import DefaultOnlineProfileImage from '../../Assets/person/DefaultOnlineImage.jpeg';


// creates the Post component
export const Post = ({ post }) => {
  // creates the variables from the post object
  const {
    userId,
    username,
    profilePicture,
    timestamp,
    image,
    message,
    comments,
    likes,
    _id,
  } = post;
  // creates a token variable and sets it to the token from the getUser selector
  const { token } = getUser(store.getState());
  // creates the navigate variable and sets it to the useNavigate hook
  const navigate = useNavigate();
  // creates the date variable from timestamp
  const date = timestamp;


  // creates the post state variable and the setPost state function
  const [show, setShow] = useState(false);
  // creates the handleClose function
  const handleClose = () => setShow(false);
  // creates the handleShow function
  const handleShow = () => setShow(true);


  // creates the handleDelete function
  const handleDelete = () => {
    // DELETE post from backend
    fetch('/api/posts/' + _id, {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
            _id,
            userId,
            token,
        }),
    })
    // converts the response to json
    .then((response) => {
        // checks for errors
        if (response.status === 404 || !response.ok) {
            throw new Error('Unable to delete post!');
        }
        // returns the response as JSON
        return response.json();
    })
    .then(() => {
        // dispatches deletePost action
        store.dispatch(deletePost(_id));
        // navigates to the home page
        navigate('/home');
        // closes the modal
        handleClose();
    })
    .catch((error) => {
        // logs the error
        console.log(error);
    });
  };


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
            <IconButton onClick={handleShow}>
              <Delete className="postDeleteButton" />
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
      <Modal show={show} onHide={handleClose} size="sm">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Post Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button className="postOptionsButton" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="postOptionsButton" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Post;
