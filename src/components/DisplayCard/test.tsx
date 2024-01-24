import "@testing-library/jest-dom";

import DisplayCard from ".";
import { Fa0 } from "react-icons/fa6";
import { render, screen, waitFor } from "@/utils/test/test-utils";

describe("DisplayCard", () => {
  // Renders the component with correct props and data
  it("should render the component with correct props and data", () => {
    // Arrange
    const imageSrc = "http://image.jpg";
    const renderImg = "/_next/image?url=http%3A%2F%2Fimage.jpg&w=128&q=75";
    const imageAlt = "Image Alt";
    const headerText = "Header Text";
    const mainText = "Main Text";
    const arrSecondaryInfos = [
      { id: 1, icon: <Fa0 />, value: "Value 1" },
      { id: 2, icon: <Fa0 />, value: "Value 2" },
    ];
    const isLoading = false;

    // Act
    render(
      <DisplayCard
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        headerText={headerText}
        mainText={mainText}
        arrSecondaryInfos={arrSecondaryInfos}
        isLoading={isLoading}
      />
    );

    // Assert
    expect(screen.getByText(headerText)).toBeInTheDocument();
    expect(screen.getByText(mainText)).toBeInTheDocument();
    expect(screen.getByAltText(imageAlt)).toBeInTheDocument();
    expect(screen.getByAltText(imageAlt)).toHaveAttribute("src", renderImg);
    expect(screen.getByText(arrSecondaryInfos[0].value)).toBeInTheDocument();
    expect(screen.getByText(arrSecondaryInfos[1].value)).toBeInTheDocument();
  });

 

  // Renders the image with correct source and alt text
  it("should render the image with correct source and alt text", () => {
    // Arrange
    const renderImg = "/_next/image?url=http%3A%2F%2Fimage.jpg&w=128&q=75";
    const imageSrc = "http://image.jpg";
    const imageAlt = "Image Alt";
    const isLoading = false;

    // Act
    render(
      <DisplayCard
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        headerText=""
        mainText=""
        arrSecondaryInfos={[]}
        isLoading={isLoading}
      />
    );

    // Assert
    expect(screen.getByAltText(imageAlt)).toBeInTheDocument();
    expect(screen.getByAltText(imageAlt)).toHaveAttribute("src", renderImg);
  });

  it("should render SkeletonDisplayCard when isLoading is true", async () => {
    // Arrange
    const isLoading = true;
    const renderImg = "/_next/image?url=http%3A%2F%2Fimage.jpg&w=128&q=75";
    const imageSrc = "http://image.jpg";
    const imageAlt = "Image Alt";
    const headerText = "Header Text";
    const mainText = "Main Text";

    // Act
    render(
      <DisplayCard
      isLoading={isLoading}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        headerText={headerText}
        mainText={mainText}
        arrSecondaryInfos={[]}
        
      />
    );

    // Assert
    const skeletonDisplayCard = await screen.findByTestId(
      "skeleton-display-card"
    );

    await waitFor(() => expect(skeletonDisplayCard).toBeInTheDocument());
  });
});
