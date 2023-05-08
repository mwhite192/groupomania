import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import FooterLogo from '../../Assets/icon-left-font-monochrome-white.png';

export const AppFooter = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={FooterLogo} alt='company logo' roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}

export default AppFooter
