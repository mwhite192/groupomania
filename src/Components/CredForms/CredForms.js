import React from 'react';
import Form from 'react-bootstrap/Form';


export const CredForms = () => {
  return (
    <>
      <>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="email"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInputCustom">Email address</label>
        </Form.Floating>
        <Form.Floating>
          <Form.Control
            id="floatingPasswordCustom"
            type="password"
            placeholder="Password"
          />
          <label htmlFor="floatingPasswordCustom">Password</label>
        </Form.Floating>
      </>
      <>
        <p>Forgot Password?</p>
      </>
    </>
  );
}

export default CredForms;
