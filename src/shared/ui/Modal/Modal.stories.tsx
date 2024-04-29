import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      "Text lrjewn rkwen rklwenq rklqwe nrqwkl rnqwkl rnqwkl rnwkqlkj qwejk hruwiq ebtiur4 jq krbjk qjkr t qjkrebtqw jkrbe ",
  },
};

export const PrimaryDark: Story = {
  args: {
    isOpen: true,
    children:
      "Text lrjewn rkwen rklwenq rklqwe nrqwkl rnqwkl rnqwkl rnwkqlkj qwejk hruwiq ebtiur4 jq krbjk qjkr t qjkrebtqw jkrbe ",
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
