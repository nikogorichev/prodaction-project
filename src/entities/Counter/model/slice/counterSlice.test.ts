import { counterReducer, counterActions } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice", () => {
  test("should decrement", () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(
      counterReducer(state as CounterSchema, counterActions.decrement())
    ).toEqual({ value: 9 });
  });

  test("should increment", () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(
      counterReducer(state as CounterSchema, counterActions.increment())
    ).toEqual({ value: 11 });
  });

  test("should work with empty state decrement", () => {
    expect(counterReducer(undefined, counterActions.decrement())).toEqual({
      value: -1,
    });
  });

  test("should work with empty state increment", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
