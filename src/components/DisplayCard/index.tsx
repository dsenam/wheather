import React from 'react';
import { StyledDisplayCardContainer } from './styled';


const DisplayCard = () => {
  return (
    <StyledDisplayCardContainer>
        <h1>30ºC</h1>
        <h2>Nublado</h2>
        <h3>15%</h3>
        <h4>35 km/h</h4>
    </StyledDisplayCardContainer>
  )
}

export default DisplayCard;