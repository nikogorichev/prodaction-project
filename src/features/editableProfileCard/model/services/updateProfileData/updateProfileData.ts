import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraConfig } from "@/app/providers/StoreProvider";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import { Profile } from "@/entities/Profile";
import { ValidateProfileError } from "../../consts/consts";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkExtraConfig<ValidateProfileError[]>
>("login/fetch", async (_, thunkApi) => {
  const { dispatch, extra, rejectWithValue, getState } = thunkApi

  const formData = getProfileForm(getState())

  const errors = validateProfileData(formData)

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);
    if (!response.data) {
      throw new Error();
    }
    // dispatch(profileActions.saveData(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
