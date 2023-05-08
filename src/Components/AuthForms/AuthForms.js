import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import './AuthForms.css';


export const AuthForms = () => {
  return (
    <>
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      </>
      <>
        <p>Forgot Password?</p>
      </>
      <div className="d-grid">
        <Button variant="primary" size="sm" className="log-in-btn">
          Log In
        </Button>
      </div>
    </>
  );
}

export default AuthForms;
