import { Button } from 'react-bootstrap';

const positionOfButton = {
  transform: 'translate(-50%,-50%)',
  position: 'absolute',
  top: '50%',
  left: '50%',
  fontSize: '16px',
  color: 'white',
  msTransform: 'translate(-50%,-50%)',
};

function RandomLocationPicker() {
  return (
    <div style={positionOfButton}>
      <container hover>
        <Button variant="light" size="lg">
          Suprise me!
        </Button>
      </container>
    </div>
  );
}

export default RandomLocationPicker;
