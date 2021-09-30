import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Container, Navbar, Row, Col } from 'react-bootstrap';
import paw from 'assets/images/paw.png';
const headerStyle = {
  textAlign: 'center', // text-align: 'center';
  top: '-140px',
  // opacity:0,
  width: '100%',
  position: 'fixed',
  fontFamily: 'Rubik',
  fixed: 'top',
  backgroundColor: '#F7F6F2',
  transition: 'top 1s',
};

const navbarbrand = {
  paddingLeft: '8%',
  textAlign: 'left',
  fontFamily: 'Patrick Hand',
  color: 'grey',
  fontSize: '55px',
  margin: '0px',
};

const leftStyle = {
  paddingRight: '60px',
};

const imageIcon = {
  position: 'right',
  width: '15%',
  //padding: '0 10px 0 10px',
  filter: 'sepia(40%)',
};

function Header() {
  function scrollFunction() {
    console.log('this is executing');
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById('navbar').style.top = '0';
    } else {
      document.getElementById('navbar').style.top = '-140px';
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => scrollFunction());
  });

  return (
    <div id="navbar" style={headerStyle}>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/" style={navbarbrand}>
          <Row xs={12} sm={12} md={10} lg={8}>
            <Col xs={12} sm={12} md={10} lg={10}>
              <img src={paw} style={imageIcon}></img>
              With Pets
            </Col>
          </Row>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/destinations" style={leftStyle}>
            Destinations
          </Nav.Link>
          <Nav.Link href="/stays" style={leftStyle}>
            Stays
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
export default Header;
