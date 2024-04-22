import { fireEvent, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
// import { userEvent } from '@storybook/testing-library';

describe("Counter", () => {
  test("counter in document", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
  });

  test("click on decrement", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    // userEvent.click(screen.getByTestId("decrement-btn"))
    fireEvent.click(screen.getByTestId("decrement-btn"));
    expect(screen.getByTestId("counter-value")).toHaveTextContent("9");
  });

  test("click 0n increment", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    // userEvent.click(screen.getByTestId("increment-btn"))

    fireEvent.click(screen.getByTestId("increment-btn"));
    expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
  });
});
