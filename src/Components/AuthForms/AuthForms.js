import React from 'react';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from '../../Assets/logo.svg';
import './AuthForms.scss';

export const AuthForms = ({setAuthenticated}, {setUser}) => {
  return (
    <Container>
      <Row xs={2} md={4} lg={6}>
        <Col>
          <div className='company-icon'>
            <Image src={Icon} alt='company icon' roundedCircle />
          </div>
        </Col>
      </Row>
      <Row xs={1} md={2}>
        <Col>
          <Form>
            <Form.Group className='mb-3' controlId='formGroupEmail'>
              <Form.Control type='email' placeholder='Email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupPassword'>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
          </Form>
          <div className='d-grid'>
            <Button variant='light' onClick={() => setAuthenticated(true)}>
              Log In
            </Button>
          </div>
        </Col>
        <Col>
          <p> Forgot Password? </p>
        </Col>
      </Row>
      <Row xs='auto'>
        <Col>
          <Button variant='secondary' onClick = {() => setUser(true)}>
            Create Account
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AuthForms;


// <Container fluid='sm'>
//       <Row>
//         <Col>
//           <div className='company-icon'>
//             <Image src={Icon} alt='company icon' roundedCircle />
//           </div>
//           <Form>
//             <Form.Group className='mb-3' controlId='formGroupEmail'>
//               <Form.Control type='email' placeholder='Email' />
//             </Form.Group>
//             <Form.Group className='mb-3' controlId='formGroupPassword'>
//               <Form.Control type='password' placeholder='Password' />
//             </Form.Group>
//           </Form>
//           <div className='d-grid'>
//             <Button variant='light' size='sm' className='log-in-btn' onClick={() => setAuthenticated(true)}>
//               Log In
//             </Button>
//           </div>
//           <p> Forgot Password? </p>
//           <Button variant='secondary' size='sm' className='create-account-btn'>
//             Create Account
//           </Button>
//         </Col>
//       </Row>
//     </Container>