import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>("login/fetch", async (authData, thunkAPI) => {
  try {
    const response = await axios.post("http://localhost:8000/login", authData);
    if (!response.data) {
      throw new Error();
    }

    thunkAPI.dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue("Вы ввели неверный логин или пароль");
  }
});
