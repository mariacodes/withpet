import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Container, Navbar, Row, Col } from 'react-bootstrap';
import { clearConfigCache } from 'prettier';

const footerStyle = {
  textAlign: 'center',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  bottom: 0,
  width: '100%',
};

const leftStyle = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-start',
};

const rightStyle = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
};

const imageIcon = {
  alignItems: 'right',
  width: '10%',
  height: '65%',
  resizeMode: 'contain',
};

function Footer() {
  return (
    <div style={footerStyle}>
      <Container>
        <Row>
          <Col>
            <h3>About</h3>
            <p>
              Don't travel alone if you don't have to. Share your experiences
              with your furry friends and love every minute of it together.
            </p>
          </Col>
          <Col>
            <h3>Quick Links</h3>
            <Row>
              <a href="/home">About Us</a>
            </Row>
            <Row>
              <a href="#">Contact Us</a>
            </Row>
            <Row>
              <a href="#">Share Your Photos</a>
            </Row>
            <Row>
              <a href="#">Privacy Policy</a>
            </Row>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col style={leftStyle}>
            <p>
              Copyright &copy; 2021 All Rights Reserved by
              <a href="/home">Withpets</a>.
            </p>
          </Col>
          <Col style={rightStyle}>
            <a href="https://www.facebook.com">
              <img
                src="footer_assets/facebook_icon.png"
                style={imageIcon}
              ></img>
            </a>
            <a href="https://www.twitter.com">
              <img src="footer_assets/twitter_icon.png" style={imageIcon}></img>
            </a>
            <a href="https://www.instagram.com">
              <img
                src="footer_assets/instagram_icon.png"
                style={imageIcon}
              ></img>
            </a>
            <p></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
