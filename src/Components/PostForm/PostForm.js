// imports the React library and the PostForm.scss file
import React from 'react';
import './PostForm.scss';
// imports the store
import { store } from '../../App/store';
// imports the getUser selector
import { getUser } from '../../App/Features/User/userSlice';
// imports the createPost action
import { createPost } from '../../App/Features/Post/postSlice';
// imports the useState hook 
import { useState } from 'react';
// imports TimeAgo from react-timeago
import ReactTimeAgo from 'react-time-ago';
// imports the react bootstrap components
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// imports the icons from the material ui library
import { PermMedia } from '@mui/icons-material';
import NoteIcon  from '@mui/icons-material/Note';
import AccessAlarmIcon from '@mui/icons-material/AccessTime';


// creates the PostForm component
export const PostForm = () => {
  // creates a userId variable and sets it to the getUser selector
  const { userId, token } = getUser(store.getState());
  // creates the post state variable and the setPost state function
  const [show, setShow] = useState(false);
  // creates a timestamp variable and sets it to the current date
  const timestamp = new Date();

  // sets the initial state of the form data
  const [file, setFile] = useState('');
  const [message, setMessage] = useState('');
  // creates a form data object and appends the form data to it
  const formData = new FormData();
  formData.append('userId', userId);
  formData.append('file', file);
  formData.append('message', message);
  formData.append('timestamp', timestamp);

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
        body: formData,
      })
      /// convert response to JSON
    .then((response) => response.json())
    .then((data) => {
      store.dispatch(createPost(data));
      // closes the modal
      handleClose();
      // logs the data
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
        <button className="postFormShareButton" onClick={handleShow}>
          Launch Share
        </button>
      </div>
      <Modal animation={true} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share Your Thoughts!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>
                <PermMedia className="postShareIcon" style={{ fill: "##FCFFE7" }} />
                Photo/Video
              </Form.Label>
              <Form.Control
                type="file"
                id="file"
                className="postShareOption"
                accept=".png,.jpeg,.jpg"
                autoFocus
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <NoteIcon className="postShareIcon" style={{ fill: "#FCFFE7" }} />
                Post it!
              </Form.Label>
              <Form.Control
                as="textarea"
                id="message"
                rows={3}
                maxLength={500}
                className="postOption"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <span className="postFormShareTime">
              <AccessAlarmIcon
                className="postFormShareTimeIcon"
                style={{ fill: "#FCFFE7" }}
              />
              <ReactTimeAgo
                id='timestamp'
                className="postFormShareTimeDate"
                date={timestamp}
                locale="en-US"
              />
            </span>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='postSubmitButton' onClick={handleSubmit}>
            Submit
          </button>
          <button className='postCloseButton' onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostForm;