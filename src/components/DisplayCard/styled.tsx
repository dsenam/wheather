import styled from "styled-components";

export const StyledDisplayCardContainer = styled.div`
  width: 50%;
  min-width: 320px;
  background: ${props => props.theme.colors.white};
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;
