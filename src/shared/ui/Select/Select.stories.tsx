import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "shared/Select",
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: "Укажите значение",
    options: [
      { value: "123", content: "123" },
      { value: "222", content: "222" },
      { value: "333", content: "333" },
    ],
  },
};
