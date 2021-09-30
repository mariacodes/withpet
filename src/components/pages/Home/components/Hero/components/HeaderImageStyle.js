import styled from 'styled-components';
import dogMountain from 'assets/images/dogMountain.jpg';

export const CoverImg = styled.div`
  background-image: url(${dogMountain});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 60%;
  height: 130%;
  width: 100%;
`;
