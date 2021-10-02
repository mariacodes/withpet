import './LocationPicker.css';
import styled from 'styled-components';

const SomeChildElement = styled.div`
  height: 100px;
  width: 200px;
  background-color: white;
  border-radius: 50px;
`;

const SomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: 'relative', overflow-hidden;
`;

function LocationPicker() {
  return (
    <div className="App">
      <SomeContainer>
        <SomeChildElement
          style={{ borderRadius: '20px', alignSelf: 'flex-start' }}
        >
          <div className="HighlightBox">
            <h2>Location</h2>
            <a id="Location" href="#">
              <p>Where are you going?</p>
            </a>
          </div>
        </SomeChildElement>
        <SomeChildElement
          style={{ borderRadius: '20px', alignSelf: 'flex-start' }}
        >
          <div className="HighlightBox">
            <h2>Check in</h2>
            <a id="Check_in" href="#">
              <p>Add dates</p>
            </a>
          </div>
        </SomeChildElement>
        <SomeChildElement
          style={{ borderRadius: '20px', alignSelf: 'flex-start' }}
        >
          <div className="HighlightBox">
            <h2>Check out</h2>
            <a id="Check_out" href="#">
              <p>Add dates</p>
            </a>
          </div>
        </SomeChildElement>
        <SomeChildElement
          style={{ borderRadius: '20px', alignSelf: 'flex-start' }}
        >
          <div className="HighlightBox">
            <h2>Guests</h2>
            <a id="Guests" href="#">
              <p>Add guests</p>
            </a>
          </div>
        </SomeChildElement>
      </SomeContainer>
    </div>
  );
}

export default LocationPicker;
