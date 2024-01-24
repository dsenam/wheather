import styled from "styled-components";

export const StyledDisplayCardContainer = styled.div`
  width: 100%;
  min-width: 320px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

export const StyledDisplayCardMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0px;
  padding: 0px 16px;

  h1 {
    font-size: 1.9em;
  }
`;

export const StyledDisplayCardAlign = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

export const StyledDisplayCardSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    h2 {
      font-size: 1em;
      font-weight: 100;
    }

    svg {
      margin-right: 0.3em;
    }
  }
`;
