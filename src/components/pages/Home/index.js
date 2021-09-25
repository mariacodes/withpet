import { Hero, RandomLocationPicker } from './components';

const homeStyle = {
  textAlign: 'left',
  position: 'relative',
  width: '100%',
};

function Home() {
  return (
    <div style={homeStyle}>
      <Hero />
      <RandomLocationPicker />
      <p>This is the homepage.</p>
    </div>
  );
}

export default Home;
