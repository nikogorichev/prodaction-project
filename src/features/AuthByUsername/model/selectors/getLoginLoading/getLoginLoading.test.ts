import { StateSchema } from "app/providers/StoreProvider";
import { getLoginLoading } from "./getLoginLoading";

describe("getLoginLoading", () => {
  test("should return true while loading", () => {
    const state: DeepPartial<StateSchema> = { loginForm: { isLoading: true } };
    expect(getLoginLoading(state as StateSchema)).toEqual(true);
  });
  test("should return false", () => {
    const state: DeepPartial<StateSchema> = { loginForm: { isLoading: false } };
    expect(getLoginLoading(state as StateSchema)).toEqual(false);
  });
  test("should return false with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginLoading(state as StateSchema)).toEqual(false);
  });
});
