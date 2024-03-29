import { render, screen } from "@testing-library/react";
import { Button } from "./Buttons";
import React from "react";

describe("Button", () => {
  test("render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});
