import React from 'react';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from '../../Assets/logo.svg';
import './AuthForms.scss';

export const AuthForms = ({setAuthenticated}) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="company-icon">
            <Image src={Icon} alt="company icon" roundedCircle />;
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          <div className="d-grid">
            <Button variant="primary" size="sm" className="log-in-btn" onClick={() => setAuthenticated (true)}>
              Log In
            </Button>
          </div>
          <p>Forgot Password?</p>
        </Col>
      </Row>
    </Container>
  );
}

export default AuthForms;
