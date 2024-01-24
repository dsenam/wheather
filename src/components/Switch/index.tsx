import React from "react";

import { ISwitchProps } from "./type";
import { StyledSwitchContainer, StyledSwitchLabel, StyledSwitchInput, StyledSwitchSlider } from "./styles";


const Switch = ({ isSelected, setIsSelected, label }: ISwitchProps) => {
  const toggleSwitch = () => {
    setIsSelected(!isSelected);
  };

  return (
    <StyledSwitchContainer>
    <StyledSwitchLabel>
      <StyledSwitchInput type="checkbox" checked={isSelected} onChange={toggleSwitch} />
      
      <StyledSwitchSlider $isSelected={isSelected} />
      
    </StyledSwitchLabel>
    <h4>{label}</h4>
    </StyledSwitchContainer>
  );
};

export default Switch;
