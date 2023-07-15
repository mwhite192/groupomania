  // imports react from react library and the UpdateComment.css file
  import React from 'react';
  import './UpdateComment.scss';
  // imports the store
  import { store } from '../../App/store';
  // imports the getUser selector
  import { getUser } from '../../App/Features/User/userSlice';
  // imports updateComment action
  import { updateComment, getCommentById } from '../../App/Features/Comments/commentSlice';
  // imports useState from react library
  import { useState } from 'react';
  // imports the navigate function from the react-router-dom library
  import { useNavigate } from 'react-router-dom';
  // imports react-bootstrap components
  import Modal from 'react-bootstrap/Modal';
  // imports the icons from the material ui library
  import { IconButton } from '@mui/material';
  import { Edit } from '@mui/icons-material';


  // creates the UpdateComment component
  export const UpdateComment = ({ postId, commentId }) => {
    // creates the navigate function
    const navigate = useNavigate();
    // creates the token variable and sets it to the token in local storage
    const { token, username, formFile } = getUser(store.getState());
    // creates the show state variable and the setShow state function
    const [show, setShow] = useState(false);
    // creates the commentText state variable and the setCommentText state function
    const [commentText, setCommentText] = useState('');

    
    // creates the handleClose function
    const handleClose = () => setShow(false);
    // creates the handleShow function
    const handleShow = () => { 
      // sets the show state variable to true
      setShow(true);
      // gets the comment to update from the store
      const commentToUpdate = getCommentById(store.getState(), commentId);
      // sets the commentText state variable to the comment text
      if (commentToUpdate) {
        setCommentText(commentToUpdate.commentText);
      }
    };

    
    // creates the handleUpdate function
    const handleUpdate = () => {
      // gets the comment to update from the store
      const commentToUpdate = getCommentById(store.getState(), commentId);
      // creates the comment object
      const comment = {
        postId: postId,
        userId: commentToUpdate.userId,
        username: username,
        profilePicture: formFile,
        commentText: commentText,
        commentDate: new Date().toISOString(),
        likes: 0,
        usersLiked: [],
      };
      // sends a put request to the server
      fetch(`/api/posts/${postId}/comments/${commentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
           Authorization: 'Bearer ' + token,
        },
        // converts the comment object to a json string
        body: JSON.stringify(comment),
      })
        .then((response) => {
          // checks if the response is unauthorized and throws an error if it is
          if (response.status === 403) {
            throw new Error('unauthorized');
          }
          // returns the response
          return response.json();
        })
        .then((data) => {
          // dispatches the updateComment action
          store.dispatch(updateComment({ _id: commentId, commentText: commentText }));
          // navigates to the home page
          navigate('/home');
          // handles closing the modal
          handleClose();
        })
        .catch((error) => {
          // logs the error
          console.log(error);
        });
    };


    return (
      <div className='updateComment'>
        <div className='updateCommentButton'>
          <IconButton onClick={handleShow}>
            <Edit className='commentFooterIcon' />
          </IconButton>
        </div>
        <Modal animation={true} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Want to Update this Comment?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className='postAddCommentForm'>
              <input
                type='text'
                name='comment'
                className='postAddComment'
                rows={3}
                maxLength={500}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder='Add a comment.....'
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button className='updateCommentCloseButton' onClick={handleClose}>
              Close
            </button>
            <button className='updateCommentSubmitButton' onClick={() => handleUpdate(commentId)}>
              Update
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };
  

  export default UpdateComment;