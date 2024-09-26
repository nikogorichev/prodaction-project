import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Currency } from "entities/Currency";
import { Country } from "shared/const/common";

describe("getLoginError", () => {
  test("should return data", () => {
    const data = {
        username: "admin",
        age: 22,
        country: Country.RUSSIA,
        lastname: "asd",
        first: "qwe",
        city: "asf",
        currency: Currency.USD,
      }
    const state: DeepPartial<StateSchema> = {
      profile: {
        data
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test("should return undefined", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toBeUndefined();
  });
});
