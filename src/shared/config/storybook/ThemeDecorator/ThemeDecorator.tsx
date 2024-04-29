/* eslint-disable react/display-name */
import "app/styles/index.scss";
import { StoryFn } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

// export const ThemeDecorator: Decorator = (Story) => (
//   <div className={`app ${theme}`}>{<Story />}</div>
// );

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
  <div className={`app ${theme}`}>{<Story />}</div>;
