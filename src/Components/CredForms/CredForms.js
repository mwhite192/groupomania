import React from 'react';
import Form from 'react-bootstrap/Form';
import '../CredForms/CredForms.css';


export const CredForms = () => {
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
    </>
  );
}

export default CredForms;
