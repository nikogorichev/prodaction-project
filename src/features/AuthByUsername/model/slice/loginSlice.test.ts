import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";

describe("loginSlice", () => {
  test("should record username", () => {
    const state: DeepPartial<LoginSchema> = {
      username: "",
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setUserName("admin"))
    ).toEqual({
      username: "admin",
    });
  });

  test("should record password", () => {
    const state: DeepPartial<LoginSchema> = {
      password: "",
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword("123"))
    ).toEqual({
      password: "123",
    });
  });
});
