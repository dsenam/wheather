import { StyledGoogleMapsAutocomplete, StyledGoogleMapsAutocompleteContainer } from "./styles";
import { IGoogleMapsAutocompleteProps } from "./types";

const GoogleMapsAutocomplete = ({handleSelectPlace, location, label}: IGoogleMapsAutocompleteProps ) => {
  return (
    <StyledGoogleMapsAutocompleteContainer>
    <label>{label}</label>
    <StyledGoogleMapsAutocomplete
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
      onPlaceSelected={(place) => handleSelectPlace(place)}
      defaultValue={location}
      lang="en"
    />
    </StyledGoogleMapsAutocompleteContainer>
  );
};

export default GoogleMapsAutocomplete;
