import { Col, Row, Container } from 'react-bootstrap';
import { RandomLocationPicker } from './components';
import { CoverImg } from './components/HeaderImageStyle';
import styled from 'styled-components';

const heroStyle = {
  textAlign: 'left',
  position: 'relative',
  width: '100%',
};

// const coverImg = {
//   width: '100%',
//   height: '800px',
//   backgroundImage: 'url(images/dogMountain.jpg)',
//   backgroundPosition: 'top center',
//   backgroundSize: '100% 100%',
//   objectFit: 'cover',
//   left: 0,
//   right: 0, objectPosition: 'center bottom',
//   verticalAlign: 'bottom'

//   // opacity:'0.5'
// };

function Hero() {
  return (
    <HeroContainer>
      <CoverImg />
      <RandomLocationPicker />
    </HeroContainer>
  );
}

export default Hero;
{
  /* <img src="images/dog?ountain.jpg" style={coverImg}></img> */
}

const HeroContainer = styled.div`
  width: 100%;
  height: 65vh;
  padding-bottom: 10vh;
`;
