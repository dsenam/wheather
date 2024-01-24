import styled from "styled-components";

export const StyledLogoContainer = styled.div`
    display: flex;
    gap: 8px;

    h1 {
        color: ${(props) => props.theme.colors.primary};
    }

    svg {
       color: ${(props) => props.theme.colors.secondary};
    }
`