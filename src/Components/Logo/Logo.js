import React from 'react'
import Icon from '../../Assets/Logo.svg'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import '../Logo/Logo.css';

export const Logo = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={Icon} alt='company logo' roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}

export default Logo;
