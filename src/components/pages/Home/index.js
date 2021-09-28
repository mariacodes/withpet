import { Hero, ExploreNearby } from './components';
import { Container } from './HomeStyles';
import styled from 'styled-components';

// const homeStyle = {
//   textAlign: 'left',
//   position: 'relative',
//   width: '100%',
//   height: '100%'
// };

function Home() {
  return (
    <>
      <SomeContainer>
        <Hero />
        <ExploreNearby />
      </SomeContainer>
    </>
  );
}

export default Home;

const SomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${'' /* margin: ${px2vw(32)}; */}
  max-width: 100%;
  min-width: 100%;
  top: 100%;

  @media (min-width: 1024 px) {
    flex-wrap: nowrap;
  }
`;
