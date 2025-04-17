/* eslint-disable react/display-name */
import "@/app/styles/index.scss";
import { Theme } from "@/shared/const/theme";
import { StoryFn } from "@storybook/react";

// export const ThemeDecorator: Decorator = (Story) => (
//   <div className={`app ${theme}`}>{<Story />}</div>
// );

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
  <div className={`app ${theme}`}>{<Story />}</div>;
