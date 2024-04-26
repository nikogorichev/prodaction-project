import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextTheme } from "./Text";

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
    theme: TextTheme.ERROR
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
