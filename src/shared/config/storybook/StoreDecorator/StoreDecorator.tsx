/* eslint-disable react/display-name */
import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) =>
    (
      <StoreProvider initialState={state as StateSchema}>
        <StoryComponent />
      </StoreProvider>
    );
