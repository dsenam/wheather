import { StyledGoogleMapsAutocomplete } from "./styles";
import { IGoogleMapsAutocompleteProps } from "./types";

const GoogleMapsAutocomplete = ({handleSelectPlace, location}: IGoogleMapsAutocompleteProps ) => {
  return (
    <StyledGoogleMapsAutocomplete
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
      onPlaceSelected={(place) => handleSelectPlace(place)}
      defaultValue={location}
      lang="en"
    />
  );
};

export default GoogleMapsAutocomplete;
