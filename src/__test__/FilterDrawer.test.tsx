/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";

import { FilterDrawer } from "../components";

describe("Filter Drawer component", () => {
  const props = {
    councils: [
      {
        councilName: "CARDINIA",
        isCheck: false,
      },
      {
        councilName: "ALPINE",
        isCheck: false,
      },
      {
        councilName: "CASEY",
        isCheck: false,
      },
      {
        councilName: "MORNINGTON PENINSULA",
        isCheck: false,
      },
      {
        councilName: "WODONGA",
        isCheck: false,
      },
    ],
    isFilterOpen: false,
    handleFilterDrawer: jest.fn(),
    handleCheckCouncil: jest.fn(),
    handleClearAll: jest.fn(),
  };
  beforeEach(() => {
    render(<FilterDrawer {...props} />);
  });

  it("renders without crashing", () => {
    expect(screen.getByText("Filter")).toBeInTheDocument();
    expect(screen.getByText("Council Property")).toBeInTheDocument();
  });
  it("renders the property details", () => {
    expect(screen.getByText("CARDINIA")).toBeInTheDocument();
    expect(screen.getByText("ALPINE")).toBeInTheDocument();
    expect(screen.getByText("CASEY")).toBeInTheDocument();
    expect(screen.getByText("WODONGA")).toBeInTheDocument();
    expect(screen.getByText("MORNINGTON PENINSULA")).toBeInTheDocument();
  });

  it("handles filter drawer opening and closing", () => {
    const openDrawerButton = screen.getByTestId("close-button");
    fireEvent.click(openDrawerButton);
    expect(props.handleFilterDrawer).toHaveBeenCalledWith(false);
  });

  it("handles clear all button", () => {
    const clearAllButton = screen.getByTestId("clearall-button");
    fireEvent.click(clearAllButton);
    expect(props.handleClearAll).toHaveBeenCalledTimes(1);
  });
  it("handles checkbox", () => {
    const checkboxEl = screen.getByLabelText("CARDINIA") as HTMLInputElement;
    fireEvent.click(checkboxEl);
    expect(props.handleCheckCouncil).toBeCalled();
  });
});
