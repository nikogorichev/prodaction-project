import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkExtraConfig<string>
>("login/fetch", async (_, thunkApi) => {
  const { dispatch, extra, rejectWithValue, getState } = thunkApi

  const formData = getProfileForm(getState())

  try {
    const response = await extra.api.put<Profile>("/profile", formData);
    if (!response.data) {
      throw new Error();
    }
    // dispatch(profileActions.saveData(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue("Ошибка отправки данных");
  }
});
