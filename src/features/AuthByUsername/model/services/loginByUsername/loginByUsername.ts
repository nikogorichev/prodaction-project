import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArg, ThunkExtraConfig } from "app/providers/StoreProvider";
import axios from "axios";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

enum LoginErrors {
  INCORRECT_DATA = "Вы ввели неверный логин или пароль",
  SERVER_ERROR = "",
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkExtraConfig<string>
>("login/fetch", async (authData, thunkApi) => {
  const { dispatch, extra, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.post<User>("/login", authData);
    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(LoginErrors.INCORRECT_DATA);
  }
});
