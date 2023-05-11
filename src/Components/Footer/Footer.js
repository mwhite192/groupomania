import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterLogo from '../../Assets/icon-left-font-monochrome-white.svg';
import '../Footer/Footer.scss';

export const Footer = () => {
  return (
      <Row>
        <Col>
          <footer className="d-grid">
            <Button variant="secondary" size="sm" className="create-account-btn">
              Create Account
            </Button>
            <Image src={FooterLogo} className='company-logo' alt='company logo with company name' fluid />
          </footer>
        </Col>
      </Row>
  );
}

export default Footer;
