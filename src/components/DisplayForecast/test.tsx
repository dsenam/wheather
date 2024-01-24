import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@/utils/test/test-utils";
import DisplayForecast from ".";

describe("DisplayForecast", () => {
  describe("DisplayForecast", () => {
    // Renders a container with headerText and mainText
    it("should render a container with headerText and mainText", () => {
      const { getByText } = render(
        <DisplayForecast
          imageSrc="https://image.jpg"
          imageAlt="Image Alt"
          headerText="Header Text"
          mainText="Main Text"
        />
      );

      expect(getByText("Header Text")).toBeInTheDocument();
      expect(getByText("Main Text")).toBeInTheDocument();
    });

    // Renders an Image component with imageSrc and imageAlt
    it("should render an Image component with imageSrc and imageAlt", () => {
      const { getByAltText } = render(
        <DisplayForecast
          imageSrc="https://image.jpg"
          imageAlt="Image Alt"
          headerText=""
          mainText=""
        />
      );

      expect(getByAltText("Image Alt")).toBeInTheDocument();
    });

    // Displays the headerText and mainText in the correct format
    it("should display the headerText and mainText in the correct format", () => {
      const { getByText } = render(
        <DisplayForecast
          imageSrc="https://image.jpg"
          imageAlt="Image Alt"
          headerText="Header Text"
          mainText="Main Text"
        />
      );

      const header = getByText("Header Text");
      const main = getByText("Main Text");

      expect(header.tagName).toBe("P");
      expect(main.tagName).toBe("H1");
    });

  
  });
});
