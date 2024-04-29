import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";

import { Button, ButtonSize, ThemeButton } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Text" },
};

export const Clear: Story = {
  args: { children: "Text", theme: ThemeButton.CLEAR },
};

export const ClearInverted: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: { children: "Text", theme: ThemeButton.OUTLINE },
};

export const OutlineSizeL: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlineSizeXl: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const OutlineDark: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
  },
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};

export const Square = {
  args: {
    children: ">",
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
  },
};

export const SquareSizeL = {
  args: {
    children: ">",
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareSizeXl = {
  args: {
    children: ">",
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};

export const Disabled: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
    disabled: true
  },
};
