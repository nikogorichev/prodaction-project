import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { Currency } from "entities/Currency";
import { Country } from "shared/const/common";
import { profileActions, profileReducer } from "./profileSlice";
import { Profile } from "entities/Profile";
import { ProfileSchema } from "../types/editableProfileCard";
import { ValidateProfileError } from "../consts/consts";

const data: Profile = {
    username: "admin",
    age: 22,
    country: Country.RUSSIA,
    lastname: "asd",
    first: "qwe",
    city: "asf",
    currency: Currency.USD,
  };

describe("profileSlice", () => {
  it("should set readonly", () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({
      readonly: true,
    });
  });

  it("should update profile", () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { lastname: "" },
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ lastname: "qqq" })
      )
    ).toEqual({ form: { lastname: "qqq" } });
  });

  it("test update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      vadilateError: [ValidateProfileError.SERVER_ERROR],
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({ isLoading: true, vadilateError: undefined });
  });

  it("test update profile service fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ""))
    ).toEqual({ isLoading: false, readonly: true, vadilateError: undefined, form: data, data });
  });
});
