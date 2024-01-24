import { fireEvent, render } from "@/utils/test/test-utils";
import GoogleMapsAutocomplete from ".";

jest.mock('react-google-autocomplete', () => {
    return {
      __esModule: true,
      default: ({ onPlaceSelected }: any) => {
        return (
            <>
            <label htmlFor="location-input">Test Label</label>
            <input id="location-input" onChange={() => onPlaceSelected({ label: 'New Place' })} />
            </>
        ) 
      },
    };
  });
  

describe('GoogleMapsAutocomplete', () => {
  it('should render correctly', () => {
    const { getByLabelText } = render(
      <GoogleMapsAutocomplete handleSelectPlace={() => {}} location="" label="Test Label" />
    );

    expect(getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('should call handleSelectPlace when a place is selected', () => {
    const handleSelectPlace = jest.fn();
    const { getByLabelText } = render(
      <GoogleMapsAutocomplete handleSelectPlace={handleSelectPlace} location="" label="Test Label" />
    );

    fireEvent.change(getByLabelText('Test Label'), { target: { value: 'New Place' } });
    fireEvent.keyDown(getByLabelText('Test Label'), { key: 'Enter', code: 'Enter' });

    expect(handleSelectPlace).toHaveBeenCalled();
  });
});
