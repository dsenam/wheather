import React from 'react';
import { StyledLogoContainer } from './styles';
import { FaSun } from 'react-icons/fa';


const Logo: React.FC = () => {
  return (
    <StyledLogoContainer>
        <h1>WeatherApp</h1>
        <FaSun size={36} />
    </StyledLogoContainer>
  )
}

export default Logo;