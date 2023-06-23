// imports the React library and the PostForm.scss file
import React from 'react';
import './PostForm.scss';
// imports the store
import { store } from '../../App/store';
// imports the getUser selector
import { getUser } from '../../App/Features/User/userSlice';
// imports the useState hook 
import { useState } from 'react';
// imports the react bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// imports the icons from the material ui library
import { PermMedia } from '@mui/icons-material';
import NoteIcon from '@mui/icons-material/Note';


// creates the PostForm component
export const PostForm = () => {
  // creates a userId variable and sets it to the getUser selector
  const { userId, token } = getUser(store.getState());
  // creates the post state variable and the setPost state function
  const [show, setShow] = useState(false);

  // sets the initial state of the form data
  const [postFormImg, setPostFormImg] = useState('');
  const [postFormMessage, setPostFormMessage] = useState('');
  // creates a form data object and appends the form data to it
  const post = new FormData();
  post.append('userId', userId);
  post.append('postFormImg', postFormImg);
  post.append('postFormMessage', postFormMessage);

  // creates the handleClose function
  const handleClose = () => setShow(false);
  // creates the handleShow function
  const handleShow = () => setShow(true);
  // creates the handleSubmit function
    const handleSubmit = (e) => {
      // prevents the default form submission
      e.preventDefault();
      // POST form data to backend
      fetch('/api/posts/create', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        body: post,
      })
      /// convert response to JSON
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    // catches errors
    .catch((error) => {
      console.error(error);
    });
  };

  // returns the PostForm component
  return (
    <div className="postForm">
      <div className="postFormButton">
        <button className='postFormShareButton' onClick={handleShow}>
          Launch Share
        </button>
      </div>
      <Modal animation={true} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share Your Thoughts!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="postFormImg">
              <Form.Label>
                <PermMedia className="postIcon" style={{ fill: "#d2042d" }} />
                Photo/Video
              </Form.Label>
              <Form.Control 
              type="file" 
              className='postOption' 
              accept=".png,.jpeg,.jpg" 
              autoFocus
              onChange={(e) => setPostFormImg(e.target.files[0])} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="postFormMessage">
              <Form.Label>
                <NoteIcon className="postIcon" style={{ fill: "#fcffe7" }} />
                Post it!
              </Form.Label>
              <Form.Control 
              as="textarea" 
              rows={3}
              maxLength={500} 
              className='postOption'
              value={postFormMessage} 
              onChange={(e) => setPostFormMessage(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='postCloseButton' onClick={handleClose}>
            Close
          </button>
          <Button variant='primary' onClick={handleSubmit}>
            Submit 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostForm;