export type TPlace = {
  address_components: Array<{
    long_name: string;
  }>;
};

export interface IGoogleMapsAutocompleteProps {
  handleSelectPlace: (place: TPlace) => void;
  location: string
  label: string
}
