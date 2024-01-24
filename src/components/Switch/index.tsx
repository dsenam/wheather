import React from "react";

import { ISwitchProps } from "./type";
import {
  StyledSwitchContainer,
  StyledSwitchLabel,
  StyledSwitchInput,
  StyledSwitchSlider,
} from "./styles";

const Switch = ({ isSelected, setIsSelected, label }: ISwitchProps) => {
  const toggleSwitch = () => {
    setIsSelected(!isSelected);
  };

  return (
    <StyledSwitchContainer>
      <StyledSwitchLabel>
        <StyledSwitchInput
          id="input"
          type="checkbox"
          checked={isSelected}
          onChange={toggleSwitch}
        />

        <StyledSwitchSlider $isSelected={isSelected} />
      </StyledSwitchLabel>
      <label htmlFor="input">{label}</label>
    </StyledSwitchContainer>
  );
};

export default Switch;
