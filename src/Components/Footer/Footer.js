import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterLogo from '../../Assets/icon-left-font-monochrome-white.svg';
// import '../Footer/Footer.scss';

export const Footer = () => {
  return (
      <Row>
        <Col>
          <footer>
            <Image src={FooterLogo} alt='company logo and name' fluid />
          </footer>
        </Col>
      </Row>
  );
}

export default Footer;


// className='company-logo'
// className="d-grid"