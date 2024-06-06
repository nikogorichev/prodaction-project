import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "shared/Avatar",
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    src: "https://i.pinimg.com/736x/94/3a/69/943a69bb778d0a3621b9e6fbfbc6044c.jpg",
    size: 150,
  },
};

export const Small: Story = {
  args: {
    src: "https://i.pinimg.com/736x/94/3a/69/943a69bb778d0a3621b9e6fbfbc6044c.jpg",
    size: 50,
  },
};
