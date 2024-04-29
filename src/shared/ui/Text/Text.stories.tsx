import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: "Заголовок",
    text: "Обычный текст",
  },
};

export const Error: Story = {
  args: {
    title: "Заголовок",
    text: "Обычный текст",
    theme: TextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: "Заголовок",
  },
};

export const OnlyText: Story = {
  args: {
    text: "Обычный текст",
  },
};

export const PrimaryDark: Story = {
  args: {
    title: "Заголовок",
    text: "Обычный текст",
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark: Story = {
  args: {
    title: "Заголовок",
    text: "Обычный текст",
    theme: TextTheme.ERROR,
  },
};

ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
  args: {
    title: "Заголовок",
  },
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
  args: {
    text: "Обычный текст",
  },
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
