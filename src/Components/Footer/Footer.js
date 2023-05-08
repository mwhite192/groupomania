import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterLogo from '../../Assets/icon-left-font-monochrome-white.svg';
import '../Footer/Footer.css';

export const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="d-grid">
            <Button variant="secondary" size="sm" className="create-account-btn">
              Create Account
            </Button>
          </div>
          <div>
            <Image src={FooterLogo} className='company-logo' alt='company logo with company name' fluid />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
