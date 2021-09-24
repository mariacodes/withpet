import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Container, Navbar } from 'react-bootstrap';

const headerStyle = {
  textAlign: 'center', // text-align: 'center';
  top: 0,
  left: 0,
  position: 'relative',
  fontFamily: 'Rubik',
  fixed: 'top',
  backgroundColor: '#F7F6F2',
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
  width: '13%',
  height: '13%',
  padding: '0 10px 0 10px',
  filter: 'sepia(40%)',
};

function Header() {
  return (
    <div style={headerStyle}>
      <container>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/" style={navbarbrand}>
            <img src="/paw.png" style={imageIcon}></img>
            With Pets
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
      </container>
    </div>
  );
}
export default Header;
