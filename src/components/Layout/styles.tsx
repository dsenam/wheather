import styled from "styled-components";
import Logo from "../Logo";

export const StyledLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;

  height: 100vh;
  background: ${(props) => props.theme.colors.background};
`;

export const StyledLayoutContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledLayoutLogo = styled.div`
  margin-top: 24px;
`;
