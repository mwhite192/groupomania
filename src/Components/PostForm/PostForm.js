// imports the React library and the PostForm.scss file
import React from 'react';
import './PostForm.scss';
// imports the store
import { store } from '../../App/store';
// imports getUser selector
import { getUser } from '../../App/Features/User/userSlice';
// imports the useState hook 
import { useState } from 'react';
// imports the react bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// imports the icons from the material ui library
import { PermMedia } from '@mui/icons-material';
import { EmojiEmotions } from '@mui/icons-material';
import NoteIcon from '@mui/icons-material/Note';
// imports emojiData 
import { Emoji } from '../../Emojis';

// creates the PostForm component
export const PostForm = () => {
  // gets the user from the store
    const { name } = getUser(store.getState());
  // creates the post state variable and the setPost state function
  const [show, setShow] = useState(false);

  // creates the handleClose function
  const handleClose = () => setShow(false);
  // creates the handleShow function
  const handleShow = () => setShow(true);
  // creates the handleSubmit function
    const handleSubmit = () => {};
  // returns the PostForm component
  return (
    <div className="postForm">
      <div className="postFormButton">
        <Button variant="primary" onClick={handleShow}>
          ?
        </Button>
      </div>
      <Modal animation={true} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share Your Thoughts!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="postFormImg">
              <Form.Label>
                <PermMedia className="postIcon" style={{ fill: "#d2042d" }} />
                Photo/Video
              </Form.Label>
              <Form.Control type="file" className='postOption' accept=".png,.jpeg,.jpg" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="postFormTextarea">
              <Form.Label>
                <NoteIcon className="postIcon" style={{ fill: "#fcffe7" }} />
                Post it!
              </Form.Label>
              <Form.Control as="textarea" className='postOption' rows={3} maxLength={500} />
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