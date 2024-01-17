/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent, screen } from "@testing-library/react";

import { Drawer } from "../components";

describe("Drawer component", () => {
  const props = {
    propertyInfo: {
      property_id: 1525674,
      council: "CARDINIA",
      council_property_number: "2188100300",
      full_address: "8 CLOVERLEIGH AVENUE EMERALD 3782",
      latitude: -37.9373447811622,
      lga_code: 311,
      longitude: 145.449895817713,
      postcode: "3782",
    },
    isOpen: false,
    handleDrawer: jest.fn(),
  };
  beforeEach(() => {
    render(<Drawer {...props} />);
  });

  it("renders without crashing", () => {
    expect(screen.getByText("Property Details")).toBeInTheDocument();
  });
  it("renders the property details", () => {
    expect(screen.getByText("CARDINIA")).toBeInTheDocument();
    expect(
      screen.getByText("8 CLOVERLEIGH AVENUE EMERALD 3782")
    ).toBeInTheDocument();
    expect(screen.getByText("311")).toBeInTheDocument();
  });

  it("handles drawer opening and closing", () => {
    const openDrawerButton = screen.getByTestId("close-button");
    fireEvent.click(openDrawerButton);
    expect(props.handleDrawer).toHaveBeenCalledWith(false);
  });
});
