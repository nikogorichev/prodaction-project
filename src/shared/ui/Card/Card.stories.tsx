import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Card } from "./Card";
import { Text } from "../Text/Text";

const meta: Meta<typeof Card> = {
  title: "shared/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Normal: Story = {
  args: {
    children: <Text title="test" text="text test" />,
  },
};
