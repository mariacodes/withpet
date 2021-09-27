import { Col, Row } from 'react-bootstrap';

const heroStyle = {
  textAlign: 'left',
  position: 'relative',
  width: '100%',
};

const coverImg = {
  width: '100%',
  height: '100%',
  // opacity:'0.5'
};

function Hero() {
  return (
    <div style={heroStyle}>
      <container>
        <Row>
          <Col>
            <img src="images/dogMountain.jpg" style={coverImg}></img>
          </Col>
        </Row>
        <Row>
          <p>Hero</p>
        </Row>
      </container>
    </div>
  );
}

export default Hero;
