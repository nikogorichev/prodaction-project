import { Currency } from "entities/Currency";
import { Country } from "shared/const/common";
import { Profile, ValidateProfileError } from "../../types/profile";
import { validateProfileData } from "./validateProfileData";

const data: Profile = {
  username: "admin",
  age: 22,
  country: Country.RUSSIA,
  lastname: "asd",
  first: "qwe",
  city: "asf",
  currency: Currency.USD,
};

describe("validateProfileData", () => {
  it("аргумент не передан", () => {
    const result = validateProfileData();
    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });

  it("Не передано имя или фамилия", () => {
    const result = validateProfileData({ ...data, lastname: "", first: "" });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  it("Не передан возраст", () => {
    const result = validateProfileData({ ...data, age: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_AGE]);
  });

  it("Не передана страна", () => {
    const result = validateProfileData({ ...data, country: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_COUNTRY]);
  });

  it("Ошибки суммируются в общий массив", () => {
    const result = validateProfileData({
      ...data,
      country: undefined,
      lastname: "",
      first: "",
      age: undefined,
    });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_USER_AGE,
      ValidateProfileError.INCORRECT_USER_COUNTRY,
    ]);
  });

  it("Ошибок нет", () => {
    expect(validateProfileData(data)).toEqual([]);
  });
});
