import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Buttons";
import React from "react";

describe("Button", () => {
  test("initial render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
  
  test("render button with clear theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});
