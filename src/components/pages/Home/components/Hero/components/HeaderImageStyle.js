import styled from 'styled-components';
import dogMountain from 'assets/images/dogMountain.jpg';

export const CoverImg = styled.div`
  background-image: url(${dogMountain});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  height: 100%;
  width: 100%;
`;
