import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof Skeleton> = {
  title: "shared/Skeleton",
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
  args: {
    width: "100%",
    height: 200,
  },
};

export const Circle: Story = {
  args: {
    width: 100,
    height: 100,
    border: "50%",
  },
};

export const NormalDark: Story = {
    args: {
      width: "100%",
      height: 200,
    },
  };
  NormalDark.decorators = [ThemeDecorator(Theme.DARK)]
  
  export const CircleDark: Story = {
    args: {
      width: 100,
      height: 100,
      border: "50%",
    },
  };
  CircleDark.decorators = [ThemeDecorator(Theme.DARK)]

