import styled from "styled-components";

export const StyledDisplayForecastContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 60px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    padding: 4px;

    p {
        font-size: 0.7em;
    }

    h1 {
        font-size: 1em;
    }

    
`