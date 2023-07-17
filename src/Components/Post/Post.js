// imports the React library and the Post.scss file
import React from 'react';
import './Post.scss';
// imports the store
import { store } from '../../App/store';
// imports the getUser selector
import { getUser } from '../../App/Features/User/userSlice';
// imports the createComment action
import { createComment, getCommentsByPostId, updateComment, deleteComment } from '../../App/Features/Comments/commentSlice';
// imports updatePost action
import { updatePost } from '../../App/Features/Post/postSlice';
// imports ReactTimeAgo library
import ReactTimeAgo from 'react-time-ago';
// imports useNavigate hook
import { useNavigate } from 'react-router-dom';
// imports the useState hook
import { useState } from 'react';
// imports the DeletePost and UpdateComment component
import DeletePost from '../DeletePost/DeletePost';
import UpdateComment from '../UpdateComment/UpdateComment';
// imports the UpdatePostForm component
import UpdatePostForm from '../UpdatePostForm/UpdatePostForm';
// imports the ThumbUpAltOutlined icon from the material ui library
import { ThumbUpAltOutlined, ThumbUpAlt, SendOutlined, DeleteOutline } from '@mui/icons-material';
// imports default profile image
import DefaultOnlineProfileImage from '../../Assets/Person/DefaultOnlineImage.jpeg';


// creates the Post component
export const Post = ({ post }) => {
  // creates the variables from the post object
  const {
    id,
    userName,
    postProfileImg,
    timestamp,
    postPicture,
    postContent,
    usersLiked,
  } = post;
  // creates the date variable from timestamp
  const date = timestamp;
  // creates the navigate variable and sets it to the useNavigate hook
  const navigate = useNavigate();
  // creates the userId variable and sets it to the getUser selector
  const { userId, name, formFile, token, timestamp: time } = getUser(store.getState());
  // creates the postsComments variable and sets it to the getCommentsByPostId selector
  const postsComments = getCommentsByPostId(store.getState(), id);
  // creates the postClass variable and sets it to the useState hook
  const [postClass, setPostClass] = useState(time < Date.parse(post.timestamp) ? 'newPost' : '');
  // creates the like variable and sets it to the useState hook
  const [like, setLike] = useState((usersLiked || []).length);
  // creates the liked variable and sets it to the useState hook
  const [liked, setLiked] = useState(false);
  // creates the commentLikes variable and sets it to the useState hook
  const [commentLikes, setCommentLikes] = useState(0);
  // creates the commentLiked variable and sets it to the useState hook
  const [commentLiked, setCommentLiked] = useState(false);
  // creates the commentText variable and sets it to the useState hook
  const [commentText, setCommentText] = useState('');
  // creates the visibleComments variable and sets it to the useState hook
  const [visibleComments, setVisibleComments] = useState(2);
  

  // sets the initial state of the comment object
  const comment = {
    postId: id,
    userId: userId,
    commentText: commentText,
    commentDate: new Date().toISOString(),
  };
  
  
  // creates the handleLike function
  const handleLike = () => {
    // creates the like object
    const like = {
      // sets the userId to the userId variable
      userId: userId,
    };
    // sends a post request to the server
    fetch(`/api/posts/${id}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         Authorization: 'Bearer ' + token,
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
        if (data.message === 'post un-liked successfully!') {
          // Display the message to the user
          alert(data.message); 
          // Update the like state only if the user didn't like the post before
          setLiked(false);
          // Update the like state only if the user didn't like the post before
          setLike(data.usersLiked.length);
          // Dispatch the Redux action to update the like count in the store
          store.dispatch(updatePost({ postId: id, usersLiked: data.usersLiked }));
        } else {
          // Update the like state only if the user didn't like the post before
          setLike(data.usersLiked.length);
          // Update the liked state only if the user didn't like the post before
          setLiked(true);
          // Dispatch the Redux action to update the like count in the store
          store.dispatch(updatePost({ postId: id, usersLiked: data.usersLiked }));
          // Navigate to the home page
          navigate('/home');
        }
      })
      .catch((error) => {
        // logs the error
        console.log(error);
      });
  };


  // creates the handleCommentLikes function
  const handleCommentLikes = (commentId) => {
    // creates the like object
    const like = {
      // sets the userId to the userId variable
      userId: userId,
    };
    // sends a post request to the server
    fetch(`/api/posts/${id}/comments/${commentId}/likes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      // converts the like object to a json string
      body: JSON.stringify(like),
    })
      .then((response) => {
        // returns response body as JSON
        return response.json();
      })
      .then((data) => {
        // Check the response to see if the user already liked the post
        if (data.message === "comment un-liked successfully!") {
          // Display the message to the user
          alert(data.message);
          // Update the like state only if the user didn't like the post before
          setCommentLiked(false);
          // Update the like state only if the user didn't like the post before
          setCommentLikes(data.userLiked.length);
          //m Dispatch the Redux action to update the like count in the store
          store.dispatch(updateComment({ commentId: commentId, usersLiked: data.userLiked }));
          // Dispatch the Redux action to update the like count in the store
          store.dispatch(updateComment({ commentId: commentId, likes: data.likes }));
        } else {
          // Update the like state only if the user didn't like the post before
          setCommentLiked(true);
          // Update the like state only if the user didn't like the post before
          setCommentLikes(data.userLiked.length);
          // Dispatch the Redux action to update the like count in the store
          store.dispatch(updateComment({ commentId: commentId, likes: data.likes }));
          // Navigate to the home page
          navigate("/home");
        } 
      })
      .catch((error) => {
        // logs the error
        console.log(error);
      });
  };


  // creates the handleDelete function
  const handleDelete = (commentId) => {
    // sends a delete request to the server
    fetch(`/api/posts/${id}/comments/` + commentId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
         Authorization: 'Bearer ' + token,
      },
    })
      .then((response) => {
        // checks for errors
        if (response.status === 401 || !response.ok) {
          throw new Error('unable to delete comment!');
        }
        // returns response body as JSON
        return response.json();
      })
      .then(() => {
        // dispatches the deleteComment action
        store.dispatch(deleteComment(commentId));
        // navigates to the home page
        navigate('/home');
      })
      .catch((error) => {
        // logs the error
        console.log(error);
      });
  };


  // creates the handleSubmit function
  function handleSubmit(e) {
    // prevents the default behavior
    e.preventDefault();
    // sends a post request to the server
    fetch(`/api/posts/${id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
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
        store.dispatch(updatePost({ postId: id, comments: data._id }));
        // resets the commentText state variable
        setCommentText('');
        // navigates to the home page
        navigate('/home');
      })
      .catch((error) => {
        // logs the error
        console.log(error);
      });
  }


  // returns the Post component
  // sets the timeout to 5 seconds for the newPost class
  setTimeout(() => {setPostClass('')}, 5000);
  return (
    <div className={`post ${postClass}`}>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={postProfileImg ? postProfileImg : DefaultOnlineProfileImage}
              alt="user profile"
            />
            <span className="postUsername">{userName}</span>
            <div className="postTime">
              <ReactTimeAgo
                date={Date.parse(date)}
                className="postDate"
                locale="en-US"
              />
            </div>
          </div>
          <div className="postTopRight">
            {post.userId === userId ? (
              <>
                <div className="postDelete">
                  <DeletePost postId={id} />
                  <span className="postTopDeleteText">Delete</span>
                </div>
                <div className="postEdit">
                  <UpdatePostForm postId={id} />
                  <span className="postTopDeleteText">Edit</span>
                </div>
              </>
            ) : null}
          </div>
        </div>
        <div className="postCenter">
          <div
            className="postCenterImg"
            style={postPicture ? {} : { display: "none" }}
          >
            <img src={postPicture} alt="post" className="postImg" />
          </div>
        </div>
        <div className="postContent">
          <span className="postName">{userName}</span>
          <span className="postText">{postContent}</span>
          <span className="postCommentText">
            {postsComments.length} &#x2022;{" "}
            {postsComments.length === 1 ? "comment" : "comments"}
          </span>
          <div className="commentLoad">
            {postsComments.length > visibleComments && (
              // If there are more comments than the visibleComments state variable, display the load more button
              <button
                className="commentLoadButton"
                onClick={() => setVisibleComments(visibleComments + 3)}
              >
                View all {postsComments.length} comments
              </button>
            )}
          </div>
          {postsComments.slice(0, visibleComments).map((comment) => (
            <div key={comment._id} className="comment">
              <div className="commentUserInfo">
                <img
                  className="commentImg"
                  src={
                    comment.profilePicture
                      ? comment.profilePicture
                      : DefaultOnlineProfileImage
                  }
                  alt="user profile"
                />
                <span className="commentUsername">{comment.username}</span>
                <ReactTimeAgo
                  className="commentDate"
                  date={Date.parse(comment.commentDate)}
                  locale="en-US"
                />
              </div>
              <div className="commentText">{comment.commentText}</div>
              <div className="commentFooter">
                <button
                  className="commentFooterItem"
                  onClick={() => handleCommentLikes(comment._id)}
                >
                  {commentLiked ? (
                    <ThumbUpAlt className="commentFooterIcon" />
                  ) : (
                    <ThumbUpAltOutlined className="commentFooterIcon" />
                  )}
                </button>
                {post.userId === userId ? (
                  <>
                    <button
                      className="commentFooterItem"
                      onClick={() => handleDelete(comment._id)}
                    >
                      <DeleteOutline className="commentFooterIcon" />
                    </button>
                    <span className="commentFooterItem">
                      <UpdateComment
                        className="commentFooterIcon"
                        postId={id}
                        commentId={comment._id}
                      />
                    </span>
                  </>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div className="postFooter">
          <button className="postFooterBottomItem" onClick={handleLike}>
            {liked ? (
              <ThumbUpAlt className="postFooterIcon" />
            ) : (
              <ThumbUpAltOutlined className="postFooterIcon" />
            )}
          </button>
          <span className="postLikeCounter">{like} &#x2022; likes</span>
        </div>
        <div className="postComment">
          <img
            className="postCommentImg"
            src={DefaultOnlineProfileImage}
            alt="user profile"
          />
          <form className="postAddCommentForm">
            <input
              type="text"
              name="comment"
              className="postAddComment"
              maxLength={500}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment....."
            />
            <button
              className="postAddCommentSubmitButton"
              onClick={handleSubmit}
            >
              <SendOutlined className="postAddCommentSubmitIcon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Post;
