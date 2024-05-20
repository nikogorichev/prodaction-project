import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileSchema, Profile } from "../types/profile";

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: null,
  data: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<Profile>) => {
      state.data = action.payload;
    },
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
