import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Container, Navbar, Row, Col } from 'react-bootstrap';

const footerStyle = {
  textAlign: 'center',
  position: 'absolute',
  bottom: 0,
  width: '100%',
};

const navbarbrand = {
  paddingLeft: '8%',
  textAlign: 'left',
  fontFamily: 'Patrick Hand',
  color: 'grey',
  fontSize: '55px',
  margin: '0px',
};

const rightStyle = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
};

const imageIcon = {
  width: '10',
  height: '10',
  resizeMode: 'contain',
};

function Footer() {
  return (
    <div style={footerStyle}>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <h3>About</h3>
            <p class="text-justify">
              Don't travel alone if you don't have to. Share your experiences
              with your furry friends and love every minute of it together.
            </p>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col md={8} sm={6} xs={12}>
            <p class="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <a href="#">Withpets</a>.
            </p>
          </Col>
        </Row>
        <Row style={rightStyle}>
          <img src="footer_assets/facebook_icon.png" style={imageIcon}></img>
          <img src="footer_assets/twitter_icon.png" style={imageIcon}></img>
          <img src="footer_assets/instagram_icon.png" style={imageIcon}></img>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
