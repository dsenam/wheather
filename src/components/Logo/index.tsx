import React from 'react';
import { StyledLogoContainer } from './styles';
import { FaSun } from 'react-icons/fa';


const Logo = () => {
  return (
    <StyledLogoContainer data-testid="logo-container">
        <h1>WeatherApp</h1>
        <FaSun data-testid="sun-icon" size={36} />
    </StyledLogoContainer>
  )
}

export default Logo;