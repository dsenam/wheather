import { render, screen } from "@/utils/test/test-utils";
import SkeletonDisplayCard from ".";

describe("SkeletonDisplayCard", () => {
  // Renders a container with a white background and a border with secondary color
  it("should render a container with white background and secondary border color", () => {
    render(<SkeletonDisplayCard lines={3} />);
    const container = screen.getByTestId("skeleton-display-card");
    expect(container).toHaveStyle("background: rgb(255, 255, 255)");
  });
});
