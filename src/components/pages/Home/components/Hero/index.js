import { Col, Row } from 'react-bootstrap';

const coverImg = {
  width: '100%',
  height: '75%',
};

function Hero() {
  return (
    <div>
      <container fluid>
        <Row xs={12} md={4} lg={12}>
          <Col xs={12} sm={12} md={12} lg={12}>
            <img src="images/dogMountain.jpg" style={coverImg}></img>
            Hero
          </Col>
        </Row>
      </container>
    </div>
  );
}

export default Hero;
