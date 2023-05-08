import React from 'react';
import '../Footer/Footer.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import FooterLogo from '../../Assets/icon-left-font-monochrome-white.png';

export const Footer = () => {
  return (
    <Container>
      <div className="d-grid">
        <Button variant="primary" size="sm" className="create-account-btn">
          Create Account
        </Button>
      </div>
      <Row>
        <Col xs={6} md={4}>
          <Image src={FooterLogo} alt="company logo" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
