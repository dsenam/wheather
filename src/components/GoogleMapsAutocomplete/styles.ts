import styled from "styled-components";
import Autocomplete from "react-google-autocomplete";

export const StyledGoogleMapsAutocompleteContainer = styled.div`
  label {
    font-size: 0.8em;
    
  }
`;

export const StyledGoogleMapsAutocomplete = styled(Autocomplete)`
  width: 100%;
  margin-top: 4px;
  border-radius: 4px;
  height: 40px;
  border: none;
  padding: 16px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
      0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  }
`;
