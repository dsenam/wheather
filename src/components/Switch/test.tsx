import { render, screen } from "@/utils/test/test-utils";
import Switch from ".";

describe("Switch", () => {
  // Renders a switch component with a label and a checkbox input
  it("should render switch component with label and checkbox input", () => {
    // Arrange
    const isSelected = true;
    const setIsSelected = jest.fn();
    const label = "Switch Label";

    // Act
    render(
      <Switch
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        label={label}
      />
    );

    // Assert
    expect(screen.getByLabelText(label)).toBeInTheDocument();
    expect(screen.getByLabelText(label)).toHaveAttribute("type", "checkbox");
  });

  // Checkbox input is checked if isSelected is true
  it("should check checkbox input if isSelected is true", () => {
    // Arrange
    const isSelected = true;
    const setIsSelected = jest.fn();
    const label = "Switch Label";

    // Act
    render(
      <Switch
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        label={label}
      />
    );

    // Assert
    expect(screen.getByLabelText(label)).toBeChecked();
  });

  // Checkbox input is unchecked if isSelected is false
  it("should uncheck checkbox input if isSelected is false", () => {
    // Arrange
    const isSelected = false;
    const setIsSelected = jest.fn();
    const label = "Switch Label";

    // Act
    render(
      <Switch
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        label={label}
      />
    );

    // Assert
    expect(screen.getByLabelText(label)).not.toBeChecked();
  });
});
