import { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";

describe("getLoginError", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { error: "test error" },
    };
    expect(getLoginError(state as StateSchema)).toEqual("test error");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual("");
  });
});
