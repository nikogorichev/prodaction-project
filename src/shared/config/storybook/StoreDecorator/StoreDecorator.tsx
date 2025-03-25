/* eslint-disable react/display-name */
import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "@/features/AuthByUsername/model/slice/loginSlice";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "@/features/editableProfileCard/model/slice/profileSlice";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
  ) =>
  (StoryComponent: StoryFn) =>
    (
      <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={
          {
            ...defaultAsyncReducers,
            ...asyncReducers,
          } as ReducersMapObject<StateSchema>
        }
      >
        <StoryComponent />
      </StoreProvider>
    );
