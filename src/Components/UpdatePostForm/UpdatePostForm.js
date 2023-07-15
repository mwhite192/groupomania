// imports the React library and the PostForm.scss file
import React from 'react';
import './UpdatePostForm.scss';
// imports the store
import { store } from '../../App/store';
// imports the getUser selector
import { getUser } from '../../App/Features/User/userSlice';
//
import { getPostById } from '../../App/Features/Post/postSlice';
// imports the createPost action
import { updatePost } from '../../App/Features/Post/postSlice';
// imports the useState hook 
import { useState } from 'react';
// imports useNavigate hook
import { useNavigate } from 'react-router-dom';
// import react bootstrap components
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// imports the icons from the material ui library
import { IconButton } from '@mui/material';
import { PermMedia, Note, Edit } from '@mui/icons-material';


// creates the PostForm component
export const UpdatePostForm = ({ postId }) => {
  // creates the navigate variable and sets it to the useNavigate hook
  const navigate = useNavigate();
  // creates a variable and sets it to the getUser selector
  const { userId, name, formFile, token } = getUser(store.getState());
  //
  const postToUpdate = getPostById(store.getState(), postId);
  // creates the post state variable and the setPost state function
  const [show, setShow] = useState(false);
  // creates the timestamp variable and sets it to the current time
  const timestamp = new Date();


  // sets the initial state of the form data
  const [file, setFile] = useState('');
  const [message, setMessage] = useState('');
  

  // creates the handleClose function
  const handleClose = () => setShow(false);
  // creates the handleShow function
  const handleShow = () => setShow(true);
  
  
  // creates the handleSubmit function
  const handleSubmit = (e) => {
    // prevents the default form submission
    e.preventDefault();
    // creates a form data object and appends the form data to it
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('token', token);
    formData.append('file', file);
    formData.append('message', message);
    formData.append('timestamp', timestamp);
    formData.append('username', name);
    formData.append('profilePicture', formFile);
    // POST form data to backend
    fetch('/api/posts/' + postId, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    })
      // convert response to JSON
      .then((response) => response.json())
      .then((data) => {
        // dispatches the UPDATEPOST action
        store.dispatch(updatePost({ postId: postId, ...data }));
        // Reset form fields
        setFile('');
        setMessage('');
        // navigates to the home page
        navigate('/home');
        // closes the modal
        handleClose();
      })
      // catches errors
      .catch((error) => {
        console.error(error);
      });
  };


  // returns the PostForm component
  return (
    <div className='updatePostForm'>
      <div className='updatePostFormButton'>
        <IconButton onClick={handleShow}>
          <Edit className='postEditButton' />
        </IconButton>
      </div>
      <Modal animation={true} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Your Mind?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>
                <PermMedia
                  className='updatePostFormShareIcon'
                  style={{ fill: '##FCFFE7' }}
                />
                Photo/Video
              </Form.Label>
              <Form.Control
                type='file'
                id='file'
                className='updatePostFormShareOption'
                accept='.png,.jpeg,.jpg,.gif,.mp4'
                autoFocus
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>
                <Note
                  className='updatePostFormShareIcon'
                  style={{ fill: '#FCFFE7' }}
                />
                Post it!
              </Form.Label>
              <Form.Control
                as='input'
                type='text'
                name='message' 
                className='updatePostFormOption'
                rows={3}
                maxLength={500}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                //placeholder={postToUpdate.message}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='updatePostFormCloseButton' onClick={handleClose}>
            Close
          </button>
          <button className='updatePostFormSubmitButton' onClick={handleSubmit}>
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};


export default UpdatePostForm;