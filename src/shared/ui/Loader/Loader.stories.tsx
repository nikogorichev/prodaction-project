import type { Meta, StoryObj } from "@storybook/react";

import Loader from "./Loader";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof Loader> = {
  title: "shared/Loader",
  component: Loader,
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Primary: Story = {};

export const PrimaryDark: Story = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];



