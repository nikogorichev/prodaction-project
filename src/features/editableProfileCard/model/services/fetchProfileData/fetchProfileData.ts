import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraConfig } from "@/app/providers/StoreProvider";
import { Profile } from "@/entities/Profile";

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkExtraConfig<string>
>("profile/fetchProfileData", async (profileId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.get<Profile>(`/profile/${profileId}`);
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue("error");
  }
});
