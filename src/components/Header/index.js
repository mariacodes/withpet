import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  textAlign: 'center', // text-align: 'center';
  top: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'row', // flex-direction: 'row';
  justifyContent: 'space-evenly',
};

function Header() {
  return (
    <div style={headerStyle}>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/destinations">
        <h1>Destinations</h1>
      </Link>
      <Link to="/stays">
        <h1>Stays</h1>
      </Link>
    </div>
  );
}
export default Header;
