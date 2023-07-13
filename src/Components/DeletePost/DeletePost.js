// imports React library and the DeletePost.scss file
import React from 'react';
import './DeletePost.scss';
// imports the store
import { store } from '../../App/store';
// imports the getUser selector
import { getUser } from '../../App/Features/User/userSlice';
// imports the deletePost action
import { deletePost } from '../../App/Features/Post/postSlice';
// imports the useState hook
import { useState } from 'react';
// imports the useNavigate hook
import { useNavigate } from 'react-router-dom';
// imports react bootstrap components
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// imports the icons from the material ui library
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';


// returns the DeletePost component
export const DeletePost = ({ postId }) => {
  // creates the navigate variable and sets it to the useNavigate hook
  const navigate = useNavigate();
  // creates the post state variable and the setPost state function
  const [show, setShow] = useState(false);
  // creates a token variable and sets it to the token from the getUser selector
  const { token, userId } = getUser(store.getState());
  
  
  // creates the handleShow function
  const handleShow = () => setShow(true);
  // creates the handleClose function
  const handleClose = () => setShow(false);
  // creates the handleDelete function
  const handleDelete = () => {
    // DELETE post from backend
    fetch('/api/posts/' + postId, {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
            postId,
            userId,
            token,
        }),
    })
    // converts the response to json
    .then((response) => {
        // checks for errors
        if (response.status === 404 || !response.ok) {
            throw new Error('unable to delete post!');
        }
        // returns the response as JSON
        return response.json();
    })
    .then(() => {
        // dispatches deletePost action
        store.dispatch(deletePost(postId));
        // navigates to the home page
        navigate('/home');
        // closes the modal
        handleClose();
    })
    .catch((error) => {
        // logs the error
        console.log(error);
        // closes the modal
        handleClose();
    });
  };


  // returns the DeletePost component
  return (
    <div className='deletePost'>
      <div className='deletePostButton'>
        <IconButton onClick={handleShow}>
          <Delete className='postDeleteButton' />
        </IconButton>
      </div>
      <Modal animation={true} show={show} onHide={handleClose} size='sm'>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Post Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button className='postOptionsButton' onClick={handleClose}>
            Cancel
          </Button>
          <Button className='postOptionsButton' onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default DeletePost;
