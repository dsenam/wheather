import styled from "styled-components";

export const StyledSwitchContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`

export const StyledSwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 46px;
  height: 20px;
`;

export const StyledSwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledSwitchSlider = styled.span<{$isSelected: boolean}>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.$isSelected ? props.theme.colors.primary : props.theme.colors.secondary )};

  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: ${(props) => (props.$isSelected ? "26px" : "4px")};

    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
