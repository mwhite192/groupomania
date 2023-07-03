// imports the React library and the Post.scss file
import React from 'react';
import './Post.scss';
// imports the store
import { store } from '../../App/store';
// imports the getUser selector
import { getUser } from '../../App/Features/User/userSlice';
// imports the createComment action
import { createComment, getCommentsByPostId } from '../../App/Features/Comments/commentSlice';
// imports updatePost action
import { updatePost } from '../../App/Features/Post/postSlice';
// imports ReactTimeAgo library
import ReactTimeAgo from 'react-time-ago';
// imports the DeletePost component
import DeletePost from '../DeletePost/DeletePost';
// imports useNavigate hook
import { useNavigate } from 'react-router-dom';
// imports the useState hook
import { useState } from 'react';
// imports the UpdatePostForm component
import UpdatePostForm from '../UpdatePostForm/UpdatePostForm';
// imports the ThumbUpAltOutlined icon from the material ui library
import { ThumbUpAltOutlined } from '@mui/icons-material';
// imports DefaultOnlineProfileImage.jpeg
import DefaultOnlineProfileImage from '../../Assets/person/DefaultOnlineImage.jpeg';
import e from 'cors';


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
  // creates the userId variable and sets it to the getUser selector
  const [like, setLike] = useState(likes);
  // creates the commentText variable and sets it to the useState hook
  const [commentText, setCommentText] = useState('');
  // creates the userId variable and sets it to the getUser selector
  const { userId } = getUser(store.getState());
  // creates the postsComments variable and sets it to the getCommentsByPostId selector
  const postsComments = getCommentsByPostId(store.getState(), _id);
  // creates the navigate variable and sets it to the useNavigate hook
  const navigate = useNavigate();


  // sets the initial state of the comment object
  const comment = {};
  // sets the postId property of the comment object to the _id variable
  comment.postId = _id;
  // sets the userId property of the comment object to the userId variable  
  comment.userId = userId;
  // sets the username property of the comment object to the username variable
  comment.username = username;
  // sets the profilePicture property of the comment object to the profilePicture variable
  comment.profilePicture = profilePicture;
  // sets the commentDate property of the comment object to the date variable
  comment.commentDate = date;
  // sets the commentText property of the comment object to the commentText variable
  comment.commentText = commentText;
  

  // creates the handleLikeClick function
  const handleLikeClick = () => {
    // creates the like object
    const like = {
      // sets the userId to the userId variable
      userId: userId,
    };
    // sends a post request to the server
    fetch(`/api/posts/${_id}/likes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // converts the like object to a json string
      body: JSON.stringify(like),
    })
      .then((response) => {
        // returns the response
        return response.json();
      })
      .then((data) => {
        // Check the response to see if the user already liked the post
        if (data.message === "You already liked this post!") {
          alert(data.message); // Display the message to the user
        } else {
          // Update the like state only if the user didn't like the post before
          setLike(data.likes);
          // Dispatch the Redux action to update the like count in the store
          store.dispatch(updatePost({ postId: _id, likes: data.likes }));
          // Navigate to the home page
          navigate("/home");
        }
      })
      .catch((error) => {
        // logs the error
        console.log(error);
      });
  };

  // creates the handleComment function
  const handleSubmit = (e) => {
    // prevents the default behavior
    e.preventDefault();
    // sends a post request to the server
    fetch(`/api/posts/${_id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // converts the comment object to a json string
      body: JSON.stringify(comment),
    })
      .then((response) => {
        // returns the response
        return response.json();
      })
      .then((data) => {
        // dispatches the createComment action
        store.dispatch(createComment(data));
        // dispatches the updatePost action
        store.dispatch(updatePost({ postId: _id, comments: data._id }));
        // resets the commentText state variable
        setCommentText("");
        // logs the data
        console.log(data);
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
          <div
            className="postCenterImg"
            style={image ? {} : { display: "none" }}
          >
            <img src={image} alt="post" className="postImg" />
          </div>
        </div>
        <div className="postContent">
          <span className="postName">{username}</span>
          <span className="postText">{message}</span>
          <span className="postCommentText">{comments} &#x2022; comments</span>
          {/* {postsComments.map((comment) => (
            <div key={comment._id} className="postComment">
              <img
                className="postCommentImg"
                src={
                  comment.profilePicture
                    ? comment.profilePicture
                    : DefaultOnlineProfileImage
                }
                alt="user profile"
              />
              <span className="postCommentUsername">{comment.username}</span>
              <span className="postCommentDate">{comment.commentDate}</span>
              <span className="postCommentText">{comment.commentText}</span>
            </div>
          ))} */}
        </div>
        <div className="postFooter">
          <button className="postFooterBottomItem" onClick={handleLikeClick}>
            <ThumbUpAltOutlined className="postFooterIcon" />
          </button>
          <span className="postLikeCounter">{like} &#x2022; likes</span>
        </div>
        <div className="postComment">
          <img
            className="postCommentImg"
            src={profilePicture ? profilePicture : DefaultOnlineProfileImage}
            alt="user profile"
          />
          <form className="postAddCommentForm">
            <input
              type="text"
              name="comment"
              className="postAddComment"
              maxLength={500}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment....."
            />
            <button className='commentSubmitButton' onClick={handleSubmit}>
            Post It
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
